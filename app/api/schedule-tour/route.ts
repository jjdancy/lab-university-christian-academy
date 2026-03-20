import {NextResponse} from "next/server";
import {Resend} from "resend";

type TourPayload = {
  parentFullName?: string;
  studentName?: string;
  studentGrade?: string;
  emailAddress?: string;
  phoneNumber?: string;
  preferredTourDate?: string;
  preferredElective?: string;
  message?: string;
  website?: string;
};

const ALLOWED_PREFERRED_ELECTIVES = new Set([
  "Basketball",
  "Coding",
  "Broadcasting",
  "Photography",
  "Podcasting / Media Production",
  "Undecided",
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxFieldLength = 300;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TourPayload;

    // Honeypot field catches basic bots.
    if (clean(body.website)) {
      return NextResponse.json({ok: true});
    }

    const parentFullName = clean(body.parentFullName);
    const studentName = clean(body.studentName);
    const studentGrade = clean(body.studentGrade);
    const emailAddress = clean(body.emailAddress);
    const phoneNumber = clean(body.phoneNumber);
    const preferredTourDate = clean(body.preferredTourDate);
    const preferredElective = clean(body.preferredElective);
    const message = clean(body.message);
    const safeParentName = escapeHtml(parentFullName);
    const safeStudentName = escapeHtml(studentName);
    const safeGrade = escapeHtml(studentGrade);
    const safeEmail = escapeHtml(emailAddress);
    const safePhone = escapeHtml(phoneNumber);
    const safeDate = escapeHtml(preferredTourDate);
    const safeElective = escapeHtml(preferredElective);
    const safeMessage = escapeHtml(message || "N/A");

    if (
      !parentFullName ||
      !studentName ||
      !studentGrade ||
      !emailAddress ||
      !phoneNumber ||
      !preferredTourDate ||
      !preferredElective
    ) {
      return NextResponse.json(
        {error: "Please complete all required fields."},
        {status: 400}
      );
    }

    if (!emailPattern.test(emailAddress)) {
      return NextResponse.json(
        {error: "Please enter a valid email address."},
        {status: 400}
      );
    }

    if (!ALLOWED_PREFERRED_ELECTIVES.has(preferredElective)) {
      return NextResponse.json(
        {error: "Please select a valid preferred elective."},
        {status: 400}
      );
    }

    const normalizedDate = new Date(preferredTourDate);
    if (Number.isNaN(normalizedDate.getTime())) {
      return NextResponse.json(
        {error: "Please choose a valid preferred tour date."},
        {status: 400}
      );
    }

    const allValues = [
      parentFullName,
      studentName,
      studentGrade,
      emailAddress,
      phoneNumber,
      preferredTourDate,
      preferredElective,
      message,
    ];

    if (allValues.some((value) => value.length > maxFieldLength)) {
      return NextResponse.json(
        {error: "One or more fields are too long."},
        {status: 400}
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {error: "Email service is not configured."},
        {status: 500}
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.TOUR_LEAD_TO_EMAIL || "lab@school.com";
    const fromEmail =
      process.env.TOUR_LEAD_FROM_EMAIL || "onboarding@resend.dev";

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: emailAddress,
      subject: `New Tour Request: ${studentName} (${studentGrade})`,
      text: [
        "New Schedule a Tour Submission",
        "",
        `Parent Full Name: ${parentFullName}`,
        `Student Name: ${studentName}`,
        `Student Grade: ${studentGrade}`,
        `Email Address: ${emailAddress}`,
        `Phone Number: ${phoneNumber}`,
        `Preferred Tour Date: ${preferredTourDate}`,
        `Preferred Elective: ${preferredElective}`,
        `Message: ${message || "N/A"}`,
      ].join("\n"),
      html: `
        <h2>New Schedule a Tour Submission</h2>
        <p><strong>Parent Full Name:</strong> ${safeParentName}</p>
        <p><strong>Student Name:</strong> ${safeStudentName}</p>
        <p><strong>Student Grade:</strong> ${safeGrade}</p>
        <p><strong>Email Address:</strong> ${safeEmail}</p>
        <p><strong>Phone Number:</strong> ${safePhone}</p>
        <p><strong>Preferred Tour Date:</strong> ${safeDate}</p>
        <p><strong>Preferred Elective:</strong> ${safeElective}</p>
        <p><strong>Message:</strong> ${safeMessage}</p>
      `,
    });

    return NextResponse.json({ok: true});
  } catch {
    return NextResponse.json(
      {error: "Unable to submit your request right now."},
      {status: 500}
    );
  }
}

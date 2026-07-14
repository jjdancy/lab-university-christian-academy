import {NextResponse} from "next/server";
import {Resend} from "resend";

type HiringPayload = {
  fullName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  cityState?: string;
  yearsExperience?: string;
  focusArea?: string;
  education?: string;
  message?: string;
  website?: string;
};

const ALLOWED_FOCUS_AREAS = new Set([
  "Digital Media",
  "Coding & Programming",
  "Computer Science",
  "Artificial Intelligence",
  "Esports / Game Development",
  "Multiple / Open to All",
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxFieldLength = 300;
const maxMessageLength = 2000;

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
    const body = (await request.json()) as HiringPayload;

    // Honeypot field catches basic bots.
    if (clean(body.website)) {
      return NextResponse.json({ok: true});
    }

    const fullName = clean(body.fullName);
    const emailAddress = clean(body.emailAddress);
    const phoneNumber = clean(body.phoneNumber);
    const cityState = clean(body.cityState);
    const yearsExperience = clean(body.yearsExperience);
    const focusArea = clean(body.focusArea);
    const education = clean(body.education);
    const message = clean(body.message);

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(emailAddress);
    const safePhone = escapeHtml(phoneNumber);
    const safeCity = escapeHtml(cityState || "N/A");
    const safeExperience = escapeHtml(yearsExperience);
    const safeFocus = escapeHtml(focusArea);
    const safeEducation = escapeHtml(education || "N/A");
    const safeMessage = escapeHtml(message);

    if (
      !fullName ||
      !emailAddress ||
      !phoneNumber ||
      !yearsExperience ||
      !focusArea ||
      !message
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

    if (!ALLOWED_FOCUS_AREAS.has(focusArea)) {
      return NextResponse.json(
        {error: "Please select a valid focus area."},
        {status: 400}
      );
    }

    const shortFields = [
      fullName,
      emailAddress,
      phoneNumber,
      cityState,
      yearsExperience,
      focusArea,
      education,
    ];

    if (
      shortFields.some((value) => value.length > maxFieldLength) ||
      message.length > maxMessageLength
    ) {
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
    const toEmail =
      process.env.HIRING_LEAD_TO_EMAIL ||
      process.env.TOUR_LEAD_TO_EMAIL ||
      "admin@labuniversityprep.com";
    const fromEmail =
      process.env.HIRING_LEAD_FROM_EMAIL ||
      process.env.TOUR_LEAD_FROM_EMAIL ||
      "onboarding@resend.dev";

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: emailAddress,
      subject: `New Mentor Teacher Application: ${fullName} (${focusArea})`,
      text: [
        "New Mentor Teacher Application",
        "Position: Digital Media, Coding, Computer Science & AI Mentor Teacher",
        "",
        `Full Name: ${fullName}`,
        `Email Address: ${emailAddress}`,
        `Phone Number: ${phoneNumber}`,
        `City / State: ${cityState || "N/A"}`,
        `Years of Experience: ${yearsExperience}`,
        `Primary Focus Area: ${focusArea}`,
        `Education / Background: ${education || "N/A"}`,
        `Why interested: ${message}`,
      ].join("\n"),
      html: `
        <h2>New Mentor Teacher Application</h2>
        <p><strong>Position:</strong> Digital Media, Coding, Computer Science &amp; AI Mentor Teacher</p>
        <p><strong>Full Name:</strong> ${safeFullName}</p>
        <p><strong>Email Address:</strong> ${safeEmail}</p>
        <p><strong>Phone Number:</strong> ${safePhone}</p>
        <p><strong>City / State:</strong> ${safeCity}</p>
        <p><strong>Years of Experience:</strong> ${safeExperience}</p>
        <p><strong>Primary Focus Area:</strong> ${safeFocus}</p>
        <p><strong>Education / Background:</strong> ${safeEducation}</p>
        <p><strong>Why interested:</strong> ${safeMessage}</p>
      `,
    });

    return NextResponse.json({ok: true});
  } catch {
    return NextResponse.json(
      {error: "Unable to submit your application right now."},
      {status: 500}
    );
  }
}

"use client";

import {FormEvent, useMemo, useState} from "react";

type TourFormData = {
  parentFullName: string;
  studentName: string;
  studentGrade: string;
  emailAddress: string;
  phoneNumber: string;
  preferredTourDate: string;
  preferredElective: string;
  message: string;
  website: string;
};

const PREFERRED_ELECTIVE_OPTIONS = [
  {value: "Basketball", label: "Basketball"},
  {value: "Coding", label: "Coding"},
  {value: "Broadcasting", label: "Broadcasting"},
  {value: "Photography", label: "Photography"},
  {
    value: "Podcasting / Media Production",
    label: "Podcasting / Media Production",
  },
  {value: "Undecided", label: "Undecided"},
] as const;

type FormErrors = Partial<Record<keyof TourFormData, string>>;

const initialForm: TourFormData = {
  parentFullName: "",
  studentName: "",
  studentGrade: "",
  emailAddress: "",
  phoneNumber: "",
  preferredTourDate: "",
  preferredElective: "",
  message: "",
  website: "",
};

const requiredFields: (keyof TourFormData)[] = [
  "parentFullName",
  "studentName",
  "studentGrade",
  "emailAddress",
  "phoneNumber",
  "preferredTourDate",
  "preferredElective",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ScheduleTourForm({
  variant = "card",
}: {
  variant?: "card" | "modal";
}) {
  const [form, setForm] = useState<TourFormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const validate = () => {
    const nextErrors: FormErrors = {};

    for (const key of requiredFields) {
      if (!form[key].trim()) {
        nextErrors[key] = "This field is required.";
      }
    }

    if (form.emailAddress && !emailPattern.test(form.emailAddress)) {
      nextErrors.emailAddress = "Enter a valid email address.";
    }

    if (form.preferredTourDate) {
      const selected = new Date(form.preferredTourDate);
      if (Number.isNaN(selected.getTime())) {
        nextErrors.preferredTourDate = "Select a valid date.";
      } else if (form.preferredTourDate < minDate) {
        nextErrors.preferredTourDate = "Please choose today or a future date.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/schedule-tour", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | {error?: string}
          | null;
        throw new Error(payload?.error || "Unable to submit right now.");
      }

      setIsSuccess(true);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your request.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-yellow-400/40 bg-yellow-500/10 p-6 text-left md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
          Request Received
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Thank you. We will contact you soon.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/80">
          Your tour request has been sent to our admissions team. A team member
          will follow up using your contact details to confirm the visit.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={
        variant === "modal"
          ? "rounded-2xl border border-white/10 bg-black/50 p-5 shadow-2xl shadow-black/50 md:p-8"
          : "rounded-2xl border border-white/10 bg-zinc-950/80 p-5 shadow-2xl shadow-black/50 backdrop-blur md:p-8"
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Parent Full Name"
          name="parentFullName"
          value={form.parentFullName}
          onChange={(value) => setForm((prev) => ({...prev, parentFullName: value}))}
          error={errors.parentFullName}
          required
        />
        <Field
          label="Student Name"
          name="studentName"
          value={form.studentName}
          onChange={(value) => setForm((prev) => ({...prev, studentName: value}))}
          error={errors.studentName}
          required
        />
        <Field
          label="Student Grade"
          name="studentGrade"
          value={form.studentGrade}
          onChange={(value) => setForm((prev) => ({...prev, studentGrade: value}))}
          error={errors.studentGrade}
          required
          placeholder="Example: 8th Grade"
        />
        <Field
          label="Email Address"
          name="emailAddress"
          type="email"
          value={form.emailAddress}
          onChange={(value) => setForm((prev) => ({...prev, emailAddress: value}))}
          error={errors.emailAddress}
          required
        />
        <Field
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={form.phoneNumber}
          onChange={(value) => setForm((prev) => ({...prev, phoneNumber: value}))}
          error={errors.phoneNumber}
          required
        />
        <Field
          label="Preferred Tour Date"
          name="preferredTourDate"
          type="date"
          min={minDate}
          value={form.preferredTourDate}
          onChange={(value) =>
            setForm((prev) => ({...prev, preferredTourDate: value}))
          }
          error={errors.preferredTourDate}
          required
        />
        <div className="md:col-span-2">
          <label
            htmlFor="preferredElective"
            className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
          >
            Preferred Elective{" "}
            <span className="text-yellow-400" aria-hidden>
              *
            </span>
          </label>
          <select
            id="preferredElective"
            name="preferredElective"
            required
            value={form.preferredElective}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                preferredElective: event.target.value,
              }))
            }
            className="min-h-[48px] w-full cursor-pointer appearance-none rounded-lg border border-white/20 bg-black/40 bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat py-3 pl-3 pr-10 text-sm text-white outline-none transition focus:border-yellow-400 [color-scheme:dark] [-webkit-appearance:none] [-moz-appearance:none]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23e4c76a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            }}
            aria-invalid={Boolean(errors.preferredElective)}
            aria-describedby={
              errors.preferredElective
                ? "preferredElective-error"
                : undefined
            }
          >
            <option value="" disabled>
              Select an elective
            </option>
            {PREFERRED_ELECTIVE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.preferredElective ? (
            <p
              id="preferredElective-error"
              className="mt-1 text-xs text-red-300"
            >
              {errors.preferredElective}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
        >
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({...prev, message: event.target.value}))
          }
          className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-yellow-400"
          placeholder="Share anything helpful for your visit."
        />
      </div>

      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={form.website}
          onChange={(event) =>
            setForm((prev) => ({...prev, website: event.target.value}))
          }
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submitError ? (
        <p className="mt-4 rounded-lg border border-red-500/50 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-yellow-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Schedule My Tour"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  type = "text",
  placeholder,
  min,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  min?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
      >
        {label} {required ? <span className="text-yellow-400">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        min={min}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-yellow-400 [color-scheme:dark]"
        placeholder={placeholder}
      />
      {error ? <p className="mt-1 text-xs text-red-300">{error}</p> : null}
    </div>
  );
}

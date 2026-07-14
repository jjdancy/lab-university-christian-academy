"use client";

import {FormEvent, useState} from "react";

type HiringFormData = {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  cityState: string;
  yearsExperience: string;
  focusArea: string;
  education: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof HiringFormData, string>>;

const FOCUS_AREA_OPTIONS = [
  {value: "Digital Media", label: "Digital Media"},
  {value: "Coding & Programming", label: "Coding & Programming"},
  {value: "Computer Science", label: "Computer Science"},
  {value: "Artificial Intelligence", label: "Artificial Intelligence"},
  {value: "Esports / Game Development", label: "Esports / Game Development"},
  {value: "Multiple / Open to All", label: "Multiple / Open to All"},
] as const;

const initialForm: HiringFormData = {
  fullName: "",
  emailAddress: "",
  phoneNumber: "",
  cityState: "",
  yearsExperience: "",
  focusArea: "",
  education: "",
  message: "",
  website: "",
};

const requiredFields: (keyof HiringFormData)[] = [
  "fullName",
  "emailAddress",
  "phoneNumber",
  "yearsExperience",
  "focusArea",
  "message",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClassName =
  "w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-yellow-400 [color-scheme:dark]";

export default function HiringApplicationForm({
  onSubmitted,
}: {
  onSubmitted?: () => void;
}) {
  const [form, setForm] = useState<HiringFormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/hiring-application", {
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
      onSubmitted?.();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your application.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-yellow-400/40 bg-yellow-500/10 p-5 text-left md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
          Application Received
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Thank you. We will be in touch soon.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/80">
          Your mentor teacher application has been sent to our team. A staff
          member will review your information and follow up using the contact
          details you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={(value) => setForm((prev) => ({...prev, fullName: value}))}
          error={errors.fullName}
          required
        />
        <Field
          label="Email Address"
          name="emailAddress"
          type="email"
          value={form.emailAddress}
          onChange={(value) =>
            setForm((prev) => ({...prev, emailAddress: value}))
          }
          error={errors.emailAddress}
          required
        />
        <Field
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={form.phoneNumber}
          onChange={(value) =>
            setForm((prev) => ({...prev, phoneNumber: value}))
          }
          error={errors.phoneNumber}
          required
        />
        <Field
          label="City / State"
          name="cityState"
          value={form.cityState}
          onChange={(value) => setForm((prev) => ({...prev, cityState: value}))}
          error={errors.cityState}
          placeholder="Charlotte, NC"
        />
        <Field
          label="Years of Relevant Experience"
          name="yearsExperience"
          value={form.yearsExperience}
          onChange={(value) =>
            setForm((prev) => ({...prev, yearsExperience: value}))
          }
          error={errors.yearsExperience}
          required
          placeholder="Example: 5 years"
        />
        <div>
          <label
            htmlFor="focusArea"
            className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
          >
            Primary Focus Area{" "}
            <span className="text-yellow-400" aria-hidden>
              *
            </span>
          </label>
          <select
            id="focusArea"
            name="focusArea"
            required
            value={form.focusArea}
            onChange={(event) =>
              setForm((prev) => ({...prev, focusArea: event.target.value}))
            }
            className="min-h-[42px] w-full cursor-pointer appearance-none rounded-lg border border-white/20 bg-black/40 bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat py-2.5 pl-3 pr-10 text-sm text-white outline-none transition focus:border-yellow-400 [color-scheme:dark] [-webkit-appearance:none] [-moz-appearance:none]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23e4c76a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            }}
            aria-invalid={Boolean(errors.focusArea)}
            aria-describedby={errors.focusArea ? "focusArea-error" : undefined}
          >
            <option value="" disabled>
              Select a focus area
            </option>
            {FOCUS_AREA_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.focusArea ? (
            <p id="focusArea-error" className="mt-1 text-xs text-red-300">
              {errors.focusArea}
            </p>
          ) : null}
        </div>
      </div>

      <Field
        label="Education / Background (optional)"
        name="education"
        value={form.education}
        onChange={(value) => setForm((prev) => ({...prev, education: value}))}
        error={errors.education}
        placeholder="Degree, certifications, or relevant training"
      />

      <div>
        <label
          htmlFor="hiring-message"
          className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
        >
          Why are you interested?{" "}
          <span className="text-yellow-400" aria-hidden>
            *
          </span>
        </label>
        <textarea
          id="hiring-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({...prev, message: event.target.value}))
          }
          className={fieldClassName}
          placeholder="Share your experience with students, media, coding, or AI—and why LAB U is a fit."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "hiring-message-error" : undefined}
        />
        {errors.message ? (
          <p id="hiring-message-error" className="mt-1 text-xs text-red-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="hiring-website">Website</label>
        <input
          id="hiring-website"
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
        <p className="rounded-lg border border-red-500/50 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-yellow-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
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
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
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
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClassName}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

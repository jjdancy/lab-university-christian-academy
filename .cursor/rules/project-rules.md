1. Follow the PRD

Always read and follow the requirements defined in:

docs/PRD.md

The PRD is the source of truth for:

page structure

features

branding

messaging

project goals

If there is a conflict between code and the PRD, the PRD takes priority.

2. Tech Stack Rules

This project uses:

Next.js

TypeScript

Tailwind CSS

Guidelines:

Prefer server components unless interactivity is required.

Keep styling in Tailwind utilities.

Avoid introducing additional libraries unless necessary.

3. Component Architecture

Follow these structure rules:

Create reusable components in /components.

Pages should remain clean and readable.

Large sections should be broken into components.

Example:

components/
HeroSection.tsx
AthleticsSection.tsx
FacilitiesSection.tsx
CTASection.tsx

Avoid large monolithic page files.

4. Design Guidelines

The website aesthetic should be:

premium

modern

clean

athletic

faith-driven

Design rules:

Black / gold / white color palette

Strong bold headlines

Full-width sections

Clean spacing

Subtle animations only

Avoid overly flashy animations.

5. Copywriting Tone

All copy should feel:

confident

aspirational

disciplined

professional

faith-centered

Avoid:

generic marketing fluff

overly corporate language

exaggerated claims

Focus on:

excellence

preparation

leadership

opportunity

6. Editing Workflow

Before making large structural changes:

explain the plan

confirm the approach

then implement changes

Avoid:

renaming folders

restructuring routing

large refactors

Unless explicitly requested.

7. Git Workflow

Commits should be small, clear, and frequent.

Guidelines:

Commit after completing logical units of work.

Use descriptive commit messages.

Examples:

add homepage hero section
create athletics program section
implement admissions CTA component
add facilities page layout

Avoid committing incomplete or broken code.

8. Performance

The website must remain:

mobile responsive

fast loading

visually clean

Guidelines:

optimize images

avoid heavy libraries

prefer lightweight animations

9. Conversion Focus

Every page should support the goal of driving admissions inquiries.

Primary CTAs:

Apply Now

Schedule a Tour

Enroll for 2026–27

Ensure CTAs remain visible throughout the site.

10. commit

✅ Commit after completing a feature or section

Examples:

add athletics overview section
create admissions form
build facilities page layout

Avoid:

❌ committing every file change
❌ giant commits with 30 changes

11. components
Prefer updating existing components rather than creating duplicates.


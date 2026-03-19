# LAB University Christian Academy Website – Agent Instructions

This repository contains the source code for the official website of **LAB University Christian Academy**, a Christ-centered K–12 private academy located in Charlotte, North Carolina.

The website is designed to present the academy as a **premium academic institution combined with an elite collegiate-style athletic program**.

AI agents working on this repository must follow the rules below.

---

# 1. Source of Truth

Before implementing features, agents must read:

docs/PRD.md

The PRD defines:

- project goals
- page structure
- branding direction
- user experience expectations
- conversion goals

If there is a conflict between existing code and the PRD, the PRD takes priority.

---

# 2. Project Goals

The primary goal of this website is to:

• drive admissions inquiries  
• encourage campus tour scheduling  
• position the academy as a premium academic and athletic institution  

The website should communicate:

- academic excellence
- elite basketball development
- Christian leadership
- discipline and structure
- college preparation

Every page should reinforce trust with parents and excitement for student-athletes.

---

# 3. Technology Stack

This project uses:

- Next.js
- TypeScript
- Tailwind CSS

Guidelines:

• Prefer **server components** unless interactivity is required.  
• Use **Tailwind CSS utilities** for styling.  
• Avoid introducing additional dependencies unless necessary.  

---

# 4. Project Structure

Follow this structure when adding new code:


app/
pages and routes

components/
reusable UI components

docs/
project documentation

public/
images and assets

Reusable UI components should be placed in the `components` directory.

Large UI sections should be split into modular components.

Avoid extremely large page files.

---

# 5. Development Workflow

When implementing features:

1. Read the PRD requirements.
2. Plan the change.
3. Implement the smallest working version.
4. Refactor if needed.

Avoid large sweeping changes unless explicitly requested.

Do not rename folders or restructure routing without confirmation.

---

# 6. Design Direction

The website aesthetic should be:

• premium  
• modern  
• clean  
• athletic  
• faith-driven  

Visual guidelines:

- black / gold / white color palette
- bold headlines
- large hero sections
- clean spacing
- cinematic visuals
- subtle animations only

Avoid overly complex animations.

---

# 7. Copywriting Style

The tone of the website should be:

- confident
- disciplined
- aspirational
- professional
- faith-centered

Avoid:

- generic marketing language
- exaggerated claims
- filler text

Messaging should emphasize:

- excellence
- preparation
- leadership
- opportunity
- discipline

---

# 8. Conversion Focus

This website is a **high-converting admissions site**.

Primary CTAs include:

- Apply Now
- Schedule a Tour
- Enroll for 2026–27

CTAs should appear:

- in the hero section
- mid-page sections
- page footers

Each page should encourage visitors to take the next step.

---

# 9. Performance Standards

The website must remain:

- mobile responsive
- fast loading
- visually clean

Guidelines:

• optimize images  
• avoid heavy libraries  
• keep animations lightweight  

---

# 10. Git Workflow

Commits should be **frequent and meaningful**.

Agents should commit after completing logical units of work.

Examples:

add homepage hero section  
create athletics overview component  
build facilities page layout  
implement admissions call-to-action  

Avoid committing broken or incomplete code.

---

# 11. Component Guidelines

Prefer updating existing components instead of creating duplicates.

Large sections such as:

- hero sections
- athletics sections
- facilities sections
- call-to-action sections

should be reusable components.

---

# 12. Page Priority

When developing the site, build pages in this order:

1. Home
2. Admissions
3. Athletics
4. Academics
5. Facilities
6. About
7. Contact

The homepage should always remain the **highest priority conversion page**.

---

# 13. Content Accuracy

Important factual information must remain correct:

Address  
8016 Tower Point Dr  
Charlotte, NC 28227

Phone  
(704) 315-1035

School hours and admissions details should remain consistent with the PRD.

---

# 14. Academic System

The academy uses the **Acellus Learning System** to deliver academic coursework.

Students complete core academic classes in the morning while balancing athletic development in the afternoon.

This structure supports both academic rigor and athletic training.

---

# 15. Facilities

Students train at the **LABCITY Sports Training & Event Center**.

Key features include:

- arena-style basketball court
- Dr. Dish shooting lab
- performance training center

Facilities should be prominently featured in the website.

---

# End of Instructions
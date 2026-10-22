
# Game Design Portfolio — Specification

Version: 0.1
Status: Approved requirements / proposed implementation

## 1. Purpose

A lightweight, mobile-first portfolio showcasing game design,
level design, narrative design and production experience.

The primary entry point is a link in a PDF resume.

The website is a portfolio gallery, not a replacement for
the resume or a personal landing page.

## 2. User experience

- Single-page project gallery.
- Filters: All, GD, LD, ND, PM.
- Projects may belong to multiple categories.
- Clicking a project expands its case study below its row.
- Only one case study can be expanded at a time.
- Changing filters closes the expanded case.
- Collapsing a case restores the scroll position near its card.
- Desktop: up to 3 cards per row.
- Tablet: up to 2 cards per row.
- Mobile: 1 card per row.
- No separate page navigation required for reading case studies.

## 3. Project content

Each project is stored in a separate Markdown file
with structured front matter.

Required metadata:
- ID
- Title
- Period
- Professional categories
- Cover image

Main content:
- Project context / challenge
- Design solution
- Personal contribution
- Result

Optional content:
- Postmortem
- Additional images
- Videos
- External documents
- Playable builds
- Supporting artifacts

Project descriptions should remain concise.
Detailed materials are linked separately.

## 4. Visual design

- Neutral design matching the PDF resume.
- White or near-white background.
- Black primary text and grey secondary text.
- Light-grey surfaces and subtle separators.
- Zapus Sans as the preferred font, subject to web-font
  availability and licensing verification.
- Minimal decoration and animation.
- Project imagery provides most visual accents.

## 5. Technical architecture

- Eleventy (11ty) static-site generator.
- Markdown files for project content.
- Static HTML, CSS and minimal client-side JavaScript.
- No database, backend or authentication.
- No external API required for browsing.
- Hosting: GitHub Pages.
- Deployment through GitHub Actions.
- No paid hosting dependency.

Content and presentation must remain separate.

## 6. Performance

- Text content available without additional API requests.
- Images loaded lazily where appropriate.
- No autoplay video.
- Local font hosting where licensing permits.
- Avoid unnecessary third-party scripts.
- Mobile usability on slow connections is a priority.

## 7. Security and privacy

- Never publish credentials or API tokens.
- Never commit confidential or NDA-protected materials.
- Sanitize or safely render Markdown content.
- Avoid injecting untrusted HTML into the interface.
- Use only approved public project information.
- Keep production dependencies minimal.

## 8. MVP acceptance criteria

- A new Markdown project appears without manually editing HTML.
- Professional category filters work correctly.
- A project expands below its gallery row.
- Only one project is open at once.
- Closing a project preserves sensible scroll position.
- Mobile layout works without horizontal scrolling.
- Static build succeeds.
- The published website works on GitHub Pages.
- No external service is required for core functionality.

## 9. Out of scope for MVP

- Content management system.
- Database.
- User accounts.
- Multilingual interface.
- Advanced skill filtering.
- Complex animations.
- Individual project pages.
- Analytics.
- Automatic draft publishing.

## 10. Development rules

- Work in feature branches.
- Use small, reviewable pull requests.
- Never merge automatically.
- Do not change architecture without explicit approval.
- Separate implementation from review and testing.
- Do not publish incomplete or confidential case studies.

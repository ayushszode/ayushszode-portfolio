# Ayush Sanjay Zode — Portfolio

A dark, recruiter-focused data analytics portfolio built with **Next.js** for deployment on **Vercel**.

## Branding

- Display name: **Ayush Sanjay Zode**
- Public handle: **ayushszode**
- Preferred future domain: **ayushszode.com**
- Initial free Vercel URL: try **ayushszode.vercel.app** (Vercel will confirm availability)

## What is included

- Dark premium / fintech visual direction
- Responsive single-page recruiter homepage
- Separate case-study pages for:
  - Classic Models Sales Dashboard
  - UK Labour Market Forecasting & Workforce Analytics
  - MyEdBuddy Student Recruitment & Enrollment Analytics
- Project filtering
- Experience timeline
- Categorised skills
- Selected credentials
- Research & publications
- Downloadable CV
- Working contact form powered by FormSubmit
- Minimal reveal / hover animation
- SEO metadata and accessible responsive navigation

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy free on Vercel

1. Create a new GitHub repository, suggested name: `ayushszode-portfolio`.
2. Upload/push this project to the repository.
3. In Vercel, choose **Add New → Project** and import the GitHub repository.
4. Keep the default Next.js build settings and deploy.
5. Try the project name `ayushszode`. If the exact `.vercel.app` address is unavailable, choose the closest clean variation and keep `ayushszode` as the GitHub/public handle.
6. Optional: set `NEXT_PUBLIC_SITE_URL` in Vercel to the final production URL.

## Contact form activation

The contact form sends submissions to `ayush.s.zode.uk@gmail.com` using FormSubmit.

**Important:** after the first form submission, FormSubmit sends an activation/confirmation email to that inbox. Click the confirmation link once. After that, recruiter messages will be delivered to the inbox.

## Add the dissertation live demo

When the Streamlit app has a public URL, open `lib/site.ts` and set:

```ts
dissertationLiveUrl: "https://YOUR-APP.streamlit.app",
```

If the dissertation GitHub repo is public, also set:

```ts
dissertationGithubUrl: "https://github.com/ayushszode/YOUR-REPO",
```

The corresponding buttons will appear automatically.

## Add Vote Ledger paper link

When the research paper is publicly available, set `voteLedgerResearchUrl` in `lib/site.ts` and optionally add a dedicated case-study page.

## LinkedIn branding

The website currently links to the working LinkedIn URL in the CV. If `linkedin.com/in/ayushszode` becomes available and you change your LinkedIn public URL, update `site.linkedin` in `lib/site.ts`.

## Resume

The downloadable CV is stored at:

`public/Ayush_Sanjay_Zode_Resume.pdf`

Replace that file whenever the CV is updated, keeping the same filename so the website button never needs changing.

## Confidential MyEdBuddy material

Do not upload the original confidential student data or screenshots. Only use anonymised/redacted visuals or a recreated sample dashboard with non-sensitive data.

# Ritik Mor — Portfolio

A modern, fast, single-page developer portfolio built with **React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion**.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Edit your content

**Almost everything lives in one file:** [`src/data/portfolio.ts`](src/data/portfolio.ts).
Edit your bio, experience, projects, skills, and links there — the components read from it, so you rarely touch JSX.

## Add your resume

Drop your PDF into the `public/` folder as **`resume.pdf`**. The "Resume" button and hero link point to `/resume.pdf`.

## Sections

1. **Hero** — name, tagline, CTA
2. **About** — bio + at-a-glance card
3. **Experience** — TartanHQ + RapidShyp timeline
4. **Projects** — Dynamu.AI featured
5. **Skills** — grouped tech
6. **Contact** — email CTA + socials

## Customize the look

- Colors & fonts: the `@theme` block in [`src/index.css`](src/index.css) (accent color is `--color-accent`).
- Add the **Inter** font for the intended look: add this to `index.html` `<head>`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  ```

## Build & deploy

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

**Deploy to Vercel (recommended):**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`. Deploy.

That's it — you'll get a live URL in ~1 minute.

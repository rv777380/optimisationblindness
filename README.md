# optimisationblindness.org

The working website for the optimisation blindness research programme. Concept, frameworks (RevEmo, DEQI), essays, and library.

## Stack

- **Astro 5** — static site generator
- **Source Serif 4** (variable, self-hosted via `@fontsource-variable`)
- Zero runtime JavaScript
- Single global stylesheet
- Markdown-based essay content

## Local development

Requires Node 18+ and npm.

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

```bash
npm run build
```

Static output is written to `dist/`.

## Deploy to Vercel

Vercel auto-detects Astro and configures the build settings correctly. Two paths:

**Via Git (recommended):**
1. Push this repository to GitHub.
2. In Vercel, import the GitHub repository.
3. No environment variables required. No framework override required.
4. Deploy. Vercel will run `npm install` and `npm run build` automatically.
5. Add the custom domain (`optimisationblindness.org`) in Vercel's domain settings.

**Via Vercel CLI:**
```bash
npm i -g vercel
vercel
```

## Adding a new essay

Create a new markdown file in `src/content/essays/`. Filename becomes the URL slug.

```markdown
---
title: "Your Essay Title"
date: 2026-06-01
description: "One sentence describing what the essay does."
---

Body of the essay in markdown. Inline links like [this](/concept) work normally.
```

The essay will automatically appear in:
- The Essays index (`/essays`)
- The Library page
- The Recent section on the homepage (if it is the most recent)

No other files need to be edited.

## Versioning the framework pages

When RevEmo or DEQI publishes (DOI received, preprint live), edit the metadata line at the top of `src/pages/revemo.astro` or `src/pages/deqi.astro`:

- Update `Last updated` date.
- Update `Status` to reflect the current publication state.
- Update the suggested citation block at the bottom of the page with the published reference.
- Add a new entry to the Version history section in `src/pages/library.astro`.

## Project structure

```
.
├── astro.config.mjs
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── SiteFooter.astro
    │   └── SiteHeader.astro
    ├── content/
    │   └── essays/
    │       └── what-the-optimisation-is-not-seeing.md
    ├── content.config.ts
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── about.astro
    │   ├── concept.astro
    │   ├── deqi.astro
    │   ├── essays/
    │   │   ├── [slug].astro
    │   │   └── index.astro
    │   ├── index.astro
    │   ├── library.astro
    │   └── revemo.astro
    └── styles/
        └── global.css
```

## Design principles

This site is a working archive. It does not optimise for engagement. It has no analytics, no email capture, no social-share widgets, no subscribe form, no cookie banner (it sets no cookies). It is designed to be cited, not followed.

The refusal is part of the argument.

## Licensing

This repository is dual-licensed:

- **Code** (Astro components, configuration, CSS, build scripts) is released under the **MIT License**. See `LICENSE`.
- **Content** (prose, framework descriptions, mathematical specifications, essays, library entries) is released under **Creative Commons Attribution-NonCommercial 4.0 International** (CC BY-NC 4.0). See `LICENSE-CONTENT`.

In practice: the code is freely reusable for any purpose. The intellectual content is freely citable and shareable for academic and non-commercial use, with attribution. Commercial use of the content — including paid consulting deliverables, commercial publications, and for-profit training material — requires separate written permission. Contact vasconcelos@altavella.com.

---

Published and maintained by Rui Vasconcelos. Canonical URL: optimisationblindness.org

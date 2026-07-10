# Gem Test

## Overview

A responsive landing page for a dog food brand. Three sections: a hero with features and a CTA, a nutrition block with stats, and two alternating image/text rows.

Built to match a provided design — layout, typography, spacing, and breakpoints.

## Tech stack

- **React** — UI components
- **TypeScript** — type safety on props and data
- **Vite** — dev server and build tooling
- **Tailwind CSS** — styling and responsive layout

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

Other commands:

- `npm run build` — production build
- `npm run preview` — preview the build
- `npm run lint` — run ESLint

## Folder structure

```
src/
├── main.tsx                 # React entry point
├── App.tsx                  # Renders the three sections
├── index.css                # Tailwind + shared colors
├── assets/                  # SVG images and icons
└── components/
    ├── FeatureSection/      # Hero section
    │   ├── FeatureSection.tsx
    │   └── FeatureItem.tsx
    ├── NutritionSection/    # Stats + dog image
    │   ├── NutritionSection.tsx
    │   └── KeyPointItem.tsx
    └── HealthFeaturesSection/
        ├── HealthFeaturesSection.tsx
        └── FeatureRow.tsx
```

## Code explanation

**React** — Each page section is its own component. `App.tsx` just stacks them. Smaller pieces (`FeatureItem`, `KeyPointItem`, `FeatureRow`) handle the bits that repeat so the section files stay readable.

**TypeScript** — Props are typed on each component (`title`, `description`, `icon`, `side`, etc.). Section content sits in arrays at the top of the file and gets mapped in the JSX.

**Tailwind** — All styling through utility classes, no separate CSS files per component. Shared colors (`ink`, `body`, `brand`, `panel`, `line`) live in `index.css` so they're defined once.

**State management** — None needed. Static content, no forms, no user interaction beyond buttons. If the comparison slider or a cart were added later, local `useState` would probably be enough.

**Responsiveness** — Mobile-first. Sections stack in a single column by default. `lg:` breakpoints switch to multi-column grids (3-column hero, 2-column nutrition/health rows). Spacing and font sizes scale with `sm:` and `lg:` prefixes.

**Images** — SVGs imported as URLs via Vite, rendered with `<img src={...} />`.

## Assumptions

- Copy and images match the design spec provided
- Buttons are visual only — no checkout or form logic wired up
- Desktop layout kicks in around the `lg` breakpoint (1024px)
- Inter font loaded from Google Fonts in `index.html`

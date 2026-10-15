# Developer Dashboard (Project 4)

An interactive, data-driven developer dashboard built with **React** and **Vite**. It is the central hub for my front-end work: employers can browse my projects, filter and search them, and explore my professional history in an interactive CV.

**Live site:** https://slowmotionsoundz.github.io/lexicon-classes/

## Goals

- Plan, design, develop, test, deploy and explain a complete front-end project (Lexicon Front-End module, Project 4).
- Practice component-driven React: state, props, hooks, and list rendering.
- Load content from an external JSON dataset instead of hardcoding it in components.

## Features

- **Tabbed views** – switch between *Project Showcase* and *Interactive CV* without a page reload (`activeTab` state).
- **Category filters** – All / HTML/CSS / React / Business Systems, using `Array.filter()` on the JSON data.
- **Live search** – results update as you type, matching project titles and descriptions.
- **Accordion CV timeline** – click a job to expand or collapse its details (`openAccordion` state).
- **Persistent dark mode** – theme choice is saved to `localStorage` through `useEffect` and restored on reload.
- **Responsive layout** – CSS Grid and Flexbox, with media queries for tablet and mobile.

## Tech Stack

- React 19 (function components, `useState`, `useEffect`, props)
- Vite
- Plain CSS (Grid, Flexbox, class-based dark theme overrides)
- JSON data (`src/data.json`)
- ESLint
- `gh-pages` for deployment to GitHub Pages

## Project Structure

```
src/
├── App.jsx                 # State + page composition
├── App.css                 # All styling, incl. dark mode and media queries
├── cvData.js               # CV / work history entries
├── data.json               # Project showcase data
└── components/
    ├── Navbar.jsx          # Title, tabs, theme toggle
    ├── ProjectFilters.jsx  # Search bar + category filter buttons
    ├── ProjectCard.jsx     # Single project card
    └── CvAccordion.jsx     # Expandable CV timeline
```

## Getting Started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run lint     # run ESLint
npm run build    # production build into dist/
```

## Deployment

The site is published to GitHub Pages with the `gh-pages` package:

```bash
npm run deploy
```

`predeploy` builds this dashboard and bundles it together with Projects 1–3 (CV, business site, portfolio) into a single `dist/` folder, which `gh-pages -d dist` publishes to the `gh-pages` branch. Vite is configured with `base: './'` so assets resolve correctly under the repository path.

## Author

Cory Parham – [coryparham80@gmail.com](mailto:coryparham80@gmail.com)

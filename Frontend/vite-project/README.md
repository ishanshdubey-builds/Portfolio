# Portfolio Website

A personal portfolio built with React and Vite.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Local development

From this directory:

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm run lint
```

## Main structure

- `src/Pages/Home.jsx` — home page, featured projects, skills, and introduction
- `src/Pages/Projects.jsx` — project gallery
- `src/Pages/ProjectDetail.jsx` — project details
- `src/Pages/Resume.jsx` — résumé page
- `src/Pages/Contact.jsx` — contact links
- `src/components/` — shared navigation, footer, and project card
- `src/data/projects.js` — project descriptions, links, and technology tags
- `public/images/` — images used by the website

Project cards and the detail pages read from the same data file, so update `src/data/projects.js` when adding or editing projects.

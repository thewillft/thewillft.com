# thewillft.com

Personal website and portfolio for William Tietjen — a software engineer, maker, and open-source contributor.

**Live at [thewillft.com](https://www.thewillft.com/)**

## What This Is

This site serves as a central place to share who I am, what I've built, and what I'm working on. It includes a home page with featured projects, a dedicated projects page that pulls live data from the GitHub API, and a resume page with work experience, education, and skills.

## Design & Infrastructure

- **Next.js 14 (App Router)** — File-based routing with server components by default and client components where interactivity is needed (e.g. the projects page fetching GitHub data).
- **Tailwind CSS with CSS custom properties** — A custom theme defined through RGB channel variables (`--color-accent`, `--color-background`, etc.) so Tailwind's opacity modifier works natively. Dark-first design with a rose accent. Light mode groundwork is in place but intentionally disabled for now.
- **Data-driven content** — Resume entries, project listings, profile info, and Q&A data live in plain JS modules under `src/data/`. No CMS, no database — just source-controlled data that's easy to update and version.
- **Code quality gates** — Husky pre-commit hooks run lint-staged, which formats with Prettier and lints with ESLint on every commit. The ESLint config extends `eslint:recommended`, `next/core-web-vitals`, and `prettier`.
- **Accessibility** — Skip-to-main-content link, semantic HTML structure, and `lang` attribute on the root `<html>` element.
- **Deployed on Vercel** — Standard Next.js deployment with zero custom configuration.
- **GPL-3.0 licensed** — The source is open for anyone to learn from, fork, or build on.

## On AI Usage

AI tools (primarily Cursor IDE) were used during development of this site for things like scaffolding boilerplate, catching bugs, and accelerating routine implementation work. That said, the design direction, content, layout decisions, and overall voice of the site are my own. A personal site should feel personal - AI is a tool in the workflow, not a substitute for the creative decisions that make it mine.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the development server     |
| `npm run build`        | Create a production build        |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | Run ESLint                       |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without writing |

## License

[GNU General Public License v3.0](./LICENSE)

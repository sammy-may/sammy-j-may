# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS v4. Deployed to Vercel.

## Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # TypeScript check + production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Architecture

- **Entry point**: `index.html` → `src/main.tsx` → `src/components/App.tsx`
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin (no PostCSS config needed)
- **Analytics**: Vercel Analytics in App.tsx

### Component Structure

```
src/components/
├── App.tsx           # Main component with all page content and two-column layout
├── ExperienceCell.tsx # Work experience card
├── ProjectCell.tsx    # Project showcase card with image
├── StyledLink.tsx     # External link with icon
├── Button.tsx         # Navigation button
└── Header.tsx         # Nav header (currently unused)
```

The App component contains the full page content inline. Reusable components handle repeated UI patterns (experience entries, project cards, styled links).

### Layout

Two-column responsive layout:
- Left: Sticky sidebar with name, title, nav, and social links
- Right: Scrollable main content (About, Experience, Projects)
- Mobile: Single column stack

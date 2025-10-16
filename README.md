# Frasier.dev

A modern, minimal landing page built with React, TypeScript, and Tailwind CSS. Features a sleek dark theme with red accents, smooth animations, and a video game-style loading experience.

## Overview

This is a personal portfolio landing page that serves as a hub to connect with me across different platforms. The site showcases a professional, sophisticated design with smooth transitions and engaging animations.

## Features

- Modern dark theme with red accent colors
- Video game-style loading screen with animated progress bar
- Smooth entry animations for all content
- Reusable card components for easy customization
- Responsive grid layout that works on mobile and desktop
- Glassmorphism design with subtle blur effects
- Fast performance built with Vite and optimized React

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Lucide React for icons
- Bun as package manager

## Project Structure

```
src/
├── components/
│   ├── Background.tsx      - Decorative grid background
│   ├── Footer.tsx          - Footer with copyright
│   ├── Header.tsx          - Title and intro section
│   ├── LinkCard.tsx        - Reusable card component
│   ├── LoadingBar.tsx      - Loading screen overlay
│   └── index.ts            - Component exports
├── consts/                 - Constants and data
├── App.tsx                 - Main application
├── index.css               - Global styles and animations
└── main.tsx                - Entry point
```

## Development

Install dependencies:
```bash
bun install
```

Start development server:
```bash
bun run dev
```

Build for production:
```bash
bun run build
```

## Customization

### Update Links

Edit the links in `src/consts` to point to your own social profiles and portfolio.

### Change Colors

The site uses Tailwind CSS color classes. To change the color scheme:
- Update the red color classes in component files
- Modify the LoadingBar and gradient colors
- Update accent colors in Header and Footer

### Add New Links

Add entries to the links array in `src/consts` with:
- `href`: URL to the link
- `title`: Display name
- `description`: Short description
- `icon`: Lucide React icon component
- `delay`: Animation delay in milliseconds

## Performance

- Built with Vite for instant HMR during development
- Optimized production builds with code splitting
- Smooth 60fps animations with GPU acceleration
- Lightweight bundle size

## Browser Support

Works on all modern browsers including Chrome, Firefox, Safari, and Edge.

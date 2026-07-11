# AGENTS.md — Bit by Bit Coding Website Redesign

This file provides guidelines for AI coding agents (e.g. OpenAI Codex, GitHub Copilot, Claude Code)
working inside this repository. Read it fully before making any changes.

---

## 1. Project Overview

This is the **Bit by Bit Coding (bbbcoding.org)** website redesign — a playful, hand-crafted,
hand-drawn style website for a non-profit coding education organisation in Singapore.

**Stack:** React 19 + TypeScript + Vite + Tailwind CSS v3 + React Router v7  
**Deployment:** Vercel (configured via `vercel.json`)  
**Node version:** v22 (use `nvm` if available)  
**Package manager:** npm (lockfile is `package-lock.json`)

---

## 2. Dev Workflow

### Always use the dev server — never the production build during agent sessions

```bash
npm install          # install dependencies
npm run dev          # start Vite dev server with HMR on http://localhost:5173
npm run lint         # run ESLint checks (fix before committing)
npm run build        # PRODUCTION ONLY — do not run during interactive agent sessions
npm run preview      # preview the production build locally
```

> ⚠️ **Do NOT run `npm run build`** during agent-assisted iteration.
> It outputs to `dist/` and does not affect the dev server, but it can cause confusion
> and is slow. Run it only to verify a final production build.

### After installing a new dependency

1. Run `npm install <package>` — do **not** use `pnpm` or `yarn` (this repo uses npm).
2. Verify `package-lock.json` is updated.
3. Restart the dev server so Vite picks up the new module.

---

## 3. Repository Structure

```
bbb-redesign/
├── index.html                  # Vite HTML entry point
├── vite.config.ts              # Vite config (@vitejs/plugin-react)
├── tailwind.config.js          # Design tokens (colors, fonts, shadows, etc.)
├── postcss.config.js           # PostCSS (autoprefixer)
├── tsconfig.json               # TypeScript root config
├── tsconfig.app.json           # TypeScript app config
├── vercel.json                 # Vercel SPA rewrite rules
├── package.json
├── REDESIGN_CONTEXT.md         # ← READ THIS for full product/design context
└── src/
    ├── main.tsx                # React root mount
    ├── App.tsx                 # Router + layout shell (Navigation, Footer, etc.)
    ├── index.css               # Global styles, Tailwind layers, CSS utilities
    ├── vite-env.d.ts
    ├── components/             # Shared layout components
    │   ├── Navigation.tsx      # Top nav with mobile hamburger menu
    │   ├── Footer.tsx          # Site-wide footer
    │   ├── AnnouncementBar.tsx # Dismissible top banner for course sign-ups
    │   ├── CookieConsent.tsx   # Cookie consent banner
    │   └── ScrollToTop.tsx     # Scroll-to-top on route change
    ├── pages/                  # One file per route (lazy-loaded in App.tsx)
    │   ├── HomePage.tsx        # / — hero, stats, testimonials, pathways, partners
    │   ├── AboutPage.tsx       # /about
    │   ├── PathwaysPage.tsx    # /pathways — learning tracks
    │   ├── ApplicationPage.tsx # /apply — embeds Tally form
    │   ├── TeamPage.tsx        # /team
    │   ├── ImpactPage.tsx      # /impact — stats bento grid
    │   ├── BlogPage.tsx        # /blog
    │   ├── GalleryPage.tsx     # /gallery
    │   ├── FAQPage.tsx         # /faq — accordion
    │   ├── ContactPage.tsx     # /contact
    │   ├── PartnersPage.tsx    # /partners
    │   ├── TutorPage.tsx       # /tutor — tutor recruitment
    │   ├── PressPage.tsx       # /press — media kit
    │   └── NotFoundPage.tsx    # * (404)
    ├── data/
    │   └── partners.ts         # Partner logos and metadata
    ├── hooks/                  # Custom React hooks
    └── lib/
        └── utils.ts            # `cn()` utility (clsx + tailwind-merge)
```

---

## 4. Design System

All design tokens are defined in `tailwind.config.js`. Do **not** use raw hex values in
components — always reference Tailwind token names.

### Colour Palette

| Token                        | Value     | Usage                                  |
| ---------------------------- | --------- | -------------------------------------- |
| `primary`                    | `#6f2de1` | Primary purple — CTAs, active states   |
| `primary-container`          | `#884efb` | Hover states, filled buttons           |
| `bit-green`                  | `#C5FF52` | Accent — highlights, drawn underlines  |
| `ink-black`                  | `#1A1A1A` | Borders, shadows, body text            |
| `surface`                    | `#fbf9f5` | Page background (warm off-white)       |
| `secondary`                  | `#006b5d` | Teal secondary actions                 |
| `tertiary`                   | `#b5163d` | Coral/red accents                      |
| `on-surface-variant`         | `#4a4455` | Muted/secondary text                   |

### Typography

- **Display / headlines:** `font-display` → `Playfair Display` (serif)
- **Body / labels / UI:** `font-body` or `font-label` → `Atkinson Hyperlegible Next` (sans-serif)
- Fonts are loaded via Google Fonts in `index.html`.

### Component CSS Classes (defined in `src/index.css`)

```css
.wiggly-border        /* 2px ink border with hand-drawn border-radius */
.wiggly-border-thin   /* 1px variant */
.sketch-border        /* alternate hand-drawn border shape */
.hard-shadow          /* 6px 6px flat shadow — rgba(26,26,26,1) */
.hard-shadow-sm       /* 4px variant */
.hard-shadow-lg       /* 8px variant */
.hard-shadow-primary  /* 6px purple shadow — #884efb */
.organic-blob-1       /* fluid blob border-radius shape */
.organic-blob-2       /* alternate blob shape */
.drawn-underline      /* ::after pseudo-element bit-green underline */
.notebook-lines       /* repeating linear gradient background lines */
.hover-wiggle         /* slight rotate + scale on hover */
.float-anim           /* gentle float keyframe animation */
.animate-draw         /* SVG stroke-dashoffset draw-in animation */
.animate-float        /* alias for float keyframe */
```

### Tailwind Shadow & Border Utilities

```
shadow-hard           → hard-shadow equivalent via tailwind
shadow-hard-sm
shadow-hard-lg
shadow-hard-primary
rounded-sketch        → 255px 15px 225px 15px/15px 225px 15px 255px
```

---

## 5. Coding Conventions

### TypeScript

- **All new files must be `.tsx` (components) or `.ts` (utilities/data)**.
- Enable strict mode is active (`tsconfig.app.json`). Avoid `any` — use proper types.
- Export components as **named exports**: `export function MyComponent()` — not default exports
  (except `App.tsx` which uses default for Vite compatibility).

### Components

- Place **shared/layout components** in `src/components/`.
- Place **page-level components** in `src/pages/` — one file per route, named `<RouteName>Page.tsx`.
- Each new page component must also be:
  1. Imported (lazy) in `App.tsx`
  2. Added as a `<Route>` inside the `<Routes>` block
- Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging.

### Icons

- Use **Lucide React** only (`lucide-react` is already installed).
- Do **not** use Google Material Symbols, Heroicons, or any other icon library.
- Import icons by name: `import { ArrowRight, Heart } from 'lucide-react'`.

### Images

- All BBB event/class photos are stored locally in `public/assets/` as `.webp` files.
- Reference them using the path prefix `/assets/<filename>.webp` in `src` / `alt` attributes.
- The `assetBase` constant pattern is used in page components: `const assetBase = '/assets';`
- Use `alt` attributes on every `<img>` tag.

### External Forms

- Student applications embed the Tally form: `https://tally.so/r/rjLWOv`
- Embed as an `<iframe>` with appropriate `width`, `height`, and `title` attributes.

### Links & Routing

- Use `<Link>` from `react-router-dom` for all **internal** navigation.
- Use a plain `<a href>` with `target="_blank" rel="noopener noreferrer"` for **external** links.
- The canonical domain is `bbbcoding.org` — do not hardcode `vercel.app` URLs.

---

## 6. Data & Content

- Static content data (partner organisations, team members, etc.) lives in `src/data/`.
- When adding large or repeated datasets, create a new `.ts` file in `src/data/` rather than
  inlining arrays directly inside page components.
- Do **not** create a backend or API layer — this is a fully static site.
- Real content is documented in `REDESIGN_CONTEXT.md` (impact stats, team roster,
  testimonials, learning tracks, partner list, social links).

---

## 7. Styling Rules

1. **Tailwind-first:** Use Tailwind utility classes. Write custom CSS in `src/index.css` only
   when Tailwind utilities cannot achieve the effect (e.g. complex keyframe animations).
2. **No inline styles:** Do not use `style={{ }}` props unless absolutely necessary
   (e.g. dynamic values that cannot be expressed as Tailwind classes).
3. **Responsive design:** All components must be mobile-first. Use `sm:`, `md:`, `lg:` breakpoints.
4. **Design language:** Maintain the playful, hand-drawn aesthetic:
   - Prefer `.wiggly-border` or `.sketch-border` over plain `rounded-*` on card elements.
   - Prefer `.hard-shadow` over `shadow-*` on interactive/card elements.
   - Use `bit-green` highlights sparingly for emphasis.
   - Headings should use `font-display`; body copy uses `font-body`.
5. **Animations:** Use the pre-defined keyframes (`float`, `draw`, `wiggle`) from `index.css`.
   Do not add new CSS animation libraries.

---

## 8. What Pages Exist vs. What's Pending

| Page            | Route        | File                     | Status         |
| --------------- | ------------ | ------------------------ | -------------- |
| Home            | `/`          | `HomePage.tsx`           | ✅ Built        |
| About           | `/about`     | `AboutPage.tsx`          | ✅ Built        |
| Pathways        | `/pathways`  | `PathwaysPage.tsx`       | ✅ Built        |
| Apply           | `/apply`     | `ApplicationPage.tsx`    | ✅ Built        |
| Team            | `/team`      | `TeamPage.tsx`           | ✅ Built        |
| Impact          | `/impact`    | `ImpactPage.tsx`         | ✅ Built        |
| Blog            | `/blog`      | `BlogPage.tsx`           | ✅ Built        |
| Blog Post       | `/blog/:slug`| `BlogPostPage.tsx`       | ✅ Built        |
| Gallery         | `/gallery`   | `GalleryPage.tsx`        | ✅ Built        |
| FAQ             | `/faq`       | `FAQPage.tsx`            | ✅ Built        |
| Contact         | `/contact`   | `ContactPage.tsx`        | ✅ Built        |
| Partners        | `/partners`  | `PartnersPage.tsx`       | ✅ Built        |
| Tutor           | `/tutor`     | `TutorPage.tsx`          | ✅ Built        |
| Press           | `/press`     | `PressPage.tsx`          | ✅ Built        |
| 404             | `*`          | `NotFoundPage.tsx`       | ✅ Built        |
| Privacy/Legal   | `/privacy` etc. | _not yet created_     | 🔲 Pending     |

Legal pages (Privacy, Terms, Conduct, Consent, Child Policy) are noted in `REDESIGN_CONTEXT.md`
but have not yet been scaffolded. When creating them, follow the same page pattern.

---

## 9. Useful Commands Reference

| Command              | Purpose                                                    |
| -------------------- | ---------------------------------------------------------- |
| `npm run dev`        | Start Vite dev server with HMR on `http://localhost:5173`  |
| `npm run lint`       | Run ESLint — fix all warnings/errors before committing     |
| `npm run build`      | **Production build** — do not run during agent sessions    |
| `npm run preview`    | Serve the production `dist/` build locally for inspection  |

---

## 10. What NOT to Do

- ❌ Do not run `npm run build` during interactive agent sessions.
- ❌ Do not use `pnpm` or `yarn` — this project uses `npm`.
- ❌ Do not use Google Material Symbols or any icon library other than `lucide-react`.
- ❌ Do not add inline `style={{}}` props when Tailwind classes will suffice.
- ❌ Do not hardcode colours as hex values in JSX — always use Tailwind tokens.
- ❌ Do not create API routes or server-side logic — this is a static SPA.
- ❌ Do not rename or restructure existing files without updating all imports.
- ❌ Do not remove `ScrollToTop`, `CookieConsent`, or `AnnouncementBar` from `App.tsx`.
- ❌ Do not change the canonical domain from `bbbcoding.org` to any Vercel preview URL.

---

_Last updated: July 2026. Maintained by Hongpeng Wei (President, Bit by Bit Coding)._

# AGENTS.md

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — static export to `out/` (no Node server)
- `npm run start` — serve static build locally
- `npm run lint` — ESLint via `next lint`
- No test framework configured. No typecheck (JS, not TS).

## Architecture

- **Next.js 14** with App Router, **JavaScript** (`.js`/`.jsx`), no TypeScript.
- **Static export** (`output: 'export'` in `next.config.mjs`). Build output goes to `out/`. Deploy as static files, not a Node process.
- Single-page portfolio. Entry: `app/page.jsx` composes all sections: `Navigator → Hero → About → Experience → Skill → Projects → Contact`.
- Path alias: `@/*` → project root (`jsconfig.json`).

## UI / Styling

- **Tailwind CSS v3** with CSS variable theming (`app/globals.css`). Dark mode via class (`darkMode: ["class"]`).
- **shadcn/ui** (`components.json`, style "new-york", `tsx: false`). Add components with `npx shadcn@latest add <component>`.
- UI components live in `components/ui/`. Shared utilities in `lib/utils.js` (cn helper).
- Icons: `lucide-react` (shadcn default) + `react-icons`.

## Key Dependencies

- `react-player` — video embeds in Projects section.
- `sweetalert2` — toast/modal alerts (e.g. contact form).
- `class-variance-authority` — variant styles for shadcn components.

## Env

- `.env` defines `NEXT_PUBLIC_URL` used as `metadataBase` in `app/layout.js`. Must be a valid URL for OpenGraph/metadata to work.

## Conventions

- No CI, no pre-commit hooks, no Prettier enforcement (`settings.json` ignores all code files).
- Components use `.jsx` extension. Hooks use `.js`.
- Custom hook: `hooks/use-input.js`.

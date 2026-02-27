# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run mock` — Run mock API server on port 3001 (json-server with db.json)
- `npm run build` — TypeScript compile + Vite production build (`tsc -b && vite build`)
- `npm run lint` — ESLint across the project
- `npm run preview` — Preview production build locally

## Architecture

React 19 + TypeScript + Vite employee directory application.

**State management:** Redux Toolkit with react-redux. Store is in `src/store/store.ts` with typed `RootState` and `AppDispatch` exports. Currently has an empty reducer ready for slices.

**Forms:** react-hook-form with zod validation (via @hookform/resolvers).

**Data display:** @tanstack/react-table for tabular employee data.

**Styling:** Tailwind CSS v4 integrated via `@tailwindcss/vite` plugin. Tailwind directives imported in `src/index.css`.

**Mock API:** json-server serves `db.json` on port 3001. Two resources:
- `employees` — id, firstName, lastName, email, position, department, startDate, status
- `departments` — id, name

## TypeScript

Strict mode enabled with `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`. Target ES2022, module ESNext, JSX react-jsx.

## Linting

ESLint v9 flat config extending recommended rules for JS, TypeScript, React hooks, and React Refresh.

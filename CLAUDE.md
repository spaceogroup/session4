# CLAUDE.md

Guidance for Claude Code (and humans) working in this repository.

## What this is

**People of Space-O** — a people & culture website for Space-O Technologies, built as two
independent codebases that talk over HTTP and keep **separate databases**:

- `backend/` — **NestJS** REST API. Owns all *content* (stats, services, leadership team,
  life-at-Space-O events, offices). Database: `backend/data/spaceo_api.sqlite` (TypeORM + better-sqlite3).
- `frontend/` — **Next.js** (App Router) website. Renders the site from the API and stores
  *visitor engagement* (contact messages, newsletter sign-ups). Database:
  `frontend/prisma/spaceo_web.sqlite` (Prisma).

See `PRD.md` for the full product spec. The two services share **no** database. The frontend
reads content from the API over HTTP and writes engagement data only to its own DB.

```
session4/
├── PRD.md            # product requirements
├── README.md         # setup/run docs (Basecode-style)
├── backend/          # NestJS API  (port 4000, base path /api/v1)
└── frontend/         # Next.js web (port 3000)
```

## Commands

### Backend (`cd backend`)
```bash
npm install
cp .env.example .env          # configures DATABASE_PATH, PORT, FRONTEND_ORIGIN
npm run start:dev             # watch mode → http://localhost:4000/api/v1
npm run build && npm run start:prod
npm run test                  # unit/e2e smoke tests
```
- DB auto-creates and **seeds on boot** when tables are empty (`src/seed/`).
- Swagger UI: `http://localhost:4000/api/docs`.

### Frontend (`cd frontend`)
```bash
npm install
cp .env.example .env          # DATABASE_URL, NEXT_PUBLIC_API_URL
npm run db:push               # create/sync spaceo_web.sqlite from Prisma schema
npm run dev                   # → http://localhost:3000
npm run build && npm start
```

### Run the whole thing
Start the backend first (port 4000), then the frontend (port 3000). If the API is down the
frontend falls back to a bundled content snapshot so pages still render.

## Architecture & conventions

### Backend
- **Modules** live in `src/modules/<name>/` each with `*.module.ts`, `*.controller.ts`,
  `*.service.ts`, `entities/`, `dto/`. Modules: `stats`, `services`, `team`, `life`, `offices`,
  plus a top-level `company` overview endpoint.
- **Entities** map 1:1 to tables in §8 of the PRD. `synchronize: true` in dev only.
- **Seeding** is idempotent — `SeedService` runs `OnApplicationBootstrap` and inserts only when a
  table is empty. Edit seed data in `src/seed/seed.data.ts`.
- All routes are under the global prefix `/api/v1`. Validation is global (`class-validator`).
- Keep responses as plain serializable DTO shapes; don't leak TypeORM internals.

### Frontend
- App Router under `src/app/`. The homepage (`src/app/page.tsx`) is a server component that calls
  `lib/api.ts` to fetch content.
- `lib/api.ts` centralizes API calls + the offline fallback (`lib/fallback-data.ts`).
- Reusable UI in `src/components/` (e.g. `Hero`, `Stats`, `Services`, `Team`, `LifeAtSpaceO`,
  `Offices`, `ContactForm`, `Footer`).
- Engagement writes go through route handlers in `src/app/api/*/route.ts` → Prisma client in
  `lib/prisma.ts`. Never call the API DB from here.
- Styling: Tailwind. Brand accent defined in `tailwind.config.ts`. Keep components accessible.

## Content / data integrity
- Company stats and leadership names come from public Space-O web properties (see PRD §4). Do not
  fabricate named personal quotes; keep culture copy paraphrased from public sources.
- To change content, edit `backend/src/seed/seed.data.ts` (re-seed by deleting the sqlite file or
  emptying the table), **not** the frontend.

## Gotchas
- SQLite DB files are git-ignored and created at runtime — a fresh clone has no DB until you run
  the backend (auto-seed) and `npm run db:push` in the frontend.
- `better-sqlite3` is a native module; if install fails on a new Node version, run
  `npm rebuild better-sqlite3`.
- Frontend server components fetch with `cache: 'no-store'` in dev; the API must be reachable or
  the fallback snapshot is used.

## Branching
- Active branch: `develop`. Push there. (See README "Branching Strategy".)

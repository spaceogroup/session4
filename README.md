# People of Space-O

![NestJS](https://img.shields.io/badge/NestJS-10.x-E0234E)
![Next.js](https://img.shields.io/badge/Next.js-14.2-000000)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6)
![TypeORM](https://img.shields.io/badge/TypeORM-0.3-FE0803)
![Prisma](https://img.shields.io/badge/Prisma-5.x-2D3748)
![SQLite](https://img.shields.io/badge/SQLite-3-003B57)

> A people &amp; culture website for **Space-O Technologies**, built as two independent codebases:
> a **NestJS** REST API that serves all content, and a **Next.js** website that renders it. Each
> service has its **own, separate database**.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Installation (Local)](#installation-local)
6. [Environment Variables](#environment-variables)
7. [Database — Schema &amp; Seeders](#database--schema--seeders)
8. [Running the App](#running-the-app)
9. [Branching Strategy](#branching-strategy)
10. [Deployment (Staging → Live)](#deployment-staging--live)
11. [API Documentation](#api-documentation)
12. [The Two Databases](#the-two-databases)
13. [Testing](#testing)
14. [Default Accounts](#default-accounts)
15. [Troubleshooting](#troubleshooting)
16. [Security Notes](#security-notes)
17. [Customization Notes](#customization-notes)
18. [Support &amp; Maintainers](#support--maintainers)
19. [License](#license)

---

## Introduction

**People of Space-O** tells the story of the *people* behind Space-O Technologies — the
leadership team, the "Life at Space-O" culture, the global offices and the work the company is
known for. It is intentionally split into two services that communicate over HTTP:

- **`backend/`** — a **NestJS** API that owns all *content* (stats, services, leadership team,
  life-at-Space-O events, offices) in its own database.
- **`frontend/`** — a **Next.js** site that renders the content and stores *visitor engagement*
  (contact messages, newsletter sign-ups) in a completely separate database.

See [`PRD.md`](./PRD.md) for the product spec and [`CLAUDE.md`](./CLAUDE.md) for the architecture
notes.

```
session4/
├── PRD.md            # product requirements
├── CLAUDE.md         # architecture & commands
├── README.md         # you are here
├── backend/          # NestJS API   → port 4000, base path /api/v1
└── frontend/         # Next.js web  → port 3000
```

## Features

- 🎯 **API-driven content** — all copy comes from the NestJS API, editable without touching the UI.
- 🗄️ **Two separate databases** — content (API) and engagement (web) never share a DB.
- 🌱 **Auto-seeding** — the API populates itself on first boot from a single seed file.
- 👥 **Clickable team profiles** — tap any leader for a modal with their photo, bio & a favourite memory.
- 💬 **Employee Speaks carousel** — auto-playing testimonials (real quotes) with controls & dots.
- 🖼️ **Interactive memories gallery** — category filters + lightbox that links the people in each moment.
- ✨ **Scroll-reveal animations** — sections fade in as they enter the viewport.
- 🛡️ **Graceful fallback** — the site renders from a bundled snapshot if the API is unreachable; avatars fall back to initials.
- ✉️ **Contact & newsletter** — form submissions persist to the frontend's own SQLite DB.
- 📖 **Swagger docs** — interactive API reference out of the box.
- 🎨 **Modern responsive UI** — Tailwind CSS, dark theme, accessible, mobile-first.
- ⚡ **Zero infra** — SQLite for both DBs; runs locally with no external services.

## Tech Stack

| Layer | Technology |
|---|---|
| Backend framework | NestJS 10 (TypeScript) |
| Backend ORM / DB | TypeORM + `better-sqlite3` → `spaceo_api.sqlite` |
| API docs | Swagger (`@nestjs/swagger`) |
| Validation | `class-validator` / `class-transformer` |
| Frontend framework | Next.js 14 (App Router, TypeScript) |
| Frontend ORM / DB | Prisma + SQLite → `spaceo_web.sqlite` |
| Styling | Tailwind CSS |
| Runtime | Node.js 20 |

## Prerequisites

| Dependency | Version |
|---|---|
| Node.js | ≥ 20.x |
| npm | ≥ 10.x |
| Git | ≥ 2.x |

> `better-sqlite3` is a native module — a C/C++ toolchain (Xcode CLT on macOS, build-essential on
> Linux) is required to compile it during `npm install`.

## Installation (Local)

```bash
# 1. Clone
git clone git@github.com:spaceogroup/session4.git
cd session4

# 2. Backend (API)
cd backend
npm install
cp .env.example .env
npm run start:dev          # http://localhost:4000/api/v1  (auto-creates + seeds the DB)

# 3. Frontend (website) — in a second terminal
cd ../frontend
npm install
cp .env.example .env
npm run db:push            # creates spaceo_web.sqlite from the Prisma schema
npm run dev                # http://localhost:3000
```

Start the **backend first**, then the frontend. If the API is down, the site still renders using a
bundled content snapshot (a banner in the footer indicates this).

## Environment Variables

**`backend/.env`**

| Key | Example | Purpose |
|---|---|---|
| `PORT` | `4000` | Port the API listens on |
| `DATABASE_PATH` | `./data/spaceo_api.sqlite` | API content database file |
| `FRONTEND_ORIGIN` | `http://localhost:3000` | Allowed CORS origin |

**`frontend/.env`**

| Key | Example | Purpose |
|---|---|---|
| `DATABASE_URL` | `file:./spaceo_web.sqlite` | Frontend engagement database |
| `NEXT_PUBLIC_API_URL` | `http://localhost:4000/api/v1` | Base URL of the content API |

## Database — Schema &amp; Seeders

- **API DB (`backend`)** uses TypeORM with `synchronize: true` in development, so the schema is
  created automatically. On boot, an **idempotent seeder** (`src/seed/`) fills any empty table from
  `src/seed/seed.data.ts`. To re-seed, empty the table or delete the sqlite file and restart.
- **Web DB (`frontend`)** uses Prisma. Create/sync the schema with:

```bash
cd frontend
npm run db:push            # prisma db push
npx prisma studio          # optional: inspect submissions in a browser
```

> ⚠️ In production, replace `synchronize: true` with TypeORM migrations and run them explicitly.

## Running the App

**Local development**

```bash
# backend
cd backend && npm run start:dev
# frontend
cd frontend && npm run dev
```

**Production build**

```bash
# backend
cd backend && npm run build && npm run start:prod
# frontend
cd frontend && npm run build && npm start
```

**Process management** — run each service under a supervisor (PM2 / systemd / Docker), e.g.:

```bash
pm2 start dist/main.js --name spaceo-api          # in backend/
pm2 start "npm start" --name spaceo-web           # in frontend/
```

## Branching Strategy

| Branch | Purpose | Deploys to |
|---|---|---|
| `develop` | Active integration branch — **all work lands here** | Staging |
| `main` | Stable releases | Production |
| `feature/*` | Individual features, branched from `develop` | — |

## Deployment (Staging → Live)

1. Merge approved work into `develop`; CI builds both `backend` and `frontend`.
2. Deploy `develop` to **staging**; smoke-test the API (`/api/v1/health`) and the site.
3. Set production env vars (`DATABASE_PATH`, `DATABASE_URL`, `NEXT_PUBLIC_API_URL`, `FRONTEND_ORIGIN`).
4. Run DB migrations (API) / `prisma migrate deploy` (web) against the production databases.
5. Promote `develop` → `main` and deploy to **production** behind your process manager / reverse proxy.

## API Documentation

Interactive Swagger UI is available when the backend is running:

```
http://localhost:4000/api/docs
```

Key endpoints (base path `/api/v1`):

| Method | Path | Description |
|---|---|---|
| GET | `/health` | Liveness probe |
| GET | `/company/overview` | Hero/about summary + headline stats |
| GET | `/stats` | Company statistics |
| GET | `/services` | Capabilities / services |
| GET | `/team` | Leadership team (with photo, bio & memory) |
| GET | `/testimonials` | Employee Speaks testimonials |
| GET | `/life-events` | Life at Space-O events |
| GET | `/memories` | Memories gallery (photos + linked people) |
| GET | `/offices` | Office locations |

Engagement endpoints live on the **frontend** (Next.js route handlers):

| Method | Path | Description |
|---|---|---|
| POST | `/api/contact` | Persist a contact message |
| POST | `/api/newsletter` | Persist a newsletter sign-up |

## The Two Databases

This project deliberately keeps **two separate databases** — they are never shared:

| Database | Owned by | Holds | Engine |
|---|---|---|---|
| `backend/data/spaceo_api.sqlite` | NestJS API | Content (stats, services, team, life events, offices) | TypeORM |
| `frontend/prisma/spaceo_web.sqlite` | Next.js web | Engagement (contact messages, newsletter subscribers) | Prisma |

The frontend reads content from the API over HTTP and writes engagement data only to its own DB.
Neither service connects to the other's database.

## Testing

```bash
cd backend
npm run test               # unit/smoke tests
```

## Default Accounts

There is **no authentication** in v1 — content is seeded and the API exposes read-only content
endpoints plus public engagement writes. There are no default accounts to change. (An admin/auth
layer is listed under future enhancements in the PRD.)

## Troubleshooting

| Symptom | Fix |
|---|---|
| `better-sqlite3` fails to install/build | Ensure a C/C++ toolchain is present, then `npm rebuild better-sqlite3` |
| Site shows "content API was unreachable" banner | Start the backend (`cd backend && npm run start:dev`) and reload |
| `PrismaClient` errors / table missing | Run `npm run db:push` in `frontend/` |
| Port already in use | Change `PORT` (backend) or run `next dev -p 3001` (frontend) |
| API content didn't update | Re-seed: stop the API, delete `backend/data/spaceo_api.sqlite`, restart |

## Security Notes

- Secrets/config live in `.env` files; only `.env.example` is committed. `.env` and `*.sqlite` are git-ignored.
- All API input is validated by a global `ValidationPipe` (`whitelist` + `forbidNonWhitelisted`).
- Frontend route handlers validate name/email/message before writing to the DB.
- CORS is restricted to `FRONTEND_ORIGIN`.
- For production: enable HTTPS, add rate-limiting on the engagement endpoints, and swap
  `synchronize: true` for managed migrations.

## Customization Notes

- **Change content:** edit `backend/src/seed/seed.data.ts`, then re-seed (see Database section).
- **Change branding:** edit the `brand` palette in `frontend/tailwind.config.ts`.
- **Add a section:** add a content module under `backend/src/modules/` and a component under
  `frontend/src/components/`, then wire it into `frontend/src/app/page.tsx`.

## Support &amp; Maintainers

Maintained by **Space-O Technologies**. Content sourced from public Space-O web properties
([spaceotechnologies.com](https://www.spaceotechnologies.com/),
[spaceo.ai](https://www.spaceo.ai/), [spaceo.ca](https://www.spaceo.ca/)).

## License

MIT — update as appropriate for your use.

---

**HAPPY CODING 👍 💻**

# Product Requirements Document (PRD)

## Project: "People of Space-O" — A People & Culture Website

| | |
|---|---|
| **Document owner** | Engineering (Claude Code) |
| **Status** | Draft v1.0 |
| **Last updated** | 2026-06-20 |
| **Repository** | `git@github.com:spaceogroup/session4.git` (branch: `develop`) |

---

## 1. Summary

**People of Space-O** is a public-facing marketing/culture website that tells the story of the *people* behind Space-O Technologies — the leadership team, the company culture ("Life at Space-O"), the global offices, and the work the company is known for.

The product is built as **two independent codebases**:

1. **`backend/`** — a **NestJS** REST API that owns and serves all *content* (company stats, services, leadership team, life-at-Space-O events, offices). It has its **own database**.
2. **`frontend/`** — a **Next.js** website that consumes the API and renders the public site. It has its **own, separate database** used only for *visitor-generated data* (contact-form messages and newsletter sign-ups).

The two databases are intentionally separate: the API DB is the **content** source of truth; the web DB is the **engagement** store. Neither service touches the other's database.

---

## 2. Goals & Non-Goals

### Goals
- Showcase the people and culture of Space-O Technologies in a polished, single-page website.
- Demonstrate a clean **NestJS (API) + Next.js (web)** architecture with two separate databases.
- Make all content **API-driven** so it can be edited without redeploying the frontend.
- Capture inbound interest (contact messages, newsletter sign-ups) in the frontend's own DB.
- Run locally with zero external infrastructure (SQLite for both DBs).

### Non-Goals
- No authentication / admin CMS UI in v1 (content is seeded; API exposes read endpoints + a write path for engagement only).
- No payment, no real email delivery (submissions are persisted, not emailed).
- No multi-language / i18n in v1.
- Not a clone of spaceotechnologies.com — it is an original "people & culture" microsite using publicly available facts.

---

## 3. Audience / Personas

| Persona | Need |
|---|---|
| **Prospective hire** | "What is it like to work here? Who leads the company? Where are the offices?" |
| **Prospective client / partner** | "Who are these people, what do they do, are they credible?" |
| **Current employee / alumnus** | "See our culture and milestones represented well." |

---

## 4. Content (sourced from public Space-O web properties)

All figures below are drawn from `spaceotechnologies.com`, `spaceo.ai`, and `spaceo.ca` and are seeded into the API database.

### 4.1 Company facts / stats
- Founded **2010**; **15+ years** in business.
- **258** employees (≈200+ developers/engineers).
- **1,200+** clients · **300+** software solutions · **4,400+** mobile apps delivered.
- **97%** client retention · **50+** AI systems shipped to production · **5** unicorn products.
- Recognition: Clutch Top Company / Leader 2024 / Global Leader / Champion; 98% Upwork success.
- Notable clients referenced publicly: Nike, McAfee, Toshiba, HP, Saint-Gobain.

### 4.2 Services / capabilities
AI & Generative AI development · Agentic AI / custom AI agents · Mobile app development (iOS, Android, React Native, Flutter) · Web development · Enterprise software · SaaS / MVP development · ServiceNow services · Dedicated team / staff augmentation.

### 4.3 Leadership team
| Name | Title |
|---|---|
| Rakesh Patel | CEO & Founder |
| Jasmine Patel | CFO & Founder |
| Bhaval Patel | Director (Operations) |
| Ankit Shah | Vice President (Operations) |
| Gaurang Bhatt | Vice President of Security Engineering |
| Vijayant Das | AVP (Operations) |
| Nehal Jani | Chief People Officer |
| Amit Patoliya | AI & Product Engineering Lead |
| Yuvrajsinh Vaghela | AVP (Digital Marketing – Service) |

### 4.4 Life at Space-O (culture & events)
Diwali · Ganesh Chaturthi · Holi · Christmas (Secret Santa) · Republic Day · Space-O Cricket League · tenure & performance milestone celebrations. Glassdoor: 4.0/5, 74% would recommend; 5-day week with flexible timings; focus on learning & growth.

### 4.5 Offices
| Office | Location | Role |
|---|---|---|
| India (HQ) | Ahmedabad, Gujarat | Headquarters / delivery |
| USA | Mesa, Arizona | Sales & delivery |
| Canada | 2 County Court Blvd, Suite 400, Brampton, Ontario L6W 3W8 | Sales & delivery (Space-O Canada, est. 2017) |

> **Content integrity note:** Stats and names are public facts. The site does not fabricate named personal quotes; culture descriptions are paraphrased from public sources.

---

## 5. System Architecture

```
                ┌──────────────────────────────┐
                │  Browser (visitor)           │
                └───────────────┬──────────────┘
                                │  HTTPS
                ┌───────────────▼──────────────┐
                │  frontend/  Next.js (App Router)
                │  - SSR/ISR pages, Tailwind UI │
                │  - Route handlers: /api/contact, /api/newsletter
                │  - Prisma → spaceo_web.sqlite │ ◀── Web DB (engagement)
                └───────────────┬──────────────┘
                                │  fetch (server-side) /api/v1/*
                ┌───────────────▼──────────────┐
                │  backend/  NestJS REST API    │
                │  - TypeORM → spaceo_api.sqlite│ ◀── API DB (content)
                │  - Modules: stats, services,  │
                │    team, life, offices        │
                └───────────────────────────────┘
```

- **No shared database.** The frontend reads content over HTTP from the API; it writes engagement data only to its own DB. The two services can be deployed and scaled independently.

---

## 6. Backend (NestJS) requirements

- **Stack:** NestJS 10, TypeScript, TypeORM, `better-sqlite3` driver, `@nestjs/config`, `class-validator`, global validation pipe, CORS enabled for the frontend origin, Swagger at `/api/docs`.
- **DB:** `backend/data/spaceo_api.sqlite` (path configurable via `DATABASE_PATH`). `synchronize: true` in dev; seeded on boot if empty.
- **API base path:** `/api/v1`.
- **Entities:** `CompanyStat`, `Service`, `TeamMember`, `LifeEvent`, `Office`.
- **Endpoints (read-only content):**
  - `GET /api/v1/health`
  - `GET /api/v1/company/overview` — combined hero/summary + stats
  - `GET /api/v1/stats`
  - `GET /api/v1/services`
  - `GET /api/v1/team`
  - `GET /api/v1/life-events`
  - `GET /api/v1/offices`
- **Seeding:** an idempotent seeder populates all entities from the content in §4 on startup when tables are empty.
- **Quality:** DTOs/serialization, consistent JSON shape, basic e2e/unit smoke test.

## 7. Frontend (Next.js) requirements

- **Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma + SQLite.
- **DB:** `frontend/prisma/spaceo_web.sqlite` (`DATABASE_URL`). Models: `ContactMessage`, `NewsletterSubscriber`.
- **Data fetching:** server components fetch from `NEXT_PUBLIC_API_URL` (default `http://localhost:4000/api/v1`) with graceful fallback to bundled snapshot data if the API is unreachable (so the site renders in isolation).
- **Sections (single page + anchors):** Hero · Stats band · About / story · Services grid · Leadership team grid · Life at Space-O (events) · Offices · Contact form + Newsletter · Footer.
- **Route handlers:**
  - `POST /api/contact` → validate, persist `ContactMessage`.
  - `POST /api/newsletter` → validate (unique email), persist `NewsletterSubscriber`.
- **UX:** responsive, accessible, dark modern aesthetic with Space-O brand accent; client-side form validation + success/error states.

---

## 8. Data model

**API DB (`spaceo_api.sqlite`)**
- `company_stat(id, label, value, suffix, order)`
- `service(id, title, description, icon, order)`
- `team_member(id, name, title, order, initials)`
- `life_event(id, title, description, emoji, order)`
- `office(id, country, city, address, role, order)`

**Web DB (`spaceo_web.sqlite`)**
- `ContactMessage(id, name, email, company?, message, createdAt)`
- `NewsletterSubscriber(id, email unique, createdAt)`

---

## 9. Non-functional requirements
- Both apps start with documented commands; no external services required.
- API responses < 100ms locally; site First Load JS reasonable.
- Secrets/config via `.env` files; `.env.example` committed.
- SQLite DB files git-ignored; created on first run/seed.
- Code formatted (Prettier) and typed (strict TS).

## 10. Branching & delivery
- Monorepo with `backend/` and `frontend/`. Code pushed to `develop` branch of `git@github.com:spaceogroup/session4.git`.
- `README.md` documents setup for both apps (structure modeled on the Basecode gist sample).
- `CLAUDE.md` documents architecture & commands for future agent sessions.

## 11. Acceptance criteria
- [ ] `backend` builds, boots, seeds, and serves all `/api/v1` endpoints with real content.
- [ ] `frontend` builds and renders all sections from API data (with offline fallback).
- [ ] Contact + newsletter POSTs persist to the **frontend's own** SQLite DB.
- [ ] Two separate DB files exist; neither service reads the other's DB.
- [ ] `README.md`, `CLAUDE.md`, `PRD.md` present; code on `develop`.

## 12. Future enhancements (out of scope v1)
Admin CMS + auth · real email/CRM integration · blog/careers feeds · analytics · i18n · containerization & CI/CD.

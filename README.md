# AI FOMO

AI FOMO is a Next.js (App Router) + TypeScript starter for tracking AI product signals. It ships with Tailwind CSS, example API routes, and seed data so you can deploy quickly on Vercel.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `app/` - App Router pages, layouts, and API routes.
- `components/` - Shared UI components.
- `lib/` - Static data and helper utilities.
- `seed/` - Seed data used by the API routes.

## API Routes

- `GET /api/health` returns a simple health check.
- `GET /api/seed` returns demo seed data.

## Deployment

This project is ready to deploy on Vercel. Push the repository to GitHub and import it into Vercel, or run:

```bash
npm run build
npm run start
```


# ai-fomo

## Run locally

1. Ensure you have Node.js (>=18) installed.
2. Install dependencies (when a `package.json` is present):
   ```bash
   npm install
   ```
3. Start the dev server (when a `package.json` is present):
   ```bash
   npm run dev
   ```

> If the project hasn’t added application code yet, you’ll only see this README and `LICENSE` until the Next.js app is introduced.

## Environment variables

Create a `.env.local` in the project root and set the following variables as needed:

```
NEXT_PUBLIC_X_PROFILE_URL=https://x.com/your-handle
```

### Supabase (only if the app integrates Supabase)

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Configure the X profile URL

Set `NEXT_PUBLIC_X_PROFILE_URL` in `.env.local` to the X profile you want the UI to link to. This value is intended to be read on the client side in Next.js.

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


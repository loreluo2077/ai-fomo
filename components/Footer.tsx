export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-slate-300/80">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <span className="font-medium text-white">
          AI FOMO · Signal intelligence for thoughtful teams.
        </span>
        <span className="text-slate-300/70">
          Built for Vercel deployments.
        </span>
      </div>
    </footer>
  );
}

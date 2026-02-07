interface StatPillProps {
  label: string;
  value: string;
}

export function StatPill({ label, value }: StatPillProps) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white shadow-[0_12px_30px_-25px_rgba(15,23,42,0.8)] backdrop-blur">
      <span className="text-sm font-semibold text-brand-100">{value}</span>
      <span className="text-xs uppercase tracking-[0.2em] text-slate-200/70">
        {label}
      </span>
    </div>
  );
}

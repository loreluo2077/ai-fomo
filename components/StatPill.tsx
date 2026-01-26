interface StatPillProps {
  label: string;
  value: string;
}

export function StatPill({ label, value }: StatPillProps) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
      <span className="text-sm font-semibold text-brand-600">{value}</span>
      <span className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </span>
    </div>
  );
}

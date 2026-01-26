import type { TodayStats } from "@/lib/data";

const levels = [
  { label: "Chill", range: "0-40" },
  { label: "Buzz", range: "41-70" },
  { label: "Panic", range: "71-100" },
];

const getStatus = (score: number) => {
  if (score > 70) return "Panic";
  if (score > 40) return "Buzz";
  return "Chill";
};

export const TodayGauge = ({ stats }: { stats: TodayStats }) => {
  const status = getStatus(stats.fomoScore);
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Today&apos;s FOMO gauge
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">{stats.fomoScore}</h2>
          <p className="mt-1 text-sm text-slate-500">
            {stats.votes.total} votes logged • Status: {status}
          </p>
        </div>
        <div className="flex-1">
          <div className="h-3 w-full rounded-full bg-slate-100">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500"
              style={{ width: `${stats.fomoScore}%` }}
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-slate-500">
            {levels.map((level) => (
              <div key={level.label} className="flex flex-col">
                <span className="font-semibold text-slate-700">{level.label}</span>
                <span>{level.range}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

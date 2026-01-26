export const XFooter = () => {
  return (
    <footer className="rounded-3xl border border-slate-200 bg-white px-8 py-6 text-sm text-slate-500">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-slate-700">AI FOMO Index</p>
          <p className="text-xs text-slate-400">Tracking sentiment across the AI community.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600">
            Follow on X
          </button>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            Export report
          </button>
        </div>
      </div>
    </footer>
  );
};

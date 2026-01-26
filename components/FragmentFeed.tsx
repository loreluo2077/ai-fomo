import type { Fragment } from "@/lib/data";

export const FragmentFeed = ({ fragments }: { fragments: Fragment[] }) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Fragment feed
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Community pulse</h2>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600">
          Filter by team
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {fragments.map((fragment) => (
          <article
            key={fragment.id}
            className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-800">{fragment.author}</p>
                <p className="mt-2 text-sm text-slate-600">{fragment.text}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                  {fragment.agrees} agrees
                </span>
                <button className="mt-3 text-xs font-semibold text-indigo-600">Agree</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

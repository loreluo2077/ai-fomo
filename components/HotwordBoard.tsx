import type { Hotword } from "@/lib/data";

export const HotwordBoard = ({ hotwords }: { hotwords: Hotword[] }) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Hotwords</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">What&apos;s spiking today</h2>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600">
          Submit hotword
        </button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {hotwords.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900">{item.word}</p>
              <p className="text-xs text-slate-500">Rank #{index + 1}</p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              {item.count} mentions
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

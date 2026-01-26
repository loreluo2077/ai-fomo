const highlights = [
  "Track the pulse of AI chatter",
  "Vote on your team's FOMO level",
  "Share the wildest hotwords",
];

export const Hero = () => {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-8 py-12 text-white shadow-xl">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">AI FOMO Index</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Turn hype into signals your team can act on.
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            Stay ahead of the noise. Capture today&apos;s AI anxiety, share what you&apos;re hearing,
            and turn collective stress into focus.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900">
              Vote today&apos;s FOMO
            </button>
            <button className="rounded-full border border-indigo-300/40 px-5 py-2 text-sm font-semibold text-indigo-100">
              Share a fragment
            </button>
          </div>
        </div>
        <div className="rounded-2xl border border-indigo-400/30 bg-indigo-900/30 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">Why it matters</p>
          <ul className="mt-4 space-y-4 text-sm text-indigo-100">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

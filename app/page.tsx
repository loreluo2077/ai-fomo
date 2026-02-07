
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { StatPill } from "@/components/StatPill";
import { featureCards, heroHighlights, signalStats } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-20 h-[360px] w-[360px] rounded-full bg-indigo-500/20 blur-[120px]" />
      <section className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-8">
            <span className="w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
              AI Signal Hub
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                Stay ahead of AI launches without the noise.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200/80">
                AI FOMO is a signal intelligence workspace for teams tracking
                emerging AI products. Map momentum, evaluate conviction, and
                share the context behind every bet.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-20px_rgba(37,99,235,0.8)] transition hover:bg-brand-600"
                href="/api/seed"
              >
                Preview seed response
              </a>
              <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white">
                View sample workspace
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {signalStats.map((stat) => (
                <StatPill key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-500/20 via-transparent to-indigo-500/20 blur-2xl" />
            <div className="relative space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  Live signal board
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/70">
                  Updated 2m ago
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex items-center justify-between text-xs text-slate-200/70">
                  <span>Confidence index</span>
                  <span>+18% WoW</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-400 to-indigo-400" />
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-200/80">
                  <span>Signal quality</span>
                  <span className="font-semibold text-white">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/60">
                Workflow clarity
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                A decision-ready map of the AI frontier.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-200/70">
              Move from scattered notes to a shared perspective. Every signal is
              tagged, contextualized, and scored so your team can align fast.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
          <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-brand-500/30 blur-[90px]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Ready to seed your first watchlist?
              </h2>
              <p className="mt-3 text-sm text-slate-200/70">
                Use the included seed script to populate demo signals in under a
                minute and start collaborating.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_40px_-20px_rgba(255,255,255,0.6)] transition hover:bg-slate-100"
              href="/api/seed"
            >
              Preview seed response
            </a>
          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}

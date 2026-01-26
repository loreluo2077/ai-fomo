
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { StatPill } from "@/components/StatPill";
import { featureCards, heroHighlights, signalStats } from "@/lib/data";

export default function Home() {
  return (
    <main className="px-6 py-12">
      <section className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            AI Signal Hub
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              Stay ahead of AI launches without the noise.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              AI FOMO is a watchlist for teams tracking emerging AI products. Map
              the signals, evaluate confidence, and share the "why" behind every
              bet.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {signalStats.map((stat) => (
              <StatPill key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
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

        <section className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Ready to seed your first watchlist?
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Use the included seed script to populate demo signals in under a
                minute.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
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


import { FragmentComposer } from "@/components/FragmentComposer";
import { FragmentFeed } from "@/components/FragmentFeed";
import { Hero } from "@/components/Hero";
import { HotwordBoard } from "@/components/HotwordBoard";
import { ShareModal } from "@/components/ShareModal";
import { TodayGauge } from "@/components/TodayGauge";
import { XFooter } from "@/components/XFooter";
import { getFragments, getHotwords, getTodayStats } from "@/lib/data";

const HomePage = () => {
  const stats = getTodayStats();
  const hotwords = getHotwords();
  const fragments = getFragments();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <Hero />
        <TodayGauge stats={stats} />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <HotwordBoard hotwords={hotwords} />
          <FragmentComposer />
        </div>
        <FragmentFeed fragments={fragments} />
        <ShareModal />
        <XFooter />
      </div>
    </main>
  );
};

export default HomePage;

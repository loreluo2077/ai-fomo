
export type VoteFeeling = "low" | "medium" | "high";

export type Vote = {
  feeling: VoteFeeling;
  createdAt: string;
};

export type Hotword = {
  id: string;
  word: string;
  count: number;
};

export type Fragment = {
  id: string;
  text: string;
  author: string;
  agrees: number;
  createdAt: string;
};

export type TodayStats = {
  date: string;
  fomoScore: number;
  votes: {
    total: number;
    breakdown: Record<VoteFeeling, number>;
  };
};

type DataStore = {
  date: string;
  fomoScore: number;
  votes: Vote[];
  hotwords: Hotword[];
  fragments: Fragment[];
};

const getDefaultStore = (): DataStore => {
  const date = new Date().toISOString().split("T")[0];
  return {
    date,
    fomoScore: 68,
    votes: [],
    hotwords: [
      { id: "hw-1", word: "AI", count: 14 },
      { id: "hw-2", word: "launch", count: 9 },
      { id: "hw-3", word: "funding", count: 6 },
      { id: "hw-4", word: "pivot", count: 4 },
      { id: "hw-5", word: "remote", count: 3 },
    ],
    fragments: [
      {
        id: "frag-1",
        text: "Everyone shipped a demo except us. Need to catch up.",
        author: "Kai",
        agrees: 3,
        createdAt: new Date().toISOString(),
      },
      {
        id: "frag-2",
        text: "Three competitors announced new copilots today.",
        author: "Mina",
        agrees: 5,
        createdAt: new Date().toISOString(),
      },
    ],
  };
};

const getStore = (): DataStore => {
  const globalStore = globalThis as typeof globalThis & { __AI_FOMO_STORE__?: DataStore };
  if (!globalStore.__AI_FOMO_STORE__) {
    globalStore.__AI_FOMO_STORE__ = getDefaultStore();
  }
  return globalStore.__AI_FOMO_STORE__;
};

const recomputeScore = (votes: Vote[]): number => {
  if (votes.length === 0) {
    return 68;
  }
  const totals = votes.reduce(
    (acc, vote) => {
      acc[vote.feeling] += 1;
      return acc;
    },
    { low: 0, medium: 0, high: 0 } as Record<VoteFeeling, number>
  );

  const weighted = totals.low * 35 + totals.medium * 65 + totals.high * 90;
  return Math.round(weighted / votes.length);
};

export const getTodayStats = (): TodayStats => {
  const store = getStore();
  const breakdown = store.votes.reduce(
    (acc, vote) => {
      acc[vote.feeling] += 1;
      return acc;
    },
    { low: 0, medium: 0, high: 0 } as Record<VoteFeeling, number>
  );

  return {
    date: store.date,
    fomoScore: store.fomoScore,
    votes: {
      total: store.votes.length,
      breakdown,
    },
  };
};

export const castVote = (feeling: VoteFeeling): TodayStats => {
  const store = getStore();
  store.votes.push({ feeling, createdAt: new Date().toISOString() });
  store.fomoScore = recomputeScore(store.votes);
  return getTodayStats();
};

export const getHotwords = (): Hotword[] => {
  return getStore().hotwords.slice().sort((a, b) => b.count - a.count);
};

export const addHotword = (word: string): Hotword[] => {
  const store = getStore();
  const existing = store.hotwords.find((item) => item.word.toLowerCase() === word.toLowerCase());
  if (existing) {
    existing.count += 1;
  } else {
    store.hotwords.push({
      id: `hw-${store.hotwords.length + 1}`,
      word,
      count: 1,
    });
  }
  return getHotwords();
};

export const getFragments = (): Fragment[] => {
  return getStore().fragments.slice().sort((a, b) => b.agrees - a.agrees);
};

export const addFragment = (text: string, author: string): Fragment => {
  const store = getStore();
  const fragment: Fragment = {
    id: `frag-${store.fragments.length + 1}`,
    text,
    author,
    agrees: 0,
    createdAt: new Date().toISOString(),
  };
  store.fragments.unshift(fragment);
  return fragment;
};

export const addAgree = (fragmentId: string): Fragment | undefined => {
  const store = getStore();
  const fragment = store.fragments.find((item) => item.id === fragmentId);
  if (fragment) {
    fragment.agrees += 1;
  }
  return fragment;
};

export const heroHighlights = [
  "Track trending AI launches",
  "Monitor confidence signals",
  "Share curated watchlists"
];

export const signalStats = [
  { label: "Signals tracked", value: "128" },
  { label: "Daily updates", value: "24" },
  { label: "Curated lists", value: "6" }
];

export const featureCards = [
  {
    title: "Signal radar",
    description:
      "Scan across product launches, research releases, and community chatter in one place."
  },
  {
    title: "Confidence scoring",
    description:
      "Blend sentiment, velocity, and founder credibility into a single confidence read."
  },
  {
    title: "Decision notebook",
    description:
      "Capture why you followed or skipped a signal and learn from the outcome."
  }
];

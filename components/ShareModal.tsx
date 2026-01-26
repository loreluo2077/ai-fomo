"use client";

import { useState } from "react";

const shareTargets = [
  { label: "Slack", detail: "Post to #ai-hype" },
  { label: "Email", detail: "Send a daily recap" },
  { label: "X", detail: "Share publicly" },
];

export const ShareModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Share</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Broadcast today&apos;s index</h2>
          <p className="mt-2 text-sm text-slate-500">
            Keep your team aligned by sharing the index, hotwords, and fragments.
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Open share modal
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Share</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">Send the daily pulse</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500"
              >
                Close
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {shareTargets.map((target) => (
                <button
                  key={target.label}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700"
                >
                  <span className="block text-slate-900">{target.label}</span>
                  <span className="text-xs text-slate-500">{target.detail}</span>
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Links are generated using the latest API snapshot.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

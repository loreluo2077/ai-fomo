"use client";

import { useState, type FormEvent } from "react";

export const FragmentComposer = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) {
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/fragments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, author: "Anonymous" }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      setText("");
      setStatus("sent");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Fragment composer
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Drop a signal from your feed</h2>
      </div>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-indigo-400 focus:outline-none"
          placeholder="Everyone shipped a new AI agent. Are we late?"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
          >
            {status === "sending" ? "Sending…" : "Share fragment"}
          </button>
          {status === "sent" && <span className="text-xs text-emerald-600">Posted!</span>}
          {status === "error" && (
            <span className="text-xs text-rose-500">Couldn&apos;t post. Try again.</span>
          )}
        </div>
      </form>
    </section>
  );
};

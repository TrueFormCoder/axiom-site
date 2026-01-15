"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Home() {
  const COMICS = useMemo(
    () => ({
      living: {
        src: "/comics/Axiom_Comic_01_SharedLiving_FINAL.png",
        caption: "Understanding comes before resolution.",
      },
      planning: {
        src: "/comics/Axiom_Comic_01_SharedLiving_FINAL.png",
        caption: "Nothing needs to be decided yet.",
      },
      decisions: {
        src: "/comics/Axiom_Comic_01_SharedLiving_FINAL.png",
        caption: "Pressure is information.",
      },
      work: {
        src: "/comics/Axiom_Comic_01_SharedLiving_FINAL.png",
        caption: "If it feels like a test, pause.",
      },
    }),
    []
  );

  const [context, setContext] = useState<keyof typeof COMICS>("living");

  return (
    <main className="mx-auto w-full max-w-4xl px-8 py-16">
      {/* Hero */}
      <div className="mb-12">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-300">
          Axiom
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-white">
          Daily Logic, Clean Thinking
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
          Axiom is a two-minute constraint puzzle. Solve by reasoning, not guessing.
        </p>

        {/* Primary CTAs */}
        <div className="mt-7 flex flex-wrap gap-3 text-sm">
          {/* Keep this as Resources until app is public */}
          <Link
            className="rounded-lg border border-neutral-600 bg-white/10 px-4 py-2 text-white hover:bg-white/15"
            href="/resources"
          >
            Open Resources
          </Link>

          <Link
            className="rounded-lg border border-neutral-700 bg-white/5 px-4 py-2 text-neutral-100 hover:bg-white/10 hover:text-white"
            href="/resources/how-it-works"
          >
            How It Works
          </Link>

          <Link
            className="rounded-lg border border-neutral-700 bg-white/5 px-4 py-2 text-neutral-100 hover:bg-white/10 hover:text-white"
            href="/resources/faq"
          >
            FAQ
          </Link>

          <Link
            className="rounded-lg border border-neutral-700 bg-transparent px-4 py-2 text-neutral-200 hover:bg-white/5 hover:text-white"
            href="https://buttondown.email/axiom.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Waitlist
          </Link>
        </div>
      </div>

      <section className="mt-10">
        <div className="mx-auto max-w-xl">
          <Image
            src={COMICS[context].src}
            alt=""
            width={1080}
            height={1080}
            priority
            className="h-auto w-full rounded-xl"
          />
          <p className="mt-4 text-center text-sm text-neutral-400">
            {COMICS[context].caption}
          </p>

          <p className="mt-6 text-center text-xs text-neutral-500">
            Also appears in:{" "}
            <button
              type="button"
              className="hover:text-white underline-offset-4 hover:underline"
              onMouseEnter={() => setContext("planning")}
              onFocus={() => setContext("planning")}
              onClick={() => setContext("planning")}
            >
              planning
            </button>{" "}
            ·{" "}
            <button
              type="button"
              className="hover:text-white underline-offset-4 hover:underline"
              onMouseEnter={() => setContext("decisions")}
              onFocus={() => setContext("decisions")}
              onClick={() => setContext("decisions")}
            >
              decisions
            </button>{" "}
            ·{" "}
            <button
              type="button"
              className="hover:text-white underline-offset-4 hover:underline"
              onMouseEnter={() => setContext("work")}
              onFocus={() => setContext("work")}
              onClick={() => setContext("work")}
            >
              work
            </button>
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="mb-10 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8">
        <h2 className="text-lg font-semibold text-white">What You Get</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-300">
          A small daily puzzle with high transfer: better reasoning under constraints.
        </p>

        <ul className="mt-5 grid gap-3 text-neutral-200 sm:grid-cols-2">
          <li className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-200" />
            <span>
              <span className="font-medium text-white">Two-minute daily puzzle</span>{" "}
              that stays solvable by logic alone
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-200" />
            <span>
              <span className="font-medium text-white">Constraint reasoning</span>{" "}
              instead of vibes, guesswork, or trivia
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-200" />
            <span>
              <span className="font-medium text-white">Calm under uncertainty</span>{" "}
              — follow implications, eliminate contradictions
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-200" />
            <span>
              <span className="font-medium text-white">A docs spine</span>{" "}
              that explains how to solve consistently
            </span>
          </li>
        </ul>
      </section>

      {/* Resources cards */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8">
          <h2 className="text-lg font-semibold text-white">Resources</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-300">
            Learn how Axiom works, why the puzzles matter, and how to solve consistently.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link
              className="rounded-lg border border-neutral-700 bg-white/5 px-4 py-2 text-neutral-100 hover:bg-white/10 hover:text-white"
              href="/resources"
            >
              Open Resources
            </Link>
            <Link
              className="rounded-lg border border-neutral-700 bg-white/5 px-4 py-2 text-neutral-100 hover:bg-white/10 hover:text-white"
              href="/resources/how-it-works"
            >
              How It Works
            </Link>
            <Link
              className="rounded-lg border border-neutral-700 bg-white/5 px-4 py-2 text-neutral-100 hover:bg-white/10 hover:text-white"
              href="/resources/logic-primer"
            >
              Logic Primer
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8">
          <h2 className="text-lg font-semibold text-white">New Here?</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-300">
            Start with the approach guide. It’s short, and it fixes the most common failure mode:
            guessing instead of reasoning.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link
              className="rounded-lg border border-neutral-600 bg-white/10 px-4 py-2 text-white hover:bg-white/15"
              href="/resources/how-it-works"
            >
              Read How It Works
            </Link>
            <Link
              className="rounded-lg border border-neutral-700 bg-white/5 px-4 py-2 text-neutral-100 hover:bg-white/10 hover:text-white"
              href="/resources/faq"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <p className="mt-12 text-sm text-neutral-400">
        Built to train calm reasoning under constraints.
      </p>
    </main>
  );
}

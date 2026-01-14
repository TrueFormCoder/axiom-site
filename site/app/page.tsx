import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-8 py-16">
      <div className="mb-12">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-300">Axiom</p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-white">
          Daily Logic, Clean Thinking
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
          Axiom is a two-minute constraint puzzle. Solve by reasoning, not guessing.
        </p>
      </div>

      <section className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8">
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
            href="/resources/faq"
          >
            FAQ
          </Link>
        </div>
      </section>

      <p className="mt-10 text-sm text-neutral-400">
        Built to train calm reasoning under constraints.
      </p>
    </main>
  );
}

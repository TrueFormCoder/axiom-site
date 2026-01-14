import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-wider text-neutral-500">Axiom</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900">
          Daily Logic, Clean Thinking
        </h1>
        <p className="mt-4 text-base leading-7 text-neutral-600">
          Axiom is a two-minute constraint puzzle. Solve by reasoning, not guessing.
        </p>
      </div>

      <section className="rounded-xl border border-neutral-200 p-6">
        <h2 className="text-lg font-semibold text-neutral-900">Resources</h2>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          Learn how Axiom works, why the puzzles matter, and how to solve consistently.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link className="rounded-lg border border-neutral-200 px-3 py-2 hover:bg-neutral-50" href="/resources">
            Open Resources
          </Link>
          <Link className="rounded-lg border border-neutral-200 px-3 py-2 hover:bg-neutral-50" href="/resources/how-it-works">
            How It Works
          </Link>
          <Link className="rounded-lg border border-neutral-200 px-3 py-2 hover:bg-neutral-50" href="/resources/faq">
            FAQ
          </Link>
        </div>
      </section>

      <p className="mt-10 text-sm text-neutral-500">
        Built to train calm reasoning under constraints.
      </p>
    </main>
  );
}

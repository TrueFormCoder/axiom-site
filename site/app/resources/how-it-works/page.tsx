import ResourcesLayout from "../ResourcesLayout";

export const metadata = {
  title: "How Axiom Works — Axiom",
  description: "Axiom puzzles are solved by constraints, not guessing.",
};

export default function HowItWorks() {
  return (
    <ResourcesLayout
      title="How Axiom Works"
      subtitle="Axiom is constraint reasoning. The rules are the whole game."
    >
      <p>
        Each puzzle is built from a small set of explicit rules. Your job is not to guess — it’s to reason forward.
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-neutral-100">Core Principle</h2>
        <p>
          If something feels ambiguous, it usually means a constraint hasn’t been used yet.
          Axiom doesn’t require cleverness. It requires discipline.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-neutral-100">What “Solving” Means</h2>
        <ul>
          <li>you applied the rules consistently</li>
          <li>you avoided unstated assumptions</li>
          <li>you eliminated contradictions instead of debating them</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-neutral-100">How To Approach Any Puzzle</h2>
        <ol>
          <li>List the facts the puzzle explicitly gives you</li>
          <li>Translate each rule into a constraint (what must be true)</li>
          <li>Follow implications until something becomes impossible</li>
          <li>Use elimination to narrow remaining possibilities</li>
          <li>Confirm the final answer satisfies every rule</li>
        </ol>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-neutral-100">What You’re Practicing</h2>
        <ul>
          <li>decision clarity under uncertainty</li>
          <li>error detection before commitment</li>
          <li>reasoning that survives pressure</li>
          <li>communication that can be audited (“show your work” thinking)</li>
        </ul>
      </section>
    </ResourcesLayout>
  );
}

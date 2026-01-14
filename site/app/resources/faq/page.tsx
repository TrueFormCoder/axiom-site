import ResourcesLayout from "../ResourcesLayout";

export const metadata = {
  title: "FAQ — Axiom",
  description: "Answers to common questions about Axiom puzzles and solving.",
};

export default function FAQ() {
  return (
    <ResourcesLayout
      title="FAQ"
      subtitle="If you’re confused, you’re not behind — you’re learning the shape of the rules."
    >
      <h2>Is there only one correct solution?</h2>
      <p>
        Yes. The constraints are designed to collapse to a single valid outcome.
      </p>

      <h2>Why does guessing fail so often?</h2>
      <p>
        Because guessing bypasses the point. Axiom rewards reasoning that survives audit, not luck that lands correctly.
      </p>

      <h2>Does speed matter?</h2>
      <p>
        Speed is a metric, not the goal. Build correctness first. Speed appears naturally.
      </p>

      <h2>Are puzzles reused?</h2>
      <p>
        Some structures may recur because the reasoning patterns are the product — but individual puzzles can rotate over time.
      </p>

      <h2>Who is Axiom for?</h2>
      <p>
        Anyone who wants better thinking under constraints. Students, professionals, and people rebuilding focus.
        No special background required.
      </p>

      <h2>What should I do when I’m stuck?</h2>
      <ul>
        <li>restate each rule as a hard constraint</li>
        <li>test one assumption and chase implications until it breaks</li>
        <li>eliminate contradictions instead of debating them</li>
      </ul>
    </ResourcesLayout>
  );
}

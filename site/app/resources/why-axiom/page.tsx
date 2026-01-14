import ResourcesLayout from "../ResourcesLayout";

export const metadata = {
  title: "Why Axiom Exists — Axiom",
  description: "Axiom trains clean thinking: constraints, clarity, and calm reasoning.",
};

export default function WhyAxiom() {
  return (
    <ResourcesLayout
      title="Why Axiom Exists"
      subtitle="Not puzzle addiction. Mental orientation."
    >
      <p>
        Most problem-solving tools reward speed, pattern recognition, or memorization.
        Axiom rewards something rarer: the ability to stay oriented when certainty is unavailable.
      </p>

      <h2>Small Puzzle, Large Transfer</h2>
      <p>
        The puzzles are intentionally small. Two minutes a day is enough to build a habit that compounds.
      </p>

      <h2>What Axiom Optimizes For</h2>
      <ul>
        <li>clarity over vibes</li>
        <li>proof over persuasion</li>
        <li>calm over adrenaline</li>
        <li>consistency over theatrics</li>
      </ul>

      <h2>Use Cases</h2>
      <ul>
        <li>engineers: constraint reasoning and debugging instincts</li>
        <li>operators: decision discipline and error avoidance</li>
        <li>students: logic fluency without fluff</li>
        <li>anyone: staying coherent when the room isn’t</li>
      </ul>

      <p>
        You’re not training to solve puzzles. You’re training to think cleanly.
      </p>
    </ResourcesLayout>
  );
}

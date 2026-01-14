import Link from "next/link";
import ResourcesLayout from "./ResourcesLayout";

export const metadata = {
  title: "Resources — Axiom",
  description: "How Axiom works, why it exists, and the logic behind the puzzles.",
};

export default function ResourcesIndex() {
  return (
    <ResourcesLayout
      title="Resources"
      subtitle="Short docs that explain how Axiom works, why the puzzles matter, and how to solve consistently."
    >
      <p>
        Axiom is a daily constraint puzzle. The puzzle is small on purpose — the skill transfer is not.
      </p>

      <h2>Start Here</h2>
      <ul>
        <li>
          <Link href="/resources/how-it-works">How Axiom Works</Link> — what the puzzle is testing and how to approach it
        </li>
        <li>
          <Link href="/resources/why-axiom">Why Axiom Exists</Link> — the point of two minutes a day
        </li>
        <li>
          <Link href="/resources/logic-primer">A Short Logic Primer</Link> — constraints, implications, elimination, and common mistakes
        </li>
        <li>
          <Link href="/resources/faq">FAQ</Link> — quick answers to the first questions people ask
        </li>
        <li>
          <Link href="/resources/updates">Updates</Link> — what changed, and why
        </li>
      </ul>

      <h2>What Axiom Trains</h2>
      <ul>
        <li>separating facts from assumptions</li>
        <li>tracking dependencies without losing the thread</li>
        <li>detecting contradictions early</li>
        <li>knowing why something is true, not just that it is</li>
      </ul>

      <p>
        If you ever feel “I could’ve solved this if I guessed right,” you’re reading the puzzle wrong.
        Axiom is designed to be solved by logic alone.
      </p>
    </ResourcesLayout>
  );
}

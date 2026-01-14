import ResourcesLayout from "../ResourcesLayout";

export const metadata = {
  title: "Logic Primer — Axiom",
  description: "Constraints, implications, elimination, and the classic mistakes.",
};

export default function LogicPrimer() {
  return (
    <ResourcesLayout
      title="A Very Short Logic Primer"
      subtitle="The four concepts you need to solve Axiom consistently."
    >
      <h2>1) Constraints</h2>
      <p>
        A constraint is what must be true. Don’t decorate it. Don’t soften it.
      </p>

      <h2>2) Implications</h2>
      <p>
        If A is true, what follows? Most people stop one step early. Go one step further than feels necessary.
      </p>

      <h2>3) Elimination</h2>
      <p>
        When a path creates a contradiction, it’s dead. You don’t negotiate with contradictions. You remove them.
      </p>

      <h2>4) Necessity vs. Sufficiency (The Classic Trap)</h2>
      <ul>
        <li><strong>Necessary</strong>: must be true for the conclusion to hold</li>
        <li><strong>Sufficient</strong>: enough to guarantee the conclusion</li>
      </ul>

      <p>
        Many wrong answers come from treating “could be true” as “must be true.”
      </p>

      <h2>Closing Rule</h2>
      <p>
        Axiom puzzles never require advanced math. They require respecting the rules you’ve already been given.
      </p>
    </ResourcesLayout>
  );
}

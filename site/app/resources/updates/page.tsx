import ResourcesLayout from "../ResourcesLayout";

export const metadata = {
  title: "Updates — Axiom",
  description: "Changelog for Axiom website and puzzle experience.",
};

export default function Updates() {
  return (
    <ResourcesLayout
      title="Updates"
      subtitle="A lightweight changelog. Tight edits. No drama."
    >
      <h2>2026-01-14</h2>
      <ul>
        <li>Published Resources hub and core documentation pages</li>
        <li>Configured Cloudflare Pages static export output</li>
      </ul>

      <h2>Next</h2>
      <ul>
        <li>Add in-app links to Resources from solve + stats screens</li>
        <li>Expand FAQ based on real user confusion, not guesses</li>
      </ul>
    </ResourcesLayout>
  );
}

import Link from "next/link";

export default function ResourcesLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl px-8 py-16">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-wider text-neutral-500">
          Resources
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 text-base leading-7 text-neutral-600">
            {subtitle}
          </p>
        ) : null}

        <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link className="text-neutral-100 hover:text-white underline-offset-4 hover:underline" href="/resources">
            Index
          </Link>
          <Link className="text-neutral-100 hover:text-white underline-offset-4 hover:underline" href="/resources/how-it-works">
            How It Works
          </Link>
          <Link className="text-neutral-100 hover:text-white underline-offset-4 hover:underline" href="/resources/why-axiom">
            Why Axiom
          </Link>
          <Link className="text-neutral-100 hover:text-white underline-offset-4 hover:underline" href="/resources/logic-primer">
            Logic Primer
          </Link>
          <Link className="text-neutral-100 hover:text-white underline-offset-4 hover:underline" href="/resources/faq">
            FAQ
          </Link>
          <Link className="text-neutral-100 hover:text-white underline-offset-4 hover:underline" href="/resources/updates">
            Updates
          </Link>
        </nav>
      </div>

      <article className="prose prose-invert prose-lg prose-headings:text-neutral-100 prose-p:text-neutral-200 max-w-none">
        {children}
      </article>

      <div className="mt-14 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
        <p className="mb-2">
          These pages are designed to be linkable from the app: solve flow, stats, and onboarding.
        </p>
        <p>
          <Link className="text-neutral-800 underline-offset-4 hover:underline" href="/">
            Return home
          </Link>
        </p>
      </div>
    </main>
  );
}

import Link from 'next/link';

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
    <main className="mx-auto w-full max-w-4xl px-8 py-16">
      <div className="mb-10 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-300">Resources</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">{title}</h1>

        {subtitle ? <p className="mt-4 text-lg leading-8 text-neutral-300">{subtitle}</p> : null}

        <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link
            className="text-neutral-200 hover:text-white underline-offset-4 hover:underline"
            href="/resources"
          >
            Index
          </Link>
          <Link
            className="text-neutral-200 hover:text-white underline-offset-4 hover:underline"
            href="/resources/how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-neutral-200 hover:text-white underline-offset-4 hover:underline"
            href="/resources/why-axiom"
          >
            Why Axiom
          </Link>
          <Link
            className="text-neutral-200 hover:text-white underline-offset-4 hover:underline"
            href="/resources/logic-primer"
          >
            Logic Primer
          </Link>
          <Link
            className="text-neutral-200 hover:text-white underline-offset-4 hover:underline"
            href="/resources/faq"
          >
            FAQ
          </Link>
          <Link
            className="text-neutral-200 hover:text-white underline-offset-4 hover:underline"
            href="/resources/updates"
          >
            Updates
          </Link>
        </nav>
      </div>

      <article
        className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white
          prose-p:text-neutral-200 prose-p:my-5
          prose-li:text-neutral-200 prose-li:my-2
          prose-strong:text-white

          prose-a:text-neutral-100 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-white

          prose-ul:list-disc prose-ul:list-outside prose-ul:pl-6 prose-ul:my-5
          prose-ol:list-decimal prose-ol:list-outside prose-ol:pl-6 prose-ol:my-5
          prose-li:marker:text-neutral-200
          prose-ol:marker:font-semibold prose-ol:marker:text-neutral-100

          prose-h2:mt-10 prose-h2:mb-3
          prose-h3:mt-8 prose-h3:mb-2
          prose-hr:border-neutral-800"
      >
        {children}
      </article>

      <div className="mt-14 border-t border-neutral-800 pt-6 text-sm text-neutral-400">
        <p className="mb-2">
          These pages are designed to be linkable from the app: solve flow, stats, and onboarding.
        </p>
        <p>
          <Link
            className="text-neutral-200 hover:text-white underline-offset-4 hover:underline"
            href="/"
          >
            Return home
          </Link>
        </p>
      </div>
    </main>
  );
}

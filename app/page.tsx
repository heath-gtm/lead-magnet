import { Benefits } from "@/components/Benefits";
import { LeadForm } from "@/components/LeadForm";

const stats = [
  { value: "3.2×", label: "avg. landing page conversion lift" },
  { value: "7", label: "steps in the playbook" },
  { value: "< 5 min", label: "to implement step one" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-brand-100/80 via-brand-50/30 to-transparent dark:from-brand-950/50 dark:via-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/10"
      />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          Lead Magnet
        </span>
        <a
          href="#download"
          className="rounded-lg border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
        >
          Get the playbook
        </a>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="pt-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800 dark:border-brand-800 dark:bg-brand-950/60 dark:text-brand-200">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              New — B2B pipeline edition
            </p>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Turn cold traffic into{" "}
              <span className="text-brand-600 dark:text-brand-400">qualified meetings</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              The free Pipeline Playbook shows how to design a single high-converting offer,
              capture leads without friction, and nurture them into booked calls.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-8 dark:border-slate-800">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.label}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-10 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <CheckIcon />
                Landing page wireframe + copy prompts
              </li>
              <li className="flex gap-2">
                <CheckIcon />
                3-email nurture sequence template
              </li>
              <li className="flex gap-2">
                <CheckIcon />
                Metrics dashboard checklist
              </li>
            </ul>
          </div>

          <div id="download" className="lg:sticky lg:top-8">
            <LeadForm />
          </div>
        </div>

        <Benefits />

        <section className="mt-20 rounded-2xl border border-slate-200/80 bg-slate-900 px-8 py-12 text-center dark:border-slate-800">
          <p className="text-sm font-medium text-brand-300">Trusted by growth teams</p>
          <blockquote className="mx-auto mt-4 max-w-2xl text-lg font-medium leading-relaxed text-white">
            &ldquo;We replaced three underperforming pages with one lead magnet. Pipeline from
            inbound doubled in six weeks.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-slate-400">— Alex R., Head of Growth</p>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} Lead Magnet. Built for Vercel.
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.25-3.25a1 1 0 1 1 1.414-1.414l2.543 2.543 6.543-6.543a1 1 0 0 1 1.412 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

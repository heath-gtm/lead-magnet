const benefits = [
  {
    title: "One page, one offer",
    description:
      "Strip away navigation noise so every visitor faces a single decision: opt in or leave.",
  },
  {
    title: "Message-market fit",
    description:
      "Headline formulas and proof blocks that speak to buyer pain, not product features.",
  },
  {
    title: "Follow-up that converts",
    description:
      "Email sequences mapped to the moment someone raised their hand — while intent is hot.",
  },
];

export function Benefits() {
  return (
    <section className="mt-20">
      <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-brand-600">
        What you&apos;ll learn
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        Build a lead magnet that actually fills your calendar
      </p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-3">
        {benefits.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

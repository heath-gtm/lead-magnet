"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setState("success");
      setMessage(data.message ?? "Check your inbox — your playbook is on the way.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-brand-950/5 dark:border-slate-800 dark:bg-slate-900/80 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        Free download
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        Get the Pipeline Playbook
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        24 pages. No fluff. Instant access after you submit.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Full name"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500 transition focus:bg-white focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Work email"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500 transition focus:bg-white focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
          />
        </div>
        <div>
          <label htmlFor="company" className="sr-only">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company (optional)"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-brand-500 transition focus:bg-white focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:bg-slate-950"
          />
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full rounded-lg bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "submitting" ? "Sending…" : "Send me the playbook"}
        </button>
      </form>

      {message ? (
        <p
          role="status"
          className={`mt-4 text-sm ${
            state === "success"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {message}
        </p>
      ) : null}

      <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
        We respect your inbox. Unsubscribe anytime.
      </p>
    </div>
  );
}

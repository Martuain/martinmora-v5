"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mgvzbjqw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full min-h-11 rounded-xl border border-[var(--border)] bg-white/[0.03] px-4 py-3 text-sm text-[var(--primary)] placeholder:text-[var(--secondary)] outline-none focus:border-[var(--accent)]/50 focus:bg-white/[0.05] transition-all";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input required name="name" placeholder="Name" className={inputClass} />
        <input required type="email" name="email" placeholder="Email" className={inputClass} />
      </div>
      <input name="company" placeholder="Company (optional)" className={inputClass} />
      <textarea
        required
        name="message"
        placeholder="What challenge are you working on?"
        rows={5}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="inline-flex items-center justify-center gap-2 min-h-11 rounded-full bg-[var(--accent)] text-black text-sm font-semibold hover:bg-[var(--accent-dim)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Send size={14} />
        {status === "sending" ? "Sending…" : status === "sent" ? "Message sent!" : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 text-center">
          Something went wrong. Please email{" "}
          <a href="mailto:martin.f.mora@gmail.com" className="underline">
            martin.f.mora@gmail.com
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}

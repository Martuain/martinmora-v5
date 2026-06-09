"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand business objectives, market realities, customer needs, and operational constraints. No assumptions.",
  },
  {
    number: "02",
    title: "Align",
    description:
      "Create clarity around priorities, stakeholders, success metrics, and expected outcomes. Alignment is a product risk.",
  },
  {
    number: "03",
    title: "Validate",
    description:
      "Reduce risk through rapid validation, experimentation, and evidence-based decision-making before committing investment.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Turn strategy into action through structured delivery, governance, and accountability. Execution is the strategy.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Build systems, teams, and processes capable of sustaining long-term growth and institutional learning.",
  },
];

export function Framework() {
  return (
    <section className="py-28 section-divider">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">My Approach</p>
          <h2 className="display-md text-[var(--primary)] max-w-4xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            The Outcome-Driven Transformation™
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-2xl mb-16">
            A proprietary framework built from 15+ years of leading complex initiatives.
            Not a methodology borrowed from a textbook — a process refined through real delivery.
          </p>
        </Reveal>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-stretch gap-0 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-1 relative"
            >
              <div className="glass glass-hover rounded-2xl p-7 h-full mx-1">
                <div className="text-[var(--accent)] text-xs font-bold tracking-widest mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 z-10 text-[var(--accent)] text-lg">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/30 flex items-center justify-center text-xs font-bold text-[var(--accent)]">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px bg-[var(--border)] mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-base font-semibold text-[var(--primary)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--secondary)] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.3}>
          <div className="mt-8 p-6 rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent-glow)]">
            <p className="text-sm text-[var(--secondary)] leading-relaxed max-w-2xl">
              <span className="text-[var(--primary)] font-semibold">This is not a linear checklist.</span>{" "}
              Real transformation is iterative. The framework provides structure and accountability — not rigidity.
              Each engagement is adapted to the organization&apos;s maturity, urgency, and strategic context.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

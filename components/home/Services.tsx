"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Four engagement summaries — full detail lives on /advisory-engagements
// Names per reviewer approval: #2 renamed to "Innovation & Product Strategy"
const engagements = [
  {
    id: "assessment",
    number: "01",
    title: "Strategic Assessment & Recommendations",
    description:
      "Structured assessment of a strategic situation — priorities, opportunities, or investment decisions — with clear, actionable recommendations.",
    scope: "2–4 weeks",
    accent: "#14b8a6",
  },
  {
    id: "innovation",
    number: "02",
    title: "Innovation & Product Strategy",
    description:
      "From product strategy definition and market evaluation to innovation opportunities and AI assessment. Focus on informed decisions, not generic frameworks.",
    scope: "4–12 weeks",
    accent: "#6366f1",
  },
  {
    id: "transformation",
    number: "03",
    title: "Transformation Guidance",
    description:
      "Strategy connected to execution. Supporting organizations through transformation programs, operating model change, and delivery challenges.",
    scope: "3–12 months",
    accent: "#f59e0b",
  },
  {
    id: "fractional",
    number: "04",
    title: "Fractional Leadership",
    description:
      "Senior product or transformation leadership capacity without the full-time hire. Embedded as an extension of your leadership team.",
    scope: "3–12 months",
    accent: "#ec4899",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 section-divider">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">How I Support Organizations</p>
          <h2 className="display-md text-[var(--primary)] max-w-4xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Four ways to work together.
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-2xl mb-16">
            Each engagement model is designed for a specific situation, with clear scope and outcomes.
            Not a generic consulting menu.
          </p>
        </Reveal>

        {/* Four compact summary cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {engagements.map((eng, i) => (
            <motion.div
              key={eng.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-hover rounded-3xl p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="text-xs font-bold tracking-widest"
                  style={{ color: eng.accent }}
                >
                  {eng.number}
                </div>
                <span className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--secondary)]">
                  {eng.scope}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--primary)] mb-3">
                {eng.title}
              </h3>
              <p className="text-sm text-[var(--secondary)] leading-relaxed">
                {eng.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/advisory-engagements"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
          >
            See full engagement details, situations and outcomes
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

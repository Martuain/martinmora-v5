"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

// Five challenges matching the reviewer-approved focus areas:
// Prioritization · Innovation Evaluation · Payments · Stakeholder Alignment · Transformation
const challenges = [
  {
    id: "priorities",
    title: "Prioritizing Strategic Initiatives",
    problem: "You have more opportunities than capacity to pursue them.",
    solution:
      "I help leadership teams evaluate what matters most, build decision frameworks that hold up under pressure, and align around a clear set of strategic priorities — so energy and investment go toward initiatives that create real business value.",
    icon: "◈",
  },
  {
    id: "innovation",
    title: "Evaluating Innovation Opportunities",
    problem: "Innovation is urgent. Knowing which opportunities to pursue is harder.",
    solution:
      "I help organizations assess innovation opportunities — including AI, emerging technologies, and new business models — with rigor and pragmatism. The goal is informed investment decisions, not experiments that never scale.",
    icon: "◎",
  },
  {
    id: "payments",
    title: "Navigating Payments Ecosystem Decisions",
    problem: "Payments strategy requires navigating regulation, infrastructure, and competitive dynamics simultaneously.",
    solution:
      "With hands-on experience across banking platforms, payment orchestration, PSD2, and fintech ecosystems, I help organizations make informed decisions about where to position, how to compete, and which partnerships or integrations create durable advantage.",
    icon: "⬡",
  },
  {
    id: "stakeholders",
    title: "Aligning Stakeholders Around a Direction",
    problem: "Initiatives stall not from lack of ideas — but from lack of alignment.",
    solution:
      "I create the clarity and shared frameworks that enable leadership teams to align around priorities, make decisions faster, and sustain momentum through complexity. Alignment is not a soft skill — it is a precondition for execution.",
    icon: "◱",
  },
  {
    id: "transformation",
    title: "Accelerating Transformation Programs",
    problem: "Transformation programs are expensive, long, and frequently underdeliver.",
    solution:
      "I help organizations connect strategy to execution, establish governance that works, and build measurement frameworks that surface problems early — before they become expensive. Transformation that delivers is transformation that is designed to deliver from day one.",
    icon: "◫",
  },
];

export function Challenges() {
  const [active, setActive] = useState<string>("priorities");
  const activeChallenge = challenges.find((c) => c.id === active)!;

  return (
    <section className="py-28 section-divider">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Challenges I Help Solve</p>
          <h2 className="display-md text-[var(--primary)] max-w-3xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            The situations organizations bring to me.
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-xl mb-16">
            Built on 18+ years navigating banking, payments, fintech, and enterprise transformation. Here is where I create the most impact.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Tab selector */}
          <div className="flex flex-col gap-3">
            {challenges.map((challenge, i) => (
              <motion.button
                key={challenge.id}
                onClick={() => setActive(challenge.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-200 ${
                  active === challenge.id
                    ? "border-[var(--accent)] bg-[var(--accent-glow)]"
                    : "border-[var(--border)] bg-[var(--surface)] glass-hover"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-lg ${active === challenge.id ? "text-[var(--accent)]" : "text-[var(--secondary)]"}`}>
                    {challenge.icon}
                  </span>
                  <h3 className={`font-semibold text-sm ${active === challenge.id ? "text-[var(--primary)]" : "text-[var(--secondary)]"}`}>
                    {challenge.title}
                  </h3>
                </div>
                <p className={`text-sm leading-snug pl-8 ${active === challenge.id ? "text-[var(--secondary)]" : "text-[var(--secondary)]/60"}`}>
                  {challenge.problem}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Solution panel */}
          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10"
              >
                <div className="text-4xl text-[var(--accent)] mb-6">{activeChallenge.icon}</div>
                <h3 className="text-2xl font-semibold text-[var(--primary)] mb-4">
                  {activeChallenge.title}
                </h3>
                <p className="text-[var(--secondary)] leading-relaxed mb-6 text-base">
                  <strong className="text-[var(--primary)]">{activeChallenge.problem}</strong>
                </p>
                <p className="text-[var(--secondary)] leading-relaxed text-base">
                  {activeChallenge.solution}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

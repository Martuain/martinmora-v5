import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advisory Engagements",
  description:
    "Four engagement models: Strategic Assessment & Recommendations, Innovation & Product Strategy, Transformation Guidance, and Embedded Leadership Support.",
  alternates: { canonical: `${siteConfig.url}/advisory-engagements` },
};

// Reviewer Change #2: "Product & Innovation Advisory" → "Innovation & Product Strategy"
// Reviewer Change #3: Deliverables softened — outcomes-focused, less consulting jargon
// Reviewer Change #4: "Independent Advisor" varied across page
const engagements = [
  {
    id: "assessment",
    number: "01",
    title: "Strategic Assessment & Recommendations",
    tagline: "Clarity before commitment.",
    description:
      "For organizations facing unclear priorities, significant investment decisions, or strategic inflection points. I provide an independent, structured assessment of the situation and a clear set of recommendations — so leadership can move forward with confidence rather than uncertainty.",
    situations: [
      "Unclear or competing strategic priorities",
      "New market or product investment decisions",
      "Innovation opportunity evaluation",
      "Pre-investment or pre-transformation readiness assessment",
      "Build vs. buy vs. partner decisions",
    ],
    // Reviewer Change #3: outcomes-focused, not jargon-heavy
    youReceive: [
      "Strategic Assessment — a clear picture of where you are and what matters most",
      "Prioritized Recommendations — ranked by impact and feasibility, not theory",
      "Investment Decision Support — the evidence and framing needed to decide",
      "Roadmap — a sequenced view of what to do and when",
      "Leadership Alignment Session — working through the findings with your team",
    ],
    scope: "2–4 weeks",
    accent: "#14b8a6",
  },
  {
    id: "innovation",
    number: "02",
    // Reviewer Change #2: renamed from "Product & Innovation Advisory"
    title: "Innovation & Product Strategy",
    tagline: "From opportunity to informed investment decision.",
    description:
      "For organizations working through product strategy, market positioning, innovation opportunities, or AI assessments. I help evaluate opportunities rigorously and provide the frameworks and recommendations needed to move forward with conviction — not just another options list.",
    situations: [
      "Product strategy definition or repositioning",
      "Product-market fit evaluation",
      "Innovation opportunity identification and assessment",
      "AI opportunity evaluation and prioritization",
      "New market or segment entry decisions",
    ],
    youReceive: [
      "Opportunity Analysis — a grounded view of market potential and fit",
      "Product Recommendations — specific direction, not generic best practices",
      "Prioritization Framework — how to make trade-offs that hold up over time",
      "Stakeholder Workshop — building shared understanding across your leadership team",
      "Investment Decision Brief — the evidence needed to commit confidently",
    ],
    scope: "4–12 weeks",
    accent: "#6366f1",
  },
  {
    id: "transformation",
    number: "03",
    title: "Transformation Guidance",
    tagline: "Strategy connected to execution.",
    description:
      "For organizations navigating transformation programs, organizational change, or delivery challenges. I provide structured guidance that bridges strategy and delivery — ensuring transformation initiatives are built around business outcomes rather than activity and process theatre.",
    situations: [
      "Digital or operational transformation programs",
      "Organizational restructuring or change management",
      "Delivery challenges or program recovery",
      "Operating model design and optimization",
      "Multi-country or multi-stakeholder program coordination",
    ],
    youReceive: [
      "Transformation Blueprint — a clear plan connecting strategy to execution",
      "Governance Framework — decision rights and accountability that actually work",
      "KPI & Measurement Framework — outcomes tracked, not just activities",
      "Risk Assessment — the blockers identified before they become expensive",
      "Stakeholder Alignment Plan — the people side, not just the process side",
    ],
    scope: "3–12 months",
    accent: "#f59e0b",
  },
  {
    id: "fractional",
    number: "04",
    title: "Embedded Leadership Support",
    tagline: "Senior leadership capacity, without the full-time hire.",
    description:
      "For organizations that need experienced product or transformation leadership on an interim or part-time basis. I embed as a senior member of your leadership team — with real accountability, not just advisory distance. Appropriate for leadership gaps, scaling phases, or complex programs that need direct ownership.",
    situations: [
      "Interim product or transformation leadership",
      "Scaling a product or delivery organization",
      "Leadership gaps during transition or growth periods",
      "Board or executive-level program oversight",
      "Building and mentoring a product team",
    ],
    youReceive: [
      "Strategic Direction — a clear product or transformation direction with leadership accountability",
      "Portfolio Oversight — active management of initiatives and priorities",
      "Team Mentoring — capability building, not just task delegation",
      "Executive Reporting — clear, honest communication to leadership and board",
      "Decision Frameworks — systems your team can use after the engagement ends",
    ],
    scope: "3–12 months",
    accent: "#ec4899",
  },
];

export default function AdvisoryEngagementsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[350px] blob-teal rounded-full blur-[130px] opacity-25" />
          </div>
          <div className="container relative z-10 max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-6">Advisory Engagements</p>
              <h1
                className="display-xl text-[var(--primary)] mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How I support organizations.
              </h1>
              <p className="text-xl text-[var(--secondary)] leading-relaxed max-w-2xl">
                Four structured engagement models — each designed for a specific situation,
                with clear scope and outcomes. Not a generic consulting menu.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Engagement cards */}
        <section className="py-24 section-divider">
          <div className="container">
            <div className="space-y-8">
              {engagements.map((eng, i) => (
                <Reveal key={eng.id} delay={i * 0.07}>
                  <div className="glass glass-hover rounded-3xl overflow-hidden">
                    {/* Color bar */}
                    <div className="h-0.5 w-full" style={{ background: eng.accent }} />

                    <div className="p-10 grid lg:grid-cols-[1fr_1fr_1fr] gap-10">
                      {/* Column 1: Header */}
                      <div>
                        <div
                          className="text-xs font-bold tracking-widest mb-3"
                          style={{ color: eng.accent }}
                        >
                          {eng.number}
                        </div>
                        <h2 className="text-2xl font-semibold text-[var(--primary)] mb-3 leading-snug">
                          {eng.title}
                        </h2>
                        <p className="text-sm font-medium mb-5" style={{ color: eng.accent }}>
                          {eng.tagline}
                        </p>
                        <p className="text-sm text-[var(--secondary)] leading-relaxed mb-6">
                          {eng.description}
                        </p>
                        <span className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--secondary)]">
                          Typical scope: {eng.scope}
                        </span>
                      </div>

                      {/* Column 2: Typical Situations */}
                      <div className="lg:border-l lg:border-[var(--border)] lg:pl-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                          Typical Situations
                        </p>
                        <ul className="space-y-3">
                          {eng.situations.map((s) => (
                            <li key={s} className="flex gap-3 text-sm text-[var(--secondary)]">
                              <span style={{ color: eng.accent }} className="flex-shrink-0 mt-0.5">
                                →
                              </span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: You Receive (softened deliverables) */}
                      <div className="lg:border-l lg:border-[var(--border)] lg:pl-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                          You Receive
                        </p>
                        <ul className="space-y-3">
                          {eng.youReceive.map((d) => (
                            <li key={d} className="flex gap-3 text-sm text-[var(--secondary)]">
                              <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">✓</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Typical Engagements — packaging section */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">Typical Engagements</p>
              <h2
                className="display-md text-[var(--primary)] mb-6 max-w-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The shape of a typical engagement.
              </h2>
              <p className="max-w-3xl text-muted-foreground">
                The advisory areas above describe the types of challenges I help organizations address.
                The engagement formats below describe how we can work together, depending on your objectives,
                timeline, and the level of support required.
              </p>
            /* <p className="text-[var(--secondary)] text-lg max-w-xl mb-16">
                Most engagements follow one of four formats. Scope and duration are always
                agreed upfront — so there are no surprises on either side.
              </p>
            */
            </Reveal>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                {
                  format: "Strategic Assessment",
                  duration: "4–6 weeks",
                  description:
                    "A structured evaluation of a strategic situation — priorities, opportunities, or investment decisions — with clear recommendations and a decision framework at the end.",
                  bestFor: "Organizations at a crossroads or facing a specific high-stakes decision.",
                  accent: "#14b8a6",
                },
                {
                  format: "Advisory Sprint",
                  duration: "2–4 weeks",
                  description:
                    "An intensive, focused engagement on a specific question — product direction, payments strategy, AI opportunity, or transformation approach. Fast, structured, and outcome-driven.",
                  bestFor: "Teams that need expert input quickly, without a long engagement.",
                  accent: "#6366f1",
                },
                {
                  format: "Embedded Leadership Support",
                  duration: "Monthly retainer",
                  description:
                    "Ongoing embedded leadership — part of your team on a defined part-time basis. Real accountability, active participation in key decisions, and direct access when it matters.",
                  bestFor: "Organizations that need senior leadership capacity without a full-time hire.",
                  accent: "#f59e0b",
                },
                {
                  format: "Executive Workshop",
                  duration: "1–2 days",
                  description:
                    "A facilitated working session with your leadership team — to align on strategy, work through a specific challenge, or build a shared decision framework. Structured and prepared in advance.",
                  bestFor: "Leadership teams that need alignment before committing to a direction.",
                  accent: "#ec4899",
                },
              ].map((item, i) => (
                <Reveal key={item.format} delay={i * 0.08}>
                  <div className="glass glass-hover rounded-2xl p-7 flex flex-col h-full">
                    <div
                      className="text-xs font-bold tracking-widest mb-4"
                      style={{ color: item.accent }}
                    >
                      {item.duration}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">
                      {item.format}
                    </h3>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed mb-5 flex-1">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-[var(--border)]">
                      <p className="text-xs text-[var(--secondary)]">
                        <span className="text-[var(--primary)] font-semibold">Best for: </span>
                        {item.bestFor}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 glass rounded-2xl p-6 max-w-2xl">
                <p className="text-sm text-[var(--secondary)] leading-relaxed">
                  <span className="text-[var(--primary)] font-semibold">Not sure which format fits? </span>
                  The discovery conversation is the right starting point. Most engagements become
                  clear once we&apos;ve discussed the specific situation and what a successful
                  outcome looks like for your organization.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "My Approach",
  description:
    "How Martin Mora works: the Discover → Align → Prioritize → Enable → Measure & Improve framework built from 18+ years across banking, payments, fintech, and transformation.",
  alternates: { canonical: `${siteConfig.url}/approach` },
};

const principles = [
  {
    title: "Outcomes over outputs",
    description:
      "Every engagement starts with the question: what does success look like in measurable terms? Features shipped, processes automated, and initiatives completed are outputs. Revenue, customer adoption, and operational efficiency are outcomes. I optimize for the latter.",
  },
  {
    title: "Strategy before technology",
    description:
      "Whether the solution involves AI, cloud platforms, automation, or product redesign — the objective is always business value. Technology is the instrument, not the goal. This distinction prevents the most common form of expensive waste in digital initiatives.",
  },
  {
    title: "Simplicity scales",
    description:
      "Complexity slows organizations. Clarity accelerates them. The best strategies are the ones teams can execute without a reference document. I work to reduce complexity to its essential form — not to oversimplify, but to remove artificial friction.",
  },
  {
    title: "People drive transformation",
    description:
      "Successful initiatives depend as much on alignment and culture as they do on technology. Transformation is not something done to organizations. It is something organizations do, with the right support, clarity, and accountability.",
  },
  {
    title: "Validation over assumption",
    description:
      "Assumptions are the primary source of wasted investment in product and transformation programs. Every hypothesis about customers, markets, and organizational capabilities should be tested as cheaply as possible before resources are committed at scale.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand business objectives, market realities, customer needs, and operational constraints.",
    detail:
      "This phase involves structured discovery: stakeholder interviews, process mapping, competitive analysis, and capability assessment. The goal is not to gather information indefinitely, but to reach a clear picture of the gap between where the organization is and where it needs to be.",
  },
  {
    number: "02",
    title: "Align",
    description: "Create clarity around priorities, stakeholders, success metrics, and expected outcomes.",
    detail:
      "Alignment is not agreement. It means that when decisions need to be made, the criteria are clear and shared. This phase produces a prioritized initiative map, a stakeholder alignment plan, and an explicit definition of what success looks like — numerically.",
  },
  {
    number: "03",
    title: "Prioritize",
    description: "Focus resources on the initiatives most likely to create meaningful impact.",
    detail:
      "Not all opportunities deserve equal investment. This phase applies structured prioritization — drawing on frameworks like RICE, WSJF, and opportunity scoring — to determine which initiatives to pursue, defer, or decline, and in what sequence. The output is a defensible set of choices, not a ranked list.",
  },
  {
    number: "04",
    title: "Enable",
    description: "Create the conditions for teams to execute effectively against agreed priorities.",
    detail:
      "Enabling execution means establishing the right governance, decision rights, accountability structures, and team design — not micromanaging delivery. This phase ensures that strategy translates into action with the right people, cadence, and measurement in place. Progress is tracked against outcomes, not activity.",
  },
  {
    number: "05",
    title: "Measure & Improve",
    description: "Track outcomes against objectives and continuously improve based on evidence.",
    detail:
      "The most important discipline in any strategic program is honest measurement. This phase establishes the KPIs, review cadences, and feedback loops that allow the organization to course-correct before problems compound. The goal is not to report on what happened — it is to improve what happens next.",
  },
];

const engagementModels = [
  {
    title: "Strategic Assessment & Recommendations",
    description:
      "Structured assessment of a strategic situation with clear, actionable recommendations. Typically structured as a defined-scope project with a clear deliverable.",
    scope: "2–4 weeks",
  },
  {
    title: "Innovation & Product Strategy",
    description:
      "Product strategy, innovation opportunity evaluation, market assessment, and AI readiness. Delivered as advisory sessions, workshops, or an embedded engagement.",
    scope: "4–12 weeks",
  },
  {
    title: "Transformation Guidance",
    description:
      "Supporting organizations through transformation programs, operating model change, and delivery challenges. From blueprint to execution oversight.",
    scope: "3–12 months",
  },
  {
    title: "Fractional Leadership",
    description:
      "Senior product or transformation leadership embedded into your team for a defined period — with real accountability, not just advice.",
    scope: "3–12 months",
  },
];

export default function ApproachPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[300px] blob-teal rounded-full blur-[120px] opacity-30" />
          </div>
          <div className="container relative z-10 max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-6">My Approach</p>
              <h1 className="display-xl text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                How I work.
              </h1>
              <p className="text-xl text-[var(--secondary)] leading-relaxed max-w-2xl">
                Not a methodology borrowed from a textbook. A process built from 15+ years of
                leading complex initiatives across digital banking, SaaS, AI, blockchain, and
                enterprise transformation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <h2 className="display-md text-[var(--primary)] mb-16 max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
                What I believe.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="glass glass-hover rounded-3xl p-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mb-5" />
                    <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">{p.title}</h3>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Framework */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">The Framework</p>
              <h2 className="display-md text-[var(--primary)] mb-6 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
                Outcome-Driven Transformation™
              </h2>
              <p className="text-[var(--secondary)] text-lg max-w-xl mb-16">
                Five phases. Each with a distinct objective. Iterated as needed — not executed once and forgotten.
              </p>
            </Reveal>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.08}>
                  <div className="glass glass-hover rounded-3xl p-8 grid md:grid-cols-[140px_1fr_2fr] gap-6 items-start">
                    <div>
                      <div className="text-xs font-bold tracking-widest text-[var(--accent)] mb-2">{step.number}</div>
                      <h3 className="text-xl font-semibold text-[var(--primary)]">{step.title}</h3>
                    </div>
                    <p className="text-sm font-medium text-[var(--secondary)] leading-relaxed md:border-l md:border-[var(--border)] md:pl-6">
                      {step.description}
                    </p>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed md:border-l md:border-[var(--border)] md:pl-6 opacity-80">
                      {step.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">Engagement Models</p>
              <h2 className="display-md text-[var(--primary)] mb-16 max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
                How we can work together.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {engagementModels.map((model, i) => (
                <Reveal key={model.title} delay={i * 0.1}>
                  <div className="glass glass-hover rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[var(--primary)]">{model.title}</h3>
                      <span className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--secondary)]">
                        {model.scope}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">{model.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

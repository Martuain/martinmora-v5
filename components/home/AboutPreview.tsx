import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// CV-verified: Industries from actual work history
const industries = [
  "Banking",
  "Payments",
  "Fintech",
  "Digital Assets & Blockchain",
  "Cybersecurity & SecOps",
  "Enterprise Technology",
  "SaaS",
  "Regulated Markets",
];

export function AboutPreview() {
  return (
    <section className="py-28 section-divider">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">About Martin</p>
              <h2 className="display-md text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                15+ years at the intersection of product, payments, and transformation.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-[var(--secondary)] text-base leading-relaxed mb-8">
                <p>
                  I started at Citibank LATAM in 2007, building expertise in fraud prevention,
                  regulatory compliance, and digital banking — including leading the mobile banking
                  transformation of 2.5 million users across 12 countries.
                </p>
                <p>
                  Since then I have worked across payments infrastructure, blockchain and
                  tokenization, cybersecurity analytics, and fintech product strategy — always
                  in senior product and delivery roles in complex, regulated environments.
                </p>
                <p>
                  Today I combine technical fluency with strategic product thinking to help
                  organizations navigate product innovation, payments decisions, and transformation
                  programs with clarity and confidence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
                >
                  Read my full background
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/approach"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                >
                  Explore my approach
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              {/* Industries — CV-verified */}
              <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                  Industries
                </p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="text-sm px-4 py-2 rounded-full border border-[var(--border)] text-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--accent)]/30 transition-colors cursor-default"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key results — all CV-verified */}
              <div className="glass rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-5">
                  Selected Results
                </p>
                <div className="space-y-4">
                  {[
                    { metric: "$2.5B", label: "Mobile transaction volume across 12 LATAM countries" },
                    { metric: "€470M", label: "Real estate assets tokenised at IOBuilders" },
                    { metric: "90%", label: "Reduction in payment operations effort at Modulr" },
                    { metric: "183%", label: "NPS improvement at Citibank LATAM" },
                  ].map((item) => (
                    <div key={item.metric} className="flex items-start gap-4">
                      <span className="text-lg font-bold text-[var(--accent)] flex-shrink-0 leading-none mt-0.5">
                        {item.metric}
                      </span>
                      <span className="text-xs text-[var(--secondary)] leading-relaxed">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { insights } from "@/content/insights";

// Homepage shows 3 articles representing the 3 key positioning pillars:
// 1. Payments (primary credibility anchor)
// 2. AI & Innovation (differentiator)
// 3. Digital Assets (unique differentiator)
const FEATURED_SLUGS = [
  "payment-orchestration-strategy",
  "generative-ai-in-fintech",
  "future-of-tokenization",
];

export function InsightsPreview() {
  const featured = FEATURED_SLUGS.map((slug) => insights.find((i) => i.slug === slug)).filter(Boolean) as typeof insights;

  return (
    <section id="insights" className="py-28 section-divider">
      <div className="container">
        <Reveal>
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="eyebrow mb-4">Insights & Thinking</p>
              <h2 className="display-md text-[var(--primary)] max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
                Perspectives that inform better decisions.
              </h2>
            </div>
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
            >
              View all insights
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((insight, i) => {
            const isExternal = !!insight.externalUrl;
            const href = isExternal ? insight.externalUrl! : `/insights/${insight.slug}`;
            return (
              <Reveal key={insight.slug} delay={i * 0.1}>
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group block glass glass-hover rounded-3xl p-8 h-full"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-xs font-semibold text-[var(--accent)] px-3 py-1 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-glow)]">
                      {insight.category}
                    </span>
                    {isExternal && <ExternalLink size={11} className="text-[var(--secondary)]" />}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--primary)] mb-4 leading-snug group-hover:text-[var(--accent)] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-[var(--secondary)] leading-relaxed mb-6">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)]">
                    {isExternal ? "Read on Medium" : "Read article"}
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

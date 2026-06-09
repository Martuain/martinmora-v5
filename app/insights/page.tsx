import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { insights } from "@/content/insights";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on payments, banking, digital assets, AI, and transformation from Martin Fernando Mora.",
  alternates: { canonical: `${siteConfig.url}/insights` },
};

const categories = ["All", "Payments & Banking", "AI & Innovation", "Digital Assets", "Transformation", "Product Strategy"];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[300px] blob-blue rounded-full blur-[120px] opacity-25" />
          </div>
          <div className="container relative z-10 max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-6">Insights & Thinking</p>
              <h1 className="display-xl text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Perspectives that inform better decisions.
              </h1>
              <p className="text-xl text-[var(--secondary)] leading-relaxed max-w-2xl">
                Writing on payments, banking, digital assets, AI, and transformation — for leaders navigating high-stakes decisions in complex environments.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-24 section-divider">
          <div className="container">
            {/* Category pills */}
            <Reveal>
              <div className="flex flex-wrap gap-2 mb-12">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className={`text-sm px-4 py-2 rounded-full border cursor-pointer transition-colors ${
                      cat === "All"
                        ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-glow)]"
                        : "border-[var(--border)] text-[var(--secondary)] hover:border-white/20 hover:text-[var(--primary)]"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {insights.map((insight, i) => {
                const isExternal = !!insight.externalUrl;
                const href = isExternal ? insight.externalUrl! : `/insights/${insight.slug}`;
                return (
                  <Reveal key={insight.slug} delay={i * 0.07}>
                    <a
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group block glass glass-hover rounded-3xl p-8 h-full"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <span className="text-xs font-semibold text-[var(--accent)] px-3 py-1 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-glow)]">
                          {insight.category}
                        </span>
                        <span className="text-xs text-[var(--secondary)]">{insight.readTime}</span>
                        <span className="text-xs text-[var(--secondary)] ml-auto">
                          {new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(insight.date))}
                        </span>
                        {isExternal && (
                          <ExternalLink size={12} className="text-[var(--secondary)] flex-shrink-0" />
                        )}
                      </div>
                      <h2 className="text-xl font-semibold text-[var(--primary)] mb-4 leading-snug group-hover:text-[var(--accent)] transition-colors">
                        {insight.title}
                      </h2>
                      <p className="text-sm text-[var(--secondary)] leading-relaxed mb-8">
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

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

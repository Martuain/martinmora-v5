import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { featuredCaseStudies, secondaryCaseStudies } from "@/content/caseStudies";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real initiatives across banking, payments, digital assets, and fintech. Mobile banking transformation, CBDC innovation, payments ecosystem strategy, and more.",
  alternates: { canonical: `${siteConfig.url}/case-studies` },
};

function CaseStudyCard({ cs, featured = false }: { cs: typeof featuredCaseStudies[0]; featured?: boolean }) {
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className="group block glass glass-hover rounded-3xl overflow-hidden"
    >
      <div className="h-0.5 w-full" style={{ background: cs.color }} />
      <div className={`p-8 ${featured ? "md:p-10" : ""}`}>
        <div className="flex items-baseline gap-3 mb-4">
          <span className={`font-bold leading-none ${featured ? "text-4xl" : "text-2xl"}`} style={{ color: cs.color }}>
            {cs.metric}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: cs.color }}>
            {cs.metricLabel}
          </span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-3">
          {cs.industry}
        </p>
        <h2 className={`font-semibold text-[var(--primary)] mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug ${featured ? "text-2xl" : "text-lg"}`}>
          {cs.title}
        </h2>
        <p className="text-sm text-[var(--secondary)] leading-relaxed mb-6">{cs.headline}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {cs.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--secondary)]">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
          Read full case study
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] blob-teal rounded-full blur-[130px] opacity-25" />
          </div>
          <div className="container relative z-10 max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-6">Case Studies</p>
              <h1 className="display-xl text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Real initiatives.<br />Measurable outcomes.
              </h1>
              <p className="text-xl text-[var(--secondary)] leading-relaxed max-w-2xl">
                Banking transformation, payments ecosystem strategy, CBDC innovation, and operational excellence programs — all in complex, regulated environments.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Featured — 3 primary case studies */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-10">Featured</p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {featuredCaseStudies.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 0.1}>
                  <CaseStudyCard cs={cs} featured />
                </Reveal>
              ))}
            </div>

            {/* Secondary */}
            <Reveal>
              <p className="eyebrow mb-8">Additional Case Studies</p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {secondaryCaseStudies.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 0.08}>
                  <CaseStudyCard cs={cs} />
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

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getCaseStudy, caseStudies } from "@/content/caseStudies";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.headline,
    alternates: { canonical: `${siteConfig.url}/case-studies/${cs.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{ background: `radial-gradient(circle at 30% 50%, ${cs.color}33, transparent 60%)` }}
          />
          <div className="container relative z-10">
            <Reveal>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors mb-10"
              >
                <ArrowLeft size={14} />
                All Case Studies
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-4">
                {cs.industry}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display-xl text-[var(--primary)] mb-6 max-w-4xl" style={{ fontFamily: "var(--font-display)" }}>
                {cs.title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-xl text-[var(--secondary)] max-w-2xl mb-10">{cs.headline}</p>
            </Reveal>

            {/* Primary metric badge */}
            <Reveal delay={0.2}>
              <div className="inline-flex items-baseline gap-3 glass rounded-2xl px-8 py-5 mb-8">
                <span className="text-5xl font-bold leading-none" style={{ color: cs.color }}>
                  {cs.metric}
                </span>
                <span className="text-base text-[var(--secondary)]">{cs.metricLabel}</span>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--secondary)]">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Key Metrics Grid (enriched case studies only) ── */}
        {cs.keyMetrics && (
          <section className="py-16 section-divider">
            <div className="container">
              <Reveal>
                <p className="eyebrow mb-8">Key Metrics</p>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {cs.keyMetrics.map((m, i) => (
                  <Reveal key={m.label} delay={i * 0.07}>
                    <div className="glass rounded-2xl p-6">
                      <div className="text-3xl font-bold leading-none mb-2" style={{ color: cs.color }}>
                        {m.value}
                      </div>
                      <div className="text-sm font-semibold text-[var(--primary)] mb-2">{m.label}</div>
                      <div className="text-xs text-[var(--secondary)] leading-relaxed">{m.detail}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Body ── */}
        <section className="py-16 section-divider">
          <div className="container max-w-4xl">

            {/* Challenge */}
            <Reveal>
              <div className="mb-16">
                <p className="eyebrow mb-5">The Challenge</p>
                <p className="text-lg text-[var(--secondary)] leading-relaxed">{cs.challenge}</p>
              </div>
            </Reveal>

            {/* Context (enriched only) */}
            {cs.context && (
              <Reveal>
                <div className="mb-16 border-l-2 pl-8 py-2" style={{ borderColor: cs.color }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: cs.color }}>
                    Market Context
                  </p>
                  <p className="text-base text-[var(--secondary)] leading-relaxed">{cs.context}</p>
                </div>
              </Reveal>
            )}

            {/* Approach */}
            <Reveal>
              <div className="mb-16">
                <p className="eyebrow mb-5">The Approach</p>
                <div className="space-y-4">
                  {cs.approach.map((step, i) => (
                    <div key={i} className="flex gap-5 glass rounded-2xl p-6">
                      <div
                        className="text-xs font-bold flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: `${cs.color}22`, color: cs.color }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm text-[var(--secondary)] leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* How It Works (enriched only) */}
            {cs.howItWorks && (
              <Reveal>
                <div className="mb-16">
                  <p className="eyebrow mb-5">How It Works</p>
                  <div className="relative">
                    {/* Connector line — desktop only */}
                    <div className="hidden md:block absolute left-5 top-8 bottom-8 w-px bg-[var(--border)]" aria-hidden="true" />
                    <div className="space-y-4">
                      {cs.howItWorks.map((step, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                          <div className="flex gap-6 items-start">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 z-10"
                              style={{ background: `${cs.color}22`, color: cs.color, border: `1.5px solid ${cs.color}44` }}
                            >
                              {i + 1}
                            </div>
                            <div className="glass rounded-2xl p-6 flex-1">
                              <h4 className="text-sm font-semibold text-[var(--primary)] mb-2">{step.title}</h4>
                              <p className="text-sm text-[var(--secondary)] leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Outcomes */}
            <Reveal>
              <div className="mb-16">
                <p className="eyebrow mb-5">The Outcomes</p>
                <div className="space-y-3">
                  {cs.outcomes.map((outcome, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-[var(--accent)] flex-shrink-0 mt-1">✓</span>
                      <p className="text-base text-[var(--secondary)] leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Lessons */}
            <Reveal>
              <div className="mb-16">
                <p className="eyebrow mb-5">Lessons Learned</p>
                <div className="space-y-4">
                  {cs.lessons.map((lesson, i) => (
                    <div key={i} className="border-l-2 pl-6 py-2" style={{ borderColor: cs.color }}>
                      <p className="text-base text-[var(--secondary)] leading-relaxed italic">
                        &ldquo;{lesson}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Platform Stats Bar (enriched only) ── */}
        {cs.platformStats && (
          <section className="py-16 section-divider bg-[var(--surface)]">
            <div className="container">
              <Reveal>
                <p className="eyebrow mb-8">Platform at a Glance</p>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {cs.platformStats.map((stat, i) => (
                  <Reveal key={stat.label} delay={i * 0.06}>
                    <div className="text-center glass rounded-2xl px-4 py-6">
                      <div className="text-2xl font-bold mb-1" style={{ color: cs.color }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-[var(--secondary)] leading-snug">{stat.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Next case study ── */}
        <section className="py-16 section-divider">
          <div className="container">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-6">
                Next Case Study
              </p>
              <Link
                href={`/case-studies/${next.slug}`}
                className="group inline-flex items-center gap-4 glass glass-hover rounded-2xl p-6"
              >
                <div>
                  <div className="text-2xl font-bold mb-1" style={{ color: next.color }}>
                    {next.metric}
                  </div>
                  <div className="text-base font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                    {next.title}
                  </div>
                </div>
                <ArrowRight size={20} className="ml-auto text-[var(--secondary)] group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

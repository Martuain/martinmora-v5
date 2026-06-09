import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getInsight, insights } from "@/content/insights";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  // Only generate pages for articles without an external URL
  return insights
    .filter((i) => !i.externalUrl)
    .map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `${siteConfig.url}/insights/${insight.slug}` },
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
      publishedTime: insight.date,
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  // External articles redirect to their canonical source
  if (insight.externalUrl) {
    redirect(insight.externalUrl);
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] blob-blue rounded-full blur-[100px] opacity-20" />
          </div>
          <div className="container-narrow relative z-10">
            <Reveal>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors mb-10"
              >
                <ArrowLeft size={14} />
                All Insights
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <span className="text-xs font-semibold text-[var(--accent)] px-3 py-1 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-glow)]">
                  {insight.category}
                </span>
                <span className="text-xs text-[var(--secondary)]">{insight.readTime} read</span>
                <span className="text-xs text-[var(--secondary)]">
                  {new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(insight.date))}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display-lg text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                {insight.title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-xl text-[var(--secondary)] leading-relaxed border-l-2 border-[var(--accent)] pl-6 mb-16">
                {insight.excerpt}
              </p>
            </Reveal>

            <article className="space-y-8">
              {insight.body.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <p className="text-lg text-[var(--secondary)] leading-[1.8]">{paragraph}</p>
                </Reveal>
              ))}
            </article>

            <Reveal delay={0.2}>
              <div className="mt-20 pt-10 border-t border-[var(--border)] flex items-center gap-5 flex-wrap">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] font-bold flex-shrink-0">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--primary)]">Martin Fernando Mora</p>
                  <p className="text-xs text-[var(--secondary)]">
                    Product, Innovation, Payments & Transformation Advisor
                  </p>
                </div>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
                >
                  Connect on LinkedIn
                  <ExternalLink size={11} />
                </a>
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

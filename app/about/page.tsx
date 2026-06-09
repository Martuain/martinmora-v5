import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "18+ years across banking, payments, fintech, blockchain, and enterprise technology. Product, Innovation, Payments & Transformation Advisor based in Madrid, Spain.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

// Selected highlights — outcomes-first, not role-first
// All figures CV-verified
const highlights = [
  {
    value: "$2.5B",
    label: "Mobile transaction volume",
    context: "Led the migration of 2.5M users to a mobile banking platform across 12 LATAM countries. Generated $2.5B in transaction volume in year one and improved NPS by 183%.",
    domain: "Banking · Transformation",
  },
  {
    value: "€470M",
    label: "Real estate assets tokenised",
    context: "Launched ERC-1400 tokenization platform for IOBuilders. Achieved 94% settlement time reduction through end-to-end KYC/AML automation across ECB, Iberclear, and BME.",
    domain: "Digital Assets · Fintech",
  },
  {
    value: "90%",
    label: "Ops effort reduction",
    context: "Built automated balance adjustment tooling at Modulr that reduced payment operations effort from 45 minutes to 4 minutes per task — freeing 120+ hours per month.",
    domain: "Payments · SaaS",
  },
  {
    value: "85%",
    label: "Online fraud reduction",
    context: "Deployed multi-factor authentication and behavioural analytics across Citibank LATAM digital channels. Maintained 100% regulatory compliance with zero penalties over 5+ years.",
    domain: "Banking · Cybersecurity",
  },
  {
    value: "3.2×",
    label: "TAM expansion",
    context: "Led product pivot at Synapxi Tech from reconciliation-only tool to full data governance platform, integrating PSD2, PISP, and AISP across 8+ payment providers.",
    domain: "Payments · Fintech",
  },
  {
    value: "91%",
    label: "Reduction in threat detection time",
    context: "Delivered enterprise SIEM platform for BBVA processing 15 TB/day. Implemented ML anomaly detection models (Prophet, LSTM) achieving 85% accuracy on live production threat data.",
    domain: "Cybersecurity · Enterprise",
  },
];

// Expertise — capabilities, not job titles
const expertise = [
  {
    title: "Product Strategy & Roadmap",
    description:
      "End-to-end product strategy from market analysis and opportunity sizing through prioritization, MVP definition, and global delivery. Experienced with RICE and WSJF frameworks in regulated environments.",
  },
  {
    title: "Payments & Fintech",
    description:
      "Deep hands-on experience across payment infrastructure, orchestration, PSD2/PISP/AISP, merchant integration, and PayOps. Worked with Modulr, Checkout.com, and Spanish payments ecosystem PSPs.",
  },
  {
    title: "Banking & Digital Transformation",
    description:
      "Large-scale transformation programs in regulated banking environments across Europe and Latin America. Proven delivery at Citibank across 12 countries, multiple regulatory frameworks, and millions of users.",
  },
  {
    title: "Blockchain & Digital Assets",
    description:
      "Tokenization (ERC-1400), wholesale CBDC (Hyperledger Besu, ECB/Iberclear), DeFi protocols, NFT infrastructure, and smart contracts across Ethereum, Hedera, and private blockchain networks.",
  },
  {
    title: "Innovation & Emerging Technologies",
    description:
      "Structured evaluation of when emerging technology — AI, Web3, ML — creates genuine business value versus noise. Experienced deploying ML and GenAI in production environments.",
  },
  {
    title: "Delivery & Program Leadership",
    description:
      "Cross-functional team leadership in complex, multi-stakeholder environments. Agile at scale, OKR design, program governance, and delivery transformation across multi-country rollouts.",
  },
];

// Industries — traceable to actual roles
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

// Certifications — CV-verified, kept brief
const certifications = [
  { title: "Generative AI for Project Managers", institution: "PMI", year: "2025" },
  { title: "Blockchain Essentials", institution: "Consensys Academy", year: "2023–24" },
  { title: "Fintech Executive Program", institution: "University of Oxford", year: "2017–18" },
  { title: "PMP — Project Management Professional", institution: "PMI", year: "2011" },
  { title: "B.S. Information Systems Engineering", institution: "UTN, Buenos Aires", year: "1995–2004" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* 1. Introduction — who I help, not where I worked */}
        <section className="pt-32 pb-20 section-divider relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[400px] blob-teal rounded-full blur-[130px] opacity-25" />
          </div>
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl">
              <Reveal>
                <p className="eyebrow mb-6">About</p>
                <h1
                  className="display-xl text-[var(--primary)] mb-8"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Martin Fernando Mora.
                </h1>
                <p className="text-xl text-[var(--secondary)] leading-relaxed mb-6">
                  Product, Innovation, Payments & Transformation Advisor with 18+ years
                  working across banking, payments, fintech, cybersecurity, blockchain,
                  and enterprise technology.
                </p>
                <p className="text-base text-[var(--secondary)] leading-relaxed mb-6">
                  I help organizations evaluate opportunities, align stakeholders, and turn
                  strategic initiatives into measurable outcomes — combining deep technical
                  fluency with strategic product thinking across some of the most complex
                  and regulated environments in financial services and enterprise technology.
                </p>
                <p className="text-base text-[var(--secondary)] leading-relaxed mb-10">
                  Based in Madrid, Spain. Operating across Europe and Latin America.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/advisory-engagements"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
                  >
                    How I work with organizations
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/approach"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    My approach
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>

              {/* Domain tags */}
              <Reveal delay={0.15}>
                <div className="glass rounded-3xl p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-6">
                    Domain Experience
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Banking", "Payments", "Fintech", "Digital Assets", "Cybersecurity", "Enterprise Technology", "SaaS", "Regulated Markets"].map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-4 py-2 rounded-full border border-[var(--border)] text-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--accent)]/30 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-[var(--border)] pt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-4">
                      Geography
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Europe", "Latin America", "Spain", "UK", "Argentina"].map((geo) => (
                        <span key={geo} className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--secondary)]">
                          {geo}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. Experience Highlights — outcomes first, context second */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">Experience Highlights</p>
              <h2
                className="display-md text-[var(--primary)] mb-6 max-w-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Selected results across 18+ years.
              </h2>
              <p className="text-[var(--secondary)] text-lg max-w-xl mb-16">
                Citibank LATAM · Devo · Modulr · Checkout.com · IOBuilders · Synapxi Tech
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {highlights.map((h, i) => (
                <Reveal key={h.label} delay={i * 0.07}>
                  <div className="glass glass-hover rounded-2xl p-7 flex flex-col h-full">
                    <div className="text-3xl font-bold text-[var(--accent)] mb-1 leading-none">
                      {h.value}
                    </div>
                    <div className="text-sm font-semibold text-[var(--primary)] mb-3">
                      {h.label}
                    </div>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed mb-4 flex-1">
                      {h.context}
                    </p>
                    <span className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--secondary)] self-start">
                      {h.domain}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Expertise — capabilities */}
        <section className="py-24 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-4">Expertise</p>
              <h2
                className="display-md text-[var(--primary)] mb-16 max-w-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Where I create the most value.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {expertise.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07}>
                  <div className="glass glass-hover rounded-2xl p-7">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mb-4" />
                    <h3 className="text-base font-semibold text-[var(--primary)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Industries */}
        <section className="py-16 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-5">Industries</p>
              <div className="flex flex-wrap gap-3">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-sm px-5 py-2.5 rounded-full border border-[var(--border)] text-[var(--secondary)] hover:text-[var(--primary)] hover:border-[var(--accent)]/30 transition-colors cursor-default"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. Certifications — compact, no full section headers */}
        <section className="py-20 section-divider">
          <div className="container">
            <Reveal>
              <p className="eyebrow mb-8">Education & Certifications</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {certifications.map((item, i) => (
                  <div
                    key={item.title}
                    className="glass rounded-xl px-6 py-4 flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[var(--primary)] leading-snug mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-xs text-[var(--secondary)]">{item.institution}</p>
                    </div>
                    <span className="text-xs text-[var(--accent)] font-semibold flex-shrink-0 mt-0.5">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

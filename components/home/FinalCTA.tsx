import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="py-32 section-divider relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] blob-teal rounded-full blur-[140px] opacity-20" />
      </div>

      <div className="container-narrow text-center relative z-10">
        <Reveal>
          <p className="eyebrow mb-6">Start the Conversation</p>
          <h2 className="display-lg text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Let&apos;s discuss your challenge.
          </h2>
          <p className="text-lg text-[var(--secondary)] leading-relaxed mb-12 max-w-xl mx-auto">
            Whether you are navigating a product decision, evaluating an innovation opportunity,
            or looking to accelerate a transformation program — the conversation starts here.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary CTA → /contact, not Calendly */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] text-black font-semibold text-base hover:bg-[var(--accent-dim)] transition-colors shadow-lg shadow-[var(--accent-glow)]"
            >
              Discuss Your Challenge
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            {/* Secondary CTA → Calendly */}
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--border)] text-[var(--primary)] font-semibold text-base hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Schedule a Discovery Call
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <p className="text-xs text-[var(--secondary)] mt-8">
            Connect on LinkedIn:{" "}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
            >
              Martin Fernando Mora
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

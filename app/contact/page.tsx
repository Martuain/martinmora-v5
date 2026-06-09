import type { Metadata } from "next";
import { Linkedin, Mail, Calendar } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Martin Fernando Mora. Book a discovery call or send a direct message.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[300px] blob-teal rounded-full blur-[120px] opacity-20" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Reveal>
                <p className="eyebrow mb-6">Get in Touch</p>
                <h1
                  className="display-lg text-[var(--primary)] mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Let&apos;s discuss your challenge.
                </h1>
                <p className="text-lg text-[var(--secondary)] leading-relaxed">
                  Whether you are exploring a new product direction, evaluating AI opportunities,
                  or navigating a complex transformation — I&apos;d like to hear about it.
                </p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Quick options */}
              <Reveal>
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-6">
                    Quickest Ways to Reach Me
                  </p>

                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 glass glass-hover rounded-2xl p-6 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                        Book a 30-minute Discovery Call
                      </p>
                      <p className="text-xs text-[var(--secondary)] mt-1">
                        via Calendly · Free · No commitment
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-5 glass glass-hover rounded-2xl p-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                        Send a Direct Email
                      </p>
                      <p className="text-xs text-[var(--secondary)] mt-1">{siteConfig.email}</p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 glass glass-hover rounded-2xl p-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)]">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                        Connect on LinkedIn
                      </p>
                      <p className="text-xs text-[var(--secondary)] mt-1">Martin Fernando Mora</p>
                    </div>
                  </a>

                  {/* Response note */}
                  <div className="mt-8 glass rounded-2xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)] mb-3">
                      What to Expect
                    </p>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                      I typically respond within 24–48 hours. For time-sensitive matters,
                      booking a Calendly slot is the fastest path to a conversation.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Contact form */}
              <Reveal delay={0.15}>
                <div className="glass rounded-3xl p-8">
                  <p className="text-sm font-semibold text-[var(--primary)] mb-6">
                    Or send a message directly
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

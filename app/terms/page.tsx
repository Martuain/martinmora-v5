import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-narrow">
          <h1 className="text-4xl font-semibold text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Terms of Use
          </h1>
          <div className="space-y-6 text-[var(--secondary)] text-sm leading-relaxed">
            <p>The content on this website is provided for informational purposes only. All case study data represents historical results that may not be indicative of future outcomes.</p>
            <p>All written content, frameworks, and methodologies described on this site are the intellectual property of Martin Fernando Mora. Reproduction without explicit written permission is prohibited.</p>
            <p>For licensing or permissions enquiries, contact <a href="mailto:martin.f.mora@gmail.com" className="text-[var(--accent)]">martin.f.mora@gmail.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

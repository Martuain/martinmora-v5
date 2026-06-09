import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-narrow">
          <h1 className="text-4xl font-semibold text-[var(--primary)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Privacy Policy
          </h1>
          <div className="space-y-6 text-[var(--secondary)] text-sm leading-relaxed">
            <p>This website collects only the information you voluntarily provide through the contact form. That information is used solely to respond to your inquiry and is never sold or shared with third parties.</p>
            <p>This site uses Vercel Analytics for aggregated, privacy-preserving traffic analytics. No personally identifiable information is collected by the analytics system.</p>
            <p>For any questions about data handling, contact <a href="mailto:martin.f.mora@gmail.com" className="text-[var(--accent)]">martin.f.mora@gmail.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

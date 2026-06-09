import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center">
        <div className="container text-center">
          <p className="eyebrow mb-6">404</p>
          <h1 className="display-lg text-[var(--primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Page not found.
          </h1>
          <p className="text-lg text-[var(--secondary)] mb-10">
            This page doesn&apos;t exist, but the main site has what you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-black font-semibold text-sm hover:bg-[var(--accent-dim)] transition-colors"
          >
            <ArrowLeft size={14} />
            Return home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

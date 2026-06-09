"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* ── Sticky header ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || open
            ? "bg-[#090909]/95 backdrop-blur-xl border-b border-[#222222]"
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={close}
            className="flex items-center gap-2 group"
            aria-label="Martin Fernando Mora — home"
          >
            <div className="w-7 h-7 rounded-md bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-sm leading-none">M</span>
            </div>
            <span className="font-semibold text-sm text-[var(--primary)] tracking-tight">
              Martin Mora
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm transition-all duration-150",
                  pathname === item.href
                    ? "text-[var(--primary)] bg-white/5"
                    : "text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] text-black text-sm font-semibold hover:bg-[var(--accent-dim)] transition-colors"
            >
              Book a Call
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen drawer (outside header so z-index stacks cleanly) ── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Drawer panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "md:hidden fixed top-16 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        )}
      >
        <div className="mx-4 mt-2 rounded-2xl border border-[var(--border)] bg-[#0e0e0e] shadow-2xl overflow-hidden">
          <nav className="p-4 flex flex-col gap-1" aria-label="Mobile navigation links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={cn(
                  "flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-150 active:scale-[0.98]",
                  pathname === item.href
                    ? "text-[var(--primary)] bg-white/8 border border-white/10"
                    : "text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-white/5"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA inside drawer */}
          <div className="px-4 pb-5 pt-1">
            <div className="h-px bg-[var(--border)] mb-4" />
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[var(--accent)] text-black text-sm font-semibold active:scale-[0.98] transition-transform"
            >
              Book a Discovery Call
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Floating mobile CTA (shows after scrolling past hero) */}
      <MobileStickyCTA menuOpen={open} />
    </>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setWidth(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-[var(--accent)] z-[9999] transition-[width] duration-75"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}

function MobileStickyCTA({ menuOpen }: { menuOpen: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide when the nav drawer is open so they don't overlap
  if (!visible || menuOpen) return null;

  return (
    <div className="md:hidden fixed bottom-6 left-0 right-0 z-40 flex justify-center px-6">
      <a
        href={siteConfig.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-black text-sm font-semibold shadow-xl shadow-black/40"
      >
        Book a Discovery Call
        <ArrowRight size={14} />
      </a>
    </div>
  );
}


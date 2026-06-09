"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: 470, prefix: "€", suffix: "M+", label: "Assets Tokenized", description: "Across tokenized real estate and digital asset platforms" },
  { value: 2.5, prefix: "$", suffix: "B", label: "Transaction Volume", description: "Generated through digital banking transformation programs" },
  { value: 50, prefix: "", suffix: "K TPS", label: "Platform Scale", description: "Peak throughput maintained at 99.95% SLA availability" },
  { value: 90, prefix: "", suffix: "%", label: "Ops Effort Reduction", description: "Through intelligent automation and workflow redesign" },
  { value: 85, prefix: "", suffix: "%", label: "Fraud Reduction", description: "Through AI-powered detection and operational transformation" },
  { value: 15, prefix: "", suffix: "+", label: "Years Experience", description: "Leading product, AI, and transformation initiatives globally" },
];

function CounterNumber({ target, prefix, suffix, start }: { target: number; prefix: string; suffix: string; start: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;

    const isDecimal = target % 1 !== 0;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const val = Math.min(increment * step, target);
      setCurrent(isDecimal ? Math.round(val * 10) / 10 : Math.floor(val));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [start, target]);

  const isDecimal = target % 1 !== 0;
  const display = isDecimal ? current.toFixed(1) : current;

  return (
    <span className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}

export function ImpactMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 section-divider relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blob-teal rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="container relative z-10">
        <Reveal>
          <p className="eyebrow mb-4">Impact at a Glance</p>
          <h2 className="display-md text-[var(--primary)] max-w-3xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Results backed by real initiatives.
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-xl mb-16">
            Every metric below comes from actual programs I led or co-led across Europe and Latin America.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="glass glass-hover rounded-2xl p-7"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2 leading-none">
                <CounterNumber
                  target={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  start={inView}
                />
              </div>
              <div className="text-sm font-semibold text-[var(--accent)] mb-2">{metric.label}</div>
              <div className="text-xs text-[var(--secondary)] leading-relaxed">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

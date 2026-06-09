import { Reveal } from "@/components/ui/Reveal";

// Hierarchy per reviewer:
// Level 1 (primary): Banking, Payments, Fintech, Transformation
// Level 2 (differentiators): AI, Digital Assets, Blockchain — visible but not centerpiece
// Level 3: Supporting domains
const industries = [
  {
    name: "Banking",
    detail: "Citibank LATAM — digital banking, fraud prevention, regulatory compliance across 12 countries.",
  },
  {
    name: "Payments",
    detail: "Modulr, Checkout.com, Synapxi/DaMap — payment infrastructure, orchestration, PSD2, PayOps automation.",
  },
  {
    name: "Fintech",
    detail: "Product strategy and delivery across regulated fintech environments in Europe and Latin America.",
  },
  {
    name: "Digital Assets & Blockchain",
    detail: "IOBuilders — tokenization (ERC-1400), wholesale CBDC (ECB/Iberclear), DeFi, NFT infrastructure.",
  },
  {
    name: "AI & Emerging Technologies",
    detail: "ML-powered fraud detection (Devo/BBVA), GenAI product strategy (Synapxi), AI opportunity assessment.",
  },
  {
    name: "Cybersecurity & SecOps",
    detail: "Devo — enterprise SIEM for BBVA, anomaly detection models, 15TB/day threat analytics at scale.",
  },
];

export function Industries() {
  return (
    <section className="py-24 section-divider">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Domain Expertise</p>
          <h2
            className="display-md text-[var(--primary)] max-w-3xl mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Industries I know from the inside.
          </h2>
          <p className="text-[var(--secondary)] text-lg max-w-xl mb-16">
            Every domain below reflects real work in senior product and delivery roles —
            not adjacent experience or advisory distance.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 0.07}>
              <div className="glass glass-hover rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                  <h3 className="text-base font-semibold text-[var(--primary)]">
                    {industry.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--secondary)] leading-relaxed pl-4">
                  {industry.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

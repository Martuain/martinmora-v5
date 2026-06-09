export type CaseStudy = {
  slug: string;
  title: string;
  headline: string;
  metric: string;
  metricLabel: string;
  industry: string;
  type: "featured" | "secondary";
  challenge: string;
  approach: string[];
  outcomes: string[];
  lessons: string[];
  tags: string[];
  color: string;
};

export const caseStudies: CaseStudy[] = [
  // ─── FEATURED ───────────────────────────────────────────────────────────────

  {
    slug: "mobile-banking",
    type: "featured",
    title: "Mobile Banking Transformation",
    headline: "$2.5B Transaction Volume Across 12 Countries",
    metric: "$2.5B",
    metricLabel: "Transaction Volume",
    industry: "Digital Banking · LatAm",
    challenge:
      "A major financial institution needed to migrate 2.5 million users across 12 Latin American countries to a new digital banking platform while maintaining 99.95% SLA, reducing time-to-market, and accelerating enterprise digital adoption at scale.",
    approach: [
      "Defined a phased migration strategy with country-by-country rollout to minimize risk exposure and enable rapid feedback loops.",
      "Established cross-functional squads aligned to customer journey stages rather than technical layers, accelerating autonomous decision-making.",
      "Introduced a shared OKR framework connecting delivery teams to business KPIs including transaction volume, NPS, and activation rates.",
      "Implemented a real-time operations dashboard providing leadership visibility into rollout health across all 12 markets.",
      "Coordinated regulatory compliance and localization requirements in parallel with platform delivery, removing the traditional sequencing bottleneck.",
    ],
    outcomes: [
      "Successfully migrated 2.5M users across 12 countries with zero critical incidents",
      "$2.5B in digital transaction volume within the first year post-launch",
      "183% NPS improvement vs. previous digital experience",
      "99.95% platform availability maintained throughout migration",
      "50% reduction in time-to-market through enterprise-wide agile adoption",
    ],
    lessons: [
      "Outcome-aligned squads outperform capability-based teams in complex multi-market programs.",
      "Shared visibility into real-time metrics removes political friction from cross-border initiatives.",
      "Regulatory complexity is manageable when embedded into delivery design from day one rather than treated as a gate.",
    ],
    tags: ["Digital Banking", "Transformation", "LatAm", "Agile at Scale"],
    color: "#14b8a6",
  },

  {
    slug: "damap-payments",
    type: "featured",
    title: "Payments Ecosystem Growth Strategy",
    headline: "3.2× TAM Expansion Through Strategic Product Pivot",
    metric: "3.2×",
    metricLabel: "TAM Expansion",
    industry: "Payments · Fintech · Spain",
    challenge:
      "DaMap had built a strong reconciliation tool but faced a growth ceiling. The product needed to expand from a single-purpose financial reconciliation SaaS into a broader data governance platform capable of serving payment orchestrators, PSPs, and enterprise clients — without disrupting existing customers or revenue.",
    approach: [
      "Conducted comprehensive market analysis of the Spanish payments ecosystem, identifying payment orchestrators and PSPs as primary growth segments with unmet data governance needs.",
      "Led structured customer discovery across 8+ payment providers to validate the pivot hypothesis and identify the highest-value integration points across PSD2, PISP, and AISP regulatory frameworks.",
      "Designed the product pivot from reconciliation tool to full data governance platform, defining the architecture, integration model, and go-to-market positioning for orchestrators as a key B2B segment.",
      "Built the Q1–Q3 2025 ML/GenAI product roadmap using RICE and WSJF prioritisation, achieving 90%+ execution rate across the delivery team.",
      "Defined the 'Reconciliation as a Service' model for payment orchestrators — enabling merchants to get real-time visibility of bank settlements vs. payment processor liquidations via API integration.",
    ],
    outcomes: [
      "3.2× expansion of the total addressable market through the data governance platform pivot",
      "Projected 40% improvement in customer retention through roadmap execution",
      "Payment orchestrator segment validated as a primary growth vector with documented demand",
      "95%+ reconciliation automation rate demonstrated across active client deployments",
      "16M+ transactions reconciled monthly across the platform",
    ],
    lessons: [
      "In mature payments markets, reconciliation transparency is a retention and differentiation lever — not just an operational tool.",
      "Positioning a data product as infrastructure for PSPs and orchestrators unlocks B2B distribution that a direct merchant model cannot reach at the same pace.",
      "Validation-first roadmapping in regulated markets prevents expensive pivots: customer interviews and regulatory research before engineering investment.",
    ],
    tags: ["Payments", "Product Strategy", "Fintech", "Data Governance", "PSD2"],
    color: "#6366f1",
  },

  {
    slug: "cbdc-innovation",
    type: "featured",
    title: "CBDC Innovation Initiative",
    headline: "Wholesale CBDC Proof-of-Concept for the European Central Bank",
    metric: "ECB",
    metricLabel: "wCBDC with Iberclear",
    industry: "Digital Assets · Central Banking · Europe",
    challenge:
      "The European Central Bank and Iberclear required a proof-of-concept demonstrating wholesale CBDC interoperability across heterogeneous distributed ledger networks, with full Delivery vs. Payment (DvP) settlement capability. The initiative needed to satisfy institutional-grade security, regulatory traceability, and multi-party coordination requirements.",
    approach: [
      "Led product definition and delivery coordination for the wCBDC MVP built on Hyperledger Besu, working across IOBuilders, ECB, Iberclear, and partner institutions.",
      "Implemented HTLC (Hash Time-Locked Contracts) protocol enabling full DvP interoperability between heterogeneous distributed ledger networks — resolving the core technical and regulatory challenge.",
      "Coordinated four institutions through a single technical whitepaper, achieving 100% stakeholder approval before any development commenced.",
      "Defined the product architecture around regulatory compliance, auditability, and settlement finality as first-class requirements rather than constraints applied after design.",
      "Managed delivery of the proof-of-concept within institutional research timelines, maintaining alignment between the technical team and senior stakeholders at the ECB and Iberclear.",
    ],
    outcomes: [
      "Successfully delivered the wCBDC MVP on Hyperledger Besu for ECB and Iberclear",
      "Full DvP interoperability demonstrated across heterogeneous distributed networks",
      "100% stakeholder approval secured across all four participating institutions",
      "Platform cited in ECB wholesale CBDC research as a reference implementation",
      "Settlement finality reduced from T+2 to near-instant confirmation in the proof-of-concept environment",
    ],
    lessons: [
      "In institutional blockchain initiatives, stakeholder alignment at the architecture phase is more valuable than technical sophistication — misaligned institutions derail delivery faster than technical complexity.",
      "Regulatory traceability is not a feature to add at the end; it must be the architectural foundation that everything else is built on.",
      "Central bank innovation programs move at institutional speed — delivery credibility comes from consistency, documentation quality, and formal stakeholder management, not agile velocity.",
    ],
    tags: ["CBDC", "Blockchain", "Digital Assets", "ECB", "Iberclear"],
    color: "#8b5cf6",
  },

  // ─── SECONDARY ───────────────────────────────────────────────────────────────

  {
    slug: "fraud-prevention",
    type: "secondary",
    title: "Fraud Prevention & Security Transformation",
    headline: "85% Reduction in Online Fraud Across LATAM Banking",
    metric: "85%",
    metricLabel: "Fraud Reduction",
    industry: "Banking · Cybersecurity · LatAm",
    challenge:
      "Citibank LATAM was experiencing significant fraud exposure across its digital banking channels. The organization needed to deploy advanced fraud prevention capabilities while maintaining regulatory compliance with zero tolerance for penalties across multiple Latin American jurisdictions.",
    approach: [
      "Deployed advanced multi-factor authentication and behavioural analytics across all LATAM digital banking channels.",
      "Designed and implemented a layered security architecture combining device fingerprinting, transaction pattern analysis, and real-time anomaly detection.",
      "Established regulatory compliance frameworks across all jurisdictions, creating a centre of excellence model for security operations across the region.",
    ],
    outcomes: [
      "85% reduction in online fraud across LATAM digital banking channels",
      "72% reduction in credit card fraud through advanced authentication",
      "100% regulatory compliance with zero penalties over 5+ years across all jurisdictions",
      "Recognized as a regional centre of excellence for security and fraud prevention",
    ],
    lessons: [
      "Fraud prevention at scale requires both technology and organizational design — the detection system is only as effective as the response process behind it.",
      "Regulatory compliance across multiple jurisdictions is achievable at scale when standards are designed centrally and adapted locally.",
    ],
    tags: ["Banking", "Fraud Prevention", "Cybersecurity", "Regulatory Compliance"],
    color: "#f59e0b",
  },

  {
    slug: "operational-excellence",
    type: "secondary",
    title: "Payments Operational Excellence Program",
    headline: "90% Reduction in Operational Effort at 50,000 TPS Scale",
    metric: "90%",
    metricLabel: "Ops Effort Reduction",
    industry: "Payments Infrastructure · UK",
    challenge:
      "Modulr's payment operations team was processing thousands of transactions per hour with unsustainable manual intervention rates. The platform needed to scale to 50,000 TPS while simultaneously reducing operational overhead and achieving 99.95% SLA — without disrupting live payment operations.",
    approach: [
      "Built a purpose-built automated balance adjustment tool that eliminated the primary source of manual intervention in payment operations.",
      "Led Kubernetes migration to achieve container orchestration, auto-scaling, and performance tuning — reducing infrastructure costs by 28% while increasing throughput.",
      "Established operational KPIs including exception rate, auto-resolution rate, and SLA compliance as core product metrics tracked by leadership weekly.",
    ],
    outcomes: [
      "90% reduction in payment operations effort — from 45 minutes to 4 minutes per task",
      "120+ hours per month freed from manual payment operations work",
      "Platform scaled to 50,000 TPS maintaining 99.95% SLA post-migration",
      "28% infrastructure cost reduction through Kubernetes optimization",
      "650% increase in deployment frequency enabling continuous delivery",
    ],
    lessons: [
      "Automation that removes human oversight entirely creates fragility. Design for human-in-the-loop at the right escalation points.",
      "Infrastructure cost reduction and platform scaling are not competing objectives — containerization achieves both simultaneously when done correctly.",
    ],
    tags: ["Payments", "Automation", "Infrastructure", "Operational Excellence"],
    color: "#ec4899",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((cs) => cs.type === "featured");
export const secondaryCaseStudies = caseStudies.filter((cs) => cs.type === "secondary");

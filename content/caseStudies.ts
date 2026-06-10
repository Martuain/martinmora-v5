export type CaseStudyMetric = {
  value: string;
  label: string;
  detail: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  headline: string;
  metric: string;
  metricLabel: string;
  industry: string;
  type: "featured" | "secondary";
  challenge: string;
  context?: string; // extended narrative before the approach
  approach: string[];
  outcomes: string[];
  lessons: string[];
  tags: string[];
  color: string;
  // Optional enrichment — used for deep-dive case studies
  keyMetrics?: CaseStudyMetric[];
  howItWorks?: { title: string; description: string }[];
  platformStats?: { value: string; label: string }[];
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
      "DaMap had built a strong automated reconciliation tool but was hitting a growth ceiling. The product worked well for a narrow use case — financial reconciliation — but the market opportunity was broader, and competitors were closing in. The question was whether to go deeper in reconciliation or expand the platform into a more strategic position within the payments data ecosystem.",

    context:
      "The Spanish payments market is one of the most dynamic in Europe, with a mature orchestration layer, growing PSP competition, and increasing regulatory complexity under PSD2. Payment orchestrators were sitting on a problem: their merchant clients had no visibility into whether settlements from processors matched what was actually landing in their bank accounts. That gap — between what PSPs reported and what banks confirmed — was generating support tickets, eroding merchant trust, and creating a differentiation problem in a commoditizing market. DaMap had the technical foundation to solve it. The strategic challenge was recognizing that the real buyer wasn't just the merchant — it was the orchestrator who needed to offer reconciliation as a value-added service to retain their merchant base.",

    approach: [
      "Conducted a comprehensive market analysis of the Spanish payments ecosystem, mapping the full chain from merchant to payment orchestrator to PSP to bank — identifying where data fragmentation created the most commercial pain.",
      "Led structured customer discovery across 8+ payment providers (including PSPs, orchestrators, and e-commerce platforms) to validate the pivot hypothesis, using PSD2, PISP, and AISP regulatory requirements as a framework for understanding integration opportunity.",
      "Identified payment orchestrators as the highest-leverage B2B distribution channel: rather than selling reconciliation to individual merchants, positioning DaMap as infrastructure that orchestrators could offer their entire merchant portfolio — multiplying reach without multiplying sales effort.",
      "Designed the 'Reconciliation as a Service' model specifically for orchestrators — enabling real-time visibility of sales vs. bank settlement vs. processor liquidation via API, with a dedicated orchestrator environment, configurable matching rules, and white-label data presentation.",
      "Led the product pivot from reconciliation tool to full data governance platform, defining the new architecture, integration model, and go-to-market narrative. Added capabilities: universal data conciliation, data transformation and enrichment, advanced analytics, data lineage visibility, and governance automation.",
      "Built and executed the Q1–Q3 2025 ML/GenAI product roadmap using RICE and WSJF prioritisation, achieving 90%+ execution rate. Delivered measurable improvements in customer retention trajectory and ARPU.",
    ],

    // Key metrics grid — shown as visual cards on the case study page
    keyMetrics: [
      { value: "3.2×", label: "TAM Expansion", detail: "From single-use reconciliation to full data governance platform" },
      { value: "16M+", label: "Transactions / Month", detail: "Reconciled monthly across active client deployments" },
      { value: "95%+", label: "Auto-Reconciliation", detail: "Transactions reconciled automatically without manual intervention" },
      { value: "1,000 TPS", label: "Processing Speed", detail: "Transactions per second — outperforming generic ERPs and accounting tools" },
      { value: "8 hrs → 8 min", label: "Process Optimization", detail: "Reconciliation processes that took 8 hours reduced to 8 minutes" },
      { value: "30K+", label: "Hours Saved / Year", detail: "Manual reconciliation hours eliminated annually across client base" },
    ],

    // How It Works — the Reconciliation as a Service model explained
    howItWorks: [
      {
        title: "Merchant sales data ingested",
        description: "Sales transactions, vouchers, and POS data flow from the merchant into DaMap via the orchestrator's existing infrastructure — no direct merchant integration required.",
      },
      {
        title: "Processor liquidations matched",
        description: "Payment processor settlement files are ingested and matched against merchant sales using DaMap's advanced reconciliation algorithms — identifying matched, pending, and unreconciled items in real time.",
      },
      {
        title: "Bank deposits confirmed",
        description: "Bank statements and deposit confirmations are cross-referenced against processor liquidations — giving the orchestrator a complete end-to-end view: sales → settlement → bank confirmation.",
      },
      {
        title: "Orchestrator dashboard and alerts",
        description: "The orchestrator sees their merchants' reconciliation status in a dedicated environment, with configurable rules, discrepancy alerts, and white-label reporting — all delivered via secure API with full encryption.",
      },
    ],

    // Platform stats — from DaMap PDFs
    platformStats: [
      { value: "300+", label: "Active Users Daily" },
      { value: "16M+", label: "Transactions / Month" },
      { value: "95%+", label: "Auto-Reconciliation Rate" },
      { value: "30K+", label: "Hours Saved / Year" },
      { value: "8 min", label: "vs. 8-Hour Manual Process" },
      { value: "1,000 TPS", label: "Processing Throughput" },
    ],

    outcomes: [
      "3.2× expansion of the total addressable market through the data governance platform pivot",
      "Payment orchestrator segment defined, validated, and positioned as primary B2B growth channel",
      "95%+ reconciliation automation rate across active client deployments",
      "16M+ transactions reconciled monthly on the platform",
      "30,000+ manual reconciliation hours eliminated per year across the client base",
      "8-hour manual reconciliation processes reduced to 8 minutes through automation",
      "300+ daily active users on the platform with growing enterprise adoption",
      "Projected 40% improvement in customer retention through roadmap execution",
    ],

    lessons: [
      "In mature payments markets, data transparency is a retention and differentiation lever — not just an operational tool. Orchestrators that give merchants visibility into settlement gaps retain accounts that would otherwise migrate on price alone.",
      "Positioning a data product as infrastructure for orchestrators rather than a tool for merchants changes the unit economics entirely: one orchestrator integration reaches an entire merchant portfolio.",
      "The most powerful pivots are not technology changes — they are buyer changes. DaMap's technology barely changed. What changed was who we were selling to, why it mattered to them commercially, and how it fit into their existing distribution model.",
    ],

    tags: ["Payments", "Product Strategy", "Fintech", "Data Governance", "PSD2", "Payment Orchestration"],
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

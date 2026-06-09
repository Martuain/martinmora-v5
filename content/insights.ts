export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  externalUrl?: string; // for Medium/Substack articles
  body: string[];
};

// Insight hierarchy per reviewer recommendation:
// Level 1 (primary): Payments thought leadership
// Level 2 (differentiators): AI in fintech, Digital Assets/Web3
// Level 3 (supporting): Transformation, Product Strategy
// Note: "Hacking the Interview"-type content excluded — wrong audience signal.

export const insights: Insight[] = [

  // ─── PAYMENTS & BANKING ──────────────────────────────────────────────────────

  {
    slug: "payment-orchestration-strategy",
    title: "Payment Orchestration Is a Strategy Decision, Not a Technology Choice",
    excerpt:
      "Organizations that treat payment orchestration as a procurement decision consistently underestimate its strategic implications. The real question is not which orchestrator to choose — it is what your payments architecture says about your business model.",
    category: "Payments & Banking",
    date: "2026-05-08",
    readTime: "6 min",
    body: [
      "Payment orchestration has become one of the most consequential infrastructure decisions a digital business can make — and most organizations make it wrong by treating it as a technology selection rather than a strategic question.",
      "The choice of orchestration layer determines which payment methods you can offer, how you handle failures and retries, what your settlement timelines look like, and how you manage regulatory exposure across markets. These are business design decisions, not procurement ones.",
      "The most common failure mode I observe is organizations building orchestration layers optimized for today's transaction volume and payment mix, without accounting for the markets they intend to enter, the regulatory frameworks they will encounter, or the PSP relationships they will need to maintain.",
      "Payment orchestration decisions also lock in data architecture. The reconciliation challenge — matching payment processor settlements against bank deposits against merchant sales data — becomes exponentially harder with each orchestration layer added without a corresponding data governance strategy.",
      "The organizations that get this right share one characteristic: they involve product, finance, compliance, and technology in the orchestration decision simultaneously. Not sequentially. The payment architecture is too consequential to design in technical isolation.",
    ],
  },

  {
    slug: "digital-banking-transformation-lessons",
    title: "What 12 Countries Taught Me About Digital Banking Transformation",
    excerpt:
      "The technology is usually the least complicated part. The things that actually determine whether a banking transformation succeeds are organizational, regulatory, and political — and they are almost never in the project plan.",
    category: "Payments & Banking",
    date: "2026-03-20",
    readTime: "7 min",
    body: [
      "I led the digital banking migration of 2.5 million users across 12 Latin American countries. The technology worked. What nearly derailed it had nothing to do with technology.",
      "The first lesson is about regulatory sequencing. Every country had different compliance requirements, different authentication standards, different data residency rules. The organizations that treat regulatory compliance as a gate at the end of delivery — rather than a design input from day one — consistently hit the most expensive delays.",
      "The second lesson is about what NPS actually measures in banking. We improved NPS by 183%. That number sounds impressive, but what it actually reflected was the removal of specific friction points that customers had learned to live with. The improvements were not about features. They were about reliability, speed, and the absence of failure.",
      "The third lesson is about multi-country governance. Twelve countries means twelve sets of stakeholders, twelve regulatory environments, and twelve different definitions of 'urgent'. The only thing that kept the program coherent was a shared dashboard that made progress — and problems — visible to everyone simultaneously.",
      "The fourth lesson, and the most important, is that digital banking transformation is a change management program that happens to involve technology. The technology is almost always the least complicated part.",
    ],
  },

  // ─── AI & FINTECH ────────────────────────────────────────────────────────────

  {
    slug: "generative-ai-in-fintech",
    title: "Generative AI in Fintech: From Experimentation to Business Value",
    excerpt:
      "Most fintech AI initiatives are still in the experimentation phase — impressive demos, limited production deployment, unclear ROI. The gap between pilot and value is not a technology problem. It is a strategy and operating model problem.",
    category: "AI & Innovation",
    date: "2026-04-15",
    readTime: "6 min",
    externalUrl: "https://medium.com/@mfmora/generative-ai-in-fintech-transforming-customer-experience-and-risk-management-9e8ff6ac415b",
    body: [
      "Generative AI has moved from curiosity to strategic imperative for financial services organizations faster than almost any technology in recent memory. The pressure to deploy is real. The clarity about where to deploy — and how — is much less developed.",
      "The most valuable applications I have seen in fintech share a common characteristic: they are not trying to replicate what humans do. They are changing the shape of the process itself. Fraud pattern analysis, regulatory document processing, customer communication at scale — the value comes from redesigning the workflow, not automating the existing one.",
      "Risk management is where the deployment discipline matters most. Financial services organizations operate in environments where model errors have regulatory and financial consequences. The governance question — who owns the AI decision, what the escalation path looks like, how errors are detected and corrected — is not a compliance formality. It is a product design requirement.",
      "The organizations that are extracting genuine value from AI in fintech are the ones that started with the business outcome and worked backward to the technology. Not the ones that started with the model and looked for applications.",
      "The gap between pilot and production in fintech AI is almost never a model quality problem. It is an operating model problem: unclear ownership, undefined quality thresholds, absent feedback loops, and measurement systems that track activity rather than business outcomes.",
    ],
  },

  // ─── DIGITAL ASSETS & WEB3 ───────────────────────────────────────────────────

  {
    slug: "future-of-tokenization",
    title: "The Future of Tokenization: Beyond Real Estate to Global Asset Classes",
    excerpt:
      "Real estate tokenization proved the concept. The next phase is not about adding more asset classes — it is about solving the infrastructure, liquidity, and regulatory questions that determine whether tokenized assets become a mainstream financial instrument.",
    category: "Digital Assets",
    date: "2026-02-12",
    readTime: "5 min",
    externalUrl: "https://medium.com/@mfmora/the-future-of-tokenization-beyond-real-estate-to-global-asset-classes-8b1fcd1433c8",
    body: [
      "I spent 17 months at IOBuilders working on tokenization infrastructure — launching a €470M real estate tokenization platform and delivering a wholesale CBDC proof-of-concept for the European Central Bank. The technical foundations for asset tokenization are mature enough. The limiting factors are now different.",
      "Real estate became the first major tokenization use case for good reasons: illiquid assets with high unit value, fragmented ownership structures, slow settlement cycles, and regulatory frameworks that could accommodate security tokens through existing legislation. It was a tractable problem.",
      "The next wave of tokenization — private equity, infrastructure, commodities, trade finance — faces harder problems. Liquidity is the central one. A tokenized asset is only as liquid as the secondary market infrastructure that supports it. Building that infrastructure requires coordinated action across custodians, exchanges, regulators, and institutional investors.",
      "Settlement is the second hard problem. The 94% settlement time reduction we achieved on the real estate platform — from 72 hours to 4 hours — was possible because we were operating within a controlled, permissioned environment with pre-agreed counterparties. Public market settlement requires different infrastructure entirely.",
      "The organizations best positioned for the next phase of tokenization are not the ones with the most sophisticated smart contracts. They are the ones that have solved the compliance, custody, and liquidity questions — because those are the actual barriers to institutional adoption.",
    ],
  },

  {
    slug: "cbdc-financial-institutions",
    title: "What CBDCs Mean for Commercial Banks and Payment Infrastructure",
    excerpt:
      "Central Bank Digital Currencies are not a threat to commercial banking or a replacement for existing payment infrastructure. They are a settlement layer upgrade that will reshape the architecture of financial services over the next decade.",
    category: "Digital Assets",
    date: "2026-01-18",
    readTime: "5 min",
    body: [
      "Having delivered the wholesale CBDC proof-of-concept for the European Central Bank on Hyperledger Besu, I have a more specific perspective on CBDCs than most of the commentary suggests. The debate about whether CBDCs will 'replace' banks or 'disrupt' payment networks misses the more consequential question: how will they change the settlement infrastructure that everything else is built on?",
      "Wholesale CBDCs — the version that central banks are actually deploying first — are about interbank settlement efficiency, not retail banking disruption. The use case we demonstrated for the ECB was Delivery vs. Payment settlement: the simultaneous exchange of securities and cash across distributed ledger networks that currently require T+2 settlement cycles and significant counterparty risk.",
      "The implications for commercial banks are real but not existential. The banks that will be most affected are those whose current revenue models depend on the friction in cross-border settlement — the float, the correspondent banking fees, the FX conversion margins. Those revenue streams will compress as CBDC-enabled settlement becomes more efficient.",
      "For payment infrastructure operators, the more interesting question is interoperability. The HTLC protocol we implemented for the ECB proof-of-concept enables settlement finality across heterogeneous networks. That capability, at scale, changes what is possible in cross-border retail payments — not by replacing existing rails, but by enabling new settlement arrangements between them.",
      "The organizations that are investing now in understanding CBDC architecture — not as a speculative technology, but as a settlement layer that will exist alongside existing infrastructure — will be better positioned when deployment accelerates beyond the proof-of-concept phase.",
    ],
  },

  // ─── TRANSFORMATION & PRODUCT STRATEGY ──────────────────────────────────────

  {
    slug: "transformation-is-an-alignment-problem",
    title: "Transformation Is an Alignment Problem, Not a Technology Problem",
    excerpt:
      "Every failed transformation I have observed had adequate technology. None of them had adequate alignment. The technology was never the bottleneck.",
    category: "Transformation",
    date: "2025-12-10",
    readTime: "7 min",
    body: [
      "Organizations invest heavily in the technology layer of transformation — new platforms, automation tools, AI capabilities, cloud migration — and underinvest systematically in the alignment layer. This is a predictable failure mode.",
      "Alignment is not agreement. You can run a room-full-of-nods workshop and leave with zero alignment. Alignment means that when someone in a delivery team faces a decision about trade-offs — speed vs. quality, scope vs. timeline, customer need vs. internal constraint — they know what to choose because the strategy has been made explicit.",
      "The most expensive symptom of misalignment is rework. A delivery team builds something technically correct but strategically wrong. The rework is treated as a technical failure when it is actually a communication failure. The cost is not just time and money. It is motivation.",
      "What I have found works across organizations of different sizes and maturity levels is establishing a small number of explicit strategic bets — three to five at most — and ensuring that every initiative can be traced to one of them. If it cannot, the initiative needs a different justification or a different home.",
      "Transformation programs that succeed share one characteristic that has nothing to do with technology: leadership that is willing to say clearly what they will stop doing, not only what they will start doing. That clarity is the actual foundation of alignment.",
    ],
  },

  {
    slug: "product-strategy-is-not-roadmap-management",
    title: "Product Strategy Is Not Roadmap Management",
    excerpt:
      "A roadmap is a communication tool. Strategy is a set of choices about where to compete and how to win. Confusing the two is one of the most expensive mistakes a product organization can make.",
    category: "Product Strategy",
    date: "2025-11-05",
    readTime: "5 min",
    body: [
      "The most common misdiagnosis in product organizations is treating a prioritization problem as a strategy problem, or a strategy problem as a roadmap problem. The three are related but distinct, and solving the wrong one first is expensive.",
      "A roadmap is a communication tool. It shows stakeholders what the team is building and approximately when. Done well, it creates alignment. Done poorly, it creates the illusion of alignment while actual disagreements about priorities remain unresolved.",
      "Strategy is a different thing entirely. It is a set of explicit choices: which customers to serve, which problems to solve, which capabilities to build, and — critically — which opportunities to decline. The hardest strategic decisions are not what to add. They are what to say no to.",
      "The signal that a team is roadmapping instead of strategizing is usually visible in the review meeting. If every stakeholder's request ends up on the roadmap somewhere, the team has not made choices. It has made a list.",
      "Good product strategy requires leadership to accept constraint. To say: we will not pursue that market this year. We will not build that feature. We will not serve that customer segment. Those constraints are not failures of ambition. They are the foundation that makes execution possible.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

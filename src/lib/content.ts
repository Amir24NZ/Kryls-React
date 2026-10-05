export const SITE = {
  name: "KRYLS",
  title: "KRYLS Protocol — Automated Non‑Custodial Escrow",
  description:
    "KRYLS is an automated, non-custodial escrow protocol for digital services on EVM networks. Deterministic settlement paths, auditable execution, and rule-based dispute handling.",
  url: "https://kryls.com/",
  email: "support@kryls.com",
  inquiryMailto:
    "mailto:support@kryls.com?subject=KRYLS%20Inquiry",
  github: "https://github.com/kryls/kryls",
} as const;

export const SOCIALS = [
  {
    id: "web",
    href: "https://kryls.com",
    label: "Website: kryls.com",
    sr: "kryls.com",
  },
  {
    id: "x",
    href: "https://x.com/krylsglobal",
    label: "X: @krylsglobal",
    sr: "X / @krylsglobal",
  },
  {
    id: "telegram",
    href: "https://t.me/krylsglobal",
    label: "Telegram: t.me/krylsglobal",
    sr: "Telegram",
  },
  {
    id: "email",
    href: "mailto:support@kryls.com",
    label: "Email: support@kryls.com",
    sr: "support@kryls.com",
  },
] as const;

export const NAV = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#escrow", label: "Escrow" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/#overview", label: "Protocol" },
] as const;

export const HERO = {
  brandTag: "Coming Soon",
  status: "Coming Soon",
  launch: "Launch in progress",
  title: "KRYLS Protocol",
  subtitle:
    "KRYLS is an automated, non-custodial escrow protocol for digital services on EVM networks. It provides a deterministic, auditable framework for how funds are committed, executed, and released between clients and service providers. All actions are enforced on-chain without discretionary human intervention.",
  quoteOff: "Work can be coordinated off-chain.",
  quoteOn: "Settlement can be enforced on-chain.",
  cta: "Contact us via email",
  chips: [
    { lead: "Non-custodial", rest: "Escrow protocol" },
    { lead: "Deterministic", rest: "Settlement paths" },
    { lead: "EVM", rest: "Networks" },
    { lead: "ERC-20", rest: "Supported assets" },
    { lead: "2%", rest: "Protocol fee" },
  ],
} as const;

export const PRINCIPLES = [
  {
    name: "Non-Custodial",
    text: "Funds are governed by protocol logic rather than a centralized platform.",
  },
  {
    name: "Deterministic",
    text: "Settlement follows predefined rules and state transitions.",
  },
  {
    name: "Auditable",
    text: "Important financial transitions can be verified on-chain.",
  },
  {
    name: "State-Driven",
    text: "Every project follows an explicit lifecycle.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Create",
    text: "A client creates a digital-service project with its requirements, budget, asset, and engagement model.",
  },
  {
    n: "02",
    title: "Connect",
    text: "Freelancers discover projects and submit applications.",
  },
  {
    n: "03",
    title: "Agree",
    text: "The parties communicate, negotiate terms, and establish the conditions of the engagement.",
  },
  {
    n: "04",
    title: "Fund",
    text: "The client commits the required funds to the on-chain escrow.",
  },
  {
    n: "05",
    title: "Execute",
    text: "The freelancer performs the work and submits the result.",
  },
  {
    n: "06",
    title: "Settle",
    text: "Once the required conditions are satisfied, the protocol executes the corresponding settlement.",
  },
  {
    n: "07",
    title: "Resolve",
    text: "If something goes wrong, the project can enter a structured dispute lifecycle instead of allowing unrestricted movement of funds.",
  },
] as const;

export const WORKFLOW = [
  "CLIENT",
  "PROJECT",
  "AGREEMENT",
  "ESCROW",
  "WORK",
  "DELIVERY",
  "SETTLEMENT",
] as const;

export const APP_LAYER = {
  title: "KRYLS APP",
  line: "The application coordinates the relationship.",
  items: [
    "Marketplace",
    "Profiles",
    "Projects",
    "Applications",
    "Chat",
    "Dashboard",
  ],
} as const;

export const PROTOCOL_LAYER = {
  title: "KRYLS PROTOCOL",
  line: "The protocol enforces the financial rules.",
  items: [
    "Escrow",
    "Accounting",
    "Settlement",
    "Milestones",
    "Disputes",
    "Governance",
    "Recovery",
  ],
} as const;

export const CAPABILITIES = [
  {
    title: "Marketplace",
    text: "Browse projects, search opportunities, filter results, and submit applications.",
  },
  {
    title: "Collaboration",
    text: "Communication, request approval, terms negotiation, delivery submission, acceptance, and dispute initiation.",
  },
  {
    title: "Escrow",
    text: "The client commits the required funds to the on-chain escrow.",
  },
  {
    title: "Milestones",
    text: "Divide a project into multiple independently settled stages.",
  },
  {
    title: "Disputes",
    text: "Handle contested projects through a structured dispute lifecycle.",
  },
  {
    title: "Settlement",
    text: "Once the required conditions are satisfied, the protocol executes the corresponding settlement.",
  },
] as const;

export const ENGAGEMENT = [
  {
    title: "Full Payment",
    text: "One settlement after the engagement is completed.",
  },
  {
    title: "Milestone",
    text: "Divide a project into multiple independently settled stages.",
  },
  {
    title: "Hourly",
    text: "Support time-based digital-service engagements.",
  },
] as const;

export const ESCROW_STACK = [
  "APPLICATION LAYER",
  "COORDINATION",
  "KRYLS ESCROW",
  "ON-CHAIN SETTLEMENT",
] as const;

export const ESCROW_INTERNALS = [
  "State Machine",
  "Accounting",
  "Settlement",
  "Disputes",
  "Emergency Controls",
] as const;

export const STATES = [
  "Created",
  "Funded",
  "Active",
  "Completed",
] as const;

export const STATE_PATHS =
  "Cancelled · Expired · Disputed · Resolved · Emergency Recovery";

export const ARCH_LAYERS = [
  {
    title: "Frontend",
    text: "Home · Dashboard · Market · Chat · Swap",
  },
  {
    title: "Backend",
    text: "Projects · Profiles · Requests · Messages · Terms · Deliveries",
  },
  {
    title: "Escrow Protocol",
    text: "Accounting · State Machine · Settlement · Disputes · Governance · Recovery",
  },
  {
    title: "EVM Network",
    text: "Sepolia for escrow · Polygon for swap",
  },
] as const;

export const ARCH_CARDS = [
  {
    title: "Financial Accounting",
    text: "Tracks deposited, settled, remaining, and locked funds while preserving their relationships throughout the project lifecycle.",
  },
  {
    title: "State Machine",
    text: "Projects move through explicit states. Invalid transitions are rejected by the protocol.",
  },
  {
    title: "Project Isolation",
    text: "Each project is treated as an independent financial unit.",
  },
  {
    title: "Access Control",
    text: "Sensitive operations are separated from normal user actions through explicit authorization and governance mechanisms.",
  },
  {
    title: "Emergency Controls",
    text: "The architecture includes pause and recovery mechanisms for abnormal situations while protecting restricted states.",
  },
  {
    title: "Dispute Layer",
    text: "Dispute handling is implemented as a dedicated subsystem with its own lifecycle, validation, and accounting boundaries.",
  },
] as const;

export const DISPUTE_FLOW = [
  "Project",
  "Dispute Created",
  "Validation",
  "Arbitration / Resolution",
  "Protocol Outcome",
  "Settlement",
] as const;

export const PROTOCOL_SECTIONS = [
  {
    id: "s1",
    num: "1.",
    title: "Operating Model",
    paragraphs: [
      "KRYLS implements on-chain escrow logic for:",
      "All execution paths are deterministic, transparent, and fully verifiable. KRYLS does not control funds, and no operator or administrator can alter outcomes.",
    ],
    bullets: [
      "Funding",
      "Approvals",
      "Release conditions",
      "Dispute handling (based on predefined protocol rules)",
      "Final distribution",
    ],
    afterList: true,
  },
  {
    id: "s2",
    num: "2.",
    title: "Standardized Settlement Paths",
    paragraphs: [
      "KRYLS defines a set of predefined, deterministic settlement paths:",
      "All settlement outcomes are limited to predefined paths; KRYLS enforces them automatically.",
    ],
    bullets: [
      "Mutual Agreement – both parties submit confirmation on-chain.",
      "Time-Locked Release – funds automatically release when a predefined time condition is met.",
      "Policy-Defined Dispute Resolution – external input (e.g., oracle or third-party attestation) maps to protocol-constrained outcomes.",
    ],
    afterList: true,
  },
  {
    id: "s3",
    num: "3.",
    title: "Dispute Governance and External Data Inputs",
    paragraphs: [
      "Disputes follow strict, deterministic flows. External inputs, such as attestations or third-party data, may be submitted to map disputes to outcomes. KRYLS enforces the resulting settlement automatically, without human discretion.",
      "Provider sets for external input are configurable via protocol-defined policies and may change according to deterministic operational criteria.",
    ],
    bullets: [],
    afterList: false,
  },
  {
    id: "s4",
    num: "4.",
    title: "Engagement Modes",
    paragraphs: [
      "KRYLS supports common digital service engagement modes:",
      "All releases are executed automatically by the protocol according to predefined rules.",
    ],
    bullets: [
      "Full – single release against approved completion.",
      "Milestone – multiple staged releases tied to milestone approvals and optional deadlines.",
      "Hourly – time-logged work with client approvals and periodic releases.",
    ],
    afterList: true,
  },
  {
    id: "s5",
    num: "5.",
    title: "Fees and Supported Assets",
    paragraphs: [
      "KRYLS applies a 2% protocol fee. Fees are enforced automatically at settlement via rule-based output distribution.",
      "Supported assets are ERC-20 tokens. No negotiation or manual adjustment of fees is possible.",
    ],
    bullets: [],
    afterList: false,
  },
  {
    id: "s6",
    num: "6.",
    title: "Non-Custodial Control and Auditability",
    paragraphs: [
      "Control is enforced exclusively by protocol rules and cryptographic validation.",
      "Critical transitions, including funding, approvals, releases, dispute initiation, and final distribution, are explicit and inspectable on-chain. No human can override these outcomes.",
    ],
    bullets: [],
    afterList: false,
  },
  {
    id: "s7",
    num: "7.",
    title: "Certification",
    paragraphs: [
      "KRYLS supports optional settlement-linked certification for both parties.",
      "Certificates are issued based solely on finalized settlement outcomes. Certification does not imply quality, endorsement, or trustworthiness beyond the protocol-defined result.",
    ],
    bullets: [],
    afterList: false,
  },
  {
    id: "s8",
    num: "8.",
    title: "Integrity and Abuse Controls",
    paragraphs: [
      "KRYLS reduces misuse risk by enforcing settlement rules on-chain, constraining dispute handling to predefined outcomes, and providing an auditable event trail for monitoring and post-incident review.",
    ],
    bullets: [],
    afterList: false,
  },
  {
    id: "s9",
    num: "9.",
    title: "Swap Module",
    paragraphs: [
      "KRYLS includes an optional Swap component for convenience in token conversion.",
      "Swap operations use external liquidity sources and are fully deterministic. KRYLS does not control pricing, execution, or provide financial guarantees.",
    ],
    bullets: [],
    afterList: false,
  },
  {
    id: "s10",
    num: "10.",
    title: "Intended Users",
    paragraphs: [
      "KRYLS is designed for clients, companies, service providers, and teams worldwide that require standardized settlement and dispute handling for digital service engagements.",
    ],
    bullets: [],
    afterList: false,
    emailLine: true,
  },
] as const;

export const FOOTER = {
  title: "KRYLS",
  sub: "Automated, non-custodial escrow protocol for digital services on EVM networks. For inquiries, contact: support@kryls.com",
  rights: "2026 KRYLS. All rights reserved.",
  note: "Liquid Glass UI • EVM ready",
} as const;

export const BOT = {
  titleLead: "KRYLS",
  titleAccent: "Bot",
  subtitle:
    "Quick actions for official KRYLS support and trusted social links. Use only these buttons to avoid impersonation.",
  supportTitle: "Support",
  supportLead: "Choose a support channel:",
  emailLabel: "Email: support@kryls.com",
  telegramAdminHref: "https://t.me/krylsadmin",
  telegramAdminLabel: "Telegram: @krylsadmin",
  security:
    "Security: KRYLS support will never ask for seed phrases, private keys, or wallet backup codes.",
  connectTitle: "Connect",
  connectLead: "Open official links:",
  openSite: "Open kryls.com",
  telegramAccount: "Telegram Account",
  xAccount: "X Account",
  footerRight: "kryls bot",
  copyright: "Copyright © 2026 KRYLS. | ver 1.4",
} as const;

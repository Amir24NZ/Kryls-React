import {
  Store,
  MessagesSquare,
  Shield,
  Layers,
  Scale,
  CheckCircle2,
} from "lucide-react";
import {
  APP_LAYER,
  ARCH_CARDS,
  ARCH_LAYERS,
  CAPABILITIES,
  DISPUTE_FLOW,
  ENGAGEMENT,
  ESCROW_INTERNALS,
  ESCROW_STACK,
  HERO,
  HOW_IT_WORKS,
  PRINCIPLES,
  PROTOCOL_LAYER,
  PROTOCOL_SECTIONS,
  SITE,
  STATE_PATHS,
  STATES,
  WORKFLOW,
} from "@/lib/content";
import { KrylsOrb } from "@/components/kryls-orb";
import { SocialLinks } from "@/components/social-links";

const CAP_ICONS = [Store, MessagesSquare, Shield, Layers, Scale, CheckCircle2];

function Rail({ nodes }: { nodes: readonly string[] }) {
  return (
    <div className="rail" role="list">
      {nodes.map((node, i) => (
        <span key={node} className="contents">
          <span className="rail-node" role="listitem">
            {node}
          </span>
          {i < nodes.length - 1 ? (
            <span className="rail-arrow" aria-hidden="true">
              →
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

function ProtocolSection({
  section,
}: {
  section: (typeof PROTOCOL_SECTIONS)[number];
}) {
  const intro = section.bullets.length ? section.paragraphs[0] : null;
  const rest = section.bullets.length ? section.paragraphs.slice(1) : section.paragraphs;

  return (
    <details className="card surface" id={section.id}>
      <summary>
        <span className="num">{section.num}</span>
        <h2 className="stitle">{section.title}</h2>
      </summary>
      <div className="card-body">
        {intro ? <p>{intro}</p> : null}
        {section.bullets.length ? (
          <ul>
            {section.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {rest.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {"emailLine" in section && section.emailLine ? (
          <p>
            For inquiries, contact:{" "}
            <a className="inline-link" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
        ) : null}
      </div>
    </details>
  );
}

export function Landing() {
  return (
    <main id="top">
      <section className="wrap hero-stage" aria-label="Protocol overview">
        <div className="hero-grid relative z-10">
          <div className="hero-copy">
            <div className="status-pill w-fit" aria-label="Launch status">
              <span className="pulse-dot" aria-hidden="true" />
              <span>{HERO.launch}</span>
            </div>
            <h1 className="title">
              <span className="title-grad">{HERO.title}</span>
            </h1>
            <p className="subtitle">{HERO.subtitle}</p>
            <blockquote className="quote">
              {HERO.quoteOff}
              <span>{HERO.quoteOn}</span>
            </blockquote>
            <div className="chips" aria-label="Highlights">
              {HERO.chips.map((chip) => (
                <span className="chip" key={chip.lead}>
                  <b>{chip.lead}</b> {chip.rest}
                </span>
              ))}
            </div>
            <div className="cta-col" aria-label="Primary action">
              <a className="btn btn-primary" href={SITE.inquiryMailto} aria-label="Email support">
                {HERO.cta}
              </a>
              <SocialLinks />
            </div>
          </div>
          <div className="mt-4 md:mt-0" aria-hidden="true">
            <KrylsOrb />
          </div>
        </div>
      </section>

      <section className="wrap section cv" aria-labelledby="principles-title">
        <div className="panel surface">
          <p className="section-kicker">What it is</p>
          <h2 id="principles-title" className="section-title">
            A non-custodial escrow protocol designed for digital services
          </h2>
          <p className="section-lead">
            It provides the financial infrastructure required to move a digital engagement from
            Agreement → Funding → Execution → Approval → Settlement without requiring a
            centralized intermediary to control the escrowed funds.
          </p>
          <div className="grid-principles mt-5">
            {PRINCIPLES.map((item) => (
              <article key={item.name} className="principle surface">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section cv" aria-labelledby="layers-title">
        <p className="section-kicker">Why it exists</p>
        <h2 id="layers-title" className="section-title">
          Application coordinates. Protocol settles.
        </h2>
        <p className="section-lead">
          Traditional freelancing platforms place a large amount of trust in a centralized service.
          KRYLS separates the application layer from the financial settlement layer.
        </p>
        <div className="split mt-5">
          <article className="split-card panel surface">
            <h3>{APP_LAYER.title}</h3>
            <p>{APP_LAYER.line}</p>
            <div className="tag-row">
              {APP_LAYER.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="split-card protocol panel surface">
            <h3>{PROTOCOL_LAYER.title}</h3>
            <p>{PROTOCOL_LAYER.line}</p>
            <div className="tag-row">
              {PROTOCOL_LAYER.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="how-it-works" className="wrap section cv" aria-labelledby="how-title">
        <p className="section-kicker">How it works</p>
        <h2 id="how-title" className="section-title">
          From project to settlement
        </h2>
        <p className="section-lead">
          Wallet-based identity, client / freelancer roles, and a project lifecycle that ends in
          on-chain settlement — not discretionary platform control.
        </p>
        <div className="mt-5">
          <Rail nodes={WORKFLOW} />
        </div>
        <ol className="flow mt-5">
          {HOW_IT_WORKS.map((step) => (
            <li key={step.n} className="flow-step surface">
              <div className="n">{step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="capabilities" className="wrap section cv" aria-labelledby="cap-title">
        <p className="section-kicker">Core capabilities</p>
        <h2 id="cap-title" className="section-title">
          The platform around the protocol
        </h2>
        <p className="section-lead">
          The protocol is surrounded by a Web3 application designed to make the underlying
          infrastructure usable.
        </p>
        <div className="cap-grid mt-5">
          {CAPABILITIES.map((item, i) => {
            const Icon = CAP_ICONS[i];
            return (
              <article key={item.title} className="cap surface">
                <div className="icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
        <div className="cap-grid mt-4">
          {ENGAGEMENT.map((item) => (
            <article key={item.title} className="cap surface">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="escrow" className="wrap section cv" aria-labelledby="escrow-title">
        <div className="panel surface">
          <p className="section-kicker">Non-custodial escrow</p>
          <h2 id="escrow-title" className="section-title">
            The platform should coordinate the work — not own the money.
          </h2>
          <p className="section-lead">
            The application coordinates the relationship. The protocol governs the settlement.
            Critical financial operations are represented by explicit protocol logic.
          </p>
          <div className="stack stack-narrow mt-6">
            {ESCROW_STACK.map((layer) => (
              <div key={layer} className="stack-layer">
                {layer}
              </div>
            ))}
          </div>
          <div className="escrow-box surface mt-5">
            <p className="text-dim mb-2 text-sm font-bold tracking-[0.14em]">CLIENT → FUND</p>
            <h3>KRYLS ESCROW</h3>
            <div className="internals">
              {ESCROW_INTERNALS.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <p className="text-dim mt-3 text-sm font-bold tracking-[0.14em]">SETTLEMENT → FREELANCER</p>
          </div>
          <p className="section-lead mt-5">
            Projects move through explicit states such as Created → Funded → Active → Completed,
            with additional paths for {STATE_PATHS}. Invalid transitions are rejected by the protocol.
          </p>
          <div className="mt-4">
            <Rail nodes={STATES} />
          </div>
        </div>
      </section>

      <section id="architecture" className="wrap section cv" aria-labelledby="arch-title">
        <p className="section-kicker">Architecture</p>
        <h2 id="arch-title" className="section-title">
          App layer, protocol layer, EVM
        </h2>
        <p className="section-lead">
          The escrow engine is built around several independent security boundaries.
        </p>
        <div className="arch-col mt-5">
          {ARCH_LAYERS.map((layer) => (
            <article key={layer.title} className="arch-layer surface">
              <h3>{layer.title}</h3>
              <p>{layer.text}</p>
            </article>
          ))}
        </div>
        <div className="cap-grid mt-4">
          {ARCH_CARDS.map((card) => (
            <article key={card.title} className="cap surface">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className="panel surface mt-4">
          <h3 className="text-lg font-extrabold tracking-tight">Dispute Resolution</h3>
          <p className="section-lead">
            Disputes are a first-class part of the KRYLS architecture. The application currently
            coordinates dispute workflow as an MVP off-chain component. The escrow contract is
            designed with on-chain dispute hooks and is prepared for Kleros-compatible dispute flows.
          </p>
          <div className="mt-4">
            <Rail nodes={DISPUTE_FLOW} />
          </div>
          <p className="note">
            Messaging architecture is XMTP-ready. Optional XMTP toggles and on-chain message event
            patterns are part of the contract design — not a claim of live XMTP messaging today.
          </p>
        </div>
      </section>

      <section id="networks" className="wrap section cv" aria-labelledby="net-title">
        <p className="section-kicker">Technology / network</p>
        <h2 id="net-title" className="section-title">
          Sepolia for escrow. Polygon for swap.
        </h2>
        <div className="net-grid mt-5">
          <article className="net-card panel surface">
            <h3>Ethereum Sepolia</h3>
            <div className="path">Ethereum Sepolia → KRYLS Escrow</div>
            <p>
              On-chain escrow for digital-service engagements. Supported test assets: USDT · USDC · DAI.
            </p>
          </article>
          <article className="net-card panel surface">
            <h3>Polygon</h3>
            <div className="path">Polygon → Swap</div>
            <p>
              Optional token-swap functionality designed for Polygon, using external liquidity
              sources. KRYLS does not control pricing, execution, or provide financial guarantees.
            </p>
          </article>
        </div>
        <p className="note">
          Current deployments are intended for development and testing unless explicitly stated
          otherwise. Stack: Solidity · Node.js / Express · Ethers.js · ERC-20 · EVM.
        </p>
      </section>

      <section id="status" className="wrap section cv" aria-labelledby="status-title">
        <div className="panel surface">
          <p className="section-kicker">Current project status</p>
          <h2 id="status-title" className="section-title">
            Coming Soon · Pre-Production
          </h2>
          <p className="section-lead">
            From tested protocol → toward production-ready infrastructure. KRYLS has progressed
            beyond a basic escrow prototype, with a Web3 application layer, wallet-based identity,
            freelancing marketplace, project lifecycle management, client / freelancer roles,
            communication layer, on-chain escrow, milestone architecture, and dispute architecture.
          </p>
          <p className="note">
            Passing tests are not a security audit. Current results are evidence of engineering
            maturity and tested behavior — not a guarantee of absolute security.
          </p>
          <p className="section-lead mt-4">
            KRYLS is designed for clients, companies, service providers, and teams worldwide that
            require standardized settlement and dispute handling for digital service engagements.
          </p>
        </div>
      </section>

      <section id="overview" className="wrap section cv pb-2" aria-label="Overview sections">
        <div className="cards-title">Protocol overview (10 sections)</div>
        {PROTOCOL_SECTIONS.map((section) => (
          <ProtocolSection key={section.id} section={section} />
        ))}
      </section>
    </main>
  );
}

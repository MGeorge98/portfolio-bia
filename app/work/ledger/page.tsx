import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Contact from '@/components/Contact';
import AnimatedCounter from '@/components/case-study/AnimatedCounter';
import BeforeAfter from '@/components/case-study/BeforeAfter';
import ProcessTabs, { type ProcessStep } from '@/components/case-study/ProcessTabs';
import LedgerDashboard from '@/components/case-study/LedgerDashboard';
import LedgerBeforeMock from '@/components/case-study/LedgerBeforeMock';
import NextProject from '@/components/case-study/NextProject';
import CaseStudyPreloader from '@/components/case-study/CaseStudyPreloader';
import { projectBySlug, projects } from '@/data/projects';

const PROJECT = projectBySlug('ledger')!;
const NEXT = projects[1]; // Atlas

const TITLE = 'Ledger — A treasury dashboard that reads like prose';
const DESCRIPTION =
  'Case study: the redesign of Ledger, a B2B treasury platform. 47 widgets reduced to 9, a reading-first cash-flow model, and an approvals surface unified into one quiet workspace.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/work/ledger' },
  openGraph: {
    type: 'article',
    title: TITLE,
    description: DESCRIPTION,
    url: '/work/ledger',
    publishedTime: '2025-12-01',
    authors: ['Bia Marques'],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const STEPS: ProcessStep[] = [
  {
    id: 'kill-list',
    num: 'Step 01',
    name: 'The Kill List',
    lead: (
      <>
        We started by <em>removing</em>, not adding.
      </>
    ),
    body: 'Every widget on the dashboard was audited against a single threshold: had any user touched it in the last thirty days? The answer arrived in colour-coded silence — most widgets were ornamental.',
    bullets: [
      '47 widgets at the start; 9 after the cull.',
      'Killed: 32. Merged: 8. Retained: 7.',
      'Retired six private spreadsheets the team had been quietly maintaining.',
    ],
    visual: <ProcessVisualA />,
  },
  {
    id: 'three-planes',
    num: 'Step 02',
    name: 'Three Planes',
    lead: (
      <>
        <em>Now · Soon · If.</em>
      </>
    ),
    body: 'The dashboard is structured as three reading planes. Now is today’s state. Soon is the next 30 days, projected. If is the scenario tail — what changes under stress. Each plane is a paragraph; the user reads top to bottom and stops when the answer arrives.',
    visual: <ProcessVisualB />,
  },
  {
    id: 'cash-flow',
    num: 'Step 03',
    name: 'Cash-flow Model',
    lead: <>From categories to <em>questions</em>.</>,
    body: 'The model used to be organised by accounting category. We rebuilt it around the questions operators actually open the page to ask: “Can we hire?” “Can we close the round?” “What breaks if the LATAM customer slips?” Each becomes a selectable lens with a written summary.',
    visual: <ProcessVisualC />,
  },
  {
    id: 'approvals',
    num: 'Step 04',
    name: 'Approvals',
    lead: <>One inbox. <em>Audit trail inline.</em></>,
    body: 'Approvals lived in email threads. We pulled them into a single triage surface with batch actions, a written audit trail, and a quiet rule: nothing leaves the inbox without context. Queue length dropped 6× in the first month.',
    visual: <ProcessVisualD />,
  },
  {
    id: 'motion',
    num: 'Step 05',
    name: 'Motion',
    lead: <>Numbers <em>settle</em>, never jolt.</>,
    body: 'Updates animate in the direction money actually moves. New cash arriving rises; expenses settle in from above. Latency is honest — small skeletons during fetches, no fake speed. The product stops feeling like software.',
    visual: <ProcessVisualE />,
  },
];

export default function LedgerPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Ledger — Treasury dashboard redesign',
    description: DESCRIPTION,
    creator: { '@type': 'Person', name: 'Bia Marques' },
    dateCreated: '2025',
    inLanguage: 'en',
    keywords: PROJECT.tags.join(', '),
    about: PROJECT.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <CaseStudyPreloader
        number={PROJECT.number}
        category={PROJECT.category}
        year={PROJECT.year}
        titleHtml={PROJECT.titleHtml}
      />
      <Nav solid />

      {/* HERO */}
      <div className="curtain">
      <header className="cs-hero cs-hero--ledger">
        <div className="cs-hero__grain" aria-hidden="true" />
        <div className="cs-hero__flicker" aria-hidden="true" />
        <div className="container">
          <div className="cs-hero__eyebrow">
            <a href="/" className="cs-hero__back">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M13 8H3M3 8l4-4M3 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Index
            </a>
            <span className="sep">/</span>
            <span>{PROJECT.number} of 04</span>
            <span className="sep">/</span>
            <span>{PROJECT.category}</span>
            <span className="sep">/</span>
            <span>{PROJECT.year}</span>
          </div>

          <h1
            className="cs-hero__title reveal"
            dangerouslySetInnerHTML={{ __html: PROJECT.titleHtml }}
          />

          <div className="cs-hero__lede">
            <p className="cs-hero__sub reveal">
              <strong>Ledger</strong> is a B2B treasury platform serving Series B+ operators —
              companies managing 8 to 9 figures of working capital across multiple entities. I led
              the redesign of the dashboard, cash-flow model, and approvals surface, paring four
              products into one quiet, reading-first workspace.
            </p>
            <div className="cs-hero__facts reveal">
              <div className="cs-hero__fact">
                <span className="k">Role</span>
                <span className="v">Product Design Lead</span>
              </div>
              <div className="cs-hero__fact">
                <span className="k">Duration</span>
                <span className="v">8 months</span>
              </div>
              <div className="cs-hero__fact">
                <span className="k">Team</span>
                <span className="v">3 design · 6 eng</span>
              </div>
              <div className="cs-hero__fact">
                <span className="k">Status</span>
                <span className="v">Shipped · Q4 2025</span>
              </div>
            </div>
          </div>

          <div className="cs-hero__cta reveal">
            <a className="btn btn--dark" href="https://ledger.example.com" target="_blank" rel="noreferrer">
              Visit Ledger
              <svg className="btn__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn--outline" href="#outcomes">Skip to outcomes</a>
          </div>
        </div>
        <div className="cs-hero__scroll" aria-hidden="true">
          <span className="bar" />
          Scroll
        </div>
      </header>
      </div>

      {/* SHOWCASE */}
      <section className="cs-showcase" aria-label="Live dashboard preview">
        <div className="container">
          <div className="cs-showcase__inner reveal-mask">
            <LedgerDashboard />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats" aria-label="Key outcomes">
        <div className="container">
          <div className="stats__grid">
            <div className="stats__cell">
              <span className="stats__num">
                <AnimatedCounter to={38} />
                <span className="unit">%</span>
              </span>
              <span className="stats__lbl">Faster decisions</span>
              <span className="stats__copy">Time-to-action on weekly cash decisions, measured pre/post launch.</span>
            </div>
            <div className="stats__cell">
              <span className="stats__num">
                <AnimatedCounter to={6.2} decimals={1} />
                <span className="unit">×</span>
              </span>
              <span className="stats__lbl">Approvals throughput</span>
              <span className="stats__copy">Per-week, after the new triage inbox replaced email threads.</span>
            </div>
            <div className="stats__cell">
              <span className="stats__num">
                <AnimatedCounter to={47} /> → <em><AnimatedCounter to={9} duration={1700} /></em>
              </span>
              <span className="stats__lbl">Widgets on landing</span>
              <span className="stats__copy">Audited against thirty-day usage. The rest were quietly retired.</span>
            </div>
            <div className="stats__cell">
              <span className="stats__num">
                <AnimatedCounter to={220} thousands />
                <span className="unit">customers</span>
              </span>
              <span className="stats__lbl">Migrated</span>
              <span className="stats__copy">Across four entities and two regulators, with zero rollbacks.</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF */}
      <section className="brief" id="brief">
        <div className="container">
          <div className="brief__grid">
            <header className="brief__head reveal">
              <span className="brief__num">§ 01 — The Brief</span>
              <h2 className="brief__title">
                Ledger had grown into a <em>feature museum</em>. Operators came in with a question and left with a CSV.
              </h2>
            </header>
            <div className="brief__prose reveal">
              <p>
                The existing dashboard had been added to for three years without subtraction. Each
                team had earned its widget; nobody had the authority to remove one. The product
                worked the way large products work when nobody is watching the whole — a flea
                market of useful things, none arranged to be read.
              </p>
              <p>
                We started by following operators around. Every CFO had a private spreadsheet. The
                interesting numbers were exported, recombined, then pasted into Slack as the
                actual answer. Approvals lived in email threads where the audit trail was{' '}
                <em>whoever forwarded last</em>. The product had become a data warehouse with a
                cover.
              </p>
              <p>
                The brief, when we wrote it down, was unglamorous: take the 47 widgets and tell us
                which 9 deserve to be there. <strong>Surface the one decision the CFO came to make.</strong>{' '}
                Everything else either supports that decision or gets out of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="container">
          <header className="process__head reveal">
            <span className="process__num">§ 02 — Process</span>
            <h2 className="process__title">Five passes, in order. Each one removed more than it added.</h2>
          </header>
          <ProcessTabs steps={STEPS} />
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="compare-wrap" id="compare">
        <div className="container">
          <div className="compare-head reveal">
            <span className="compare-head__hint">Drag to compare</span>
            <h2 className="compare-head__title">
              The same morning, <em>before and after</em>.
            </h2>
          </div>
          <BeforeAfter
            before={<LedgerBeforeMock />}
            after={
              <>
                <div className="led-dash__bg" aria-hidden="true" />
                <LedgerDashboard />
              </>
            }
          />
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="tokens" id="system">
        <div className="container">
          <header className="tokens__head reveal">
            <span className="tokens__num">§ 03 — System</span>
            <h2 className="tokens__title">A small system, applied with <em>discipline</em>.</h2>
            <p className="tokens__copy">
              Eight colours, three type sizes, one density. The system prefers being boring to
              being clever — every interface decision answers to the same small grammar.
            </p>
          </header>

          <div className="tokens__grid">
            <div className="tok tok--span6">
              <span className="k">Display · 04</span>
              <div className="tok-type">
                <span className="display">The <em style={{ color: 'var(--sand)', fontStyle: 'italic' }}>quiet</em> grammar of a product.</span>
                <span className="data">Fraunces · 48 / 52 · -2% tracking</span>
                <span className="body">Body copy reads at 16/26 — long enough to be a paragraph, short enough that nobody scrolls past it.</span>
              </div>
            </div>

            <Swatch name="Tangerine" hex="#F0647D" />
            <Swatch name="Sand" hex="#F3BA72" />
            <Swatch name="Rust" hex="#833930" />
            <Swatch name="Mauve" hex="#B56788" />

            <div className="tok tok--span4">
              <span className="k">Spacing · 8pt</span>
              <div className="tok-grid">
                <i style={{ width: 4, height: 4 }} />
                <i style={{ width: 8, height: 8 }} />
                <i style={{ width: 16, height: 16 }} />
                <i style={{ width: 24, height: 24 }} />
                <i style={{ width: 32, height: 32 }} />
              </div>
              <span className="k">4 · 8 · 16 · 24 · 32</span>
            </div>

            <div className="tok tok--span4">
              <span className="k">Radius</span>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ width: 28, height: 28, background: 'rgba(247,241,230,.7)', borderRadius: 2 }} />
                <div style={{ width: 28, height: 28, background: 'rgba(247,241,230,.7)', borderRadius: 6 }} />
                <div style={{ width: 28, height: 28, background: 'rgba(247,241,230,.7)', borderRadius: 12 }} />
                <div style={{ width: 28, height: 28, background: 'var(--cream)', borderRadius: 999 }} />
              </div>
              <span className="k">2 · 6 · 12 · pill</span>
            </div>

            <div className="tok tok--span4">
              <span className="k">Motion · ease</span>
              <span className="v" style={{ fontFamily: 'var(--mono)', fontSize: 14, lineHeight: 1.5 }}>
                cubic-bezier(.16,.84,.3,1)
              </span>
              <span className="k">Settle, never overshoot.</span>
            </div>

            <div className="tok tok--span6">
              <span className="k">Buttons</span>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--coral)', color: '#fff', padding: '8px 16px', borderRadius: 999, fontSize: 12, fontWeight: 500, fontFamily: 'var(--sans)' }}>
                  Primary · forward →
                </span>
                <span style={{ background: 'transparent', color: 'var(--cream)', border: '1px solid rgba(247,241,230,.4)', padding: '8px 16px', borderRadius: 999, fontSize: 12, fontWeight: 500, fontFamily: 'var(--sans)' }}>
                  Ghost
                </span>
                <span style={{ background: 'var(--cream)', color: 'var(--ink)', padding: '8px 16px', borderRadius: 999, fontSize: 12, fontWeight: 500, fontFamily: 'var(--sans)' }}>
                  Confirm
                </span>
              </div>
              <span className="k">One pill family · three weights of certainty</span>
            </div>

            <div className="tok tok--span6">
              <span className="k">Numbers · settle behaviour</span>
              <span className="v">$<em>42.8</em>M <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: '#A4E0B8', marginLeft: 8 }}>▲ 3.2%</span></span>
              <span className="k">Hero figure · monospaced delta · easeOutCubic 1400ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bloom" id="outcomes">
        <div className="container">
          <header className="bloom__head reveal">
            <span className="bloom__num">§ 04 — Outcomes</span>
            <h2 className="bloom__title">Twelve weeks <em>after launch</em>.</h2>
          </header>

          <div className="stats__grid" style={{ borderColor: 'rgba(47,34,38,.18)' }}>
            <div className="stats__cell" style={{ borderColor: 'rgba(47,34,38,.18)' }}>
              <span className="stats__num"><AnimatedCounter to={4.7} decimals={1} /><span className="unit">/5</span></span>
              <span className="stats__lbl">CFO satisfaction</span>
              <span className="stats__copy">Up from 3.1 on the legacy product.</span>
            </div>
            <div className="stats__cell" style={{ borderColor: 'rgba(47,34,38,.18)' }}>
              <span className="stats__num"><AnimatedCounter to={0} /></span>
              <span className="stats__lbl">Escalations</span>
              <span className="stats__copy">During the migration period — a first for this team.</span>
            </div>
            <div className="stats__cell" style={{ borderColor: 'rgba(47,34,38,.18)' }}>
              <span className="stats__num"><AnimatedCounter to={62} /><span className="unit">%</span></span>
              <span className="stats__lbl">Spreadsheet retirement</span>
              <span className="stats__copy">Of the pre-launch shadow tooling, decommissioned.</span>
            </div>
            <div className="stats__cell" style={{ borderColor: 'rgba(47,34,38,.18)' }}>
              <span className="stats__num"><AnimatedCounter to={14} /><span className="unit">m</span></span>
              <span className="stats__lbl">Median session</span>
              <span className="stats__copy">Time spent reading, not exporting. A new pattern of use.</span>
            </div>
          </div>

          <blockquote className="pullquote reveal">
            <span className="pullquote__mark" aria-hidden="true">&ldquo;</span>
            <div>
              <p className="pullquote__body">
                The new dashboard tells me a story. The old one made me build the story myself —
                every Monday morning, in the same spreadsheet I never wanted to maintain.
              </p>
              <span className="pullquote__attr">VP Treasury · Series C SaaS</span>
            </div>
          </blockquote>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <NextProject project={NEXT} />

      <Contact />
    </>
  );
}

/* ---------- Process step visuals (simple, on-brand) ---------- */

function ProcessVisualA() {
  // The Kill List — strikethrough widgets
  return (
    <div className="art art--ledger" style={{ padding: '8%', display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 6, position: 'absolute', inset: 0 }}>
      {Array.from({ length: 30 }).map((_, i) => {
        const killed = i % 3 !== 1;
        return (
          <div
            key={i}
            style={{
              background: killed ? 'rgba(255,255,255,.55)' : '#fff',
              border: '1px solid rgba(47,34,38,.14)',
              borderRadius: 4,
              minHeight: 32,
              opacity: killed ? 0.45 : 1,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {killed && (
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(45deg, transparent 47%, var(--rust) 49%, var(--rust) 51%, transparent 53%)',
                  opacity: 0.7,
                }}
              />
            )}
            <span style={{ position: 'absolute', top: 4, left: 6, fontFamily: 'var(--mono)', fontSize: 7, color: 'var(--ink-faint)', letterSpacing: '.14em' }}>
              W{String(i + 1).padStart(2, '0')}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ProcessVisualB() {
  // Three planes: Now / Soon / If
  const planes = [
    { lbl: 'Now', value: '$42.8M', copy: 'Cash on hand · 12 entities reconciled · close as of 06:00 UTC' },
    { lbl: 'Soon', value: '$38.6M', copy: 'Projected end-of-month after payroll, contractor settlements and Q3 taxes' },
    { lbl: 'If · LATAM slip', value: '$36.1M', copy: 'Scenario tail · 22-day delay on the largest LATAM AR balance' },
  ];
  return (
    <div className="art--ledger" style={{ position: 'absolute', inset: 0, padding: '8%', display: 'flex', flexDirection: 'column', gap: 12, background: 'linear-gradient(160deg,#F9D6A6,#F3BA72)' }}>
      {planes.map((p, i) => (
        <div
          key={p.lbl}
          style={{
            flex: 1,
            background: 'rgba(255,255,255,.92)',
            border: '1px solid rgba(47,34,38,.1)',
            borderRadius: 8,
            padding: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            opacity: 1 - i * 0.18,
          }}
        >
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-faint)', textTransform: 'uppercase', minWidth: 84 }}>
            {p.lbl}
          </span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--ink)', fontWeight: 300, minWidth: 100 }}>
            {p.value}
          </span>
          <span style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{p.copy}</span>
        </div>
      ))}
    </div>
  );
}

function ProcessVisualC() {
  // Cash-flow lenses
  const lenses = ['Can we hire?', 'Can we close?', 'If LATAM slips', 'Pricing change'];
  return (
    <div className="art--ledger" style={{ position: 'absolute', inset: 0, padding: '8%', display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>Lenses</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {lenses.map((l, i) => (
          <span
            key={l}
            style={{
              padding: '10px 16px',
              borderRadius: 999,
              fontFamily: 'var(--sans)',
              fontSize: 13,
              border: '1px solid rgba(47,34,38,.18)',
              background: i === 0 ? 'var(--ink)' : 'rgba(255,255,255,.7)',
              color: i === 0 ? 'var(--cream)' : 'var(--ink)',
            }}
          >
            {l}
          </span>
        ))}
      </div>
      <div
        style={{
          marginTop: 12,
          background: 'rgba(255,255,255,.92)',
          border: '1px solid rgba(47,34,38,.1)',
          borderRadius: 8,
          padding: 18,
          fontFamily: 'var(--serif)',
          fontWeight: 300,
          fontSize: 22,
          color: 'var(--ink)',
          letterSpacing: '-.01em',
          lineHeight: 1.3,
        }}
      >
        Yes — you can hire <em style={{ fontStyle: 'italic', color: 'var(--rust)' }}>14</em> roles before September without breaching the 18-month covenant.
      </div>
    </div>
  );
}

function ProcessVisualD() {
  // Approvals inbox
  const items = [
    { name: 'Acme Industrial · invoice', amount: '$84,200', flagged: true },
    { name: 'Payroll · EU · September', amount: '€612,400', flagged: false },
    { name: 'Cross-entity · MX → US', amount: '$42,000', flagged: true },
    { name: 'Refund · disputed card', amount: '$1,840', flagged: false },
  ];
  return (
    <div className="art--ledger" style={{ position: 'absolute', inset: 0, padding: '8%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>Approvals · 4 pending</span>
      {items.map((it) => (
        <div
          key={it.name}
          style={{
            background: 'rgba(255,255,255,.94)',
            border: '1px solid rgba(47,34,38,.1)',
            borderRadius: 8,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: it.flagged ? 'var(--coral)' : 'var(--slate)',
              boxShadow: it.flagged ? '0 0 0 3px rgba(240,100,125,.18)' : 'none',
            }}
          />
          <span style={{ fontSize: 13, color: 'var(--ink)' }}>{it.name}</span>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink)' }}>
            {it.amount}
          </span>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 9,
              padding: '4px 8px',
              borderRadius: 999,
              border: '1px solid rgba(47,34,38,.14)',
              color: 'var(--ink-soft)',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
            }}
          >
            Approve
          </span>
        </div>
      ))}
    </div>
  );
}

function ProcessVisualE() {
  // Motion / settle behavior
  return (
    <div className="art--ledger" style={{ position: 'absolute', inset: 0, padding: '8%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>Motion · settle</span>
      <div
        style={{
          background: 'rgba(255,255,255,.94)',
          border: '1px solid rgba(47,34,38,.1)',
          borderRadius: 12,
          padding: 24,
        }}
      >
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-faint)', textTransform: 'uppercase' }}>Cash on hand</span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 6 }}>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 56, fontWeight: 300, color: 'var(--ink)', letterSpacing: '-.02em' }}>
            $<em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>42.8</em>M
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#2F7A4F', letterSpacing: '.04em' }}>
            ▲ +$1.32M
          </span>
        </div>
        <svg viewBox="0 0 200 28" style={{ width: '100%', marginTop: 10 }}>
          <line x1="0" y1="14" x2="200" y2="14" stroke="rgba(47,34,38,.1)" />
          <path d="M0,18 C30,18 60,14 90,12 C120,10 150,6 200,4" stroke="#F0647D" strokeWidth="1.5" fill="none" />
          <circle cx="200" cy="4" r="2.5" fill="#F0647D" />
        </svg>
      </div>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', color: 'var(--ink-soft)' }}>
        easeOutCubic · 1400ms · numbers rise from below
      </span>
    </div>
  );
}

/* ---------- Color swatch token ---------- */
function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="tok tok--swatch tok--span2" aria-label={`${name} ${hex}`}>
      <div className="tok__chip" style={{ background: hex }} aria-hidden="true" />
      <span className="k" style={{ color: 'rgba(247,241,230,.85)' }}>{name}</span>
      <span className="k" style={{ color: 'rgba(247,241,230,.85)' }}>{hex}</span>
    </div>
  );
}

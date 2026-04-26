import Link from 'next/link';
import { projects } from '@/data/projects';

const ArrowOut = ({ small = false }: { small?: boolean }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 13L13 3M13 3H5M13 3V11"
      stroke="currentColor"
      strokeWidth={small ? 1.4 : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LedgerVisual = () => (
  <>
    <div className="art art--ledger" />
    <div className="mock">
      <div className="mock__bar">
        <div className="mock__dots">
          <i />
          <i />
          <i />
        </div>
        <div className="mock__tab">Q3 · Treasury · All entities</div>
      </div>
      <div className="mock__row">
        <div className="mock__col" style={{ flex: 0.9 }}>
          <div className="mock__card">
            <span className="mock__lbl">Cash on hand</span>
            <span className="mock__val">
              $<em>42.8</em>M
            </span>
            <span className="mock__delta">▲ 3.2% vs prior</span>
          </div>
          <div className="mock__card">
            <span className="mock__lbl">Runway</span>
            <span className="mock__val">28.4 mo</span>
            <div className="mock__bars">
              <i style={{ height: '30%' }} />
              <i style={{ height: '55%' }} />
              <i style={{ height: '40%' }} />
              <i style={{ height: '70%' }} />
              <i style={{ height: '52%' }} />
              <i className="hl" style={{ height: '82%' }} />
              <i style={{ height: '64%' }} />
              <i style={{ height: '76%' }} />
            </div>
          </div>
        </div>
        <div className="mock__col" style={{ flex: 1.2 }}>
          <div className="mock__card">
            <span className="mock__lbl">Net flow · 30d</span>
            <div className="mock__chart">
              <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                <path
                  d="M0,48 C20,42 38,50 58,40 C78,30 96,36 118,24 C138,13 158,18 180,10 L200,6 L200,60 L0,60 Z"
                  fill="rgba(240,100,125,.18)"
                />
                <path
                  d="M0,48 C20,42 38,50 58,40 C78,30 96,36 118,24 C138,13 158,18 180,10 L200,6"
                  stroke="#F0647D"
                  strokeWidth="1.3"
                  fill="none"
                />
              </svg>
            </div>
            <div className="mock__list">
              <div className="mock__row-item">
                <span>Operating · US</span>
                <span>+1.2M</span>
              </div>
              <div className="mock__row-item">
                <span className="coral">Payroll · EU</span>
                <span>−480k</span>
              </div>
              <div className="mock__row-item">
                <span className="sand">Treasury · MM</span>
                <span>+320k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sheen" />
  </>
);

const AtlasVisual = () => (
  <>
    <div className="art art--atlas" />
    <div className="phone" aria-hidden="true">
      <div className="phone__status">
        <span>9:41</span>
        <span>●●●● 5G</span>
      </div>
      <div className="phone__hero">
        <span className="lbl">Available</span>
        <span className="amt">$12,408.22</span>
      </div>
      <div className="phone__list">
        <div className="phone__item">
          <span className="ic">
            <svg viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <div>Round-up · Savings</div>
          <span className="amt-sm">+$4.18</span>
        </div>
        <div className="phone__item">
          <span className="ic">
            <svg viewBox="0 0 12 12" fill="none">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <div>Cedro Coffee</div>
          <span className="amt-sm neg">−$6.40</span>
        </div>
        <div className="phone__item">
          <span className="ic">
            <svg viewBox="0 0 12 12" fill="none">
              <path
                d="M6 2v8M3 5l3-3 3 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>Deposit · Payroll</div>
          <span className="amt-sm">+$3,812.00</span>
        </div>
        <div className="phone__item">
          <span className="ic">
            <svg viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="3.2" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
          <div>Transit · Metro</div>
          <span className="amt-sm neg">−$2.10</span>
        </div>
      </div>
    </div>
    <div className="sheen" />
  </>
);

const HalcyonVisual = () => (
  <>
    <div className="art art--halcyon" />
    <div className="system" aria-hidden="true">
      <div className="sys-cell" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
        <span className="sys-lbl">Display · 04</span>
        <span className="sys-type">
          The <em>quiet</em> grammar of a product.
        </span>
        <span className="sys-lbl">Fraunces · 48 / 52</span>
      </div>
      <div className="sys-cell">
        <span className="sys-lbl">Tangerine</span>
        <div className="sys-swatch" style={{ background: '#F0647D' }} />
        <span className="sys-lbl">#F0647D</span>
      </div>
      <div className="sys-cell">
        <span className="sys-lbl">Sand</span>
        <div className="sys-swatch" style={{ background: '#F3BA72' }} />
        <span className="sys-lbl">#F3BA72</span>
      </div>
      <div className="sys-cell">
        <span className="sys-lbl">Rust</span>
        <div className="sys-swatch" style={{ background: '#833930' }} />
        <span className="sys-lbl">#833930</span>
      </div>
      <div className="sys-cell">
        <span className="sys-lbl">Mauve</span>
        <div className="sys-swatch" style={{ background: '#B56788' }} />
        <span className="sys-lbl">#B56788</span>
      </div>
      <div className="sys-cell" style={{ gridColumn: 'span 2' }}>
        <span className="sys-lbl">Spacing · 8pt</span>
        <div className="sys-dots">
          <i style={{ width: 4, height: 4, borderRadius: 999, background: 'rgba(247,241,230,.6)' }} />
          <i style={{ width: 8, height: 8, borderRadius: 999, background: 'rgba(247,241,230,.6)' }} />
          <i style={{ width: 16, height: 16, borderRadius: 999, background: 'rgba(247,241,230,.6)' }} />
          <i style={{ width: 24, height: 24, borderRadius: 999, background: 'var(--cream)' }} />
        </div>
        <span className="sys-lbl">4 · 8 · 16 · 24</span>
      </div>
      <div className="sys-cell" style={{ gridColumn: 'span 2' }}>
        <span className="sys-lbl">Radius</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ width: 20, height: 20, background: 'rgba(247,241,230,.6)', borderRadius: 2 }} />
          <div style={{ width: 20, height: 20, background: 'rgba(247,241,230,.6)', borderRadius: 6 }} />
          <div style={{ width: 20, height: 20, background: 'rgba(247,241,230,.6)', borderRadius: 12 }} />
          <div style={{ width: 20, height: 20, background: 'var(--cream)', borderRadius: 999 }} />
        </div>
        <span className="sys-lbl">2 · 6 · 12 · pill</span>
      </div>
      <div className="sys-cell" style={{ gridColumn: 'span 2' }}>
        <span className="sys-lbl">Button · Primary</span>
        <div
          style={{
            background: 'var(--coral)',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: 999,
            fontSize: '9.5px',
            fontWeight: 500,
            textAlign: 'center',
            fontFamily: 'var(--sans)',
          }}
        >
          Read more →
        </div>
        <span className="sys-lbl">Warm · forward</span>
      </div>
    </div>
    <div className="sheen" />
  </>
);

const FieldnotesVisual = () => (
  <>
    <div className="art art--fieldnotes" />
    <div className="editorial" aria-hidden="true">
      <div className="edi-col">
        <span className="edi-kicker">Issue 14 — Interviews</span>
        <div className="edi-img" />
        <span className="edi-title">
          On the slow <em>craft</em> of tools.
        </span>
        <p className="edi-body">
          A conversation with a toolmaker in Kyoto about patience, repetition, and the things that
          don&apos;t show in a photo.
        </p>
        <div className="edi-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="edi-col">
        <span className="edi-kicker">Essay · 08 min</span>
        <span className="edi-title">
          Interface as <em>furniture</em>: what software learns from a room.
        </span>
        <p className="edi-body">
          A working product disappears like good furniture. It arranges attention without demanding
          any of its own — it decides, in advance, what not to show.
        </p>
        <div className="edi-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
          <span className="tag" style={{ fontSize: '9.5px', padding: '3px 8px' }}>
            Field Notes
          </span>
          <span className="tag" style={{ fontSize: '9.5px', padding: '3px 8px' }}>
            Reading 12m
          </span>
        </div>
      </div>
    </div>
    <div className="sheen" />
  </>
);

const VISUALS = {
  ledger: LedgerVisual,
  atlas: AtlasVisual,
  halcyon: HalcyonVisual,
  fieldnotes: FieldnotesVisual,
} as const;

export default function Work() {
  return (
    <section className="work" id="work" data-screen-label="02 Work">
      <div className="container">
        <header className="sec-head">
          <h2 className="sec-head__title reveal">
            Four projects, chosen for the <em>thinking</em> behind them.
          </h2>
        </header>

        <div className="projects">
          {projects.map((p, i) => {
            const Visual = VISUALS[p.slug];
            const flip = i % 2 === 1;
            return (
              <article key={p.slug} className={`project${flip ? ' project--flip' : ''}`}>
                {flip ? (
                  <>
                    <div className="project__visual reveal-mask">
                      <Visual />
                    </div>
                    <div className="project__info reveal">
                      <ProjectMeta project={p} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project__info reveal">
                      <ProjectMeta project={p} />
                    </div>
                    <div className="project__visual reveal-mask">
                      <Visual />
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectMeta({ project }: { project: (typeof projects)[number] }) {
  return (
    <>
      <div className="project__meta">
        <span>{project.number} / 04</span>
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="project__title" dangerouslySetInnerHTML={{ __html: project.titleHtml }} />
      <p className="project__blurb">{project.blurb}</p>
      <div className="project__tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <Link href={project.href} className="project__link">
        Read the case study
        <ArrowOut small />
      </Link>
    </>
  );
}

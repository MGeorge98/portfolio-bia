/**
 * Enlarged Ledger dashboard mock — used by the case study hero showcase
 * and as the "after" pane of the before/after slider.
 */
export default function LedgerDashboard() {
  return (
    <>
      <div className="led-dash__bg" aria-hidden="true" />
      <div className="led-dash">
        <div className="led-dash__bar">
          <span className="led-dash__brand">
            <span className="dot" /> Ledger
          </span>
          <div className="led-dash__nav">
            <span className="is-active">Dashboard</span>
            <span>Cash flow</span>
            <span>Approvals</span>
            <span>Reports</span>
          </div>
          <span className="led-dash__chip">Q3 · All entities</span>
        </div>

        <div className="led-dash__hero">
          <div className="led-dash__lead">
            <span className="k">Cash on hand · today</span>
            <span className="v">
              $<em>42.8</em>M
            </span>
            <span className="delta">▲ 3.2% week-over-week · +$1.32M net</span>
            <p>
              You can run payroll, settle Q3 contractor invoices, and still keep 24 months of
              runway above the 18-month covenant. The board call on Thursday won&apos;t need a
              fresh model.
            </p>
          </div>
          <div className="led-dash__chart">
            <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
              Net flow · 30 days
            </span>
            <svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="lg-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F0647D" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#F0647D" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,90 C30,82 56,98 86,78 C116,58 144,72 178,52 C212,32 244,40 276,24 L320,12 L320,120 L0,120 Z"
                fill="url(#lg-area)"
              />
              <path
                d="M0,90 C30,82 56,98 86,78 C116,58 144,72 178,52 C212,32 244,40 276,24 L320,12"
                stroke="#F0647D"
                strokeWidth="1.5"
                fill="none"
              />
              <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(47,34,38,.08)" strokeDasharray="2 4" />
              <circle cx="276" cy="24" r="4" fill="#F0647D" />
              <circle cx="276" cy="24" r="9" fill="rgba(240,100,125,.18)" />
            </svg>
          </div>
        </div>

        <div className="led-dash__cards">
          <div className="led-dash__card">
            <span className="k">Runway</span>
            <span className="v">28.4 mo</span>
            <span className="b">12 entities · weighted avg</span>
          </div>
          <div className="led-dash__card">
            <span className="k">Outflows · this week</span>
            <span className="v">
              $<em>4.2</em>M
            </span>
            <span className="b">Payroll · contractors · taxes</span>
          </div>
          <div className="led-dash__card">
            <span className="k">Pending approvals</span>
            <span className="v">9</span>
            <span className="b">3 over $50k · 2 cross-entity</span>
          </div>
        </div>
      </div>
    </>
  );
}

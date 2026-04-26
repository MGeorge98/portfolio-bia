/**
 * Intentionally dense "before" mock — 47 widgets crammed into one page,
 * mostly illegible numbers, no hierarchy. Used as the left pane of the
 * before/after slider.
 */

const Cell = ({ lbl, num, sparkline }: { lbl: string; num: string; sparkline?: boolean }) => (
  <div className="led-before__cell">
    <span className="lbl">{lbl}</span>
    <span className="num">{num}</span>
    {sparkline ? <div className="spark" /> : (
      <div className="bars">
        <i style={{ height: 6 }} />
        <i style={{ height: 10 }} />
        <i style={{ height: 4 }} />
        <i style={{ height: 8 }} />
        <i style={{ height: 12 }} />
        <i style={{ height: 5 }} />
        <i style={{ height: 9 }} />
      </div>
    )}
  </div>
);

const cells: { lbl: string; num: string; sparkline?: boolean }[] = [
  { lbl: 'Cash · US', num: '$42.8M' },
  { lbl: 'Cash · EU', num: '€18.2M', sparkline: true },
  { lbl: 'Cash · MX', num: '$3.1M' },
  { lbl: 'Cash · BR', num: 'R$22M', sparkline: true },
  { lbl: 'AR · 0-30', num: '$2.1M' },
  { lbl: 'AR · 30-60', num: '$840K', sparkline: true },
  { lbl: 'AR · 60-90', num: '$216K' },
  { lbl: 'AR · 90+', num: '$48K' },
  { lbl: 'AP · pending', num: '$1.4M', sparkline: true },
  { lbl: 'AP · scheduled', num: '$3.2M' },
  { lbl: 'AP · disputed', num: '$92K' },
  { lbl: 'Payroll · US', num: '$2.8M' },
  { lbl: 'Payroll · EU', num: '€620K', sparkline: true },
  { lbl: 'Burn · 30d', num: '$1.5M' },
  { lbl: 'Burn · 90d', num: '$4.6M', sparkline: true },
  { lbl: 'Runway', num: '28 mo' },
  { lbl: 'MRR', num: '$3.4M' },
  { lbl: 'ARR', num: '$40.8M', sparkline: true },
  { lbl: 'Net new', num: '$182K' },
  { lbl: 'Churn', num: '1.4%' },
  { lbl: 'Gross margin', num: '74.2%', sparkline: true },
  { lbl: 'CAC', num: '$3,840' },
  { lbl: 'LTV', num: '$28k' },
  { lbl: 'NRR', num: '118%' },
  { lbl: 'FX exposure', num: '$8.2M' },
  { lbl: 'Hedge ratio', num: '64%' },
  { lbl: 'MM yield', num: '4.82%', sparkline: true },
  { lbl: 'Treas. ladder', num: '6 rungs' },
  { lbl: 'Loan covenant', num: '1.8x' },
  { lbl: 'Debt', num: '$12M' },
  { lbl: 'Interest paid', num: '$72K' },
  { lbl: 'Card spend', num: '$284K' },
  { lbl: 'Card disputes', num: '4' },
  { lbl: 'Bank fees', num: '$11.8K' },
  { lbl: 'Wire fees', num: '$2.4K' },
  { lbl: 'Failed payments', num: '6' },
  { lbl: 'Refunds', num: '$8.2K' },
  { lbl: 'Tax accrual', num: '$1.1M' },
  { lbl: 'VAT recovery', num: '€48K' },
  { lbl: 'Bonus accrual', num: '$420K' },
  { lbl: 'Equity grants', num: '$2.1M' },
  { lbl: 'PnL · MTD', num: '+$1.2M' },
  { lbl: 'PnL · YTD', num: '+$8.4M' },
  { lbl: 'Forecast var.', num: '+3.8%' },
  { lbl: 'Cash conv.', num: '38d' },
  { lbl: 'DSO', num: '42d' },
  { lbl: 'DPO', num: '32d' },
];

export default function LedgerBeforeMock() {
  return (
    <div className="led-before" aria-hidden="true">
      <div className="led-before__bar">
        <div className="pill" style={{ width: 78 }} />
        <div className="pill" style={{ width: 58 }} />
        <div className="pill" style={{ width: 64 }} />
        <div className="pill" style={{ width: 48 }} />
        <div className="pill" style={{ width: 62 }} />
        <div className="pill" style={{ width: 50 }} />
        <div className="pill" style={{ width: 70 }} />
        <div className="pill" style={{ width: 44, marginLeft: 'auto' }} />
      </div>
      <div className="led-before__grid">
        {cells.slice(0, 30).map((c) => (
          <Cell key={c.lbl} lbl={c.lbl} num={c.num} sparkline={c.sparkline} />
        ))}
      </div>
    </div>
  );
}

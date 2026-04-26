'use client';

import { useState, type ReactNode } from 'react';

export type ProcessStep = {
  id: string;
  num: string;
  name: string;
  lead: ReactNode;
  body: ReactNode;
  bullets?: string[];
  visual: ReactNode;
};

export default function ProcessTabs({ steps }: { steps: ProcessStep[] }) {
  const [active, setActive] = useState(steps[0]?.id);
  const current = steps.find((s) => s.id === active) ?? steps[0];

  return (
    <>
      <div className="process__tabs" role="tablist" aria-label="Process steps">
        {steps.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={s.id === active}
            aria-controls={`panel-${s.id}`}
            id={`tab-${s.id}`}
            className="process__tab"
            onClick={() => setActive(s.id)}
            type="button"
          >
            <span className="process__tab-num">{s.num}</span>
            <span className="process__tab-name">{s.name}</span>
          </button>
        ))}
      </div>

      <div
        key={current.id}
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="process__panel"
        data-active="true"
      >
        <div className="process__copy">
          <p className="lead">{current.lead}</p>
          <p>{current.body}</p>
          {current.bullets && (
            <ul>
              {current.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="process__visual">{current.visual}</div>
      </div>
    </>
  );
}

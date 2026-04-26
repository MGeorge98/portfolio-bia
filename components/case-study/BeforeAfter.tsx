'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
};

export default function BeforeAfter({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(0.5);
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((x: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = (x - rect.left) / rect.width;
    setPos(Math.min(1, Math.max(0, next)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => setFromClientX(e.clientX);
    const stop = () => setDragging(false);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
    };
  }, [dragging, setFromClientX]);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    setFromClientX(e.clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 0.04));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(1, p + 0.04));
  };

  const styleVar = { '--pos': `${pos * 100}%` } as React.CSSProperties;

  return (
    <div
      ref={ref}
      className="compare"
      style={styleVar}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
      role="slider"
      aria-label="Compare before and after"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos * 100)}
      tabIndex={0}
    >
      <div className="compare__pane compare__pane--before" aria-hidden="false">
        {before}
      </div>
      <div className="compare__pane compare__pane--after">{after}</div>
      <span className="compare__lbl compare__lbl--before">{beforeLabel}</span>
      <span className="compare__lbl compare__lbl--after">{afterLabel}</span>
      <div className="compare__handle" aria-hidden="true">
        <span className="compare__knob">
          <svg viewBox="0 0 18 18" fill="none">
            <path
              d="M5 4L1 9l4 5M13 4l4 5-4 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

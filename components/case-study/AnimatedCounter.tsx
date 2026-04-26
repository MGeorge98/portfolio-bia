'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** When true, separators (commas) are inserted into the integer part. */
  thousands?: boolean;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const formatValue = (value: number, decimals: number, thousands: boolean) => {
  const fixed = value.toFixed(decimals);
  if (!thousands) return fixed;
  const [whole, frac] = fixed.split('.');
  const withSep = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return frac !== undefined ? `${withSep}.${frac}` : withSep;
};

export default function AnimatedCounter({
  to,
  duration = 1400,
  decimals = 0,
  prefix = '',
  suffix = '',
  thousands = false,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(to);
      return;
    }

    let raf = 0;
    let started = false;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setValue(to * easeOutCubic(t));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {formatValue(value, decimals, thousands)}
      {suffix}
    </span>
  );
}

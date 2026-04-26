'use client';

import { useEffect, useRef } from 'react';

const ROLES = [
  'product designer',
  'systems thinker',
  'typography nerd',
  'motion obsessive',
  'quiet craftsman',
  'editorial designer',
];

export default function Rotator() {
  const stageRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const mount = (text: string) => {
      const el = document.createElement('span');
      el.className = 'word';
      el.textContent = text;
      stage.appendChild(el);
      return el;
    };

    let current = mount(ROLES[0]);
    requestAnimationFrame(() => current.classList.add('in'));

    // Size the stage to widest word to avoid layout jump
    const sizer = document.createElement('span');
    sizer.style.cssText =
      'position:absolute;visibility:hidden;white-space:nowrap;font:inherit;font-style:italic;font-weight:400';
    stage.appendChild(sizer);
    let maxW = 0;
    for (const r of ROLES) {
      sizer.textContent = r;
      maxW = Math.max(maxW, sizer.offsetWidth);
    }
    stage.style.minWidth = Math.ceil(maxW + 4) + 'px';
    sizer.remove();

    if (reduce) return;

    let i = 0;
    const interval = window.setInterval(() => {
      i = (i + 1) % ROLES.length;
      const prev = current;
      const next = mount(ROLES[i]);
      prev.classList.remove('in');
      prev.classList.add('out');
      requestAnimationFrame(() => next.classList.add('in'));
      window.setTimeout(() => prev.remove(), 620);
      current = next;
    }, 2400);

    return () => {
      clearInterval(interval);
      while (stage.firstChild) stage.removeChild(stage.firstChild);
    };
  }, []);

  return <span className="stage" ref={stageRef} aria-label="rotating roles" />;
}

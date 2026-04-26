'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Interactive() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Nav scroll state
    const nav = document.getElementById('nav');
    const onScroll = () => nav?.classList.toggle('is-scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Reveal observer
    const items = document.querySelectorAll<HTMLElement>('.reveal, .reveal-mask');
    let io: IntersectionObserver | null = null;
    if (reduce) {
      items.forEach((el) => el.classList.add('in'));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              const el = e.target as HTMLElement;
              const d = parseInt(el.dataset.delay || '0', 10);
              window.setTimeout(() => el.classList.add('in'), d);
              io!.unobserve(el);
            }
          }
        },
        { threshold: 0.14, rootMargin: '0px 0px -60px 0px' },
      );
      items.forEach((el) => io!.observe(el));
    }

    // Hero headline staggered line reveal
    const lines = document.querySelectorAll<HTMLElement>('.hero__headline .line > span');
    if (reduce) {
      lines.forEach((s) => {
        s.style.opacity = '1';
      });
    } else {
      lines.forEach((inner, i) => {
        inner.style.transform = 'translateY(105%)';
        inner.style.opacity = '0';
        inner.style.transition = `transform 900ms cubic-bezier(.16,.84,.3,1) ${
          160 + i * 120
        }ms, opacity 900ms ease ${160 + i * 120}ms`;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            inner.style.transform = 'translateY(0)';
            inner.style.opacity = '1';
          }),
        );
      });
    }

    // Smooth anchor scroll (delegated)
    const anchorHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href') || '';
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      const y = (t as HTMLElement).getBoundingClientRect().top + window.scrollY - 10;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    document.addEventListener('click', anchorHandler);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', anchorHandler);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}

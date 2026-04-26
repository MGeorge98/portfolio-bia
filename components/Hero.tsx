"use client";

import { motion } from 'framer-motion';

const ArrowOut = () => (
  <svg className="btn__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 13L13 3M13 3H5M13 3V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const spring = { type: 'spring', stiffness: 100, damping: 20 } as const;

function word(i: number) {
  return {
    hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { ...spring, delay: 0.15 + i * 0.065 },
    },
  };
}

const taglineVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ...spring, delay: 0.72 } },
};

const ctasVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ...spring, delay: 0.9 } },
};


// Line 1: I make experiences people
// Line 2: actually <em>enjoy</em>.
const LINE1 = ['I', 'make', 'experiences', 'people'];

export default function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hero__tint" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__scan" aria-hidden="true" />
      <div className="hero__vignette" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__flicker" aria-hidden="true" />

      <div className="hero__block">
        <h1
          className="hero__headline"
          aria-label="I make experiences people actually enjoy."
        >
          <span className="hero__line">
            {LINE1.map((w, i) => (
              <motion.span
                key={w}
                className="hero__word"
                variants={word(i)}
                initial="hidden"
                animate="visible"
              >
                {w}
              </motion.span>
            ))}
          </span>

          <span className="hero__line">
            <motion.span
              className="hero__word"
              variants={word(LINE1.length)}
              initial="hidden"
              animate="visible"
            >
              actually
            </motion.span>
            <span className="hero__highlight">
              <motion.span
                className="hero__word"
                variants={word(LINE1.length + 1)}
                initial="hidden"
                animate="visible"
              >
                enjoy
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.p
          className="hero__tagline"
          variants={taglineVariant}
          initial="hidden"
          animate="visible"
        >
          Sometimes with AI. Always with other humans.
        </motion.p>

        <motion.div
          className="hero__ctas"
          variants={ctasVariant}
          initial="hidden"
          animate="visible"
        >
          <a href="#work" className="btn btn--primary">
            View my work
            <ArrowOut />
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

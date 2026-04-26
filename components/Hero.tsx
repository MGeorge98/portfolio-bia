import Rotator from './Rotator';

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
      <div className="hero__scan" aria-hidden="true" />
      <div className="hero__vignette" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__flicker" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__eyebrow reveal" data-delay="0">
          <span className="tick" aria-hidden="true" />
          Portfolio — Vol. 04 · 2022–2026
        </div>

        <div>
          <h1 className="hero__headline" aria-label="Hi! I am Bia">
            <span className="line">
              <span>Hi!</span>
            </span>
            <span className="line">
              <span>
                I am <em>Bia.</em>
              </span>
            </span>
          </h1>

          <p className="hero__rotator reveal" data-delay="420" aria-live="polite">
            <span className="pre">I am a</span>
            <Rotator />
          </p>
        </div>

        <div className="hero__meta">
          <p className="hero__sub reveal" data-delay="480">
            <strong>Bia Marques</strong> — product designer crafting calm, carefully considered
            interfaces for teams that take craft seriously. Currently focused on financial tooling,
            design systems, and the slow art of making software feel inevitable.
          </p>
          <div className="hero__info reveal" data-delay="540">
            <span className="lbl">Based</span>
            <span className="val">Lisbon → remote</span>
            <span className="lbl" style={{ marginTop: 10 }}>
              Status
            </span>
            <span className="val avail">Taking select projects — Q3</span>
          </div>
          <div className="hero__ctas reveal" data-delay="600">
            <a href="#work" className="btn btn--primary">
              View my work
              <ArrowOut />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="bar" />
        Scroll
      </div>
      <div className="hero__credit" aria-hidden="true">
        IDX · 001 / 004
      </div>
    </section>
  );
}

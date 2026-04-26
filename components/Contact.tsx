import Clock from './Clock';

const ArrowOut = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width={size} height={size}>
    <path
      d="M3 13L13 3M13 3H5M13 3V11"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDown = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 2v9M4 8l4 4 4-4M3 14h10"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Contact() {
  return (
    <section className="contact" id="contact" data-screen-label="04 Contact">
      <div className="container">
        <header className="sec-head">
          <div className="sec-head__num">§ 03 — Contact</div>
          <h2 className="sec-head__title reveal">
            A short note is always <em>welcome</em>.
          </h2>
          <div className="sec-head__aside">Replies within 48 hr</div>
        </header>

        <div className="contact__inner">
          <h3 className="contact__title reveal">
            Let&apos;s build something
            <br />
            <em>considered.</em>
          </h3>
          <div className="contact__right reveal">
            <p className="contact__blurb">
              I&apos;m taking on a small number of projects from July — ideally product-led teams
              who care about craft and ship frequently. If that&apos;s you, say hello.
            </p>
            <a className="contact__email" href="mailto:hello@bia.studio">
              hello@bia.studio
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 13L13 3M13 3H5M13 3V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="contact__socials">
              <a className="soc" href="https://www.linkedin.com/in/biamarques" rel="me">
                LinkedIn <ArrowOut />
              </a>
              <a className="soc" href="https://read.cv/biamarques" rel="me">
                Read.cv <ArrowOut />
              </a>
              <a className="soc" href="https://www.are.na/biamarques" rel="me">
                Are.na <ArrowOut />
              </a>
              <a className="soc" href="/resume.pdf">
                Résumé · PDF <ArrowDown />
              </a>
            </div>
          </div>
        </div>

        <footer className="footer">
          <span>© 2026 — Bia Marques</span>
          <span className="now">
            Local time · Lisbon · <Clock />
          </span>
          <span>Designed &amp; built with care</span>
        </footer>
      </div>
    </section>
  );
}

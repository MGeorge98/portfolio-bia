export default function About() {
  return (
    <section className="about" id="about" data-screen-label="03 About">
      <div className="container">
        <header className="sec-head">
          <div className="sec-head__num">§ 02 — About</div>
          <h2 className="sec-head__title reveal" style={{ color: 'var(--cream)' }}>
            A designer in search of the <em>obvious</em> answer.
          </h2>
          <div className="sec-head__aside">A short bio · FAQ-adjacent</div>
        </header>

        <div className="about__grid">
          <figure className="portrait reveal-mask" aria-label="Portrait placeholder">
            <div className="portrait__frame" />
            <figcaption className="portrait__tag">Portrait · 2026</figcaption>
            <span className="portrait__caption">Lisbon — 38.71°N</span>
          </figure>

          <div className="about__copy">
            <p className="about__lede reveal">
              I design <em>products</em> the way I&apos;d arrange a room — starting with what you
              want to do there, then removing everything that gets in the way.
            </p>
            <div className="about__prose reveal">
              <p>
                Ten years into this, I&apos;m mostly interested in the{' '}
                <strong>connective tissue</strong> of a product: the handoffs between screens, the
                defaults that decide what a team believes, the empty state that either welcomes you
                or quietly dismisses you. It&apos;s the least glamorous work, and it&apos;s where
                the real craft lives.
              </p>
              <p>
                I&apos;ve led design at two Series B startups and freelanced with product teams who
                care about shipping frequently and shipping well. I think a lot about{' '}
                <strong>typography, systems, and honest motion</strong> — and about writing
                interface copy that sounds like a person.
              </p>
              <p>
                Outside of client work I write <strong>Field Notes</strong>, a small publication on
                software craft, and I&apos;m slowly learning letterpress — the constraints are
                instructive.
              </p>
            </div>

            <div className="about__rail reveal">
              <div className="rail-item">
                <span className="k">Focus</span>
                <ul>
                  <li>
                    Product strategy <span>0→1 and beyond</span>
                  </li>
                  <li>
                    Interaction design <span>systems, motion</span>
                  </li>
                  <li>
                    Design systems <span>tokens, governance</span>
                  </li>
                  <li>
                    Brand &amp; editorial <span>type, art direction</span>
                  </li>
                </ul>
              </div>
              <div className="rail-item">
                <span className="k">Toolbox</span>
                <ul>
                  <li>
                    Figma <span>daily driver</span>
                  </li>
                  <li>
                    Framer / Linear <span>prototype &amp; ship</span>
                  </li>
                  <li>
                    A little HTML / CSS <span>enough to be dangerous</span>
                  </li>
                  <li>
                    Notion &amp; Paper <span>where thinking starts</span>
                  </li>
                </ul>
              </div>
              <div className="rail-item">
                <span className="k">Recognition</span>
                <ul>
                  <li>
                    Awwwards — SOTD <span>2024</span>
                  </li>
                  <li>
                    CSSDA · UI Design <span>2023</span>
                  </li>
                  <li>
                    Interviewed · Field Notes <span>2023</span>
                  </li>
                </ul>
              </div>
              <div className="rail-item">
                <span className="k">Selected clients</span>
                <ul>
                  <li>
                    Ledger Finance <span>lead · 2 yr</span>
                  </li>
                  <li>
                    Atlas Bank <span>consultant · 8 mo</span>
                  </li>
                  <li>
                    Halcyon Labs <span>systems lead</span>
                  </li>
                  <li>
                    Field Notes <span>editor-in-residence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span>Clarity over noise</span>
            <span>Systems over screens</span>
            <span>Motion with intent</span>
            <span>Typography first</span>
            <span>Small, careful decisions</span>
            <span>Interfaces that disappear</span>
            <span>Clarity over noise</span>
            <span>Systems over screens</span>
            <span>Motion with intent</span>
            <span>Typography first</span>
            <span>Small, careful decisions</span>
            <span>Interfaces that disappear</span>
          </div>
        </div>
      </div>
    </section>
  );
}

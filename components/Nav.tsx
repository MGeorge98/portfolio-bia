import Link from 'next/link';

type Props = {
  /** Use solid (cream) background by default — for routes other than the home page. */
  solid?: boolean;
  /** href targets — defaults route to the home page anchors. */
  homeHref?: string;
};

export default function Nav({ solid = false, homeHref = '/' }: Props) {
  const work = homeHref === '/' ? '#work' : '/#work';
  const about = homeHref === '/' ? '#about' : '/#about';
  const contact = homeHref === '/' ? '#contact' : '/#contact';

  return (
    <nav className={`nav${solid ? ' nav--solid' : ''}`} id="nav" aria-label="Primary">
      <Link href={homeHref === '/' ? '#top' : '/'} className="nav__mark" aria-label="Bia — home">
        <span className="dot" aria-hidden="true" /> Bia Marques
      </Link>
      <div className="nav__links">
        <Link className="nav__link" href={work}>
          Work
        </Link>
        <Link className="nav__link" href={about}>
          About
        </Link>
        <Link className="nav__link" href={contact}>
          Contact
        </Link>
      </div>
      <Link className="nav__cta" href={contact}>
        <span className="pulse" aria-hidden="true" />
        <span className="t">Available — Q3</span>
      </Link>
    </nav>
  );
}

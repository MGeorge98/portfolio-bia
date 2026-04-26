type Props = {
  number: string;
  category: string;
  year: string;
  titleHtml: string;
};

const SKIP_SCRIPT = `try{var k='cs-preload-shown';if(sessionStorage.getItem(k)){document.documentElement.classList.add('cs-preload-skip')}else{setTimeout(function(){try{sessionStorage.setItem(k,'1')}catch(e){}},3200)}}catch(e){}`;

export default function CaseStudyPreloader({ number, category, year, titleHtml }: Props) {
  const plate = (variant: 'upper' | 'lower') => (
    <div className={`cs-preloader__plate cs-preloader__plate--${variant}`}>
      <div className="cs-preloader__noise" aria-hidden="true" />
      <div className="cs-preloader__inner">
        <div className="cs-preloader__head">
          <span>§ {number} / 04</span>
          <span>{category}</span>
        </div>
        <h1 className="cs-preloader__title" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <div className="cs-preloader__foot">
          <span>{year}</span>
          <span>Case study — Bia Marques</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SKIP_SCRIPT }} />
      <div className="cs-preloader" aria-hidden="true">
        {plate('upper')}
        {plate('lower')}
      </div>
    </>
  );
}

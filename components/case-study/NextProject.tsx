import Link from 'next/link';
import type { Project } from '@/data/projects';

export default function NextProject({ project }: { project: Project }) {
  // Strip <em> tags to render a plain heading; the styling already provides emphasis.
  const plainTitle = project.titleHtml.replace(/<\/?em>/g, '').replace(/^\w+ — /, '');
  return (
    <section className="next-proj" aria-label="Next case study">
      <div className="container">
        <div className="next-proj__inner">
          <span className="next-proj__num">Next · {project.number} / 04</span>
          <h2
            className="next-proj__title"
            dangerouslySetInnerHTML={{ __html: project.titleHtml }}
            aria-label={plainTitle}
          />
          <Link className="next-proj__cta" href={project.href}>
            Read case study
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 13L13 3M13 3H5M13 3V11"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

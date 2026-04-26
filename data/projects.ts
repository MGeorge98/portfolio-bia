export type ProjectSlug = 'ledger' | 'atlas' | 'halcyon' | 'fieldnotes';

export type Project = {
  slug: ProjectSlug;
  number: string;
  category: string;
  year: string;
  titleHtml: string;
  blurb: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    slug: 'ledger',
    number: '01',
    category: 'Fintech · SaaS',
    year: '2025',
    titleHtml: 'A treasury dashboard that finally <em>reads like prose</em>.',
    blurb:
      'Ledger is a B2B treasury platform for operators. I led the redesign of the core dashboard, cash-flow model, and approvals surface — replacing a dense matrix of widgets with a reading-first layout that surfaces the one decision the CFO came to make.',
    tags: ['Product Design Lead', 'Data viz', 'Design system'],
    href: '/work/ledger',
  },
  {
    slug: 'atlas',
    number: '02',
    category: 'Consumer · Mobile',
    year: '2024',
    titleHtml: 'Atlas — a neobank that stays <em>quiet</em> on purpose.',
    blurb:
      'A zero-fee account for freelancers, designed with the opposite of casino energy. Calm motion, honest numbers, and small moments of delight earned by restraint. Shipped in four markets; now serves ~180k active customers.',
    tags: ['Lead Designer', 'Motion', 'iOS & Android'],
    href: '/work/atlas',
  },
  {
    slug: 'halcyon',
    number: '03',
    category: 'Design system',
    year: '2023',
    titleHtml: 'Halcyon — a design system shaped by <em>editorial</em> discipline.',
    blurb:
      'I authored the foundational system for a 40-person product org: tokens, typography, surface guidelines, and the quiet rules that keep the product honest. 220+ components, six product surfaces, one clear point of view.',
    tags: ['Design Systems', 'Typography', 'Governance'],
    href: '/work/halcyon',
  },
  {
    slug: 'fieldnotes',
    number: '04',
    category: 'Editorial · Web',
    year: '2022',
    titleHtml: 'Field Notes — a reading-first <em>publication</em> on design.',
    blurb:
      'A long-form publication about software craft. I designed the reading experience, type system, and editorial rhythm — emphasising typography and pace over supplementary noise. Averaging 14 minutes per session.',
    tags: ['Art Direction', 'Editorial', 'Web'],
    href: '/work/fieldnotes',
  },
];

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

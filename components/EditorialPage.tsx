import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type EditorialPageProps = {
  eyebrow: string;
  title: string;
  italic: string;
  intro: string;
  sections: readonly { title: string; body: string }[];
};

export default function EditorialPage({ eyebrow, title, italic, intro, sections }: EditorialPageProps) {
  return (
    <div className="editorial-page">
      <header>
        <p className="section-kicker">{eyebrow}</p>
        <h1>{title} <em>{italic}</em></h1>
        <p>{intro}</p>
      </header>
      <div className="editorial-page-grid">
        {sections.map((section, index) => <article key={section.title}><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.title}</h2><p>{section.body}</p></article>)}
      </div>
      <Link className="button button-primary" href="/contact">Ask AeroSpeed <ArrowRight aria-hidden="true" size={16} /></Link>
    </div>
  );
}

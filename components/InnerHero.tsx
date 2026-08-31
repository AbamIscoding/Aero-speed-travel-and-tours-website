import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type InnerHeroProps = {
  eyebrow: string;
  title: string;
  italic: string;
  description: string;
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
};

export default function InnerHero({ eyebrow, title, italic, description, image, imageAlt, cta }: InnerHeroProps) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-copy">
        <p className="section-kicker">{eyebrow}</p>
        <h1>{title} <em>{italic}</em></h1>
        <p>{description}</p>
        {cta && <Link className="button button-primary" href={cta.href}>{cta.label}<ArrowRight aria-hidden="true" size={16} /></Link>}
      </div>
      <div className="inner-hero-image">
        <Image alt={imageAlt} fill priority sizes="(max-width: 820px) 100vw, 52vw" src={image} />
      </div>
    </section>
  );
}

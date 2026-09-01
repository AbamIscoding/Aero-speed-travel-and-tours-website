import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import InnerHero from '@/components/InnerHero';
import { packages } from '@/data/packages';

export const metadata: Metadata = {
  title: 'Curated Batanes Packages | AeroSpeed Travel & Tours',
  description: 'Compare three curated ways to experience Batan, Sabtang, and AeroSpeed’s signature Itbayat journey.',
};

export default function PackagesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Curated journeys"
        title="Your pace."
        italic="Your far north."
        description="Start with a considered itinerary, then shape the details around your dates, interests, and preferred way of traveling."
        image="/images/mt-iraya.jpg"
        imageAlt="Mt. Iraya rising above the Batanes landscape"
        cta={{ label: 'Customize a journey', href: '/contact' }}
      />
      <section className="package-detail-list" aria-label="Featured AeroSpeed packages">
        {packages.map((item) => (
          <article className={item.recommended ? 'package-detail recommended' : 'package-detail'} id={item.slug} key={item.slug}>
            {item.recommended && <span className="recommended-label">Recommended</span>}
            <div className="package-detail-image"><Image alt={item.imageAlt} fill sizes="(max-width: 820px) 100vw, 38vw" src={item.image} /></div>
            <div className="package-detail-copy">
              <small>{item.duration}</small><h2>{item.name}</h2><p className="package-price">{item.price}</p>
              <p className="package-minimum">{item.minimumPax}</p>
              <ul>{item.inclusions.map((inclusion) => <li key={inclusion}><Check aria-hidden="true" size={14} />{inclusion}</li>)}</ul>
              <Link className="button button-primary" href="/contact">Customize this journey <ArrowRight aria-hidden="true" size={16} /></Link>
            </div>
          </article>
        ))}
        <p className="package-note">Rates are per person and apply to the stated minimum group size. Availability and final booking terms are confirmed by AeroSpeed.</p>
      </section>
    </>
  );
}

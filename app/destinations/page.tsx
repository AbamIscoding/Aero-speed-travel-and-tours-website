import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import InnerHero from '@/components/InnerHero';
import { destinations } from '@/data/destinations';

export const metadata: Metadata = {
  title: 'Batanes Destinations | AeroSpeed Travel & Tours',
  description: 'Discover Batan, Sabtang, and Itbayat with locally shaped AeroSpeed journeys across Batanes.',
};

export default function DestinationsPage() {
  return (
    <>
      <InnerHero
        eyebrow="Batan · Sabtang · Itbayat"
        title="Three islands."
        italic="One remarkable north."
        description="Each island carries a different rhythm—from Batan’s iconic roads to Sabtang’s living heritage and Itbayat’s raw northern edge."
        image="/images/batan.jpg"
        imageAlt="Rolling green hills and coast of Batanes"
        cta={{ label: 'Plan an island journey', href: '/contact' }}
      />
      <section className="destination-detail-list" aria-label="Batanes destinations">
        {destinations.map((destination, index) => (
          <article className={index % 2 ? 'destination-detail reverse' : 'destination-detail'} id={destination.slug} key={destination.slug}>
            <div className="destination-detail-image"><Image alt={destination.imageAlt} fill sizes="(max-width: 820px) 100vw, 50vw" src={destination.image} /></div>
            <div className="destination-detail-copy">
              <p className="section-kicker">{destination.eyebrow}</p>
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
              <ul>{destination.highlights.map((item) => <li key={item}><Check aria-hidden="true" size={15} />{item}</li>)}</ul>
              <Link className="text-link" href={destination.slug === 'itbayat' ? '/itbayat' : '/contact'}>
                {destination.slug === 'itbayat' ? 'Explore Itbayat by Air' : `Plan a ${destination.name} visit`} <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

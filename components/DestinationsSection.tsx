import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Bookmark } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { destinations } from '@/data/destinations';

export default function DestinationsSection() {
  return (
    <section className="destinations-section" id="destinations" aria-labelledby="destinations-title">
      <div className="editorial-intro">
        <Reveal>
          <p className="section-kicker">Island stories</p>
          <h2 id="destinations-title">Three Islands, <em>Infinite Stories.</em></h2>
          <Link className="text-link" href="/destinations">Explore All Destinations <ArrowRight aria-hidden="true" size={16} /></Link>
        </Reveal>
      </div>

      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <Reveal as="article" className="destination-card" delay={index * 0.08} key={destination.slug}>
            <Link aria-label={`Explore ${destination.name}`} href={`/destinations#${destination.slug}`}>
              <Image
                alt={destination.imageAlt}
                fill
                sizes="(max-width: 760px) 88vw, (max-width: 1100px) 45vw, 28vw"
                src={destination.image}
              />
              <div className="card-scrim" />
              {destination.signature && <span className="signature-badge">AeroSpeed signature <Bookmark aria-hidden="true" size={13} /></span>}
              <div className="destination-card-copy">
                <small>{destination.eyebrow}</small>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <span className="round-arrow"><ArrowRight aria-hidden="true" size={16} /></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

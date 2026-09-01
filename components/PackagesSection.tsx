import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { packages } from '@/data/packages';

export default function PackagesSection() {
  return (
    <section className="packages-section" id="packages" aria-labelledby="packages-title">
      <div className="editorial-intro package-intro">
        <Reveal>
          <p className="section-kicker">Curated journeys</p>
          <h2 id="packages-title">Curated Journeys <em>Made for You.</em></h2>
          <p>Three considered ways to experience the islands—each shaped around local connections and thoughtful coordination.</p>
          <Link className="text-link" href="/packages">View All Packages <ArrowRight aria-hidden="true" size={16} /></Link>
        </Reveal>
      </div>

      <div className="package-grid">
        {packages.map((item, index) => (
          <Reveal as="article" className={item.recommended ? 'package-card recommended' : 'package-card'} delay={index * 0.08} key={item.slug}>
            {item.recommended && <span className="recommended-label">Recommended</span>}
            <div className="package-image">
              <Image alt={item.imageAlt} fill sizes="(max-width: 760px) 88vw, 28vw" src={item.image} />
            </div>
            <div className="package-body">
              <small>{item.duration}</small>
              <h3>{item.name}</h3>
              <p className="package-price">{item.price}</p>
              <p className="package-minimum">{item.minimumPax}</p>
              <ul>
                {item.inclusions.map((inclusion) => <li key={inclusion}><Check aria-hidden="true" size={13} />{inclusion}</li>)}
              </ul>
              <Link className="package-link" href={`/packages#${item.slug}`}>
                View Package <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="package-note">Rates are per person and apply to the stated minimum group size. Contact AeroSpeed to confirm availability.</p>
    </section>
  );
}

import { Luggage, Map, Plane, UserRoundCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const strengths = [
  {
    icon: Plane,
    title: 'Own Plane to Itbayat',
    body: 'Direct access from Basco to Itbayat for a faster and more convenient island connection.',
    tone: 'teal',
  },
  {
    icon: Map,
    title: 'Local Batanes Expertise',
    body: 'Travel with people who understand the islands, culture, weather, routes, and communities.',
    tone: 'green',
  },
  {
    icon: Luggage,
    title: 'Seamless Island Trip Planning',
    body: 'From permits and transfers to tours and accommodations, we coordinate the details.',
    tone: 'sky',
  },
  {
    icon: UserRoundCheck,
    title: 'Personalized Guest Assistance',
    body: 'Human support before, during, and after your Batanes journey.',
    tone: 'sand',
  },
] as const;

export default function StrengthsSection() {
  return (
    <section className="strengths-section" aria-labelledby="strengths-title">
      <div className="strengths-intro">
        <Reveal>
          <p className="section-kicker">Why AeroSpeed</p>
          <h2 id="strengths-title">Why travelers choose <em>AeroSpeed.</em></h2>
          <p>We combine local knowledge, personal service, and direct air access to create journeys that go beyond the usual.</p>
        </Reveal>
      </div>
      <div className="strengths-grid">
        {strengths.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal as="article" className="strength-card" delay={index * 0.08} key={item.title}>
              <span className={`strength-icon ${item.tone}`}><Icon aria-hidden="true" size={21} /></span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

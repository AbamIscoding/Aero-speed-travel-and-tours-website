import Link from 'next/link';
import { ArrowRight, MessageCircle, Plane } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { companySocials } from '@/data/site';

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contact" aria-labelledby="cta-title">
      <div className="cta-flight-path" aria-hidden="true"><span /><Plane size={23} /></div>
      <Reveal className="cta-heading">
        <p className="section-kicker light">Your Batanes story</p>
        <h2 id="cta-title">Ready to see the <em>far north differently?</em></h2>
      </Reveal>
      <Reveal className="cta-copy" delay={0.08}>
        <p>Let AeroSpeed take you beyond the usual. Tell us your travel dates and we’ll help create your Batanes journey by land, sea, and air.</p>
        <div className="cta-actions">
          <Link className="button cta-primary" href="/contact">Customize My Trip <ArrowRight aria-hidden="true" size={16} /></Link>
          <a className="button cta-secondary" href={companySocials.facebook} rel="noreferrer noopener" target="_blank">Message AeroSpeed <MessageCircle aria-hidden="true" size={16} /></a>
        </div>
      </Reveal>
    </section>
  );
}

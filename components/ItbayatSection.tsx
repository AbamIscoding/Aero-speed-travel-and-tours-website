'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Compass, Landmark, Mountain, Plane } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const attributes = [
  { label: 'Remote & Untouched', icon: Compass },
  { label: 'Rich Culture & Heritage', icon: Landmark },
  { label: 'Breathtaking Landscapes', icon: Mountain },
] as const;

export default function ItbayatSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="itbayat-section" id="itbayat" aria-labelledby="itbayat-title">
      <div className="itbayat-copy">
        <Reveal>
          <p className="section-kicker light">Our strongest offering</p>
          <h2 id="itbayat-title">The Itbayat <em>Adventure.</em></h2>
          <p className="itbayat-lead">Itbayat is Batanes at its rawest—remote, dramatic, deeply cultural, and unforgettable.</p>
        </Reveal>
        <div className="itbayat-attributes">
          {attributes.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="attribute" delay={index * 0.08} key={item.label}>
                <Icon aria-hidden="true" size={17} />
                <span>{item.label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="route-diagram" aria-label="Illustrated air route from Basco to Itbayat">
        <span className="route-island route-itbayat"><i />ITBAYAT<small>Beyond the usual</small></span>
        <div className="route-vertical" aria-hidden="true">
          <motion.span
            animate={reduceMotion ? undefined : { y: [88, -58] }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
          >
            <Plane size={19} />
          </motion.span>
        </div>
        <span className="route-island route-basco"><i />BASCO<small>Your journey begins</small></span>
      </div>

      <div className="itbayat-visual">
        <Image
          alt="Travelers experiencing the dramatic Rapang cliffs on Itbayat"
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
          src="/images/itbayat-cliffs.jpg"
        />
        <div className="itbayat-scrim" />
        <Reveal className="itbayat-float-card">
          <Plane aria-hidden="true" size={18} />
          <h3>Fly Beyond <em>to Itbayat</em></h3>
          <p>Our air connection brings one of Batanes’ most remote islands closer, giving travelers more time to experience what matters.</p>
          <Link className="text-link filled" href="/itbayat">View Itbayat Experience <ArrowRight aria-hidden="true" size={15} /></Link>
        </Reveal>
      </div>
    </section>
  );
}

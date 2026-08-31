import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarClock, Clock3, Compass, Plane } from 'lucide-react';
import InnerHero from '@/components/InnerHero';
import { AIRCRAFT_DETAILS, FLIGHT_DURATION, FLIGHT_SCHEDULE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Fly Beyond to Itbayat | AeroSpeed Travel & Tours',
  description: 'Discover AeroSpeed’s Itbayat experience—remote landscapes, local culture, and coordinated air access from Basco.',
  openGraph: { images: [{ url: '/images/itbayat-cliffs.jpg', alt: 'The dramatic coastal cliffs of Itbayat' }] },
  twitter: { images: ['/images/itbayat-cliffs.jpg'] },
};

export default function ItbayatPage() {
  return (
    <>
      <InnerHero
        eyebrow="AeroSpeed signature"
        title="Fly Beyond"
        italic="to Itbayat."
        description="A raw limestone island shaped by wind, sea, and Ivatan resilience—brought closer through AeroSpeed’s distinctive Basco–Itbayat connection."
        image="/images/itbayat-cliffs.jpg"
        imageAlt="Travelers overlooking Itbayat's dramatic Rapang cliffs"
        cta={{ label: 'Ask about Itbayat', href: '/contact' }}
      />
      <section className="itbayat-route-page" aria-labelledby="route-title">
        <div className="route-page-copy">
          <p className="section-kicker">The air connection</p>
          <h2 id="route-title">Basco to Itbayat, <em>with every detail coordinated.</em></h2>
          <p>Flight availability, operating conditions, and aircraft details are confirmed directly with AeroSpeed for each trip. Nothing below should be treated as a published schedule.</p>
          <div className="route-page-facts">
            <span><Clock3 aria-hidden="true" /><small>Flight time</small><strong>{FLIGHT_DURATION}</strong></span>
            <span><CalendarClock aria-hidden="true" /><small>Schedule</small><strong>{FLIGHT_SCHEDULE}</strong></span>
            <span><Plane aria-hidden="true" /><small>Aircraft</small><strong>{AIRCRAFT_DETAILS}</strong></span>
          </div>
          <Link className="button button-primary" href="/contact">Request route details <ArrowRight aria-hidden="true" size={16} /></Link>
        </div>
        <div className="route-page-image"><Image alt="AeroSpeed travelers holding the company banner in Itbayat" fill sizes="(max-width: 820px) 100vw, 44vw" src="/images/itbayat.jpg" /></div>
      </section>
      <section className="itbayat-values">
        <article><Compass aria-hidden="true" /><h2>Go farther</h2><p>Reach the northernmost inhabited island of Batanes with a trip designed around its distance and character.</p></article>
        <article><Plane aria-hidden="true" /><h2>Travel thoughtfully</h2><p>Coordinate flights, ground movement, permits, and local guidance as one connected journey.</p></article>
        <article><ArrowRight aria-hidden="true" /><h2>Stay longer in the story</h2><p>Spend your time discovering the island rather than piecing together the logistics yourself.</p></article>
      </section>
    </>
  );
}

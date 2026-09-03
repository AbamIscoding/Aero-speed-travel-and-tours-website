import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, MapPinned, Plane } from 'lucide-react';
import InnerHero from '@/components/InnerHero';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';

export const metadata: Metadata = {
  title: 'About AeroSpeed Travel & Tours | Batanes',
  description: 'Learn about AeroSpeed’s locally rooted approach to Batanes journeys by land, sea, and air.',
  alternates: { canonical: '/about' },
  openGraph: { images: [{ url: '/images/basco-church-travelers.jpg', alt: 'Travelers outside a church in Basco, Batanes' }] },
  twitter: { images: ['/images/basco-church-travelers.jpg'] },
};

export default function AboutPage() {
  return (
    <>
      <InnerHero
        eyebrow="Born in Batanes"
        title="Your Batanes Travel Agency."
        italic="A local point of view."
        description="AeroSpeed brings island knowledge, personal coordination, and a distinctive Itbayat air connection into one deeply local way to see Batanes."
        image="/images/basco-church-travelers.jpg"
        imageAlt="Travelers outside a church in Basco, Batanes"
        cta={{ label: 'Plan with our team', href: '/contact' }}
      />
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <section className="about-story" id="story">
        <div className="about-story-image"><Image alt="Guests with an AeroSpeed banner in the Batanes landscape" fill sizes="(max-width: 820px) 100vw, 48vw" src="/images/itbayat-travelers.jpg" /></div>
        <div className="about-story-copy">
          <p className="section-kicker">Our story</p>
          <h2>Travel shaped by <em>the islands themselves.</em></h2>
          <p>AeroSpeed’s perspective begins in Batanes: with changing weather, ferry crossings, community rhythms, long roads, and the relationships that make an island journey feel effortless.</p>
          <p>The goal is simple—to help guests travel deeper, with fewer gaps between the places they want to see and the local people who help bring those places to life.</p>
          <Link className="text-link" href="/contact">Start a conversation <ArrowRight aria-hidden="true" size={16} /></Link>
        </div>
      </section>
      <section className="about-values">
        <article><MapPinned aria-hidden="true" /><h2>Locally grounded</h2><p>Island knowledge informs every route, handoff, and recommendation.</p></article>
        <article><HeartHandshake aria-hidden="true" /><h2>Personally guided</h2><p>Thoughtful human support before, during, and after the trip.</p></article>
        <article><Plane aria-hidden="true" /><h2>Distinctively connected</h2><p>Itbayat remains at the heart of AeroSpeed’s beyond-the-usual story.</p></article>
      </section>
    </>
  );
}

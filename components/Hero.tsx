'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CalendarClock, Clock3, MapPin, Plane } from 'lucide-react';
import { AIRCRAFT_DETAILS, FLIGHT_DURATION, FLIGHT_SCHEDULE } from '@/data/site';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        initial={false}
        animate={reduceMotion ? undefined : { opacity: [0, 1], y: [24, 0] }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="eyebrow-pill">
          <span>● ● ●</span>
          LAND · SEA · AIR
          <br />
          BATAN · SABTANG · ITBAYAT
        </div>

        <h1 id="hero-title">
          Batanes,
          <em>Beyond the Usual.</em>
        </h1>

        <p>
          AeroSpeed showcases the real Batanes—by land, sea, and air. With our own plane
          route to Itbayat, the farthest island is now closer than ever.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" href="/destinations">
            Explore Batanes <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link className="button button-secondary" href="/itbayat">
            Fly to Itbayat <Plane aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="flight-path" aria-hidden="true">
          <span />
          <motion.div
            animate={reduceMotion ? undefined : { x: [0, 8, 0], y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Plane size={20} />
          </motion.div>
        </div>
      </motion.div>

      <div className="hero-visual">
        <Image
          alt="Aerial view of Batanes green coastal cliffs and blue sea"
          fill
          priority
          sizes="(max-width: 820px) 100vw, 62vw"
          src="/images/hero-batanes.jpg"
        />
        <div className="image-wash" />

        <div className="flight-card">
          <div className="route">
            <span>BASCO</span>
            <span className="route-line"><Plane aria-hidden="true" size={15} /></span>
            <span>ITBAYAT</span>
          </div>
          <div className="flight-facts">
            <div><Clock3 aria-hidden="true" size={14} /><small>Flight time</small><strong>{FLIGHT_DURATION}</strong></div>
            <div><CalendarClock aria-hidden="true" size={14} /><small>Schedule</small><strong>{FLIGHT_SCHEDULE}</strong></div>
            <div><Plane aria-hidden="true" size={14} /><small>Aircraft</small><strong>{AIRCRAFT_DETAILS}</strong></div>
          </div>
        </div>

        <div className="access-stamp" aria-hidden="true">
          <span>ITBAYAT</span>
          <strong>AEROSPEED AIR</strong>
          <small>EXCLUSIVE ACCESS</small>
        </div>
      </div>

      {/* Replace with AeroSpeed aircraft transparent PNG when the approved asset is supplied. */}
      <motion.figure
        className="aircraft-card"
        initial={false}
        animate={reduceMotion ? undefined : { opacity: [0, 1], x: [70, 0], rotate: [1, -2.5] }}
        transition={{ delay: 0.25, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          alt="AeroSpeed travelers standing with a light aircraft in Batanes"
          fill
          priority
          sizes="(max-width: 480px) 230px, 340px"
          src="/images/aerospeed-plane.jpg"
        />
        <figcaption><Plane aria-hidden="true" size={13} /> AeroSpeed Air · Basco</figcaption>
      </motion.figure>

      <div className="hero-location" aria-hidden="true">
        <MapPin size={13} /> 20.45° N · 121.97° E
      </div>
    </section>
  );
}

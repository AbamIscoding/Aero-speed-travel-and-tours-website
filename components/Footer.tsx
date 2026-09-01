import Link from 'next/link';
import { Camera, Mail, MapPin, MessageCircle, Music2, Phone, Plane } from 'lucide-react';
import { Wordmark } from '@/components/Brand';
import {
  COMPANY_EMAIL,
  COMPANY_EMAIL_HREF,
  COMPANY_LOCATION,
  COMPANY_PHONE,
  COMPANY_PHONE_HREF,
  companySocials,
  footerNavigation,
} from '@/data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-flight" aria-hidden="true"><span /><Plane size={24} /></div>
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="AeroSpeed Travel and Tours home"><Wordmark light /></Link>
          <p>Your gateway to Batanes—<br />by land, sea, and air.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          {footerNavigation.explore.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-column">
          <h2>Company</h2>
          {footerNavigation.company.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href={COMPANY_PHONE_HREF}><Phone aria-hidden="true" size={13} />{COMPANY_PHONE}</a>
          <a href={COMPANY_EMAIL_HREF}><Mail aria-hidden="true" size={13} />{COMPANY_EMAIL}</a>
          <span><MapPin aria-hidden="true" size={13} />AeroSpeed, {COMPANY_LOCATION}</span>
        </div>
        <div className="footer-column footer-socials">
          <h2>Socials</h2>
          <div aria-label="AeroSpeed social profiles">
            <a aria-label="AeroSpeed on Facebook" href={companySocials.facebook} rel="noreferrer noopener" target="_blank"><MessageCircle aria-hidden="true" size={16} /></a>
            <a aria-label="AeroSpeed on Instagram" href={companySocials.instagram} rel="noreferrer noopener" target="_blank"><Camera aria-hidden="true" size={16} /></a>
            <a aria-label="AeroSpeed on TikTok" href={companySocials.tiktok} rel="noreferrer noopener" target="_blank"><Music2 aria-hidden="true" size={16} /></a>
          </div>
          <small>Follow AeroSpeed Travel &amp; Tours.</small>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AeroSpeed Travel &amp; Tours. All rights reserved.</span>
        <span>Batanes, Philippines · 20.45° N</span>
      </div>
    </footer>
  );
}

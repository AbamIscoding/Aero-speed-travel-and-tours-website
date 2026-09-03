export const COMPANY_PHONE = '0912 242 5856';
export const COMPANY_PHONE_HREF = 'tel:+639122425856';
export const COMPANY_EMAIL = 'aerospeedtravelandtour2025@gmail.com';
export const COMPANY_EMAIL_HREF = `mailto:${COMPANY_EMAIL}`;
export const COMPANY_LOCATION = 'Basco, Batanes, Philippines';
export const COMPANY_POSTAL_CODE = '3900';
export const FLIGHT_DURATION = 'Confirm with AeroSpeed';
export const FLIGHT_SCHEDULE = 'Confirm with AeroSpeed';
export const AIRCRAFT_DETAILS = 'Confirm with AeroSpeed';

export const companySocials = {
  facebook: 'https://www.facebook.com/share/19GGSKhYNA/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/aerospeedt?igsi=M2gxbzl3eXN2YXYw',
  tiktok: 'https://www.tiktok.com/@aerospeed.travel?_r=1&_t=ZS-99M7mTpqsyu',
} as const;

export const primaryNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Itbayat by Air', href: '/itbayat' },
  { label: 'Packages', href: '/packages' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerNavigation = {
  explore: [
    { label: 'Destinations', href: '/destinations' },
    { label: 'Itbayat by Air', href: '/itbayat' },
    { label: 'Packages', href: '/packages' },
    { label: 'Travel Guide', href: '/travel-guide' },
    { label: 'FAQs', href: '/faqs' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Careers', href: '/careers' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
} as const;

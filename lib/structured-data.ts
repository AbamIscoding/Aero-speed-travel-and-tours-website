import { COMPANY_EMAIL, COMPANY_PHONE_HREF, COMPANY_POSTAL_CODE, companySocials } from '@/data/site';
import type { TravelPackage } from '@/data/packages';
import { SITE_URL } from '@/lib/seo';

export function buildTravelAgencySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'AeroSpeed Travel & Tours',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og.png`,
    telephone: COMPANY_PHONE_HREF.replace('tel:', ''),
    email: COMPANY_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Basco',
      addressRegion: 'Batanes',
      postalCode: COMPANY_POSTAL_CODE,
      addressCountry: 'PH',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Batanes, Philippines',
    },
    sameAs: [companySocials.facebook, companySocials.instagram, companySocials.tiktok],
  };
}

export function buildPackagesItemListSchema(packages: readonly TravelPackage[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: packages.map((pkg, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristTrip',
        name: pkg.name,
        url: `${SITE_URL}/packages#${pkg.slug}`,
        description: pkg.inclusions.join(', '),
        provider: { '@type': 'TravelAgency', name: 'AeroSpeed Travel & Tours', url: SITE_URL },
        touristType: 'Leisure',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'PHP',
          price: pkg.price.replace(/[^\d.]/g, ''),
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };
}

export function buildFaqPageSchema(sections: readonly { title: string; body: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sections.map((section) => ({
      '@type': 'Question',
      name: section.title,
      acceptedAnswer: { '@type': 'Answer', text: section.body },
    })),
  };
}

export function buildBreadcrumbListSchema(items: readonly { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${SITE_URL}${item.href}` }),
    })),
  };
}

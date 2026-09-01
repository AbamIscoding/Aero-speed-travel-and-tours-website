export type TravelPackage = {
  slug: string;
  name: string;
  price: string;
  duration: string;
  minimumPax: string;
  inclusions: readonly string[];
  image: string;
  imageAlt: string;
  recommended?: boolean;
};

export const packages: readonly TravelPackage[] = [
  {
    slug: 'essential-batanes',
    name: 'Essential Batanes',
    price: '₱9,450 / pax',
    duration: '3 Days / 2 Nights',
    minimumPax: 'Minimum of 4 pax',
    inclusions: [
      'North Batan Tour',
      'South Batan Tour',
      'Sabtang Island Tour',
      'Hotel accommodation',
      'Lunch during tours',
      'All government fees',
    ],
    image: '/images/mt-iraya.jpg',
    imageAlt: 'Mt. Iraya rising over the Batanes landscape',
  },
  {
    slug: 'batanes-itbayat',
    name: 'Batanes + Itbayat',
    price: '₱21,600 / pax',
    duration: '5 Days / 4 Nights',
    minimumPax: 'Minimum of 5 pax',
    inclusions: [
      'North Batan Tour',
      'South Batan Tour',
      'Sabtang Island Tour',
      'Itbayat tours',
      'Roundtrip airfare via AeroSpeed',
      'Accommodation',
      'Full set meals',
    ],
    image: '/images/itbayat-cliffs.jpg',
    imageAlt: 'Raw coastal cliffs on Itbayat Island',
    recommended: true,
  },
  {
    slug: 'ultimate-north-escape',
    name: 'Ultimate North Escape',
    price: '₱7,100 / pax',
    duration: '4 Days / 3 Nights',
    minimumPax: 'Minimum of 5 pax',
    inclusions: [
      'North Batan Tour',
      'South Batan Tour',
      'Sabtang Island Tour',
      'Lunch during tours',
      'All government fees',
    ],
    image: '/images/sabtang-lighthouse.jpg',
    imageAlt: 'Lighthouse overlooking the green hills and sea of Batanes',
  },
] as const;

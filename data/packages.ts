export type TravelPackage = {
  slug: string;
  name: string;
  price: string;
  duration: string;
  inclusions: readonly string[];
  image: string;
  imageAlt: string;
  recommended?: boolean;
};

export const packages: readonly TravelPackage[] = [
  {
    slug: 'essential-batanes',
    name: 'Essential Batanes',
    price: '₱XX,XXX / pax',
    duration: '3 Days / 2 Nights',
    inclusions: ['Batan Island Tour', 'Daily Breakfast', 'Transfers', 'Permits'],
    image: '/images/mt-iraya.jpg',
    imageAlt: 'Mt. Iraya rising over the Batanes landscape',
  },
  {
    slug: 'batanes-itbayat',
    name: 'Batanes + Itbayat',
    price: '₱XX,XXX / pax',
    duration: '4 Days / 3 Nights',
    inclusions: ['Batan Tours', 'Itbayat Experience', 'Roundtrip Itbayat Flight', 'Transfers & Permits'],
    image: '/images/itbayat-cliffs.jpg',
    imageAlt: 'Raw coastal cliffs on Itbayat Island',
    recommended: true,
  },
  {
    slug: 'ultimate-north-escape',
    name: 'Ultimate North Escape',
    price: '₱XX,XXX / pax',
    duration: '5 Days / 4 Nights',
    inclusions: ['Batan', 'Sabtang', 'Itbayat', 'Selected Meals', 'Full Ground Coordination'],
    image: '/images/sabtang-lighthouse.jpg',
    imageAlt: 'Lighthouse overlooking the green hills and sea of Batanes',
  },
] as const;

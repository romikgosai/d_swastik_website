import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Viewport configuration for Next.js 13+
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e40af',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://romikgosai.github.io/d_swastik_website';

export const metadata: Metadata = {
  title: {
    default: 'D. Swastik Construction Pvt. Ltd. | Top Construction Company in Nepal',
    template: '%s | D. Swastik Construction',
  },
  description: 'D. Swastik Construction Pvt. Ltd. is a leading construction company in Nepal specializing in residential complexes, commercial towers, and infrastructure projects. 20+ years of excellence in building quality structures across Nepal.',
  keywords: [
    'D Swastik Construction',
    'D. Swastik Construction Pvt. Ltd.',
    'construction company Nepal',
    'top construction company Nepal',
    'building construction Nepal',
    'residential construction Nepal',
    'commercial construction Nepal',
    'infrastructure development Nepal',
    'real estate development Nepal',
    'civil construction Nepal',
    'building contractors Nepal',
    'construction services Kathmandu',
    'Nepal construction company',
    'best construction company Nepal',
    'construction firm Nepal',
    'building company Nepal',
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'D. Swastik Construction Pvt. Ltd.',
    title: 'D. Swastik Construction Pvt. Ltd. | Top Construction Company in Nepal',
    description: 'Leading construction company in Nepal specializing in residential, commercial, and infrastructure projects. 20+ years of excellence.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'D. Swastik Construction - Building Excellence in Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dswastik',
    creator: '@dswastik',
    title: 'D. Swastik Construction Pvt. Ltd. | Top Construction Company in Nepal',
    description: 'Leading construction company in Nepal specializing in residential, commercial, and infrastructure projects.',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Construction',
  classification: 'Business',
  authors: [{ name: 'D. Swastik Construction Pvt. Ltd.', url: siteUrl }],
  creator: 'D. Swastik Construction Pvt. Ltd.',
  publisher: 'D. Swastik Construction Pvt. Ltd.',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  other: {
    'og:email': 'info@dswastik.com.np',
    'og:phone_number': '+977-01-4XXXXXX',
    'og:latitude': '27.7172',
    'og:longitude': '85.3240',
    'og:region': 'NP-3',
    'og:country-name': 'Nepal',
  },
};

// JSON-LD Structured Data for Local Business SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ConstructionBusiness',
  '@id': `${siteUrl}/#organization`,
  name: 'D. Swastik Construction Pvt. Ltd.',
  alternateName: ['D Swastik Construction', 'DS Constructions', 'D. Swastik'],
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  image: `${siteUrl}/logo.svg`,
  description: 'D. Swastik Construction Pvt. Ltd. is a leading construction company in Nepal with 20+ years of experience in residential, commercial, and infrastructure projects.',
  foundingDate: '2000',
  numberOfEmployees: '50-200',
  areaServed: {
    '@type': 'Place',
    name: 'Nepal',
  },
  serviceArea: {
    '@type': 'Place',
    name: 'Kathmandu, Nepal and surrounding areas',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kathmandu',
    addressRegion: 'Bagmati Province',
    addressCountry: 'NP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '27.7172',
    longitude: '85.3240',
  },
  telephone: '+977-01-4XXXXXX',
  email: 'info@dswastik.com.np',
  priceRange: '$$$',
  paymentAccepted: 'Cash, Check, Bank Transfer',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: {
      '@type': 'DayOfWeek',
      name: 'Sunday-Friday',
    },
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.facebook.com/dswastik',
    'https://www.instagram.com/dswastik',
    'https://www.linkedin.com/company/dswastik',
    'https://twitter.com/dswastik',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Construction',
          description: 'Building high-quality residential complexes, apartments, and individual houses',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Construction',
          description: 'Constructing commercial towers, office buildings, and retail spaces',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Infrastructure Development',
          description: 'Developing roads, bridges, and civil infrastructure projects',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Real Estate Development',
          description: 'End-to-end real estate development and property construction',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '50',
    bestRating: '5',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'D. Swastik Construction Pvt. Ltd.',
  description: 'Leading construction company delivering exceptional projects. From residential complexes to commercial towers and infrastructure, we build the future.',
  metadataBase: new URL('https://buildcraft.com'),
  openGraph: {
    title: 'D. Swastik - Excellence in Construction',
    description: 'Leading construction company delivering exceptional projects.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D. Swastik - Excellence in Construction',
    description: 'Leading construction company delivering exceptional projects.',
    images: ['/logo.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

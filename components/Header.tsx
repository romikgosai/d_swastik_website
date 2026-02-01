import Link from 'next/link';
import Image from 'next/image';
import { Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const basePath = process.env.NODE_ENV === 'production' ? '/d_swastik_website' : '';

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={`${basePath}/logo.svg`} width={120} height={40} alt="D. Swastik Logo" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Link href="/contact">
          <Button>Get Quote</Button>
        </Link>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary font-primary">
              Aura
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link href="/" className="text-primary font-secondary hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/tours" className="text-primary font-secondary hover:text-secondary transition-colors">
              Tours
            </Link>
            <Link href="/destinations" className="text-primary font-secondary hover:text-secondary transition-colors">
              Destinations
            </Link>
            <Link href="/blog" className="text-primary font-secondary hover:text-secondary transition-colors">
              Blog
            </Link>
            <Link href="/accomodation" className="text-primary font-secondary hover:text-secondary transition-colors">
              Accomodation
            </Link>
            <Link href="/about-us" className="text-primary font-secondary hover:text-secondary transition-colors">
              About Us
            </Link>
            <Link href="/contact-us" className="ml-4 px-6 py-2 bg-secondary text-primary font-bold rounded hover:bg-primary hover:text-secondary transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 
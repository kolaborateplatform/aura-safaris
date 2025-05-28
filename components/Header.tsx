'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Aura
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link href="/" className="text-green-700 font-semibold hover:text-green-900">
              Home
            </Link>
            <Link href="/tours" className="text-green-700 font-semibold hover:text-green-900">
              Tours
            </Link>
            <Link href="/destinations" className="text-green-700 font-semibold hover:text-green-900">
              Destinations
            </Link>
            <Link href="/blog" className="text-green-700 font-semibold hover:text-green-900">
              Blog
            </Link>
            <Link href="/accomodation" className="text-green-700 font-semibold hover:text-green-900">
              Accomodation
            </Link>
            <Link href="/about-us" className="text-green-700 font-semibold hover:text-green-900">
              About Us
            </Link>
            <Link href="/contact-us" className="ml-4 px-6 py-2 bg-yellow-400 text-white font-bold rounded hover:bg-yellow-500 transition">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 
'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/aura-safaris.webp" // Path to your logo image
                alt="Aura Safaris Logo"
                width={120} // Adjust width as needed
                height={40} // Adjust height as needed
                className="object-contain"
              />
            </Link>
          </div>
          <nav className="flex-1 flex justify-center"> {/* Centering the nav links */}
            <div className="flex space-x-8">
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
              <Link href="/services" className="text-primary font-secondary hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/about-us" className="text-primary font-secondary hover:text-secondary transition-colors">
                About Us
              </Link>
            </div>
          </nav>
          <div> {/* Contact Us button */}
            <Link href="/contact-us" className="px-6 py-2 bg-secondary text-primary font-bold rounded hover:bg-primary hover:text-secondary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

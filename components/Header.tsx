'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/aura-safaris.webp"
                alt="Aura Safaris Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Hamburger menu button for mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
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

          {/* Desktop Contact Us button */}
          <div className="hidden md:block">
            <Link href="/contact-us" className="px-6 py-2 bg-secondary text-primary font-bold rounded hover:bg-primary hover:text-secondary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full p-4">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src="/images/aura-safaris.webp"
                    alt="Aura Safaris Logo"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </Link>
                <button
                  onClick={toggleMenu}
                  className="text-primary hover:text-secondary transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                <Link
                  href="/"
                  className="text-primary font-secondary hover:text-secondary transition-colors text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/tours"
                  className="text-primary font-secondary hover:text-secondary transition-colors text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tours
                </Link>
                <Link
                  href="/destinations"
                  className="text-primary font-secondary hover:text-secondary transition-colors text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Destinations
                </Link>
                <Link
                  href="/blog"
                  className="text-primary font-secondary hover:text-secondary transition-colors text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/services"
                  className="text-primary font-secondary hover:text-secondary transition-colors text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about-us"
                  className="text-primary font-secondary hover:text-secondary transition-colors text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </nav>
              <div className="mt-auto mb-8">
                <Link
                  href="/contact-us"
                  className="block w-full text-center px-6 py-3 bg-secondary text-primary font-bold rounded hover:bg-primary hover:text-secondary transition-colors text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

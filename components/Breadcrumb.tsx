"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  title: string;
  items?: { label: string; href: string }[];
  backgroundImageUrl?: string;
}

export default function Breadcrumb({ title, items, backgroundImageUrl }: BreadcrumbProps) {
  const pathname = usePathname();

  const defaultItems = [
    { label: 'Home', href: '/' },
    { label: title, href: pathname },
  ];

  const breadcrumbItems = items || defaultItems;
  const bgUrl = backgroundImageUrl || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'; // Placeholder

  return (
    <section
      className="w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgUrl})`, minHeight: '300px' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-4 drop-shadow-lg">
          {title}
        </h1>
        <nav className="flex items-center justify-center space-x-2 text-lg text-white">
          {breadcrumbItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index > 0 && <span className="mx-2 text-white/70">/</span>}
              <Link
                href={item.href}
                className={`hover:text-primary transition-colors ${
                  pathname === item.href ? 'text-primary font-semibold' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
} 
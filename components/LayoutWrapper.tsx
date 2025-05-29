'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/sign-in' || pathname.startsWith('/admin');

  return (
    <>
      {!isAuthPage && <Header />}
      <main className="flex-grow pt-0">
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
} 
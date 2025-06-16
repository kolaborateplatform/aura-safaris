import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { ConvexClientProvider } from "./ConvexClientProvider";
import LayoutWrapper from '@/components/LayoutWrapper'

export const metadata: Metadata = {
  title: 'Aura',
  description: 'Building the future of digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased min-h-screen flex flex-col">
          <ConvexClientProvider>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
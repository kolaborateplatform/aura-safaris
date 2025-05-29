import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { ConvexClientProvider } from "./ConvexClientProvider";
import LayoutWrapper from '@/components/LayoutWrapper'

const glimmerOfLight = localFont({
  src: [
    {
      path: '../public/fonts/GlimmerOfLight.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-glimmer',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

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
        <body className={`${glimmerOfLight.variable} ${roboto.variable} antialiased min-h-screen flex flex-col`}>
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
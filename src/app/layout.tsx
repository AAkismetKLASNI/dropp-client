import type { Metadata } from 'next';
import { Geologica } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { SITE_NAME } from '@/constants/seo.constants';

const base = Geologica({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: { default: 'Home', template: `%s | ${SITE_NAME}` },
  description: 'Home',
  icons: '/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${base.className} antialiased px-4`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

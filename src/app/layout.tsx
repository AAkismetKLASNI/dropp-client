import type { Metadata } from 'next';
import { Geologica } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const base = Geologica({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Image-rest',
  description: 'Image-rest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${base.className} antialiased container mx-auto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

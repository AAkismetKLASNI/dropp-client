import type { Metadata } from 'next';
import { Geologica } from 'next/font/google';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}

'use client';

import Image from 'next/image';
import { AuthForm } from './components/auth.form';

const images = [
  { path: 'img-1.webp', width: 736, height: 414 },
  { path: 'img-2.webp', width: 736, height: 1600 },
  { path: 'img-3.webp', width: 474, height: 845 },
  { path: 'img-4.webp', width: 736, height: 981 },
  { path: 'img-5.webp', width: 736, height: 1308 },
  { path: 'img-6.webp', width: 736, height: 414 },
  { path: 'img-7.webp', width: 736, height: 1104 },
  { path: 'img-8.webp', width: 736, height: 1104 },
];

export function Auth() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center min-h-screen container mx-auto'>
      <div className='rounded-xl mask-b-from-0 md:mask-radial-from-0 columns-4 fixed md:static -top-20 px-2 -z-10'>
        {images.map(({ width, height, path }) => (
          <Image
            key={path}
            src={`/images/${path}`}
            className='rounded-xl mb-6 w-auto h-auto '
            alt='image'
            width={width}
            height={height}
          />
        ))}
      </div>

      <AuthForm />
    </main>
  );
}

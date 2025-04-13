'use client';

import Image from 'next/image';
import { AuthForm } from './components/auth.form';

// import img1 from '../../../public/images/img-1.webp';
// import img2 from '../../../public/images/img-2.webp';
// import img3 from '../../../public/images/img-3.webp';
// import img4 from '../../../public/images/img-4.webp';
// import img5 from '../../../public/images/img-5.webp';
// import img6 from '../../../public/images/img-6.webp';
// import img7 from '../../../public/images/img-7.webp';
// import img8 from '../../../public/images/img-8.webp';

const images = [
  { path: 'img-1.webp' },
  { path: 'img-2.webp' },
  { path: 'img-3.webp' },
  { path: 'img-4.webp' },
  { path: 'img-5.webp' },
  { path: 'img-6.webp' },
  { path: 'img-7.webp' },
  { path: 'img-8.webp' },
];

export function Auth() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center min-h-screen container mx-auto'>
      <div className='rounded-xl mask-b-from-0 md:mask-radial-from-0 columns-4 fixed md:static -top-20 px-2 -z-10'>
        {images.map(({ path }) => (
          <Image
            key={path}
            src={`/images/${path}`}
            className='rounded-xl mb-6 w-auto h-auto '
            alt='image'
            width={200}
            height={200}
            priority
          />
        ))}
      </div>

      <AuthForm />
    </main>
  );
}

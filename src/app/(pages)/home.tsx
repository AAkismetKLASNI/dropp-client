'use client';

import Image from 'next/image';
import { useGetAllPictures } from '../hooks/use.get.all.pictures';
import { SkeletonGallery } from './lk/components/ui/skeleton.gallery';
import { NotFound } from '@/components/ui/not-found';

export function Home() {
  const { allPictures, isLoading } = useGetAllPictures();

  if (isLoading) return <SkeletonGallery />;

  return (
    <>
      {!!allPictures.length ? (
        <div className='gallery-grid'>
          {allPictures.map((path, id) => (
            <div
              className='w-full mb-8 break-inside-avoid'
              key={id}
            >
              <Image
                className='rounded-xl w-full cursor-pointer transition-opacity hover:opacity-40'
                src={`/${path}.jpg`}
                alt='picture'
                width='200'
                height='200'
              />
            </div>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

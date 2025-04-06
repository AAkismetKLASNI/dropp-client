'use client';

import Image from 'next/image';
import { useGetProfile } from './hooks/use.get.profile';
import { SkeletonGallery } from './components/ui/skeleton.gallery';
import { NotFound } from '@/components/ui/not-found';

export function Lk() {
  const { profile, isLoading } = useGetProfile();

  if (isLoading) return <SkeletonGallery />;

  return (
    <>
      {!!profile?.pictures.length ? (
        <div className='gallery-grid'>
          {profile.pictures.map(({ path, id }) => (
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

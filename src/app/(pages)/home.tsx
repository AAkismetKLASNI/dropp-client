'use client';

import Image from 'next/image';
import { useGetAllPictures } from './hooks/use.get.all.pictures';
import { SkeletonGallery } from './components/skeleton.gallery';
import { NotFound } from '@/components/ui/not-found';
import { Avatar } from '@/components/ui/avatar';

export function Home() {
  const { allPictures, isLoading } = useGetAllPictures();

  if (isLoading) return <SkeletonGallery />;

  return (
    <>
      {!!allPictures.length ? (
        <div className='gallery-grid'>
          {allPictures.map(({ id, path, originalName, user, width, height }) => (
            <div
              className='mb-6 break-inside-avoid space-y-2'
              key={id}
            >
              <Image
                className='rounded-xl cursor-pointer transition-opacity hover:opacity-40'
                src={path}
                alt='picture'
                width={width}
                height={height}
              />

              <div className='flex gap-2 items-center mx-2'>
                <Avatar
                  avatar={user.avatar}
                  email={user.email}
                  className='h-7 min-w-7 max-w-7 hidden md:flex'
                  size={28}
                />
                <span className='line-clamp-1'>{originalName}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

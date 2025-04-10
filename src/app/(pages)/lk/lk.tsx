'use client';

import Image from 'next/image';
import { useGetProfile } from './hooks/use.get.profile';
import { SkeletonGallery } from './components/ui/skeleton.gallery';
import { NotFound } from '@/components/ui/not-found';
import { groupPicturesByDate } from '@/utils/group.pictures.by.date';

export function Lk() {
  const { profile, isLoading } = useGetProfile();

  if (isLoading) return <SkeletonGallery />;

  const groupedPictures = groupPicturesByDate(profile?.pictures);

  return (
    <>
      {!!groupedPictures.length ? (
        <div className='space-y-6'>
          {groupedPictures.map(({ date, pictures }) => {
            return (
              <div
                key={date}
                className='space-y-4 relative'
              >
                <div className='sticky top-0 text-center backdrop-blur-xs py-1 left-0 right-0 z-10'>
                  <h3 className='inline-block py-1 px-2 rounded-xl bg-accent text-black text-sm'>
                    {date}
                  </h3>
                </div>

                <ul className='gallery-grid'>
                  {pictures.map(({ id, originalName, path, height, width }) => (
                    <div
                      key={id}
                      className='mb-8 w-full break-inside-avoid space-y-2'
                    >
                      <Image
                        className=' rounded-xl transition-opacity hover:opacity-40  cursor-pointer'
                        src={path}
                        alt={originalName}
                        width={width}
                        height={height}
                      />

                      <span>{originalName}</span>
                    </div>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

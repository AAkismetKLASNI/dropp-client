'use client';

import { useGetProfile } from '../../../hooks/use.get.profile';
import { SkeletonGallery } from '../../../components/ui/skeleton.gallery';
import { NotFound } from '@/components/ui/not-found';
import { groupPicturesByDate } from '@/utils/group.pictures.by.date';
import { Picture } from '@/components/ui/picture';
import { AnimatePresence } from 'framer-motion';

export function Lk() {
  const { profile, isLoading } = useGetProfile();

  const groupedPictures = groupPicturesByDate(profile?.pictures);

  return (
    <AnimatePresence mode='wait'>
      {isLoading && <SkeletonGallery key='skeleton' />}

      {!isLoading && (
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
                      {pictures.map((data) => (
                        <Picture
                          key={data.id}
                          {...data}
                        />
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
      )}
    </AnimatePresence>
  );
}

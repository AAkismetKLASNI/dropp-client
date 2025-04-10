'use client';

import { useGetAllPictures } from './hooks/use.get.all.pictures';
import { SkeletonGallery } from '../../components/ui/skeleton.gallery';
import { NotFound } from '@/components/ui/not-found';
import { AnimatePresence } from 'framer-motion';
import { Picture } from '@/components/ui/picture';

export function Home() {
  const { allPictures, isLoading } = useGetAllPictures();

  return (
    <AnimatePresence mode='wait'>
      {isLoading && <SkeletonGallery key='skeleton' />}

      {!isLoading && (
        <>
          {!!allPictures.length ? (
            <div
              className='gallery-grid'
              key='content'
            >
              {allPictures.map((data) => (
                <Picture
                  {...data}
                  key={data.id}
                  withAvatar
                  avatar={data.user.avatar}
                  email={data.user.email}
                />
              ))}
            </div>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </AnimatePresence>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Icon } from '@/components/ui/icon';
import { CloudDownload, Pencil } from 'lucide-react';
import Image from 'next/image';
import { usePictureDrop } from './hooks/use.picture.drop';

export function NewDropp() {
  const { areaRef, fileRef, imageSrc, uploadImage, handleAndSendImage } =
    usePictureDrop();

  return (
    <div className='flex justify-center'>
      <Field
        ref={fileRef}
        type='file'
        className='hidden'
        accept='image/png,image/jpeg,image/gif,image/webp'
        onChange={uploadImage}
      />
      {imageSrc ? (
        <div
          className='space-y-4 relative'
          ref={areaRef}
        >
          <Image
            className='rounded-xl border-2 border-dashed border-accent'
            src={imageSrc}
            alt='image'
            width='400'
            height='400'
          />

          <Icon
            icon={Pencil}
            className='absolute top-5 right-5 bg-accent hover:bg-black/80'
            onClick={() => fileRef.current?.click()}
          />

          <Button onClick={handleAndSendImage}>Push</Button>
        </div>
      ) : (
        <div
          className='max-w-120 w-full border-2 border-accent text-accent border-dashed cursor-pointer rounded-xl'
          ref={areaRef}
        >
          <div
            className='h-full flex flex-col justify-center items-center p-4 aspect-video bg-center bg-cover'
            onClick={() => fileRef.current?.click()}
          >
            <Icon
              setBg={false}
              color='var(--color-accent)'
              icon={CloudDownload}
              size='40'
            />
            <span>Drag & Drop</span>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Icon } from '@/components/ui/icon';
import { CloudDownload, Pencil } from 'lucide-react';
import Image from 'next/image';
import { usePictureDrop } from './hooks/use.picture.drop';
import { usePictureForm } from './hooks/use.picture.form';
import { VALIDATION_PICTURE } from '@/configs/validation.schemes';

export function AddPicture() {
  const { handleSubmit, onSubmit, isPending, register, watch, setValue } =
    usePictureForm();
  const { areaRef, fileRef, uploadImage } = usePictureDrop(setValue);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex items-center flex-col gap-2'
    >
      <Field
        ref={fileRef}
        type='file'
        className='hidden'
        accept='image/png,image/jpeg,image/gif,image/webp'
        onChange={uploadImage}
      />
      {watch('path') ? (
        <div
          className='space-y-4 relative'
          ref={areaRef}
        >
          <Image
            className='rounded-xl w-full border-2 border-dashed border-accent'
            src={watch('path')}
            alt='image'
            width='320'
            height='320'
          />

          <Icon
            icon={Pencil}
            className='absolute top-5 right-5 bg-accent hover:bg-black/80'
            onClick={() => fileRef.current?.click()}
          />

          <Field
            {...register('originalName', VALIDATION_PICTURE.originalName)}
            placeholder='Name'
          />
          <Button disabled={isPending}>Push</Button>
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
    </form>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Icon } from '@/components/ui/icon';
import { CloudDownload, Pencil } from 'lucide-react';
import Image from 'next/image';
import { usePictureDrop } from './hooks/use.picture.drop';
import { usePictureForm } from './hooks/use.picture.form';
import { VALIDATION_PICTURE } from '@/configs/validation.schemes';
import { Header } from '../../../components/layouts/header';

export function AddPicture() {
  const { handleSubmit, onSubmit, isPending, register, watch, setValue } =
    usePictureForm();
  const { areaRef, fileRef, uploadImage } = usePictureDrop(setValue);

  return (
    <div className='space-y-8 md:space-y-16 xl:space-y-24'>
      <Header />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center md:items-start md:flex-row md:justify-center gap-6'
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
            className='relative'
            ref={areaRef}
          >
            <Image
              className='rounded-xl border-2 border-dashed border-accent'
              src={watch('path')}
              alt='image'
              width={watch('width')}
              height={watch('height')}
            />

            <Icon
              icon={Pencil}
              className='absolute top-5 right-5 bg-accent hover:bg-black/80'
              onClick={() => fileRef.current?.click()}
            />
          </div>
        ) : (
          <div
            className='max-w-80 aspect-square w-full border-2 border-accent text-accent border-dashed cursor-pointer rounded-xl'
            ref={areaRef}
          >
            <div
              className='h-full flex flex-col justify-center items-center p-4 bg-center bg-cover'
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

        <div className='space-y-4 w-full md:w-auto'>
          <label className='space-y-2 inline-block w-full'>
            <span className='inline-block'>Add name</span>

            <Field
              {...register('originalName', VALIDATION_PICTURE.originalName)}
              placeholder='Name'
            />
          </label>

          <Button disabled={isPending}>Share your ideas !</Button>
        </div>
      </form>
    </div>
  );
}

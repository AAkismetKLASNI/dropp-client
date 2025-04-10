'use client';

import { Field } from '@/components/ui/field';
import { Icon } from '@/components/ui/icon';
import { CloudDownload, Pencil, Plus } from 'lucide-react';
import Image from 'next/image';
import { usePictureDrop } from './hooks/use.picture.drop';
import { usePictureForm } from './hooks/use.picture.form';
import { VALIDATION_PICTURE } from '@/configs/validation.schemes';
import { Header } from '../../../components/layouts/header';
import { ButtonShiny } from '@/components/ui/button/button.shiny';
import { Label } from '@/components/ui/label';

export function AddPicture() {
  const { handleSubmit, onSubmit, isPending, register, watch, setValue } =
    usePictureForm();
  const { areaRef, fileRef, uploadImage } = usePictureDrop(setValue);

  return (
    <div className='space-y-8'>
      <Header />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center md:items-start md:flex-row md:justify-center gap-6 relative'
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
          <Label label='add name'>
            <Field
              {...register('originalName', VALIDATION_PICTURE.originalName)}
              placeholder='Name'
            />
          </Label>

          <Label
            label='add description'
            pattern='декоративные поля*'
          >
            <Field placeholder='description' />
          </Label>

          <Label
            label='add tag`s'
            pattern='декоративные поля*'
          >
            <Icon
              icon={Plus}
              className='bg-white/5'
            />
          </Label>

          <ButtonShiny
            disabled={isPending}
            className='mt-2'
          >
            Publication
          </ButtonShiny>
        </div>
      </form>
    </div>
  );
}

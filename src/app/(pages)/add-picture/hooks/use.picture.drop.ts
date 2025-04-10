import { IPictureDto } from '@/types/picture.types';
import Compressor from 'compressorjs';
import { useRef, useEffect, ChangeEvent } from 'react';
import { UseFormSetValue } from 'react-hook-form';

const MIN_WIDTH = 200;
const MIN_HEIGHT = 320;

export function usePictureDrop(setValue: UseFormSetValue<IPictureDto>) {
  const areaRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentAreaRef = areaRef.current;

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer?.files[0];

      if (file) processImage(file);
    };

    if (currentAreaRef) {
      currentAreaRef?.addEventListener('dragover', (e) => e.preventDefault());
      currentAreaRef?.addEventListener('drop', handleDrop);
    }

    return () => {
      if (currentAreaRef) {
        currentAreaRef?.addEventListener('dragover', (e) => e.preventDefault());
        currentAreaRef?.addEventListener('drop', handleDrop);
      }
    };
  }, []);

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    if (file) processImage(file);
  };

  const processImage = (file: File) => {
    const temporyImage = URL.createObjectURL(file);

    const imageElement = new Image();
    imageElement.src = temporyImage;

    imageElement.onload = async (e) => {
      const img = e.target as HTMLImageElement;
      const { naturalHeight, naturalWidth } = img;

      if (naturalHeight < MIN_HEIGHT || naturalWidth < MIN_WIDTH) {
        const { toast } = await import('react-hot-toast');
        toast.error(`the image is too small (${MIN_WIDTH} x ${MIN_HEIGHT})`);

        URL.revokeObjectURL(temporyImage);
        return setValue('path', '');
      }

      new Compressor(file, {
        quality: 0.8,
        maxHeight: 320,
        maxWidth: 320,
        mimeType: 'image/webp',
        success: (compressed) => {
          const compressedImage = new Image();
          compressedImage.src = URL.createObjectURL(compressed);

          compressedImage.onload = () => {
            setValue('height', compressedImage.naturalHeight);
            setValue('width', compressedImage.naturalWidth);

            URL.revokeObjectURL(compressedImage.src);
          };

          const reader = new FileReader();
          reader.onload = () => {
            const path = reader.result as string;

            console.log(2, path);

            setValue('path', path);
          };
          reader.readAsDataURL(compressed);
        },
      });
    };
  };

  return { fileRef, areaRef, uploadImage };
}

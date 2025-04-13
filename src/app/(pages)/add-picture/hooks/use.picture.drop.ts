import { IPictureDto } from '@/types/picture.types';
import Compressor from 'compressorjs';
import { useRef, useEffect, ChangeEvent } from 'react';
import { UseFormSetValue } from 'react-hook-form';

const MIN_WIDTH = 200;
const MIN_HEIGHT = 320;
const MAX_SIZE = 520;

const VERTICAL_RATIO_THRESHOLD = 1.5;

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

  function uploadImage(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const file = e.target.files[0];

    if (file) processImage(file);
  }

  function processImage(file: File) {
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

      const isVertical = naturalHeight / naturalWidth > VERTICAL_RATIO_THRESHOLD;

      const maxSize = isVertical ? MAX_SIZE * 1.4 : MAX_SIZE;

      const ratio = Math.min(maxSize / naturalWidth, maxSize / naturalHeight);
      const targetHeight = Math.round(naturalHeight * ratio);
      const targetWidth = Math.round(naturalWidth * ratio);

      new Compressor(file, {
        quality: 0.8,
        maxHeight: targetHeight,
        maxWidth: targetWidth,
        mimeType: 'image/webp',
        success: (compressed) => {
          const reader = new FileReader();
          reader.onload = () => {
            const path = reader.result as string;

            setValue('height', targetHeight);
            setValue('width', targetWidth);
            setValue('path', path);
          };
          reader.readAsDataURL(compressed);
        },
      });
    };
  }

  return { fileRef, areaRef, uploadImage };
}

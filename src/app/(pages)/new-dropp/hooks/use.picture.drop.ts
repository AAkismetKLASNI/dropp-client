import { useRef, useState, useEffect, ChangeEvent } from 'react';

const MIN_WIDTH = 200;
const MIN_HEIGHT = 300;

export function usePictureDrop() {
  const areaRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const currentAreaRef = areaRef.current;

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer?.files[0]) {
        setImageSrc(URL.createObjectURL(e.dataTransfer?.files[0]));
      }
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
        return setImageSrc('');
      }

      setImageSrc(temporyImage);
    };
  };

  const handleAndSendImage = () => {
    if (!imageSrc) return;
  };

  return { fileRef, imageSrc, areaRef, uploadImage, handleAndSendImage };
}

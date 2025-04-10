import { PRIVATE_URL } from '@/configs/private.url';
import { pictureService } from '@/services/picture.service';
import type { IPictureDto } from '@/types/picture.types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function usePictureForm() {
  const { register, reset, handleSubmit, watch, setValue } = useForm<IPictureDto>();
  const router = useRouter();

  const { mutate: mutateSendPicture, isPending } = useMutation({
    mutationFn: (dto: IPictureDto) => pictureService.processPicture(dto),
    onSuccess: () => {
      router.push(PRIVATE_URL.LK);
      toast.success('Successful publication');
      reset();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (dto: IPictureDto) => {
    console.log('dto', dto);
    mutateSendPicture(dto);
  };

  return { onSubmit, isPending, register, handleSubmit, watch, setValue };
}

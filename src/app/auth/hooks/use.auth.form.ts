import { PRIVATE_URL } from '@/configs/private.url';
import { authService } from '@/services/auth/auth.service';
import type { IUserDto } from '@/types/user.types';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function useAuthForm(type: 'login' | 'register') {
  const successMessage =
    type === 'login' ? 'Successful authorization !' : 'Successful registration !';

  const {
    formState: { errors, isSubmitted, isSubmitting },
    register,
    reset,
    handleSubmit,
  } = useForm<IUserDto>();
  const router = useRouter();

  const clientError = errors.email?.message || errors.password?.message;

  useEffect(() => {
    if (isSubmitting && clientError) toast.error(clientError);
  }, [clientError, isSubmitting]);

  useEffect(() => {
    if (isSubmitted && clientError) toast.error(clientError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted]);

  const { mutate, isPending } = useMutation({
    mutationKey: [type],
    mutationFn: (dto: IUserDto) => authService.main(type, dto),
    onSuccess: async () => {
      router.push(PRIVATE_URL.LK);
      const { toast } = await import('react-hot-toast');
      toast.success(successMessage);
      reset();
    },
    onError: async (error) => {
      if (isAxiosError(error)) {
        const { toast } = await import('react-hot-toast');
        toast.error(error.response?.data.message);
      }
    },
  });

  const onSubmit = (dto: IUserDto) => mutate(dto);

  return { register, isPending, handleSubmit, onSubmit };
}

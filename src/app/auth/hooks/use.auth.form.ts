import { authService } from '@/services/auth/auth.service';
import type { IUserDto } from '@/types/user.types';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function useAuthForm(isLogin: boolean) {
  const {
    formState: { errors, isSubmitted, isSubmitting },
    register,
    reset,
    handleSubmit,
  } = useForm<IUserDto>();

  const clientError = errors.email?.message || errors.password?.message;

  useEffect(() => {
    if (isSubmitting && clientError) toast.error(clientError);
  }, [clientError, isSubmitting]);

  useEffect(() => {
    if (isSubmitted && clientError) toast.error(clientError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted]);

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationKey: ['login'],
    mutationFn: (dto: IUserDto) => authService.main('login', dto),
    onSuccess: async () => {
      const { toast } = await import('react-hot-toast');
      toast.success('Successful authorization !');
      reset();
    },
    onError: async (error) => {
      if (isAxiosError(error)) {
        const { toast } = await import('react-hot-toast');
        toast.error(error.message);
      }
    },
  });

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationKey: ['register'],
    mutationFn: (dto: IUserDto) => authService.main('register', dto),
    onSuccess: async () => {
      const { toast } = await import('react-hot-toast');
      toast.success('Successful registration !');
      reset();
    },
    onError: async (error) => {
      if (isAxiosError(error)) {
        const { toast } = await import('react-hot-toast'); // решить с импортом
        toast.error(error.message);
      }
    },
  });

  const onSubmit = (dto: IUserDto) => {
    console.log(dto);

    // if (isLogin) {
    //   mutateLogin(dto);
    // } else {
    //   mutateRegister(dto);
    // }
  };

  const isPending = isPendingLogin || isPendingRegister;

  return { register, isPending, onSubmit, handleSubmit };
}

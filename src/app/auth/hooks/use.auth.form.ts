import type { IUserDto } from '@/types/user.types';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

export function useAuthForm(isLogin: boolean) {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm<IUserDto>();

  // const {} = useMutation({ mutationKey: ['login'], mutationFn: () => });

  return {};
}

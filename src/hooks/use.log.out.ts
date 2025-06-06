import { PUBLIC_URL } from '@/configs/public.url';
import { authService } from '@/services/auth/auth.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export function useLogOut() {
  const router = useRouter();

  const { mutate: mutateLogOut, isPending } = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: async () => {
      const { toast } = await import('react-hot-toast');
      toast.success('Log-out!');
      router.push(PUBLIC_URL.AUTH);
    },
  });

  return { mutateLogOut, isPending };
}

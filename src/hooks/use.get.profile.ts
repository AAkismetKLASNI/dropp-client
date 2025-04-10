import { userService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';

export function useGetProfile() {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getById(),
  });

  const profile = data?.data ? data.data : null;

  return { profile, isLoading };
}

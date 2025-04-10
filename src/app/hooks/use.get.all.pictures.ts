import { pictureService } from '@/services/picture.service';
import { useQuery } from '@tanstack/react-query';

export function useGetAllPictures() {
  const { data, isLoading } = useQuery({
    queryKey: ['all-pictures'],
    queryFn: () => pictureService.getAll(),
  });

  const allPictures = data?.data ? data.data : [];

  return { allPictures, isLoading };
}

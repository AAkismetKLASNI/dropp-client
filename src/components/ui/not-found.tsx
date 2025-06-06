import { Search } from 'lucide-react';
import { Button } from './button/button';
import { Icon } from './icon';
import { useRouter } from 'next/navigation';
import { PRIVATE_URL } from '@/configs/private.url';

export function NotFound() {
  const router = useRouter();

  return (
    <div className='w-full flex flex-col items-center gap-4 main-wrapper'>
      <Icon
        setBg={false}
        icon={Search}
        size='40'
      />
      <span>Nothing was found.</span>
      <Button
        className='w-40'
        onClick={() => router.push(PRIVATE_URL.ADD_PICTURE)}
      >
        + image
      </Button>
    </div>
  );
}

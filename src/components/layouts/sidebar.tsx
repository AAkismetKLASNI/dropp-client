'use client';

import { Icon } from '../ui/icon';
import { Home, Plus, User } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { PUBLIC_URL } from '@/configs/public.url';
import { PRIVATE_URL } from '@/configs/private.url';
import { Logo } from '../ui/logo';

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className='order-1 fixed z-10 bottom-0 w-full left-0 right-0 md:inset-auto md:py-4 md:w-auto md:order-none items-center flex flex-row md:flex-col gap-4'>
      <div className='bg-primary rounded-full p-2 hidden md:block'>
        <Logo
          className='w-8 h-8'
          size={32}
        />
      </div>

      <nav className='w-full bg-primary rounded-none md:rounded-full p-2 grid grid-cols-3 md:grid-cols-1 gap-2'>
        <Icon
          icon={Home}
          onClick={() => router.push(PUBLIC_URL.HOME)}
          className={pathname === PUBLIC_URL.HOME ? 'bg-white/10' : ''}
        />
        <Icon
          icon={Plus}
          onClick={() => router.push(PRIVATE_URL.ADD_PICTURE)}
          className={pathname === PRIVATE_URL.ADD_PICTURE ? 'bg-white/10' : ''}
        />
        <Icon
          icon={User}
          onClick={() => router.push(PRIVATE_URL.LK)}
          className={pathname === PRIVATE_URL.LK ? 'bg-white/10' : ''}
        />
      </nav>
    </aside>
  );
}

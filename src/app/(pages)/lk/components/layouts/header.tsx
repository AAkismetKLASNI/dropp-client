'use client';

import Image from 'next/image';
import { useGetProfile } from '../../hooks/use.get.profile';
import { Icon } from '@/components/ui/icon';
import { AlignRight, LogOut, Settings } from 'lucide-react';
import { ContextMenu } from '@/components/ui/context-menu/context-menu';
import { MenuItem } from '@/components/ui/context-menu/menu.item';
import { useOutside } from '@/hooks/use.outside';
import { AnimatePresence } from 'framer-motion';
import { useLogOut } from '../../hooks/use.log.out';

export function Header() {
  const { isShow, ref, setIsShow } = useOutside(false);
  const { profile, isLoading } = useGetProfile();

  const { mutateLogOut, isPending } = useLogOut();

  return (
    <>
      <header className='p-2 rounded-full max-w-140 mx-auto bg-secondary flex justify-between relative'>
        <div className='flex items-center gap-4'>
          {profile?.avatar ? (
            <Image
              src={profile.avatar}
              className='h-10 w-10'
              alt='avatar'
              height='40'
              width='40'
            />
          ) : (
            <div className='h-8 w-8 rounded-full bg-orange-600 flex justify-center items-center'>
              {profile?.email[0]}
            </div>
          )}

          {isLoading ? (
            <div className='h-3.5 w-30 rounded-xl bg-white/10'></div>
          ) : (
            <span>{profile?.email}</span>
          )}
        </div>
        <Icon
          icon={AlignRight}
          onClick={() => setIsShow(!isShow)}
        />
        <AnimatePresence>
          {isShow && (
            <ContextMenu ref={ref}>
              <MenuItem icon={Settings}>Settings</MenuItem>
              <MenuItem
                disabled={isPending}
                onClick={() => mutateLogOut()}
                icon={LogOut}
                extra='text-red-500'
                className='text-red-500'
              >
                Log-out
              </MenuItem>
            </ContextMenu>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

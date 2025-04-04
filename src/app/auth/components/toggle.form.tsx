import { Button } from '@/components/ui/button';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
  isLogin: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

export function ToggleForm({ isLogin, setLogin }: Props) {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <Button
        onClick={() => {
          setLogin(true);
        }}
        className={`${isLogin && 'bg-neutral-600'}`}
      >
        Log in
      </Button>
      <Button
        onClick={() => {
          setLogin(false);
        }}
        className={`${!isLogin && 'bg-neutral-600'}`}
      >
        Sign Up
      </Button>
    </div>
  );
}

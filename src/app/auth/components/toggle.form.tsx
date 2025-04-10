import { Button } from '@/components/ui/button/button';
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
        className={`${isLogin && 'bg-gradient-to-r from-accent to-[#FF4E63]'}`}
      >
        Log in
      </Button>
      <Button
        onClick={() => {
          setLogin(false);
        }}
        className={`${!isLogin && 'bg-gradient-to-l from-accent to-[#FF4E63]'}`}
      >
        Sign Up
      </Button>
    </div>
  );
}

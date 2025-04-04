'use client';

import { AuthForm } from './components/auth.form';

export function Auth() {
  return (
    <div className='grid grid-cols-2 gap-6 items-center min-h-screen'>
      <div className='bg-neutral-500 rounded-xl h-180'></div>
      <AuthForm />
    </div>
  );
}

'use client';

import { AuthForm } from './components/auth.form';

export function Auth() {
  return (
    <main className='grid grid-cols-2 gap-6 items-center min-h-screen container mx-auto'>
      <div className='bg-neutral-500 rounded-xl h-180'></div>
      <AuthForm />
    </main>
  );
}

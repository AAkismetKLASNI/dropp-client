'use client';

import { AuthForm } from './components/auth.form';

export function Auth() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center min-h-screen container mx-auto'>
      <div className='bg-secondary rounded-xl h-180'></div>
      <AuthForm />
    </main>
  );
}

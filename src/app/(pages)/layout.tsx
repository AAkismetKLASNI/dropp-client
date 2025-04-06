import { Sidebar } from '@/components/layouts/sidebar';
import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='grid grid-rows-[auto_1fr] md:grid-row-none gap-4 relative'>
      <Sidebar />

      <main className='mb-10 md:ml-20 md:mb-0'>{children}</main>
    </div>
  );
}

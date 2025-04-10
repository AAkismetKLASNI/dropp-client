import type { PropsWithChildren } from 'react';
import { Header } from '../../../components/layouts/header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='space-y-4'>
      <Header />

      <div>{children}</div>
    </div>
  );
}

import type { PropsWithChildren } from 'react';
import { Header } from './components/layouts/header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />

      <div>{children}</div>
    </div>
  );
}

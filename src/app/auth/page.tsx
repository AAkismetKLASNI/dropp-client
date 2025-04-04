import type { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Auth } from './auth';

export const metadata: Metadata = {
  title: 'Log in or Sign up !',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Auth />;
}

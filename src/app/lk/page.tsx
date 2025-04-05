import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Lk } from './lk';

export const metadata: Metadata = {
  title: 'Personal account',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Lk />;
}

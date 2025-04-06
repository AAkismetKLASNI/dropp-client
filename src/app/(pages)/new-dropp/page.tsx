import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { NewDropp } from './new-dropp';

export const metadata: Metadata = {
  title: 'Add new Dropp!',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <NewDropp />;
}

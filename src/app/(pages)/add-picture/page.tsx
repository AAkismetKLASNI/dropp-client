import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { AddPicture } from './add-picture';

export const metadata: Metadata = {
  title: 'Add new Dropp!',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <AddPicture />;
}

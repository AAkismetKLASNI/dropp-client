import { m } from 'framer-motion';
import type { PropsWithChildren, RefObject } from 'react';

interface Props extends PropsWithChildren {
  ref: RefObject<HTMLDivElement | null>;
}

export function ContextMenu({ children, ref }: Props) {
  return (
    <m.div
      ref={ref}
      initial={{ x: 5, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 5, opacity: 0 }}
      className='absolute z-50 right-0 top-[calc(100%+0.5rem)] py-2 px-1 bg-secondary rounded-xl space-y-2'
    >
      {children}
    </m.div>
  );
}

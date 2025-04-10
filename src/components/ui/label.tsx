import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  label: string;
  pattern?: string;
}

export function Label({ children, label, pattern }: Props) {
  return (
    <label className='space-y-2 block'>
      <div className='flex gap-8 justify-between'>
        <span className='block'>{label}</span>
        {pattern && <span className='text-gray'>{pattern}</span>}
      </div>

      {children}
    </label>
  );
}

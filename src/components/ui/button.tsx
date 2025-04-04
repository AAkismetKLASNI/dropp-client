import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...props }: Props) {
  return (
    <button
      {...props}
      className={twMerge('p-2 bg-neutral-900 rounded-lg', className)}
    >
      {children}
    </button>
  );
}

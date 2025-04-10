import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...props }: Props) {
  return (
    <button
      {...props}
      className={twMerge(
        'py-2 px-4 bg-secondary rounded-xl w-full cursor-pointer transition-transform hover:scale-95',
        className
      )}
    >
      {children}
    </button>
  );
}

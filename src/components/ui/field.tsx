import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Field(props: Props) {
  return (
    <input
      {...props}
      className='p-2 rounded-lg outline-none w-full'
    />
  );
}

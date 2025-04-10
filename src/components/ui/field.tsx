import { forwardRef, Ref, type InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = InputHTMLAttributes<HTMLInputElement>;

function FieldInner(props: Props, ref: Ref<HTMLInputElement> | undefined) {
  return (
    <input
      ref={ref}
      {...props}
      className={twMerge(
        'py-2 px-4 bg-primary rounded-xl outline-none block w-full',
        props.className
      )}
    />
  );
}

export const Field = forwardRef(FieldInner);

Field.displayName = 'Field';

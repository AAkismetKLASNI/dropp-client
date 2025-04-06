import { forwardRef, Ref, type InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

function FieldInner(props: Props, ref: Ref<HTMLInputElement> | undefined) {
  return (
    <input
      ref={ref}
      {...props}
      className={`p-2 rounded-xl outline-none w-full ${props.className}`}
    />
  );
}

export const Field = forwardRef(FieldInner);

Field.displayName = 'Field';

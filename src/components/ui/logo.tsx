import Image from 'next/image';

interface Props {
  className: string;
  size: number;
}

export function Logo({ className, size }: Props) {
  return (
    <Image
      src='/logo.svg'
      alt='logo'
      className={className}
      width={size}
      height={size}
    />
  );
}

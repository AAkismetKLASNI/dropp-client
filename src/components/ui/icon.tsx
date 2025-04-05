import type { LucideIcon, LucideProps } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

type Props = LucideProps & { icon: LucideIcon; setBg?: boolean };

export function Icon({
  icon: IconComponent,
  className,
  onClick,
  setBg = true,
  ...props
}: Props) {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        `p-2 text-text cursor-pointer ${
          setBg && 'transition-colors hover:bg-white/10'
        } rounded-full inline-block`,
        className
      )}
    >
      <IconComponent
        size='20'
        {...props}
      />
    </div>
  );
}

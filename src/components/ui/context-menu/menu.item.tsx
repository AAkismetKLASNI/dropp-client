import type { LucideIcon } from 'lucide-react';
import { Icon } from '../icon';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  extra?: string;
  icon: LucideIcon;
}

export function MenuItem({ children, className, icon, extra, ...props }: Props) {
  return (
    <button
      {...props}
      className={`flex items-center gap-4 cursor-pointer py-1 px-4 rounded-xl hover:bg-white/10 transition-opacity ${className}`}
    >
      <Icon
        icon={icon}
        className={`p-0 ${extra}`}
        setBg={false}
      />

      <span>{children}</span>
    </button>
  );
}

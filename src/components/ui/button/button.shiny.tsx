import { type HTMLMotionProps, m } from 'framer-motion';
import styles from './button.shiny.module.css';
import type { ReactNode } from 'react';

type PropsMotion = Omit<HTMLMotionProps<'button'>, 'ref'> & {
  children: ReactNode;
};

export function ButtonShiny({ children, className, ...props }: PropsMotion) {
  return (
    <m.button
      className={`${styles['radial-gradient']} w-full px-6 py-2 rounded-lg relative cursor-pointer ${className}`}
      initial={{ '--x': '100%' }}
      animate={{ '--x': '-100%' }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
      }}
      {...props}
    >
      <span
        className={`${styles['linear-mask']} text-text flex justify-center items-center tracking-wide font-light h-full w-full relative`}
      >
        {children}
      </span>
      <span
        className={`${styles['linear-overlay']} block absolute inset-0 rounded-xl p-px`}
      />
    </m.button>
  );
}

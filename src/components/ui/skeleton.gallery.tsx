import { m } from 'framer-motion';

const skeletonItems: { height: string }[] = [
  { height: 'h-44' },
  { height: 'h-34' },
  { height: 'h-52' },
  { height: 'h-60' },
  { height: 'h-52' },
  { height: 'h-38' },
  { height: 'h-30' },
  { height: 'h-28' },
  { height: 'h-30' },
  { height: 'h-58' },
  { height: 'h-48' },
  { height: 'h-78' },
  { height: 'h-48' },
  { height: 'h-64' },
  { height: 'h-48' },
  { height: 'h-28' },
  { height: 'h-30' },
  { height: 'h-58' },
  { height: 'h-52' },
  { height: 'h-38' },
  { height: 'h-52' },
  { height: 'h-52' },
  { height: 'h-78' },
  { height: 'h-52' },
  { height: 'h-48' },
  { height: 'h-52' },
  { height: 'h-52' },
  { height: 'h-38' },
  { height: 'h-52' },
  { height: 'h-48' },
  { height: 'h-38' },
  { height: 'h-30' },
  { height: 'h-28' },
  { height: 'h-78' },
  { height: 'h-48' },
  { height: 'h-30' },
  { height: 'h-58' },
  { height: 'h-52' },
  { height: 'h-64' },
  { height: 'h-48' },
  { height: 'h-78' },
  { height: 'h-78' },
];

export function SkeletonGallery() {
  return (
    <m.ul
      className='gallery-grid'
      exit={{ opacity: 0 }}
    >
      {skeletonItems.map(({ height }, index) => {
        return (
          <m.li
            key={index}
            className={`w-full block mb-4 bg-secondary rounded-xl break-inside-avoid ${height}`}
            aria-hidden
          />
        );
      })}
    </m.ul>
  );
}

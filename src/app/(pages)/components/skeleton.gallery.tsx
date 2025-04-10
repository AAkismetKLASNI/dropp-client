const skeletonItems: { height: string }[] = [
  { height: 'h-44' },
  { height: 'h-34' },
  { height: 'h-26' },
  { height: 'h-60' },
  { height: 'h-26' },
  { height: 'h-38' },
  { height: 'h-30' },
  { height: 'h-28' },
  { height: 'h-30' },
  { height: 'h-58' },
  { height: 'h-20' },
  { height: 'h-78' },
  { height: 'h-20' },
  { height: 'h-64' },
  { height: 'h-48' },
];

export function SkeletonGallery() {
  return (
    <ul className='gallery-grid'>
      {skeletonItems.map(({ height }, index) => {
        return (
          <li
            key={index}
            className={`w-full block mb-4 bg-white/10 rounded-xl break-inside-avoid ${height}`}
            aria-hidden
          />
        );
      })}
    </ul>
  );
}

import Image from 'next/image';
import { Avatar } from './avatar';

interface Props {
  path: string;
  width: number;
  height: number;
  originalName: string;
  withAvatar?: boolean;
  avatar?: string;
  email?: string;
}

export function Picture(props: Props) {
  return (
    <div className='mb-6 break-inside-avoid space-y-2'>
      <Image
        className='rounded-xl cursor-pointer transition-opacity hover:opacity-40'
        src={props.path}
        alt='picture'
        width={props.width}
        height={props.height}
      />

      <div className='flex gap-2 items-center mx-2'>
        {props.withAvatar && (
          <Avatar
            avatar={props.avatar}
            email={props.email}
            className='h-7 min-w-7 max-w-7 hidden md:flex'
            size={28}
          />
        )}

        <p className='line-clamp-1 wrap-anywhere'>{props.originalName}</p>
      </div>
    </div>
  );
}

import Image from 'next/image';

interface Props {
  avatar: string | undefined;
  email: string | undefined;
  className: string;
  size: number;
}

export function Avatar({ avatar, email, className, size }: Props) {
  return (
    <>
      {avatar ? (
        <Image
          src={avatar}
          className={`${className} rounded-full aspect-square`}
          alt='avatar'
          height={size}
          width={size}
        />
      ) : (
        <div
          className={`${className} rounded-full bg-orange-600 flex justify-center items-center`}
        >
          {email && email[0].toUpperCase()}
        </div>
      )}
    </>
  );
}

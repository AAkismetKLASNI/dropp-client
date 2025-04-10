import { IPicture } from '@/types/picture.types';

interface IDateGroup {
  date: string;
  pictures: IPicture[];
}

export const groupPicturesByDate = (
  pictures: IPicture[] | undefined
): IDateGroup[] | [] => {
  if (!pictures?.length) return [];

  const grouped = pictures.reduce((acc: { [key: string]: IPicture[] }, picture) => {
    const date = new Date(picture.createdAt);
    const formattedDate = [
      date.getDate().toString().padStart(2, '0'),
      (date.getMonth() + 1).toString().padStart(2, '0'),
      date.getFullYear(),
    ].join('.');

    if (!acc[formattedDate]) {
      acc[formattedDate] = [];
    }
    acc[formattedDate].push(picture);
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([date, pictures]) => ({ date, pictures }))
    .sort((a, b) => {
      const [dA, mA, yA] = a.date.split('.');
      const [dB, mB, yB] = b.date.split('.');
      return (
        new Date(`${yB}-${mB}-${dB}`).getTime() - new Date(`${yA}-${mA}-${dA}`).getTime()
      );
    });
};

import { IUser } from './user.types';

export interface IPictureDto {
  originalName: string;
  path: string;

  width: number;
  height: number;
}

export interface IPicture extends IPictureDto {
  id: string;

  createdAt: string;
  updatedAt: string;

  name: string;

  user: Pick<IUser, 'avatar' | 'email'>;
  userId: string;
}

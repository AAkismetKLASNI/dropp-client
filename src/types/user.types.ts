import { IPicture } from './picture.types';

export interface IUser {
  id: string;

  avatar: string;
  email: string;

  pictures: IPicture[];
}

export interface IUserDto extends Pick<IUser, 'email'> {
  password: string;
}

export interface IAuthRes {
  user: IUser;
  accessToken: string;
}

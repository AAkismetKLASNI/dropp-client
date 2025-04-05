import { IPichure } from './pichure.types';

export interface IUser {
  id: string;

  avatar: string;
  email: string;

  pichures: IPichure[];
}

export interface IUserDto extends Pick<IUser, 'email'> {
  password: string;
}

export interface IAuthRes {
  user: IUser;
  accessToken: string;
}

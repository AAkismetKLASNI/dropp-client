export interface IUser {
  avatar: string;
  email: string;
}

export interface IUserDto extends Pick<IUser, 'email'> {
  password: string;
}

export interface IAuthRes {
  user: IUser;
  accessToken: string;
}

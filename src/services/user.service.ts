import { instance } from '@/api/instance';
import type { IUser } from '@/types/user.types';

class UserService {
  private BASE_URL = 'user';

  async getById() {
    return instance.get<IUser>(`${this.BASE_URL}/profile`);
  }
}

export const userService = new UserService();

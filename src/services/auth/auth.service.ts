import { axiosClassic } from '@/api/instance';
import type { IAuthRes, IUserDto } from '@/types/user.types';
import { removeAccessToken, saveAccessToken } from './auth.helper';

class AuthService {
  private BASE_URL = 'auth';

  async main(type: 'login' | 'register', dto: IUserDto) {
    const response = await axiosClassic.post<IAuthRes>(`${this.BASE_URL}/${type}`, dto);

    if (response.data.accessToken) saveAccessToken(response.data.accessToken);

    return response;
  }

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthRes>(`${this.BASE_URL}/access-token`);

    if (response.data.accessToken) saveAccessToken(response.data.accessToken);

    return response;
  }

  async logout() {
    const response = await axiosClassic.post<boolean>(`${this.BASE_URL}/logout`);

    if (response.data) removeAccessToken();
  }
}

export const authService = new AuthService();

import axios, { type CreateAxiosDefaults } from 'axios';
import { errorCatch } from './error';
import { getAccessToken, removeAccessToken } from '@/services/auth/auth.helper';
import { authService } from '@/services/auth/auth.service';

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_API,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

export const axiosClassic = axios.create(options);

export const instance = axios.create(options);

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const request = error.config;

    if (
      error.response.status === 401 ||
      (errorCatch(error) && error.config && !error.config._isReady)
    ) {
      request._isReady = true;
      try {
        await authService.getNewTokens();
        return instance.request(request);
      } catch (error) {
        if (error) {
          removeAccessToken();
        }
      }
    }
  }
);

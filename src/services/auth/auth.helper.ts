import Cookies from 'js-cookie';

export const AuthTokens = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
} as const;

export type AuthTokens = (typeof AuthTokens)[keyof typeof AuthTokens];

export const getAccessToken = () => {
  const accessToken = Cookies.get(AuthTokens.ACCESS_TOKEN);

  return accessToken || null;
};

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(AuthTokens.ACCESS_TOKEN, accessToken, {
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    sameSite: 'strict',
    expires: new Date(Date.now() + 60 * 60 * 1000),
  });
};

export const removeAccessToken = () => {
  Cookies.remove(AuthTokens.ACCESS_TOKEN);
};

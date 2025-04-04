import Cookies from 'js-cookie';

export const AuthTokens = {
  accessToken: 'ACCESS_TOKEN',
  refreshToken: 'REFRESH_TOKEN',
} as const;

export type AuthTokens = (typeof AuthTokens)[keyof typeof AuthTokens];

export const getAccessToken = () => {
  const accessToken = Cookies.get(AuthTokens.accessToken);

  return accessToken || null;
};

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(AuthTokens.accessToken, accessToken, {
    domain: process.env.NEXT_PUBLIC_DOMAIN, // localhost
    sameSite: 'strict',
    expires: 7,
  });
};

export const removeAccessToken = () => {
  Cookies.remove(AuthTokens.accessToken);
};

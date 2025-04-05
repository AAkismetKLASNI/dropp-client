import { type NextRequest, NextResponse } from 'next/server';
import { AuthTokens } from './services/auth/auth.helper';
import { PUBLIC_URL } from './configs/public.url';
import { PRIVATE_URL } from './configs/private.url';

export const middleware = (req: NextRequest) => {
  const { url, cookies } = req;

  const refreshToken = cookies.get(AuthTokens.REFRESH_TOKEN)?.value;

  const isAuthPage = url.includes(PUBLIC_URL.AUTH);

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(PRIVATE_URL.LK, req.url));
  }

  if (!isAuthPage && !refreshToken) {
    return NextResponse.redirect(new URL(PUBLIC_URL.AUTH, req.url));
  }
};

export const config = { matcher: ['/lk', '/auth'] };

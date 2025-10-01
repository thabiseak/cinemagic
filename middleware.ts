import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_PREFIX = '/admin';
const ADMIN_API_PREFIX = '/api/admin';
const LOGIN_PATH = '/admin/login';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(ADMIN_PREFIX) || pathname.startsWith(ADMIN_API_PREFIX)) {
    const token = await getToken({ req: request });
    const isLoginRoute = pathname === LOGIN_PATH;

    if (!token) {
      if (isLoginRoute) {
        return NextResponse.next();
      }

      const loginUrl = new URL(LOGIN_PATH, request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const isAdmin = token.role === 'ADMIN';

    if (isLoginRoute && isAdmin) {
      return NextResponse.redirect(new URL(ADMIN_PREFIX, request.url));
    }

    if (!isAdmin && !isLoginRoute) {
      const loginUrl = new URL(LOGIN_PATH, request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};

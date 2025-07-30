import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware(async (auth, req) => {
    if (req.nextUrl.pathname === '/login') {
        const { userId } = await auth();

        if (userId) {
            return NextResponse.redirect(new URL('/quiz/topics', req.url));
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        '/((?!_next|static|favicon.ico|.*\\..*).*)',
        '/',
        '/(api|trpc)(.*)'
    ],
};

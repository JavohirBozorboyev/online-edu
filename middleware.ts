import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {},

  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/login/signin",
    },
  }
);

export const config = { matcher: ["/dashboard/:path*"] };

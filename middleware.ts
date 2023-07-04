import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth);
  },

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

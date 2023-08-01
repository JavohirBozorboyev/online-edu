// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req, res) {},

//   {
//     callbacks: {
//       authorized: ({ token }) => {
//         return !!token;
//       },
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     pages: {
//       signIn: "/login/signin",
//     },
//   }
// );

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };

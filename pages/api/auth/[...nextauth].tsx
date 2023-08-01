/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = (req: any, res: any) => {
  return {
    pages: {
      signIn: "/login/signin",
      newUser: "/auth/new-user",
      error: "/api/auth/error",
    },
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {},
        async authorize(credentials) {
          const authResponse = await fetch(
            `${process.env.NEXT_PUBLIC_URL_BACE}/student/login/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            }
          );

          if (!authResponse.ok) {
            return null;
          }

          const user = await authResponse.json();

          console.log(user.token.access);

          return {
            id: user.user_profile_data.id,
            image: { ...user },
            name: user?.token?.access,
            email: user.user_profile_data.email,
          };
        },
      }),
    ],

    callbacks: {
      async signIn({ user, account, profile, email, credentials }: any) {
        return true;
      },
      async redirect({ url, baseUrl }: any) {
        return baseUrl;
      },
      async session({ session, token, user }: any) {
        session.backendToken = token.picture.token.access;
        session.accessToken = token.picture.token.access;

        return session;
      },
      async jwt({ token, user, account, profile, isNewUser }: any) {
        if (account && user) {
          return {
            ...token,
            accessToken: user.token,
            refreshToken: user.refreshToken,
          };
        }

        return token;
      },
    },
  };
};
export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions(req, res));
};

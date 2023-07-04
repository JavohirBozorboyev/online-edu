import { setCookie } from "cookies-next";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/login/signin",
    newUser: "/auth/new-user",
    error: "/api/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/student/login/`,
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

        return {
          id: user.user_profile_data.id,
          email: { ...user },
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }: any) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },

    async signIn({ user, account, profile, email, credentials }: any) {
      return { ...user, ...account, ...credentials };
    },

    async session({ session, user, token }: any) {
      return { ...session };
    },
    
  },
  
};
export default NextAuth(authOptions);

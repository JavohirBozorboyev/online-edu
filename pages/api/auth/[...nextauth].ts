import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/login/signin",
    error: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        tel: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: credentials?.username, email: "test" };

        if (user) {
          return {
            id: "1",
            name: credentials?.username,
            email: credentials?.password,

            image: "img url",
          };
        } else {
          return null;
        }
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
      return true;
    },

    async session({ session, user, token }: any) {
      return session;
    },
  },
};
export default NextAuth(authOptions);

// https://github.com/nextauthjs/next-auth/discussions/4394

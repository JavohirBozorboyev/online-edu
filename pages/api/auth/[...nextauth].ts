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
      credentials: {},
      async authorize(credentials, req) {
        const { email , password }: any = credentials;

        

        return {
        
          email,
          password,
         
         
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }: any) {
      if (user) {
        token.role = user.role;
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

// https://github.com/nextauthjs/next-auth/discussions/4394

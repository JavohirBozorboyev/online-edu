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

         try {
            const response = await fetch("https://onlineedu.pythonanywhere.com/api/student/login/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                password: password
              }),
            });

            const result = await response.json();
            // console.log("Success:", result);
             

             return {
              name: {...result},
              token: result.token.access,
              email: result.user_profile_data.email,
              id: result.user_profile_data.id,

              
             }
          } catch (error) {
          
          }

        return null
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

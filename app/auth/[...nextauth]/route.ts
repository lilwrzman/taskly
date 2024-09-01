import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address!")
    .min(1, "Email is required!"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long!")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
});

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Type your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const validateCredentials = loginSchema.parse(credentials);

          const user = await prisma.user.findUnique({
            where: { email: validateCredentials.email },
          });

          if (!user) {
            throw new Error(JSON.stringify({ email: "Email not registered!" }));
          }

          const isPasswordValid = await bcrypt.compare(
            validateCredentials.password,
            user.password
          );

          if (!isPasswordValid) {
            throw new Error(
              JSON.stringify({ password: "Password is incorrect!" })
            );
          }

          return user;
        } catch (e) {
          console.log(e);
          if (e instanceof z.ZodError) {
            const errors = e.errors.reduce((acc, curr) => {
              acc[curr.path[0]] = curr.message;
              return acc;
            }, {});
            throw new Error(JSON.stringify(errors));
          }
          throw e;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
          image: token.image as string,
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };

import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/db";
import { getUserById } from "./services/user";
import authConfig from "./auth.config";

declare module "@auth/core" {
  interface session {
    user: { role } & DefaultSession["user"];
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      try {
        const existingUser = await getUserById(token.sub);

        if (!existingUser) return token;

        token.role = existingUser.role;
      } catch (error) {
        console.error("Error in JWT callback:", error);
      }

      return token;
    },
  },
});

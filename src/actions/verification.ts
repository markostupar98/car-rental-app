"use server";

import { prisma } from "@/lib/db";
import { getUserByEmail } from "@/services/user";
import { getVerificationTokenByToken } from "@/services/verificationToken";

export const verification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist" };
  }

  const isTokenExpired = new Date(existingToken.expires) < new Date();

  if (isTokenExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  await prisma.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await prisma.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });
  return { success: "Email verified!" };
};

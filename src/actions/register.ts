"use server";

import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";
import * as z from "zod";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVefiticationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return { error: "Email already in use!" };
  }
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVefiticationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent!" };
};

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVefiticationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/verification?token=${token}`;

  await resend.emails.send({
    from: "onoarding@resend.dev",
    to: email,
    subject: "Confirm your email",

    html: `<p>Click <a href="${confirmLink}">Here to confirm your email!</a></p>`,
  });
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/newPassword?token=${token}`;

  await resend.emails.send({
    from: "onoarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">Here to reset your password!</a></p>`,
  });
};

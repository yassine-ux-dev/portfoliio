import nodemailer from "nodemailer";

const email = process.env.SMTP_EMAIL;
const password = process.env.SMTP_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password, // Correction: utiliser 'password' au lieu de 'pass'
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
export const nextConfig = { images: { domains: ["github.com"] } };

import * as yup from "yup";
import { PROFESSIONS } from "@/constants/professions";
import { Profession } from "@/types";

const email = yup.string().trim().email("Invalid email format").required("Email is required");
const password = yup.string().min(6, "Password must be at least 6 characters").required("Password is required");
const confirmedPassword = (field: string) =>
  yup
    .string()
    .oneOf([yup.ref(field)], "Passwords must match")
    .required("Repeat the password");

export const profileSchema = yup.object({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  phone: yup
    .string()
    .trim()
    .matches(/^\+\d[\d\s-]{6,}$/, "Enter the phone with the country code, for example +374 77 123456")
    .required("Phone is required"),
  profession: yup
    .mixed<Profession>()
    .oneOf(PROFESSIONS.map(({ value }) => value))
    .transform((value) => value || undefined)
    .optional(),
});

export const loginSchema = yup.object({ email, password });

export const signUpSchema = profileSchema.shape({
  email,
  password,
  confirmedPassword: confirmedPassword("password"),
  consent: yup.boolean().oneOf([true], "Please accept the privacy policy").required(),
});

export const forgotPasswordSchema = yup.object({ email });

export const resetPasswordSchema = yup.object({
  newPassword: password,
  confirmedPassword: confirmedPassword("newPassword"),
});

export type LoginFormType = yup.InferType<typeof loginSchema>;
export type SignUpFormType = yup.InferType<typeof signUpSchema>;
export type ProfileFormType = yup.InferType<typeof profileSchema>;
export type ForgotPasswordFormType = yup.InferType<typeof forgotPasswordSchema>;
export type ResetPasswordFormType = yup.InferType<typeof resetPasswordSchema>;

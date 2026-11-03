"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import RouteEnum from "@/enums/route.enum";
import { Button, Field, Input } from "@/components/ui";
import { ProfileFields } from "@/components/account/ProfileFields";
import { useSignUpMutation } from "@/services/auth/auth.service";
import { SignUpFormType, signUpSchema } from "@/yupValidation/AuthValidation";
import { getApiErrorMessage } from "@/utils/utils";

const SignUpContainer = () => {
  const router = useRouter();
  const [signUp, { isLoading }] = useSignUpMutation();
  const form = useForm<SignUpFormType>({ resolver: yupResolver(signUpSchema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async ({ email, password, firstName, lastName, phone, profession }: SignUpFormType) => {
    try {
      await signUp({ email, password, firstName, lastName, phone, profession }).unwrap();
      router.push(`${RouteEnum.VERIFY_EMAIL}?email=${encodeURIComponent(email)}`);
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-4" noValidate onSubmit={handleSubmit(onSubmit)}>
        <ProfileFields />
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" autoComplete="email" {...register("email")} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Password" error={errors.password?.message}>
            <Input type="password" autoComplete="new-password" {...register("password")} />
          </Field>
          <Field label="Repeat password" error={errors.confirmedPassword?.message}>
            <Input type="password" autoComplete="new-password" {...register("confirmedPassword")} />
          </Field>
        </div>
        <Field error={errors.consent?.message}>
          <span className="flex items-center gap-2 text-xs text-muted">
            <input type="checkbox" {...register("consent")} /> I agree with the privacy policy
          </span>
        </Field>
        <Button type="submit" block disabled={isLoading}>
          {isLoading ? "Creating account…" : "Sign up"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignUpContainer;

"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import RouteEnum from "@/enums/route.enum";
import { Button, ButtonLink, Field, Input } from "@/components/ui";
import { useResetPasswordMutation } from "@/services/auth/auth.service";
import { ResetPasswordFormType, resetPasswordSchema } from "@/yupValidation/AuthValidation";
import { getApiErrorMessage } from "@/utils/utils";

const ResetPasswordContainer = () => {
  const token = useSearchParams().get("token");
  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormType>({ resolver: yupResolver(resetPasswordSchema) });

  const onSubmit = async ({ newPassword }: ResetPasswordFormType) => {
    try {
      await resetPassword({ token: token!, newPassword }).unwrap();
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
  };

  if (!token) {
    return <p className="rounded-lg bg-soft p-4 text-sm">The link is not complete. Open it again from the email.</p>;
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col gap-4">
        <p className="rounded-lg bg-soft p-4 text-sm">Your password is changed. Log in with the new password.</p>
        <ButtonLink href={RouteEnum.LOGIN} block>
          Log in
        </ButtonLink>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Field label="New password" error={errors.newPassword?.message}>
        <Input type="password" autoComplete="new-password" {...register("newPassword")} />
      </Field>
      <Field label="Repeat password" error={errors.confirmedPassword?.message}>
        <Input type="password" autoComplete="new-password" {...register("confirmedPassword")} />
      </Field>
      <Button type="submit" block disabled={isLoading}>
        {isLoading ? "Saving…" : "Save"}
      </Button>
    </form>
  );
};

export default ResetPasswordContainer;

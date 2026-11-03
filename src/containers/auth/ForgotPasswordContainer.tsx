"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { Button, Field, Input } from "@/components/ui";
import { useForgotPasswordMutation } from "@/services/auth/auth.service";
import { ForgotPasswordFormType, forgotPasswordSchema } from "@/yupValidation/AuthValidation";
import { getApiErrorMessage } from "@/utils/utils";

const ForgotPasswordContainer = () => {
  const [forgotPassword, { isLoading, isSuccess }] = useForgotPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormType>({ resolver: yupResolver(forgotPasswordSchema) });

  const onSubmit = async (data: ForgotPasswordFormType) => {
    try {
      await forgotPassword(data).unwrap();
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
  };

  if (isSuccess) {
    return <p className="rounded-lg bg-soft p-4 text-sm">If this email is registered, we sent a link to reset the password.</p>;
  }

  return (
    <form className="flex flex-col gap-4" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Field label="Email" error={errors.email?.message}>
        <Input type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Button type="submit" block disabled={isLoading}>
        {isLoading ? "Sending…" : "Send link"}
      </Button>
    </form>
  );
};

export default ForgotPasswordContainer;

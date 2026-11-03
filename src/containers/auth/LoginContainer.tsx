"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import RouteEnum from "@/enums/route.enum";
import { Button, Field, Input } from "@/components/ui";
import { useLoginMutation } from "@/services/auth/auth.service";
import { LoginFormType, loginSchema } from "@/yupValidation/AuthValidation";
import { getApiErrorMessage } from "@/utils/utils";
import { nextPathFromUrl } from "@/utils/redirect";

const LoginContainer = () => {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data: LoginFormType) => {
    try {
      await login(data).unwrap();
      toast.success("Signed in");
      router.push(nextPathFromUrl(RouteEnum.ACCOUNT));
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
  };

  return (
    <form className="flex flex-col gap-4" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Field label="Email" error={errors.email?.message}>
        <Input type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field label="Password" error={errors.password?.message}>
        <Input type="password" autoComplete="current-password" {...register("password")} />
      </Field>
      <Link href={RouteEnum.FORGOT_PASSWORD} className="self-end text-xs underline">
        Forgot password?
      </Link>
      <Button type="submit" block disabled={isLoading}>
        {isLoading ? "Signing in…" : "Log in"}
      </Button>
    </form>
  );
};

export default LoginContainer;

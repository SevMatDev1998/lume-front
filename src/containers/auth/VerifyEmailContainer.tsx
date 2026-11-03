"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import RouteEnum from "@/enums/route.enum";
import { Button, ButtonLink } from "@/components/ui";
import { AuthHeading } from "@/components/auth/AuthHeading";
import { useConfirmEmailMutation, useResendConfirmationMutation } from "@/services/auth/auth.service";
import { getApiErrorMessage } from "@/utils/utils";

const ConfirmToken = ({ token }: { token: string }) => {
  const [confirmEmail, { isSuccess, isError, error }] = useConfirmEmailMutation();
  const requested = useRef(false);

  useEffect(() => {
    if (requested.current) return;
    requested.current = true;
    confirmEmail({ token });
  }, [confirmEmail, token]);

  if (isSuccess) {
    return (
      <>
        <AuthHeading title="Email confirmed">Your account is ready. You can log in now.</AuthHeading>
        <ButtonLink href={RouteEnum.LOGIN} block>
          Log in
        </ButtonLink>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <AuthHeading title="Link is not valid">{getApiErrorMessage(error)}</AuthHeading>
        <ButtonLink href={RouteEnum.LOGIN} variant="outline" block>
          Back to log in
        </ButtonLink>
      </>
    );
  }

  return <AuthHeading title="Confirming your email…" />;
};

const CheckInbox = ({ email }: { email: string | null }) => {
  const [resend, { isLoading }] = useResendConfirmationMutation();

  const handleResend = async () => {
    if (!email) return;
    try {
      await resend({ email }).unwrap();
      toast.success("We sent the email again");
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
  };

  return (
    <>
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-soft text-xl">✉</div>
      <AuthHeading title="Check your email">
        We sent a link{email && ` to ${email}`}. Open it to confirm your email.
      </AuthHeading>
      {email && (
        <Button variant="outline" onClick={handleResend} disabled={isLoading}>
          Send the email again
        </Button>
      )}
    </>
  );
};

const VerifyEmailContainer = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return <div className="text-center">{token ? <ConfirmToken token={token} /> : <CheckInbox email={searchParams.get("email")} />}</div>;
};

export default VerifyEmailContainer;

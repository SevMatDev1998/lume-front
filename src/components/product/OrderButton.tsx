"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import RouteEnum from "@/enums/route.enum";
import { Button, ButtonLink, Field, Modal, Select, Textarea } from "@/components/ui";
import { useCreateInquiryMutation } from "@/services/inquiry/inquiry.service";
import useAuth from "@/hooks/useAuth";
import { getApiErrorMessage } from "@/utils/utils";
import { loginRoute } from "@/utils/redirect";

type OrderButtonProps = {
  productName: string;
  productSlug?: string;
  selection?: string;
  options?: { label: string; values: readonly string[] };
};

const GuestPrompt = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted">Log in or create an account to send a request. We will call you to discuss the details.</p>
      <ButtonLink href={loginRoute(pathname)} block>
        Log in
      </ButtonLink>
      <ButtonLink href={RouteEnum.REGISTER} variant="outline" block>
        Sign up
      </ButtonLink>
    </div>
  );
};

const OrderForm = ({ productName, productSlug, selection, options, onDone }: OrderButtonProps & { onDone: () => void }) => {
  const { user } = useAuth();
  const [createInquiry, { isLoading, isSuccess }] = useCreateInquiryMutation();
  const [option, setOption] = useState(options?.values[0] ?? "");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const comment = new FormData(event.currentTarget).get("comment")?.toString().trim();
    try {
      await createInquiry({
        productSlug,
        selection: [option, selection].filter(Boolean).join(" · ") || undefined,
        comment: comment || undefined,
      }).unwrap();
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col gap-4 text-center">
        <p className="text-lg font-semibold">Request sent</p>
        <p className="text-sm text-muted">We will call you{user?.phone && ` at ${user.phone}`} to discuss the price and details.</p>
        <ButtonLink href={RouteEnum.ACCOUNT} variant="outline" block onClick={onDone}>
          My orders
        </ButtonLink>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="rounded-lg bg-soft p-3 text-sm">
        <p className="font-semibold">{productName}</p>
        {selection && <p className="text-muted">{selection}</p>}
      </div>
      {options && (
        <Field label={options.label}>
          <Select value={option} onChange={(event) => setOption(event.target.value)}>
            {options.values.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </Select>
        </Field>
      )}
      <Field label="Comment">
        <Textarea name="comment" maxLength={1000} placeholder="Prescription, preferred time to call…" />
      </Field>
      <Button type="submit" block disabled={isLoading}>
        {isLoading ? "Sending…" : "Send request"}
      </Button>
      <p className="text-center text-xs text-muted">We will discuss the price and details by phone.</p>
    </form>
  );
};

export const OrderButton = (props: OrderButtonProps) => {
  const [open, setOpen] = useState(false);
  const { status } = useAuth();
  const close = () => setOpen(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="w-full sm:w-auto">
        Order
      </Button>
      <Modal open={open} onClose={close} title="Send a request">
        {open && (status === "user" ? <OrderForm {...props} onDone={close} /> : <GuestPrompt />)}
      </Modal>
    </>
  );
};

"use client";

import { useState } from "react";
import { Button, Field, Input, Modal, Textarea } from "@/components/ui";

export const OrderButton = ({ productName }: { productName: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="w-full sm:w-auto">
        Order
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Place an order">
        <form className="flex flex-col gap-3">
          <div className="rounded-lg bg-soft p-3 text-sm font-semibold">{productName}</div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="First name">
              <Input name="firstName" />
            </Field>
            <Field label="Last name">
              <Input name="lastName" />
            </Field>
          </div>
          <Field label="Phone">
            <Input name="phone" type="tel" />
          </Field>
          <Field label="Comment">
            <Textarea name="comment" />
          </Field>
          <Button type="submit" block>
            Send order
          </Button>
          <p className="text-center text-xs text-muted">We will discuss the price and details by phone.</p>
        </form>
      </Modal>
    </>
  );
};

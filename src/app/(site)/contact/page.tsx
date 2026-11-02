import type { Metadata } from "next";
import { Button, Container, Field, Input, Placeholder, Textarea } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Lume to choose ExamVision loupes and book a fitting in Yerevan.",
};

const CONTACTS = [
  ["Phone", "+374 77 210119"],
  ["Email", "artush.stomatology@gmail.com"],
  ["Address", "4 Mazmanian street, Apt. 55, 0088 Yerevan"],
];

export default function ContactPage() {
  return (
    <Container className="grid gap-10 py-14 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold">Contact us</h1>
        <p className="mt-2 mb-8 text-muted">We will answer questions, help choose a model and arrange a fitting.</p>
        <dl className="flex flex-col gap-4">
          {CONTACTS.map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs text-muted">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <Placeholder className="mt-8 aspect-video rounded-xl">Map</Placeholder>
      </div>
      <form className="flex h-max flex-col gap-4 rounded-2xl border border-line p-6">
        <Field label="Name">
          <Input name="name" />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone">
            <Input name="phone" type="tel" />
          </Field>
          <Field label="Email">
            <Input name="email" type="email" />
          </Field>
        </div>
        <Field label="Message">
          <Textarea name="message" />
        </Field>
        <Button type="submit" block>
          Send
        </Button>
      </form>
    </Container>
  );
}

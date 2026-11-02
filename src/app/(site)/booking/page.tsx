import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeading } from "@/components/sections/PageHeading";
import { BookingCalendar } from "@/components/booking/BookingWidget";

export const metadata: Metadata = {
  title: "Book a visit",
  description: "Book a free loupe fitting or service visit with Lume in Yerevan.",
};

export default function BookingPage() {
  return (
    <>
      <PageHeading eyebrow="Booking" title="Book a visit">
        Choose a day and time. We will call you to confirm.
      </PageHeading>
      <Container className="pb-16">
        <BookingCalendar />
      </Container>
    </>
  );
}

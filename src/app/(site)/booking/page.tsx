import type { Metadata } from "next";
import { connection } from "next/server";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { PageHeading } from "@/components/sections/PageHeading";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { todayKey } from "@/utils/calendar";

export const metadata: Metadata = {
  title: "Book a visit",
  description: "Book a free loupe fitting or service visit with Lume in Yerevan.",
};

const BookingCalendar = async () => {
  await connection();
  return <BookingWidget today={todayKey()} />;
};

export default function BookingPage() {
  return (
    <>
      <PageHeading eyebrow="Booking" title="Book a visit">
        Choose a day and time. We will call you to confirm.
      </PageHeading>
      <Container className="pb-16">
        <Suspense fallback={<div className="min-h-[480px] rounded-2xl border border-line bg-soft" />}>
          <BookingCalendar />
        </Suspense>
      </Container>
    </>
  );
}

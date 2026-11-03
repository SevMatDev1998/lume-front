"use client";

import { ReactNode } from "react";
import RouteEnum from "@/enums/route.enum";
import { ButtonLink } from "@/components/ui";
import { STATUS_STYLES } from "@/constants/statuses";
import { VISIT_PURPOSES, VISIT_TYPES } from "@/constants/booking";
import { useGetMyInquiriesQuery } from "@/services/inquiry/inquiry.service";
import { useGetMyBookingsQuery } from "@/services/booking/booking.service";
import { BookingStatus, InquiryStatus } from "@/types";
import { formatDateTime } from "@/utils/calendar";
import { cn } from "@/utils/cn";

const StatusBadge = ({ status }: { status: InquiryStatus | BookingStatus }) => {
  const [label, className] = STATUS_STYLES[status];
  return <span className={cn("shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold", className)}>{label}</span>;
};

const Section = ({ title, empty, children }: { title: string; empty: ReactNode; children: ReactNode[] }) => (
  <section className="flex flex-col gap-3">
    <h2 className="text-lg font-semibold">{title}</h2>
    {children.length ? <ul className="flex flex-col gap-3">{children}</ul> : empty}
  </section>
);

const Row = ({ title, subtitle, status }: { title: string; subtitle: string; status: InquiryStatus | BookingStatus }) => (
  <li className="flex items-center gap-4 rounded-xl border border-line p-4">
    <div className="min-w-0 flex-1 text-sm">
      <p className="truncate font-semibold">{title}</p>
      <p className="text-xs text-muted">{subtitle}</p>
    </div>
    <StatusBadge status={status} />
  </li>
);

const label = <V extends string>(options: readonly { value: V; label: string }[], value: V) =>
  options.find((option) => option.value === value)?.label ?? value;

const MyOrdersContainer = () => {
  const { data: inquiries = [], isLoading: isInquiriesLoading } = useGetMyInquiriesQuery();
  const { data: bookings = [], isLoading: isBookingsLoading } = useGetMyBookingsQuery();

  if (isInquiriesLoading || isBookingsLoading) return <p className="text-sm text-muted">Loading…</p>;

  return (
    <div className="flex flex-col gap-10">
      <Section
        title="Requests"
        empty={
          <div className="flex flex-col items-start gap-3 rounded-xl bg-soft p-6 text-sm text-muted">
            You have not sent any requests yet.
            <ButtonLink href={RouteEnum.CATALOG} size="sm">
              View products
            </ButtonLink>
          </div>
        }
      >
        {inquiries.map((inquiry) => (
          <Row
            key={inquiry.id}
            title={[inquiry.product?.name ?? "Configurator", inquiry.selection].filter(Boolean).join(" · ")}
            subtitle={formatDateTime(inquiry.createdAt)}
            status={inquiry.status}
          />
        ))}
      </Section>

      <Section
        title="Visits"
        empty={
          <div className="flex flex-col items-start gap-3 rounded-xl bg-soft p-6 text-sm text-muted">
            You have no visits booked.
            <ButtonLink href={RouteEnum.BOOKING} size="sm">
              Book a visit
            </ButtonLink>
          </div>
        }
      >
        {bookings.map((booking) => (
          <Row
            key={booking.id}
            title={formatDateTime(booking.startsAt)}
            subtitle={`${label(VISIT_TYPES, booking.visitType)} · ${label(VISIT_PURPOSES, booking.purpose)}`}
            status={booking.status}
          />
        ))}
      </Section>
    </div>
  );
};

export default MyOrdersContainer;

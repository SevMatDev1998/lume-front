"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";
import toast from "react-hot-toast";
import RouteEnum from "@/enums/route.enum";
import { BOOKING_DURATION, BOOKING_UTC_OFFSET, VISIT_PURPOSES, VISIT_TYPES } from "@/constants/booking";
import { Button, ButtonLink, Field, Select, Textarea } from "@/components/ui";
import { useCreateBookingMutation, useGetBusySlotsQuery, useGetScheduleQuery } from "@/services/booking/booking.service";
import useAuth from "@/hooks/useAuth";
import { BookingSchedule, VisitPurpose, VisitType } from "@/types";
import {
  addDays,
  BOOKING_TIME_ZONE,
  formatDate,
  fromKey,
  isWeekend,
  monthGrid,
  startOfMonth,
  todayKey,
  toKey,
} from "@/utils/calendar";
import { cn } from "@/utils/cn";
import { getApiErrorMessage } from "@/utils/utils";
import { loginRoute } from "@/utils/redirect";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Step = "pick" | "details" | "done";

const subscribeToNothing = () => () => {};

const slotStart = (date: string, time: string) => `${date}T${time}:00${BOOKING_UTC_OFFSET}`;

const Message = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-[480px] items-center justify-center rounded-2xl border border-line bg-soft p-6 text-center text-sm text-muted">
    {children}
  </div>
);

export const BookingCalendar = () => {
  const today = useSyncExternalStore(subscribeToNothing, todayKey, () => null);
  const { data: schedule, isError } = useGetScheduleQuery();

  if (isError) return <Message>Online booking is not available right now. Call us at +374 77 210119.</Message>;
  if (!today || !schedule) return <Message>Loading…</Message>;

  return <BookingWidget today={today} schedule={schedule} />;
};

const BookingWidget = ({ today, schedule }: { today: string; schedule: BookingSchedule }) => {
  const { status, user } = useAuth();
  const firstDay = addDays(fromKey(today), 1);
  const lastDay = addDays(firstDay, schedule.daysAhead);
  const [month, setMonth] = useState(startOfMonth(firstDay));
  const [visitType, setVisitType] = useState<VisitType>(VISIT_TYPES[0].value);
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [step, setStep] = useState<Step>("pick");

  const { data: busy = [], refetch: refetchBusy } = useGetBusySlotsQuery({
    from: slotStart(toKey(firstDay), "00:00"),
    to: slotStart(toKey(addDays(lastDay, 1)), "00:00"),
  });
  const [createBooking, { isLoading }] = useCreateBookingMutation();

  const busyTimes = new Set(busy.map((value) => new Date(value).getTime()));
  const isBusy = (day: string, slot: string) => busyTimes.has(new Date(slotStart(day, slot)).getTime());
  const isAvailable = (day: Date) => day >= firstDay && day <= lastDay && !isWeekend(day);
  const canGoBack = month > startOfMonth(firstDay);
  const canGoForward = startOfMonth(month, 1) <= lastDay;
  const selectedLabel = date && formatDate(fromKey(date), { weekday: "long", day: "numeric", month: "long" });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!date || !time) return;
    const form = new FormData(event.currentTarget);
    try {
      await createBooking({
        startsAt: new Date(slotStart(date, time)).toISOString(),
        visitType,
        purpose: form.get("purpose") as VisitPurpose,
        comment: form.get("comment")?.toString().trim() || undefined,
      }).unwrap();
      setStep("done");
    } catch (error) {
      toast.error(getApiErrorMessage(error));
      refetchBusy();
      setTime(undefined);
      setStep("pick");
    }
  };

  if (step === "done") {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-line p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-ink text-xl text-white">✓</span>
        <h2 className="text-2xl font-semibold">Visit requested</h2>
        <p className="text-muted">
          {selectedLabel}, {time}. We will call you to confirm.
        </p>
        <ButtonLink href={RouteEnum.ACCOUNT} variant="outline">
          My visits
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="grid overflow-hidden rounded-2xl border border-line lg:grid-cols-[280px_1fr_auto]">
      <aside className="flex flex-col gap-5 border-b border-line p-6 lg:border-r lg:border-b-0">
        <div>
          <p className="text-sm text-muted">Lume specialist</p>
          <h2 className="text-xl font-semibold">Book a visit</h2>
        </div>
        <p className="text-sm text-muted">
          Try loupes on, take measurements or bring your loupes for service. Free of charge and without obligation.
        </p>
        <div className="flex flex-col gap-2 text-sm">
          <span>◷ {BOOKING_DURATION}</span>
          <span>◎ {BOOKING_TIME_ZONE}</span>
          {selectedLabel && (
            <span className="font-semibold">
              ▣ {selectedLabel}
              {time && `, ${time}`}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {VISIT_TYPES.map((type) => (
            <button
              key={type.value}
              onClick={() => setVisitType(type.value)}
              className={cn(
                "rounded-lg border p-3 text-left text-sm transition-colors",
                visitType === type.value ? "border-ink bg-soft" : "border-line hover:border-ink/40",
              )}
            >
              <span className="block font-semibold">{type.label}</span>
              <span className="text-xs text-muted">{type.note}</span>
            </button>
          ))}
        </div>
      </aside>

      {step === "pick" ? (
        <>
          <section className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">{formatDate(month, { month: "long", year: "numeric" })}</h3>
              <div className="flex gap-1">
                <button
                  onClick={() => setMonth(startOfMonth(month, -1))}
                  disabled={!canGoBack}
                  aria-label="Previous month"
                  className="rounded-md px-3 py-1 hover:bg-soft disabled:opacity-30"
                >
                  ‹
                </button>
                <button
                  onClick={() => setMonth(startOfMonth(month, 1))}
                  disabled={!canGoForward}
                  aria-label="Next month"
                  className="rounded-md px-3 py-1 hover:bg-soft disabled:opacity-30"
                >
                  ›
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center sm:gap-2">
              {WEEKDAYS.map((weekday) => (
                <span key={weekday} className="py-2 text-[11px] tracking-wider text-muted uppercase">
                  {weekday}
                </span>
              ))}
              {monthGrid(month).map((day, index) => {
                if (!day) return <span key={`empty-${index}`} />;
                const key = toKey(day);
                const available = isAvailable(day);
                return (
                  <button
                    key={key}
                    disabled={!available}
                    onClick={() => {
                      setDate(key);
                      setTime(undefined);
                    }}
                    className={cn(
                      "relative aspect-square rounded-lg text-sm transition-colors",
                      available ? "bg-soft font-semibold hover:bg-line" : "text-muted/60",
                      key === date && "bg-ink text-white hover:bg-ink",
                    )}
                  >
                    {day.getUTCDate()}
                    {key === today && <span className="absolute bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-current" />}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="border-t border-line p-6 lg:w-60 lg:border-t-0 lg:border-l">
            {date ? (
              <>
                <h3 className="mb-4 font-semibold">{formatDate(fromKey(date), { weekday: "short", day: "numeric" })}</h3>
                <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
                  {schedule.slots.map((slot) => {
                    const taken = isBusy(date, slot);
                    return (
                      <button
                        key={slot}
                        disabled={taken}
                        onClick={() => setTime(slot)}
                        className={cn(
                          "rounded-lg border py-2.5 text-sm font-medium transition-colors",
                          slot === time ? "border-ink bg-ink text-white" : "border-line hover:border-ink",
                          taken && "border-line text-muted/50 line-through hover:border-line",
                        )}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                <Button onClick={() => setStep("details")} disabled={!time} block className="mt-4">
                  Next
                </Button>
              </>
            ) : (
              <p className="text-sm text-muted">Choose a day to see free time.</p>
            )}
          </section>
        </>
      ) : (
        <div className="flex flex-col gap-4 p-6 lg:col-span-2">
          <button type="button" onClick={() => setStep("pick")} className="w-max text-sm text-muted hover:text-ink">
            ← Change time
          </button>
          {status === "user" ? (
            <form onSubmit={submit} className="flex flex-col gap-4">
              <p className="rounded-lg bg-soft p-4 text-sm">
                We will call {user?.firstName ?? "you"}
                {user?.phone && ` at ${user.phone}`} to confirm the visit.
              </p>
              <Field label="Reason">
                <Select name="purpose">
                  {VISIT_PURPOSES.map((purpose) => (
                    <option key={purpose.value} value={purpose.value}>
                      {purpose.label}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Comment">
                <Textarea name="comment" maxLength={1000} placeholder="Clinic address, what you want to try on…" />
              </Field>
              <Button type="submit" className="sm:w-max" disabled={isLoading}>
                {isLoading ? "Booking…" : "Confirm visit"}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-start gap-3 rounded-lg bg-soft p-6 text-sm">
              <p>Log in or create an account to book the visit. It takes a minute.</p>
              <div className="flex flex-wrap gap-2">
                <ButtonLink href={loginRoute(RouteEnum.BOOKING)}>Log in</ButtonLink>
                <ButtonLink href={RouteEnum.REGISTER} variant="outline">
                  Sign up
                </ButtonLink>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

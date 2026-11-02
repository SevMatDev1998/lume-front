export const BOOKING_TIME_ZONE = "Asia/Yerevan";

export const todayKey = () => new Intl.DateTimeFormat("en-CA", { timeZone: BOOKING_TIME_ZONE }).format(new Date());

export const fromKey = (key: string) => new Date(`${key}T00:00:00Z`);

export const toKey = (date: Date) => date.toISOString().slice(0, 10);

export const addDays = (date: Date, days: number) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + days));

export const startOfMonth = (date: Date, shift = 0) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + shift, 1));

export const isWeekend = (date: Date) => date.getUTCDay() % 6 === 0;

export const monthGrid = (month: Date) => {
  const offset = (month.getUTCDay() + 6) % 7;
  const daysInMonth = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + 1, 0)).getUTCDate();
  return [
    ...Array<null>(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => addDays(month, index)),
  ];
};

export const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) =>
  date.toLocaleDateString("en-US", { ...options, timeZone: "UTC" });

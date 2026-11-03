import { BookingStatus, InquiryStatus } from "@/types";

export const STATUS_STYLES: Record<InquiryStatus | BookingStatus, [label: string, className: string]> = {
  NEW: ["New", "bg-blue-100 text-blue-700"],
  IN_PROGRESS: ["In progress", "bg-amber-100 text-amber-700"],
  CONFIRMED: ["Confirmed", "bg-green-100 text-green-700"],
  DONE: ["Done", "bg-soft text-muted"],
  CLOSED: ["Closed", "bg-soft text-muted"],
  CANCELLED: ["Cancelled", "bg-red-100 text-red-700"],
};

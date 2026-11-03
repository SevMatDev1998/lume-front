import { PROFESSIONS } from "@/constants/professions";
import { VISIT_PURPOSES, VISIT_TYPES } from "@/constants/booking";

export type Profession = (typeof PROFESSIONS)[number]["value"];
export type VisitType = (typeof VISIT_TYPES)[number]["value"];
export type VisitPurpose = (typeof VISIT_PURPOSES)[number]["value"];
export type InquiryStatus = "NEW" | "IN_PROGRESS" | "CLOSED";
export type BookingStatus = "NEW" | "CONFIRMED" | "DONE" | "CANCELLED";

export interface User {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  profession: Profession | null;
  role: "USER" | "ADMIN" | "SUPER_ADMIN";
}

export type ProfileInput = Partial<Pick<User, "firstName" | "lastName" | "phone" | "profession">>;

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface Inquiry {
  id: string;
  selection: string | null;
  comment: string | null;
  status: InquiryStatus;
  createdAt: string;
  product: { id: string; name: string; slug: string } | null;
}

export interface InquiryInput {
  productSlug?: string;
  selection?: string;
  comment?: string;
}

export interface Booking {
  id: string;
  startsAt: string;
  visitType: VisitType;
  purpose: VisitPurpose;
  comment: string | null;
  status: BookingStatus;
  createdAt: string;
}

export type BookingInput = Pick<Booking, "startsAt" | "visitType" | "purpose"> & { comment?: string };

export interface BookingSchedule {
  timeZone: string;
  daysAhead: number;
  slots: string[];
}

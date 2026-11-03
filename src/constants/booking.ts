export const BOOKING_DURATION = "45 min";

export const BOOKING_UTC_OFFSET = "+04:00";

export const VISIT_TYPES = [
  { value: "OFFICE", label: "At our office", note: "4 Mazmanian street, Yerevan" },
  { value: "CLINIC", label: "At your clinic", note: "We come to you in Yerevan" },
] as const;

export const VISIT_PURPOSES = [
  { value: "FITTING", label: "Fitting and measurement" },
  { value: "SERVICE", label: "Service and adjustment" },
  { value: "CONSULTATION", label: "Consultation" },
] as const;

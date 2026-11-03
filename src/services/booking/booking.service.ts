import ApiInstance from "@/api/api";
import ApiEnum from "@/enums/api.enum";
import { Booking, BookingInput, BookingSchedule } from "@/types";

const BookingService = ApiInstance.injectEndpoints({
  endpoints: (build) => ({
    getSchedule: build.query<BookingSchedule, void>({
      query: () => ({ url: `${ApiEnum.BOOKINGS}/schedule` }),
    }),
    getBusySlots: build.query<string[], { from: string; to: string }>({
      query: (params) => ({ url: `${ApiEnum.BOOKINGS}/busy`, params }),
      providesTags: ["Booking"],
    }),
    getMyBookings: build.query<Booking[], void>({
      query: () => ({ url: `${ApiEnum.BOOKINGS}/mine` }),
      providesTags: ["Booking"],
    }),
    createBooking: build.mutation<Booking, BookingInput>({
      query: (body) => ({ url: ApiEnum.BOOKINGS, method: "POST", body }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const { useGetScheduleQuery, useGetBusySlotsQuery, useGetMyBookingsQuery, useCreateBookingMutation } =
  BookingService;

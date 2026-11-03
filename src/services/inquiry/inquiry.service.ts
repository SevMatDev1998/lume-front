import ApiInstance from "@/api/api";
import ApiEnum from "@/enums/api.enum";
import { Inquiry, InquiryInput } from "@/types";

const InquiryService = ApiInstance.injectEndpoints({
  endpoints: (build) => ({
    getMyInquiries: build.query<Inquiry[], void>({
      query: () => ({ url: `${ApiEnum.INQUIRIES}/mine` }),
      providesTags: ["Inquiry"],
    }),
    createInquiry: build.mutation<Inquiry, InquiryInput>({
      query: (body) => ({ url: ApiEnum.INQUIRIES, method: "POST", body }),
      invalidatesTags: ["Inquiry"],
    }),
  }),
});

export const { useGetMyInquiriesQuery, useCreateInquiryMutation } = InquiryService;

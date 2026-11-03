import ApiInstance from "@/api/api";
import ApiEnum from "@/enums/api.enum";
import { ProfileInput, Tokens, User } from "@/types";
import { SignUpFormType } from "@/yupValidation/AuthValidation";

type Message = { message: string };

const AuthService = ApiInstance.injectEndpoints({
  endpoints: (build) => ({
    getInfo: build.query<User, void>({
      query: () => ({ url: ApiEnum.AUTH_ME }),
      providesTags: ["Me"],
    }),
    updateMe: build.mutation<User, ProfileInput>({
      query: (body) => ({ url: ApiEnum.AUTH_ME, method: "PATCH", body }),
      invalidatesTags: ["Me"],
    }),
    login: build.mutation<Tokens, { email: string; password: string }>({
      query: (body) => ({ url: ApiEnum.AUTH_LOGIN, method: "POST", body }),
      invalidatesTags: ["Me", "Inquiry", "Booking"],
    }),
    signUp: build.mutation<Message, Omit<SignUpFormType, "confirmedPassword" | "consent">>({
      query: (body) => ({ url: ApiEnum.AUTH_REGISTER, method: "POST", body }),
    }),
    confirmEmail: build.mutation<Message, { token: string }>({
      query: (body) => ({ url: ApiEnum.AUTH_CONFIRM_EMAIL, method: "POST", body }),
    }),
    resendConfirmation: build.mutation<Message, { email: string }>({
      query: (body) => ({ url: ApiEnum.AUTH_RESEND_CONFIRMATION, method: "POST", body }),
    }),
    forgotPassword: build.mutation<Message, { email: string }>({
      query: (body) => ({ url: ApiEnum.AUTH_FORGOT_PASSWORD, method: "POST", body }),
    }),
    resetPassword: build.mutation<Message, { token: string; newPassword: string }>({
      query: (body) => ({ url: ApiEnum.AUTH_RESET_PASSWORD, method: "POST", body }),
    }),
  }),
});

export const {
  useGetInfoQuery,
  useUpdateMeMutation,
  useLoginMutation,
  useSignUpMutation,
  useConfirmEmailMutation,
  useResendConfirmationMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = AuthService;

export const {
  endpoints: { login, getInfo, updateMe },
} = AuthService;

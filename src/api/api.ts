import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { clearTokens, getJwtToken, getRefreshToken, setJwtToken, setRefreshToken } from "@/utils/tokenUtil";
import ApiEnum from "@/enums/api.enum";
import { Tokens } from "@/types";

const mutex = new Mutex();

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const rawBaseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = getJwtToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

const baseQuery: BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError> = async (args, api, options) => {
  const result = await rawBaseQuery(args, api, options);
  if (result.data && typeof result.data === "object" && "success" in result.data && "data" in result.data) {
    return { ...result, data: result.data.data };
  }
  return result;
};

export async function refreshTokens(): Promise<string | null> {
  if (mutex.isLocked()) {
    await mutex.waitForUnlock();
    return getJwtToken();
  }

  const release = await mutex.acquire();
  try {
    const response = await fetch(`${baseUrl}${ApiEnum.AUTH_REFRESH}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: getRefreshToken() }),
    });
    const tokens: Tokens | undefined = response.ok ? (await response.json()).data : undefined;
    if (!tokens?.accessToken || !tokens.refreshToken) {
      clearTokens();
      return null;
    }
    setJwtToken(tokens.accessToken);
    setRefreshToken(tokens.refreshToken);
    return tokens.accessToken;
  } catch {
    return null;
  } finally {
    release();
  }
}

export const baseQueryInstance: BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError> = async (args, api, options) => {
  await mutex.waitForUnlock();
  const result = await baseQuery(args, api, options);
  if (result.error?.status !== 401 || !getRefreshToken()) return result;

  const accessToken = await refreshTokens();
  if (!accessToken) return result;

  const retried = await baseQuery(args, api, options);
  if (retried.error?.status === 401) clearTokens();
  return retried;
};

const ApiInstance = createApi({
  reducerPath: "api-instance",
  baseQuery: baseQueryInstance,
  tagTypes: ["Me", "Inquiry", "Booking"],
  endpoints: () => ({}),
});

export default ApiInstance;

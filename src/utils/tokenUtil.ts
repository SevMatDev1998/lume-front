const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

let _accessToken: string | null = null;
let _refreshToken: string | null = null;

const storage = () => (typeof window === "undefined" ? null : window.localStorage);

export function setJwtToken(token: string) {
  _accessToken = token;
  storage()?.setItem(ACCESS_TOKEN, token);
}

export function getJwtToken(): string | null {
  _accessToken ??= storage()?.getItem(ACCESS_TOKEN) ?? null;
  return _accessToken;
}

export function setRefreshToken(token: string) {
  _refreshToken = token;
  storage()?.setItem(REFRESH_TOKEN, token);
}

export function getRefreshToken(): string | null {
  _refreshToken ??= storage()?.getItem(REFRESH_TOKEN) ?? null;
  return _refreshToken;
}

export function clearTokens() {
  _accessToken = null;
  _refreshToken = null;
  storage()?.removeItem(ACCESS_TOKEN);
  storage()?.removeItem(REFRESH_TOKEN);
}

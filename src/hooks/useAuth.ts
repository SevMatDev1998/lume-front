import { useSyncExternalStore } from "react";
import { useGetInfoQuery } from "@/services/auth/auth.service";
import { getJwtToken } from "@/utils/tokenUtil";
import useAppSelector from "./useAppSelector";

const subscribeToStorage = (onChange: () => void) => {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
};

const useAuth = () => {
  const hasToken = useSyncExternalStore(subscribeToStorage, () => !!getJwtToken(), () => null);
  const { isLoading } = useGetInfoQuery(undefined, { skip: !hasToken });
  const { user, isLogin } = useAppSelector((state) => state.auth);

  const status = hasToken === null || (hasToken && !isLogin && isLoading) ? "loading" : isLogin ? "user" : "guest";

  return { user, status } as const;
};

export default useAuth;

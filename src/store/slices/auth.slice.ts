import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types";
import { getInfo, login, updateMe } from "@/services/auth/auth.service";
import { clearTokens, setJwtToken, setRefreshToken } from "@/utils/tokenUtil";

interface IAuthState {
  user: User | null;
  isLogin: boolean;
}

const initialState: IAuthState = {
  user: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logOut: () => {
      clearTokens();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(login.matchFulfilled, (state, { payload }) => {
      setJwtToken(payload.accessToken);
      setRefreshToken(payload.refreshToken);
      state.isLogin = true;
    });
    builder.addMatcher(getInfo.matchFulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
    });
    builder.addMatcher(getInfo.matchRejected, (state, { meta }) => {
      if (meta.condition) return;
      state.user = null;
      state.isLogin = false;
    });
    builder.addMatcher(updateMe.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

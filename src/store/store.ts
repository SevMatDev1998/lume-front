import { configureStore } from "@reduxjs/toolkit";
import ApiInstance from "@/api/api";
import authReducer from "./slices/auth.slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [ApiInstance.reducerPath]: ApiInstance.reducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiInstance.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

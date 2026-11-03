"use client";

import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { makeStore } from "@/store/store";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-right" />
    </Provider>
  );
};

import type { Metadata } from "next";
import MyOrdersContainer from "@/containers/account/MyOrdersContainer";

export const metadata: Metadata = { title: "My orders" };

export default function OrdersPage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">My orders</h1>
      <MyOrdersContainer />
    </>
  );
}

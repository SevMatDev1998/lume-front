import type { Metadata } from "next";
import { Placeholder } from "@/components/ui";
import { cn } from "@/utils/cn";

export const metadata: Metadata = { title: "My orders" };

const STATUS_STYLES = {
  NEW: ["New", "bg-blue-100 text-blue-700"],
  PROCESSING: ["Processing", "bg-amber-100 text-amber-700"],
  SHIPPED: ["Shipped", "bg-violet-100 text-violet-700"],
  DELIVERED: ["Delivered", "bg-green-100 text-green-700"],
};

const SAMPLE_ORDERS = [
  { id: "1024", product: "Kepler Advanced · 4.0x", date: "02.11.2026", status: "NEW" },
  { id: "1017", product: "Galilean HD · 2.8x", date: "20.10.2026", status: "PROCESSING" },
  { id: "0981", product: "LED Nano", date: "01.09.2026", status: "DELIVERED" },
] as const;

export default function OrdersPage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">My orders</h1>
      <ul className="flex flex-col gap-3">
        {SAMPLE_ORDERS.map((order) => {
          const [label, style] = STATUS_STYLES[order.status];
          return (
            <li key={order.id} className="flex items-center gap-4 rounded-xl border border-line p-3">
              <Placeholder className="hidden h-12 w-16 shrink-0 rounded-md sm:flex" />
              <div className="flex-1 text-sm">
                <p className="font-semibold">{order.product}</p>
                <p className="text-xs text-muted">
                  № {order.id} · {order.date}
                </p>
              </div>
              <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", style)}>{label}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

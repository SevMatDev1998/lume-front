import Link from "next/link";
import RouteEnum from "@/enums/route.enum";

export const Logo = ({ withPartner = true }: { withPartner?: boolean }) => (
  <Link href={RouteEnum.HOME} className="flex items-baseline gap-2">
    <span className="text-lg font-extrabold tracking-[0.18em]">LUME</span>
    {withPartner && <span className="hidden text-xs text-muted sm:inline">× ExamVision</span>}
  </Link>
);

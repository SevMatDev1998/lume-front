import Link from "next/link";
import RouteEnum from "@/enums/route.enum";

export const Logo = ({ withPartner = true }: { withPartner?: boolean }) => (
  <Link href={RouteEnum.HOME} className="flex items-baseline gap-2 whitespace-nowrap">
    <span className="font-logo text-2xl">LUME</span>
    {withPartner && <span className="hidden text-xs text-muted sm:inline">× ExamVision</span>}
  </Link>
);

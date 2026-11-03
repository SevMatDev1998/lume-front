import RouteEnum from "@/enums/route.enum";

export const loginRoute = (next: string) => `${RouteEnum.LOGIN}?next=${encodeURIComponent(next)}`;

export const nextPathFromUrl = (fallback: string) => {
  const next = new URLSearchParams(window.location.search).get("next");
  return next?.startsWith("/") && !next.startsWith("//") ? next : fallback;
};

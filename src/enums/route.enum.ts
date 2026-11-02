export enum RouteEnum {
  HOME = "/",
  CATALOG = "/catalog",
  CONFIGURATOR = "/configurator",
  PROFESSIONS = "/professions",
  SERVICE = "/service",
  BOOKING = "/booking",
  ABOUT = "/about",
  CONTACT = "/contact",

  LOGIN = "/login",
  REGISTER = "/register",
  VERIFY_EMAIL = "/verify-email",
  FORGOT_PASSWORD = "/forgot-password",
  RESET_PASSWORD = "/reset-password",

  ACCOUNT = "/account",
  ACCOUNT_PROFILE = "/account/profile",
}

export const catalogSectionRoute = (section: string) =>
  `${RouteEnum.CATALOG}/${section}`;

export const professionRoute = (slug: string) =>
  `${RouteEnum.PROFESSIONS}#${slug}`;

export const productRoute = (section: string, slug: string) =>
  `${RouteEnum.CATALOG}/${section}/${slug}`;

export default RouteEnum;

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/Home.tsx"),
  route("privacy-policy", "pages/PrivacyPolicy.tsx"),
  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/user/:path*",
    "/game/:path*",
    "/blog/:path*",
    "/service/:path*",
    "/job/:path*",
    "/settings"
  ]
};

import { authMiddleware } from "@clerk/nextjs";
import { MiddlewareNotFoundError } from "next/dist/shared/lib/utils";

export default authMiddleware({
  publicRoutes: ["/api/:path*", '/'],
});


export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

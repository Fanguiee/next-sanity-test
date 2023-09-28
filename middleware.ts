import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware

const publicRoutes = ["/"];
const auth = authMiddleware({
  publicRoutes: publicRoutes,
});
export default auth
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)',...(publicRoutes || []),  '/(api|trpc)(.*)'],
};
 
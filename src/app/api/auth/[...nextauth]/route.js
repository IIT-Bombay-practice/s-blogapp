import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";
import { headers, cookies } from "next/headers";

const handler = async (req, res) => {
  // Await and process headers and cookies correctly
  const reqHeaders = Object.fromEntries(await headers());
  const reqCookies = Object.fromEntries((await cookies()).getAll().map((c) => [c.name, c.value]));

  // Optional: Debugging logs (safe now as they're plain objects)
  console.log("Headers:", reqHeaders);
  console.log("Cookies:", reqCookies);

  // Proceed with NextAuth handler
  return await NextAuth(req, res, authOptions);
};

// Export GET and POST handlers for Next.js
export { handler as GET, handler as POST };

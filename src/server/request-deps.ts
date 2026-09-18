// SERVER-ONLY. Binds the lead pipeline to the live request: real cookies, IP,
// and user agent. Only ever imported from inside server handlers.
import {
  getCookie,
  getRequestHeader,
  getRequestIP,
  setCookie,
} from "@tanstack/react-start/server";
import type { LeadDeps } from "./lead-core";

export const requestDeps = (): LeadDeps => ({
  cookies: {
    get: (name) => getCookie(name),
    set: (name, value, maxAge) =>
      setCookie(name, value, {
        path: "/",
        maxAge,
        sameSite: "lax",
        httpOnly: false,
      }),
  },
  ip: getRequestIP({ xForwardedFor: true }) ?? undefined,
  userAgent: getRequestHeader("user-agent") ?? undefined,
});

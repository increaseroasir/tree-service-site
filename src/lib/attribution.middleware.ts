// Checklist 2.2 + 2.3: attribution and identity captured SERVER-side, at the
// request layer, before any page script runs. Survives blocked JS.
//
// On every HTML page request:
//   nt_lead        uuidv7, minted on arrival, write-once
//   nt_attr_first  first URL + raw query, write-once (the campaign that earned them)
//   nt_attr_last   last URL + parsed params, overwritten when the URL carries a signal
//   _fbc           synthesized from fbclid when Meta's cookie is absent
// Plus the Client Hints headers Meta recommends on landing-page responses.
import { createMiddleware } from "@tanstack/react-start";
import { getCookie, setCookie, setResponseHeader } from "@tanstack/react-start/server";
import {
  COOKIES,
  COOKIE_MAX_AGE,
  hasSignal,
  parseTouch,
  slimTouch,
  synthFbc,
  uuidv7,
} from "@/lib/attribution-core";

const cookieOpts = (secure: boolean) => ({
  path: "/",
  maxAge: COOKIE_MAX_AGE,
  sameSite: "lax" as const,
  secure,
  // Readable by the page on purpose: the browser pixel needs external_id and
  // the form shows nothing from them. Identity at submit comes from the
  // server's own read of these cookies, never from the request body.
  httpOnly: false,
});

export const attributionMiddleware = createMiddleware({ type: "request" }).server(
  async ({ request, next, handlerType }) => {
    const isPage =
      handlerType === "router" &&
      request.method === "GET" &&
      (request.headers.get("accept") ?? "").includes("text/html");

    if (isPage) {
      try {
        const url = new URL(request.url);
        const secure = url.protocol === "https:";
        const opts = cookieOpts(secure);

        if (!getCookie(COOKIES.lead)) setCookie(COOKIES.lead, uuidv7(), opts);

        const touch = parseTouch(request.url);
        if (!getCookie(COOKIES.first)) {
          setCookie(COOKIES.first, JSON.stringify(touch), opts);
        }
        if (hasSignal(touch) || !getCookie(COOKIES.last)) {
          setCookie(COOKIES.last, JSON.stringify(slimTouch(touch)), opts);
        }
        const fbclid = touch.params["fbclid"];
        if (fbclid && !getCookie(COOKIES.fbc)) {
          setCookie(COOKIES.fbc, synthFbc(fbclid), opts);
        }

        setResponseHeader(
          "Accept-CH",
          "Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List",
        );
        setResponseHeader(
          "Permissions-Policy",
          "ch-ua-model=(*), ch-ua-platform-version=(*), ch-ua-full-version=(*)",
        );
      } catch {
        // Attribution must never break a page render.
      }
    }
    return next();
  },
);

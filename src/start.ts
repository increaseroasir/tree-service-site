import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { attributionMiddleware } from "./lib/attribution.middleware";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// attributionMiddleware: mints the lead id and writes first/last-touch cookies
// on every HTML request, server-side, before any page script (checklist 2.2/2.3).
// It never throws and never blocks a render. Keep it LAST so the scaffold's
// error and CSRF handling wrap it.
export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, csrfMiddleware, attributionMiddleware],
}));

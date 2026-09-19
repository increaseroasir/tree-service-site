// The one server function the browser calls. Everything it touches is used
// ONLY inside .handler(), so the compiler strips it from the client bundle.
// Pipeline lives in ./lead-core (pure, tested); request binding in ./request-deps.
import { createServerFn } from "@tanstack/react-start";
import { handleLead } from "./lead-core.server";
import { requestDeps } from "./request-deps.server";

export type { LeadInput, LeadResult, LeadReason } from "./lead-core.server";

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => data)
  .handler(async ({ data }) => handleLead(data, requestDeps()));

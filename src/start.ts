import { createStart } from "@tanstack/react-start";
import { attributionMiddleware } from "@/server/attribution-middleware";

// Global request middleware: runs on every request before routes render.
export const startInstance = createStart(() => ({
  requestMiddleware: [attributionMiddleware],
}));

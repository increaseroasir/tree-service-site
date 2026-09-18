// The only server values the browser is allowed to know. A pixel id is public
// by nature (it is in every page that loads the pixel); the CAPI token is not
// and never leaves the server.
import { createServerFn } from "@tanstack/react-start";

export type PublicConfig = { metaPixelId: string };

export const getPublicConfig = createServerFn({ method: "GET" }).handler(
  async (): Promise<PublicConfig> => ({
    metaPixelId: (process.env.META_PIXEL_ID ?? "").trim(),
  }),
);

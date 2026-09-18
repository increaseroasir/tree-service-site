import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".modal.host"],
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    // AI Studio renders every page on the server per request (SSR), which is
    // what lets the request middleware set attribution cookies and lets the
    // root loader read the pixel id from Secrets. Prerendering would freeze
    // build-time HTML in front of all that, so it stays off.
    tanstackStart(),
    viteReact(),
    // GoHighLevel AI Studio component tagger, dev only.
    mode === "development" && ghlTagger(),
  ].filter(Boolean),
  build: {
    // Hashed filenames are cache-safe; let the host set long Cache-Control.
    cssCodeSplit: true,
    sourcemap: false,
  },
}));

function ghlTagger() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { componentTagger } = require("@leadconnector/vibe-tagger");
    return componentTagger();
  } catch {
    return null;
  }
}

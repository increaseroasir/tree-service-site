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
    tanstackStart({
      // Every page reachable from "/" is rendered to static HTML at build
      // time. Visitors get finished HTML; React hydrates afterwards.
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
        failOnError: true,
      },
    }),
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

import { useEffect } from "react";
import { loadPixel, setPixelId } from "@/lib/pixel";

// Renders nothing. Loads the pixel after the page is idle, and only when the
// server has a META_PIXEL_ID secret. One pixel per site, never a second sender.
const MetaPixel = ({ pixelId }: { pixelId: string }) => {
  useEffect(() => {
    if (!pixelId) return;
    setPixelId(pixelId);
    const run = () => loadPixel(pixelId);
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
    };
    if (w.requestIdleCallback) w.requestIdleCallback(run, { timeout: 3000 });
    else setTimeout(run, 1500);
  }, [pixelId]);
  return null;
};

export default MetaPixel;

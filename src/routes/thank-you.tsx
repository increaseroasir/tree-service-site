import { createFileRoute } from "@tanstack/react-router";
import FunnelLayout from "@/components/site/FunnelLayout";
import { PHONE, PHONE_HREF, SMS_HREF } from "@/lib/content";
import { pageHead } from "@/lib/seo";

// Checklist 1.5: confirms what happens next and when, near-instant, and FIRES
// NOTHING on load or reload. The conversion already fired at submit.
export const Route = createFileRoute("/thank-you")({
  head: () => ({
    ...pageHead({
      title: "Request received",
      description: "We got your request. Here's what happens next.",
      path: "/thank-you",
    }),
  }),
  component: () => (
    <FunnelLayout>
      <div className="max-w-[720px] mx-auto px-5 py-16 text-center">
        <h1
          className="text-[40px] md:text-[56px] leading-[1] font-bold uppercase text-[var(--primary)]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Got it. We'll call you shortly.
        </h1>
        <ol className="text-left text-[18px] leading-[1.6] text-[#454f4a] mt-8 flex flex-col gap-3 list-decimal pl-6">
          <li>
            A person from our office calls the number you gave us, usually within a few business
            hours.
          </li>
          <li>We quote from a photo or set a time to come look. Both are free.</li>
          <li>The written, itemized price lands in your inbox, usually within 24 hours.</li>
        </ol>
        <p className="text-[17px] text-[#5d6862] mt-8">
          Tree on a structure or a limb hanging over where people walk? Don't wait on us.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
          <a
            href={PHONE_HREF}
            className="bg-[var(--accent)] text-white text-xl font-bold uppercase tracking-[0.06em] px-7 py-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Call {PHONE}
          </a>
          <a
            href={SMS_HREF}
            className="border-2 border-[var(--primary)] text-[var(--primary)] text-xl font-bold uppercase tracking-[0.06em] px-7 py-[14px]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Text a photo
          </a>
        </div>
      </div>
    </FunnelLayout>
  ),
});

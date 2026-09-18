import { createFileRoute } from "@tanstack/react-router";
import WhatToExpectPage from "@/components/pages/WhatToExpectPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/what-to-expect")({
  head: () =>
    pageHead({
      title: "What to Expect From a Tree Removal Quote and Job",
      description:
        "How the quote works, what happens on the day, and how we keep your roof, fence, and lawn out of it. Photo quotes, itemized prices, cleanup included.",
      path: "/what-to-expect",
    }),
  component: WhatToExpectPage,
});

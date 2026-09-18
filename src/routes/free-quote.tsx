import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/components/pages/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/free-quote")({
  head: () =>
    pageHead({
      title: "Free Tree Removal Quote — Minneapolis–St. Paul",
      description:
        "Get a free written quote for tree removal, trimming, or stump grinding. Text a photo for a same-day ballpark or book a visit. No obligation.",
      path: "/free-quote",
    }),
  component: ContactPage,
});

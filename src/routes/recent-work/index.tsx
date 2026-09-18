import { createFileRoute } from "@tanstack/react-router";
import { RecentWorkGallery } from "@/components/pages/RecentWorkPages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/recent-work/")({
  head: () =>
    pageHead({
      title: "Recent Tree Removal & Trimming Jobs — Minneapolis–St. Paul",
      description:
        "Recent tree removals, storm cleanups, pruning, cabling, and stump grinding around the Twin Cities. Find a job that looks like your yard and we'll price the same work.",
      path: "/recent-work",
    }),
  component: RecentWorkGallery,
});

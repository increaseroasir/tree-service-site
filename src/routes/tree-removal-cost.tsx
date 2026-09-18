import { createFileRoute } from "@tanstack/react-router";
import CostPage from "@/components/pages/CostPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tree-removal-cost")({
  head: () =>
    pageHead({
      title: "How Much Does Tree Removal Cost? Minneapolis Cost Guide",
      description:
        "What moves the price of tree removal: height, what it's over, access, condition, stump grinding, and emergency timing. Itemized quotes, no surprises.",
      path: "/tree-removal-cost",
    }),
  component: CostPage,
});

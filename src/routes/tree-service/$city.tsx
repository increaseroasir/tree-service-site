import { createFileRoute, notFound } from "@tanstack/react-router";
import CityPage from "@/components/site/CityPage";
import { getCity } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tree-service/$city")({
  loader: ({ params }) => {
    const city = getCity(params.city);
    if (!city) throw notFound();
    return city;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: `Tree Service ${loaderData.name}, ${loaderData.state} — Removal, Trimming, Stumps`,
          description: `Tree removal, trimming, stump grinding, and 24/7 storm response in ${loaderData.name}, ${loaderData.state}. ${loaderData.intro.split(". ")[0]}. Free written quotes.`,
          path: `/tree-service/${loaderData.slug}`,
        })
      : {},
  component: Page,
});

function Page() {
  const city = Route.useLoaderData();
  return <CityPage city={city} />;
}

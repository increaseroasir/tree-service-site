import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectDetail } from "@/components/pages/RecentWorkPages";
import { PROJECTS } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/recent-work/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: `${loaderData.title} — ${loaderData.city}`,
          description: loaderData.summary,
          path: `/recent-work/${loaderData.slug}`,
          image: loaderData.image,
        })
      : {},
  component: Page,
});

function Page() {
  const project = Route.useLoaderData();
  return <ProjectDetail project={project} />;
}

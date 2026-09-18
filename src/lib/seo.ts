import { COMPANY } from "./content";

type PageHeadArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Per-route <head> for TanStack Router's head(). */
export const pageHead = ({
  title,
  description,
  path,
  image = "/images/hero.webp",
}: PageHeadArgs) => {
  const fullTitle = `${title} | ${COMPANY.name}`;
  const url = `${COMPANY.url}${path}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: `${COMPANY.url}${image}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
};

export const localBusinessJsonLd = (areaServed: string[], phone: string) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY.name,
    url: COMPANY.url,
    telephone: phone,
    areaServed,
    description:
      "Tree removal, trimming and pruning, stump grinding, and 24/7 storm damage response across the Minneapolis–St. Paul metro. Free written quotes, insured crews.",
  });

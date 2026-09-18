import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import appCss from "@/styles.css?url";
import PageLayout from "@/components/site/PageLayout";
import { COMPANY, ROUTES } from "@/lib/content";

// Two families, two weights each. Every extra weight is a request.
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;600&display=swap";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Demo site: keep out of search until it's a real company.
      { name: "robots", content: "noindex,nofollow" },
      { name: "theme-color", content: "#2f5d4a" },
      { title: `${COMPANY.name} — Tree Removal & Trimming, Minneapolis MN (Demo)` },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: FONTS_HREF },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <PageLayout mobileBar={false}>
      <div className="flex min-h-[60vh] items-center justify-center px-5 py-20 text-center">
        <div>
          <h1
            className="text-6xl font-bold uppercase text-[hsl(var(--primary))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            404
          </h1>
          <p className="mt-4 text-xl text-[hsl(var(--muted-foreground))]">
            That page doesn't exist.
          </p>
          <Link
            to={ROUTES.home}
            className="inline-block mt-6 bg-[hsl(var(--accent))] text-white px-6 py-3 font-bold uppercase tracking-[0.06em]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Back to home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

import { Link } from "react-router-dom";
import PageLayout from "@/components/fence/PageLayout";
import { ROUTES } from "@/lib/content";

const NotFound = () => (
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
          Return to Home
        </Link>
      </div>
    </div>
  </PageLayout>
);

export default NotFound;

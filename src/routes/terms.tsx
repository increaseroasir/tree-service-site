import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/pages/LegalPage";
import { COMPANY, PHONE } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Service",
      description: `Terms for using the ${COMPANY.name} website and requesting a quote.`,
      path: "/terms",
    }),
  component: () => (
    <LegalPage
      title="Terms of service"
      updated="September 18, 2026"
      intro={`These are the terms for using this website and requesting a quote from ${COMPANY.name}. They are short on purpose.`}
      sections={[
        {
          title: "A quote request is not a booking",
          body: (
            <p>
              Submitting the form or texting a photo starts a conversation. No work is scheduled
              until a person from our office confirms a date and price with you and you approve it.
            </p>
          ),
        },
        {
          title: "Prices",
          body: (
            <p>
              Nothing on this site is a price quote. Cost information is general. Your price is the
              written, itemized number we give you after seeing the tree, and it changes only if the
              scope changes and you approve the change first.
            </p>
          ),
        },
        {
          title: "Emergencies",
          body: (
            <p>
              If a tree is on a structure or a limb is hanging over where people walk, call {PHONE}.
              Do not rely on the form. Emergency work is quoted at an emergency rate before we
              start.
            </p>
          ),
        },
        {
          title: "Your information",
          body: (
            <p>
              How we handle what you give us is covered in the privacy policy linked from every
              page.
            </p>
          ),
        },
        {
          title: "Demo notice",
          body: (
            <p>
              {COMPANY.name} is a fictional demonstration company. Replace these terms with the real
              company's before launch.
            </p>
          ),
        },
      ]}
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/pages/LegalPage";
import { COMPANY, PHONE } from "@/lib/content";
import { CONSENT_TEXT, CONSENT_VERSION } from "@/lib/consent";
import { pageHead } from "@/lib/seo";

// Reflects what the site actually collects. Update this page whenever the
// form, cookies, or downstream systems change.
export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy",
      description: `How ${COMPANY.name} collects and uses the information you give us when you request a quote.`,
      path: "/privacy",
    }),
  component: () => (
    <LegalPage
      title="Privacy policy"
      updated="September 18, 2026"
      intro={`This page describes what ${COMPANY.name} collects on this website, why, and who sees it. It is written to match what the site actually does. If we change what we collect, we change this page.`}
      sections={[
        {
          title: "What we collect when you request a quote",
          body: (
            <>
              <p>
                Your first and last name, phone number, email address, the
                service you selected, and anything you type in the notes box.
                On the full quote page we also ask how many trees and how soon.
              </p>
              <p>
                We record the exact consent sentence you agreed to (version{" "}
                {CONSENT_VERSION}), the page you were on, and the time. The
                sentence is: “{CONSENT_TEXT}”
              </p>
            </>
          ),
        },
        {
          title: "What we collect automatically",
          body: (
            <>
              <p>
                When you arrive, the site sets three first-party cookies for
                90 days: a random lead id, the first page and campaign
                parameters you arrived with, and the most recent ones. If you
                came from a Facebook ad, we also store the click id Facebook
                passes in the URL. These tell us which ad or search brought
                you here. They do not identify you by name until you submit
                the form.
              </p>
              <p>
                When you submit, we also send your browser type and the page
                URL to our customer relationship system.
              </p>
            </>
          ),
        },
        {
          title: "Who receives it",
          body: (
            <p>
              Form submissions go to our customer relationship system
              (GoHighLevel / LeadConnector) so our office can call you back.
              We do not sell your information and we do not share it with
              anyone outside the company and the vendors that run our phone,
              text, and CRM systems.
            </p>
          ),
        },
        {
          title: "Calls and texts",
          body: (
            <p>
              We contact you only about your request, and only if you checked
              the consent box. Reply STOP to any text to opt out, or call{" "}
              {PHONE} and ask to be removed.
            </p>
          ),
        },
        {
          title: "Your choices",
          body: (
            <p>
              You can clear the cookies above in your browser at any time. To
              see, correct, or delete what we hold about you, call {PHONE} or
              email the office and we will handle it within a few business
              days.
            </p>
          ),
        },
        {
          title: "Demo notice",
          body: (
            <p>
              {COMPANY.name} is a fictional demonstration company. Replace
              this policy with the real company's before launch.
            </p>
          ),
        },
      ]}
    />
  ),
});

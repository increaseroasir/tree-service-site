import PageLayout from "@/components/site/PageLayout";
import QuoteForm from "@/components/site/QuoteForm";
import { Link, useLocation } from "react-router-dom";
import {
  COMPANY,
  PHONE,
  PHONE_HREF,
  SMS_HREF,
  ROUTES,
  SERVICE_AREAS,
  CONTACT_PRESELECT,
  TRUST_POINTS,
} from "@/lib/content";

const useServiceTypeFromHash = () => {
  const { hash } = useLocation();
  const key = hash.replace("#", "");
  return key ? CONTACT_PRESELECT[key] : undefined;
};

const CONTACT_STATS = [
  { value: "Minutes", label: "Callback for emergencies" },
  { value: "24 hrs", label: "Typical turnaround on a written quote" },
  { value: "Free", label: "No charge, no obligation" },
  { value: "Photo", label: "Text one for a fast ballpark" },
];

const BEFORE_CALL = [
  {
    q: "Do I need to be home?",
    a: "For the quote it helps. For the job, no — most customers are at work. We text before we start and when we're done.",
  },
  {
    q: "Should I know the tree's height?",
    a: "No. A photo with the house in frame tells us the size. If you don't know what kind of tree it is, that's fine too.",
  },
  {
    q: "What if it's a boulevard tree?",
    a: "Trees between the sidewalk and the street belong to the city. We'll tell you at the quote and point you to the right office.",
  },
];

const Contact = () => {
  const defaultServiceType = useServiceTypeFromHash();
  return (
    <PageLayout>
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-[30px]">
        <div
          className="text-[15px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Free quote
        </div>
        <h1
          className="text-[38px] md:text-[58px] leading-[1] font-bold uppercase mt-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Get your tree priced
        </h1>
        <p className="text-[19px] leading-[1.55] text-[#454f4a] mt-[14px] max-w-[60ch]">
          Tell us what you need and how to reach you. A person calls you back,
          we quote from a photo or a visit, and you get a written itemized
          price. No obligation.
        </p>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="bg-white border border-border p-6 md:p-8">
            <h2
              className="text-[30px] font-bold uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Request a quote
            </h2>
            <p className="text-base text-[#5d6862] mt-1.5">
              Thirty seconds. We handle the rest on the call.
            </p>
            <div className="mt-[22px]">
              <QuoteForm
                idPrefix="contact"
                showProjectFields
                defaultServiceType={defaultServiceType}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-[hsl(var(--accent))] text-white p-6 md:p-7">
              <h2
                className="text-[26px] font-bold uppercase leading-[1.05]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Tree down or on the house right now?
              </h2>
              <a
                href={PHONE_HREF}
                className="block text-[38px] font-bold text-white mt-2.5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {PHONE}
              </a>
              <div className="text-[17px] text-white/90 mt-1">
                24/7 emergency line. Don't fill out the form — call.
              </div>
            </div>

            <div className="bg-[hsl(var(--primary))] text-white p-6 md:p-7">
              <h2
                className="text-[28px] font-bold uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Rather text a photo?
              </h2>
              <a
                href={SMS_HREF}
                className="inline-block mt-3 bg-white text-[hsl(var(--primary))] text-lg font-bold uppercase tracking-[0.06em] px-5 py-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Text {PHONE}
              </a>
              <div className="text-[16px] text-[#dbe8e1] mt-3">
                Whole tree in frame, house or fence visible. We'll reply with a
                ballpark or a time to come look.
              </div>
              <div className="border-t border-[#2c6650] mt-5 pt-[18px] flex flex-col gap-2 text-[17px] text-[#dbe8e1]">
                {COMPANY.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-3">
                    <span>{h.day}</span>
                    <strong className="text-white">{h.time}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-border p-6 md:p-7">
              <div
                className="text-[15px] uppercase tracking-[0.18em] text-[#8e8878]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Service area
              </div>
              <div className="flex gap-2 flex-wrap mt-3">
                {SERVICE_AREAS.map((city) => (
                  <Link
                    key={city}
                    to={ROUTES.minneapolis}
                    className="border border-border px-3 py-2 text-base uppercase tracking-[0.04em] text-[hsl(var(--primary))]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {city.split(",")[0]}
                  </Link>
                ))}
              </div>
              <ul
                className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-[14px] uppercase tracking-[0.08em] text-[#5d6862]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {TRUST_POINTS.map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 bg-[hsl(var(--accent))]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-[56px]">
        <div className="bg-white border border-border grid grid-cols-2 md:grid-cols-4">
          {CONTACT_STATS.map((s, i) => (
            <div
              key={s.label}
              className={
                "p-5 md:p-6 " +
                (i < CONTACT_STATS.length - 1
                  ? "border-b md:border-b-0 md:border-r border-border"
                  : "")
              }
            >
              <div
                className="text-[26px] md:text-[28px] font-bold text-[hsl(var(--primary))]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {s.value}
              </div>
              <div className="text-[15px] text-[#5d6862]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-[56px] pb-[72px]">
        <h2
          className="text-[28px] md:text-[40px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Before you call
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {BEFORE_CALL.map((item) => (
            <div key={item.q} className="bg-white border border-border p-6">
              <h3
                className="text-[22px] font-bold uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item.q}
              </h3>
              <p className="text-base leading-[1.55] text-[#5d6862] mt-2">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;

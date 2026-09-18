import PageLayout from "@/components/fence/PageLayout";
import EstimateForm from "@/components/fence/EstimateForm";
import { Link, useLocation } from "react-router-dom";
import {
  PHONE,
  PHONE_HREF,
  ROUTES,
  SERVICE_AREAS,
  CONTACT_PRESELECT,
} from "@/lib/content";

const useFenceTypeFromHash = () => {
  const { hash } = useLocation();
  const key = hash.replace("#", "");
  return key ? CONTACT_PRESELECT[key] : undefined;
};

const CONTACT_STATS = [
  { value: "1 business day", label: "Typical callback time" },
  { value: "45 min", label: "Average on-site measure" },
  { value: "Free", label: "No charge, no obligation" },
  { value: "7 days", label: "Estimates available weekly" },
];

const BEFORE_CALL = [
  {
    q: "Do I need to be home?",
    a: "It helps. Walking the line together is how we settle height, gate placement, and which side the good face goes on.",
  },
  {
    q: "Should I know my footage?",
    a: "No — we measure it. A rough guess helps us bring the right samples, nothing more.",
  },
  {
    q: "What about my HOA?",
    a: "We prepare the submittal packet with drawings and material specs. You just sign it.",
  },
];

const Contact = () => {
  const defaultFenceType = useFenceTypeFromHash();
  return (
    <PageLayout>
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-[30px] md:pt-[30px]">
        <div
          className="text-[15px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Find out my price
        </div>
        <h1
          className="text-[38px] md:text-[58px] leading-[1] font-bold uppercase mt-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Get your fence priced
        </h1>
        <p className="text-[19px] leading-[1.55] text-[#454f4a] mt-[14px] max-w-[60ch]">
          Tell us where the fence goes and we'll come measure. Most estimates
          take 45 minutes and you'll have a written per-foot price before we
          leave.
        </p>
      </div>

      <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="bg-white border border-border p-6 md:p-8">
            <h2
              className="text-[30px] font-bold uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Request an estimate
            </h2>
            <p className="text-base text-[#5d6862] mt-1.5">
              Enter your name, phone number and email to request an estimate.
            </p>
            <div className="mt-[22px]">
              <EstimateForm
                idPrefix="contact"
                showProjectFields
                defaultFenceType={defaultFenceType}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-[hsl(var(--primary))] text-white p-6 md:p-7">
              <h2
                className="text-[28px] font-bold uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Rather just call?
              </h2>
              <a
                href={PHONE_HREF}
                className="block text-[38px] font-bold text-[hsl(var(--accent))] mt-2.5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {PHONE}
              </a>
              <div className="text-[17px] text-[#dbe8e1] mt-1">
                Answered by a person, seven days a week.
              </div>
              <div className="border-t border-[#2c6650] mt-5 pt-[18px] flex flex-col gap-2 text-[17px] text-[#dbe8e1]">
                <div className="flex justify-between gap-3">
                  <span>Monday – Friday</span>
                  <strong className="text-white">7:00 am – 6:00 pm</strong>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Saturday</span>
                  <strong className="text-white">8:00 am – 4:00 pm</strong>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Sunday</span>
                  <strong className="text-white">By appointment</strong>
                </div>
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

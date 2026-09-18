import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import QuoteForm from "@/components/site/QuoteForm";
import {
  PHONE,
  PHONE_HREF,
  SMS_HREF,
  ROUTES,
  COST_FACTORS,
  TRUST_POINTS,
} from "@/lib/content";

type StyleItem = { image: string; alt: string; title: string; body: string };
type GalleryItem = { image: string; alt: string; caption: string };
type FaqItem = { q: string; a: string };

type Props = {
  crumb: string;
  eyebrow: string;
  h1: string;
  blurb: string;
  heroImage: string;
  heroAlt: string;
  /** preselected value for the quote form's service dropdown */
  serviceType: string;
  stats: { v: string; l: string }[];
  typesTitle: string;
  typesIntro: string;
  types: StyleItem[];
  included: string[];
  includedTitle: string;
  costTitle: string;
  costBody: string;
  galleryTitle: string;
  gallery: GalleryItem[];
  faqTitle: string;
  faq: FaqItem[];
  ctaTitle: string;
  ctaBody: string;
  /** emergency pages get a phone-first CTA treatment */
  emergency?: boolean;
};

const ServicePage = ({
  crumb,
  eyebrow,
  h1,
  blurb,
  heroImage,
  heroAlt,
  serviceType,
  stats,
  typesTitle,
  typesIntro,
  types,
  included,
  includedTitle,
  costTitle,
  costBody,
  galleryTitle,
  gallery,
  faqTitle,
  faq,
  ctaTitle,
  ctaBody,
  emergency = false,
}: Props) => (
  <PageLayout>
    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-3.5 text-sm text-[#8e8878]">
      <Link to={ROUTES.home} className="text-[#8e8878]">
        Home
      </Link>{" "}
      / <span className="text-[#5d6862]">{crumb}</span>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div
            className="text-[15px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {eyebrow}
          </div>
          <h1
            className="text-[38px] md:text-[62px] leading-[1] font-bold uppercase mt-3 [text-wrap:balance]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {h1}
          </h1>
          <p className="text-[19px] leading-[1.55] text-[#454f4a] mt-4 max-w-[58ch]">
            {blurb}
          </p>
          <div className="flex gap-3 flex-wrap mt-6">
            {emergency ? (
              <>
                <a
                  href={PHONE_HREF}
                  className="bg-[hsl(var(--accent))] text-white text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Call now · {PHONE}
                </a>
                <a
                  href={SMS_HREF}
                  className="border-2 border-[#cfc9bb] text-[hsl(var(--primary))] text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-[14px]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Text a photo
                </a>
              </>
            ) : (
              <>
                <a
                  href="#quote-form"
                  className="bg-[hsl(var(--accent))] text-white text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Get my free quote
                </a>
                <a
                  href={PHONE_HREF}
                  className="border-2 border-[#cfc9bb] text-[hsl(var(--primary))] text-[19px] font-bold uppercase tracking-[0.07em] px-6 py-[14px]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Call {PHONE}
                </a>
              </>
            )}
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
        <div className="h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt={heroAlt}
            className="w-full h-full object-cover block"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-9">
      <div className="bg-white border border-border grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.l}
            className={
              "p-5 md:p-6 " +
              (i < stats.length - 1
                ? "border-b md:border-b-0 md:border-r border-border"
                : "")
            }
          >
            <div
              className="text-[22px] md:text-[26px] font-bold text-[hsl(var(--primary))]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {s.v}
            </div>
            <div className="text-[15px] text-[#5d6862]">{s.l}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14">
      <h2
        className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {typesTitle}
      </h2>
      <p className="text-[18px] text-[#5d6862] mt-2">{typesIntro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[18px] mt-7">
        {types.map((s) => (
          <div key={s.title} className="bg-white border border-border">
            <div className="h-[150px] overflow-hidden">
              <img
                src={s.image}
                alt={s.alt}
                className="w-full h-full object-cover block"
                loading="lazy"
              />
            </div>
            <div className="p-4 md:p-[18px]">
              <h3
                className="text-[22px] font-bold uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-base leading-[1.5] text-[#5d6862] mt-1.5">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[hsl(var(--primary))] text-white p-7 md:p-8">
          <h2
            className="text-[28px] md:text-[32px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {includedTitle}
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-[17px] text-[#e2ebe6]">
            {included.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-border p-7 md:p-8">
          <h2
            className="text-[28px] md:text-[32px] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {costTitle}
          </h2>
          <p className="text-base leading-[1.55] text-[#5d6862] mt-4">
            {costBody}
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {COST_FACTORS.slice(0, 4).map((f) => (
              <div
                key={f.title}
                className="border-b border-[#eeeae1] pb-2 last:border-0"
              >
                <div
                  className="text-[18px] font-semibold uppercase tracking-[0.03em]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {f.title}
                </div>
                <p className="text-[15px] text-[#5d6862] mt-0.5">{f.body}</p>
              </div>
            ))}
          </div>
          <Link
            to={ROUTES.cost}
            className="inline-block mt-5 text-[hsl(var(--primary))] font-bold uppercase tracking-[0.04em] underline"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            See the full cost guide →
          </Link>
        </div>
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14">
      <h2
        className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {galleryTitle}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-6">
        {gallery.map((g) => (
          <div key={g.caption} className="relative h-[200px] overflow-hidden">
            <img
              src={g.image}
              alt={g.alt}
              className="w-full h-full object-cover block"
              loading="lazy"
            />
            <div
              className="absolute left-0 bottom-0 bg-[hsl(var(--forest-dark))] text-[hsl(var(--cream))] text-[13px] tracking-[0.12em] uppercase px-3 py-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {g.caption}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14">
      <h2
        className="text-[30px] md:text-[42px] font-bold uppercase inline-block pb-[10px] border-b-[3px] border-[hsl(var(--accent))]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {faqTitle}
      </h2>
      <div className="flex flex-col gap-px bg-border border border-border mt-6">
        {faq.map((item) => (
          <div key={item.q} className="bg-white p-6 md:p-7">
            <h3
              className="text-[22px] md:text-[24px] font-bold uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {item.q}
            </h3>
            <p className="text-[17px] leading-[1.6] text-[#5d6862] mt-2">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-14">
      <div className="bg-[hsl(var(--forest-dark))] text-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2
            className="text-[30px] md:text-[42px] leading-[1.03] font-bold uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {ctaTitle}
          </h2>
          <p className="text-[18px] leading-[1.55] text-[#b8c2bc] mt-3.5">
            {ctaBody}
          </p>
          <div className="flex flex-col gap-3 mt-6">
            <a
              href={PHONE_HREF}
              className="bg-white text-[hsl(var(--primary))] text-xl font-bold uppercase tracking-[0.07em] px-6 py-4 text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Call {PHONE}
            </a>
            <a
              href={SMS_HREF}
              className="border-2 border-[#6d8579] text-white text-xl font-bold uppercase tracking-[0.07em] px-6 py-[15px] text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Text us a photo
            </a>
          </div>
        </div>
        <div
          id="quote-form"
          className="bg-white text-[hsl(var(--foreground))] p-6 md:p-7 scroll-mt-24"
        >
          <h3
            className="text-2xl font-bold uppercase mb-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Get a free quote
          </h3>
          <p className="text-base text-[#5d6862] mb-5">
            We call you back. No obligation.
          </p>
          <QuoteForm
            idPrefix="svc"
            showProjectFields={false}
            defaultServiceType={serviceType}
          />
        </div>
      </div>
    </div>
  </PageLayout>
);

export default ServicePage;

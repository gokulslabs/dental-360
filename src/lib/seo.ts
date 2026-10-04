import { clinic } from "./clinic";

const FALLBACK_ORIGIN = "https://dental360.example";

function env(name: string): string | undefined {
  const value = process.env[name];
  return value && value.length > 0 ? value : undefined;
}

/** Public origin for canonical URLs. Set SITE_URL when the live domain is known. */
export function getSiteUrl(): string {
  const configured = env("SITE_URL");
  if (configured) return configured.replace(/\/$/, "");

  if (typeof window !== "undefined") return window.location.origin;
  if (import.meta.env.DEV) return "http://localhost:3000";

  const railway = env("RAILWAY_PUBLIC_DOMAIN");
  if (railway) return `https://${railway}`;

  const vercel = env("VERCEL_PROJECT_PRODUCTION_URL") || env("VERCEL_URL");
  if (vercel) return `https://${vercel}`;

  return FALLBACK_ORIGIN;
}

export const KEYWORDS =
  "dental clinic in Vellore, dentist in Vellore, affordable dental clinic Vellore, teeth treatment Vellore, root canal Vellore, dental implants Vellore, braces Vellore, Sathuvachari dentist, Sripuram dentist";

const hours = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "13:30" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "17:00", closes: "20:30" },
];

const branches = [
  { id: "sathuvachari", name: "Dental 360 — Sathuvachari", street: "C 10, Arcot Rd, Phase 2", locality: "Sathuvachari, Vellore", postal: "632009" },
  { id: "sripuram", name: "Dental 360 — Sripuram", street: "48/1, Sukkiya, Muniswamy Vathiyar St", locality: "Sripuram, Vellore", postal: "632004" },
];

export function clinicJsonLd() {
  const siteUrl = getSiteUrl();
  return {
  "@context": "https://schema.org",
  "@graph": branches.map((b) => ({
    "@type": "Dentist",
    "@id": `${siteUrl}/#${b.id}`,
    name: b.name,
    url: siteUrl,
    telephone: clinic.phone,
    priceRange: "₹",
    image: `${siteUrl}/favicon.png`,
    address: { "@type": "PostalAddress", streetAddress: b.street, addressLocality: b.locality, addressRegion: "Tamil Nadu", postalCode: b.postal, addressCountry: "IN" },
    areaServed: "Vellore",
    openingHoursSpecification: hours,
    parentOrganization: { "@type": "MedicalOrganization", name: "Dental 360 Multi-Speciality Group" },
  })),
  };
}

export function pageHead(path: string, title: string, description: string, opts: { jsonLd?: object } = {}) {
  const url = `${getSiteUrl()}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: KEYWORDS },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Vellore" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Dental 360" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: opts.jsonLd ? [{ type: "application/ld+json", children: JSON.stringify(opts.jsonLd) }] : [],
  };
}

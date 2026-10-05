# Project rules

- Shared site chrome and page sections live in src/components/site.tsx; each route composes them inside <SiteShell>. Why: one source for sections reused across pages.
- Major sections (treatments, about, doctors, locations, contact) are separate routes with their own head(). Why: SEO and shareable URLs.
- The site uses one light theme through semantic CSS tokens. Why: the light palette is the brand, and a second dark theme made the pink accent look muddy.
- Branch phone numbers and site contact numbers share one clinic configuration value. Why: keep displayed contacts and structured data consistent.

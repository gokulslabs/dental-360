# Project rules

- Shared site chrome and page sections live in src/components/site.tsx; each route composes them inside <SiteShell>. Why: one source for sections reused across pages.
- Major sections (treatments, about, doctors, locations, contact) are separate routes with their own head(). Why: SEO and shareable URLs.
- Theme preference is applied before page paint in the root shell and changed through the shared header using semantic CSS tokens. Why: keep all pages consistent and avoid a theme flash on reload.
- Branch phone numbers and site contact numbers share one clinic configuration value. Why: keep displayed contacts and structured data consistent.

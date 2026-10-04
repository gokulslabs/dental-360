import { createFileRoute } from "@tanstack/react-router";
import { pageHead, clinicJsonLd } from "@/lib/seo";
import { SiteShell, Locations, Contact } from "@/components/site";

const title = "Dental Clinic Near You in Vellore — Sathuvachari & Sripuram | Dental 360";
const description = "Visit Dental 360 at C 10, Arcot Rd, Sathuvachari (632009) or 48/1 Muniswamy Vathiyar St, Sripuram (632004), Vellore. Open Mon–Sat, 10 am–1:30 pm & 5–8:30 pm.";

export const Route = createFileRoute("/locations")({
  head: () => pageHead("/locations", title, description, { jsonLd: clinicJsonLd() }),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <Locations />
      <Contact />
    </SiteShell>
  );
}

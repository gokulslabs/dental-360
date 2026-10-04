import { createFileRoute } from "@tanstack/react-router";
import { pageHead, clinicJsonLd } from "@/lib/seo";
import { SiteShell, Hero, TrustStrip, About, Featured, Why, Reviews } from "@/components/site";
import operatory from "@/assets/dental360-operatory-render.png";

const title = "Dental 360 — Affordable Dental Clinic in Vellore | Sathuvachari & Sripuram";
const description = "Affordable, modern dental clinic in Vellore with branches in Sathuvachari and Sripuram. Teeth treatment including root canals, implants, braces, fillings and cosmetic dentistry.";

export const Route = createFileRoute("/")({
  head: () => pageHead("/", title, description, { jsonLd: clinicJsonLd() }),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <Hero />
      <TrustStrip />
      <About image={operatory} alt="Dental 360 operatory with a modern dental chair and magenta accent wall" />
      <Featured image={operatory} alt="Dental 360 operatory with a modern dental chair and magenta accent wall" focus="50% 42%" />
      <Why />
      <Reviews />
    </SiteShell>
  );
}

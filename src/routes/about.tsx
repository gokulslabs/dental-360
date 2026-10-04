import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, About, Why, Featured } from "@/components/site";

const title = "About Dental 360 — Multi-Speciality Dental Clinic in Vellore";
const description = "Dental 360 is a multi-speciality dental clinic in Vellore offering gentle, affordable, modern dental care to families across Sathuvachari and Sripuram.";

export const Route = createFileRoute("/about")({
  head: () => pageHead("/about", title, description),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <About />
      <Why />
      <Featured />
    </SiteShell>
  );
}

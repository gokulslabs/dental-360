import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, Doctors } from "@/components/site";

const title = "Dentists in Vellore — Meet the Dental 360 Team";
const description = "Meet the dentists behind your care at Dental 360 Multi-Speciality Group, Vellore — patient, gentle and focused on clear explanations.";

export const Route = createFileRoute("/doctors")({
  head: () => pageHead("/doctors", title, description),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <Doctors />
    </SiteShell>
  );
}

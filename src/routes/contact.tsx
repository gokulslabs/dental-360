import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, Appointment, Contact } from "@/components/site";

const title = "Book a Dentist Appointment in Vellore — Dental 360";
const description = "Book an affordable dental appointment in Vellore at Dental 360 via WhatsApp or phone (+91 99444 90580). Sathuvachari and Sripuram branches.";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    treatment: typeof search.treatment === "string" && search.treatment.length > 0 ? search.treatment : undefined,
  }),
  head: () => pageHead("/contact", title, description),
  component: Page,
});

function Page() {
  const { treatment } = Route.useSearch();
  return (
    <SiteShell>
      <Appointment initialTreatment={treatment} />
      <Contact />
    </SiteShell>
  );
}

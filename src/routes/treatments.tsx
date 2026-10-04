import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { SiteShell, Treatments, Why } from "@/components/site";

const title = "Teeth Treatment in Vellore — Root Canal, Implants, Braces | Dental 360";
const description = "Complete teeth treatment in Vellore at reasonable prices: root canal, implants, braces, crowns, gum therapy, oral surgery, kids dentistry and dental X-rays at Dental 360.";

export const Route = createFileRoute("/treatments")({
  head: () => pageHead("/treatments", title, description),
  component: Page,
});

function Page() {
  return (
    <SiteShell>
      <Treatments asPage />
      <Why />
    </SiteShell>
  );
}

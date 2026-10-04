import { createFileRoute } from "@tanstack/react-router";
import { getSiteUrl } from "@/lib/seo";

const pages = [
  ["/", "1.0"],
  ["/treatments", "0.9"],
  ["/locations", "0.9"],
  ["/contact", "0.8"],
  ["/about", "0.7"],
  ["/doctors", "0.6"],
] as const;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const siteUrl = getSiteUrl();
        const urls = pages
          .map(([path, priority]) => `<url><loc>${siteUrl}${path}</loc><priority>${priority}</priority></url>`)
          .join("");
        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
        return new Response(xml, {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});

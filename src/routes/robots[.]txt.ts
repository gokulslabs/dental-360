import { createFileRoute } from "@tanstack/react-router";
import { getSiteUrl } from "@/lib/seo";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(`User-agent: *\nAllow: /\n\nSitemap: ${getSiteUrl()}/sitemap.xml\n`, {
          headers: { "content-type": "text/plain; charset=utf-8" },
        }),
    },
  },
});

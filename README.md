# Dental 360

Website for Dental 360, a multi-speciality dental clinic in Vellore.

## Development

```sh
bun install
bun run dev
```

## Hosting

Set `SITE_URL` to the public origin, for example `https://dental360.example`, so canonical links and the sitemap use the live domain. Railway and Vercel domains are used when `SITE_URL` is unset.

Railway builds the Dockerfile and listens on `PORT`. Vercel uses `vercel.json`, which builds the Nitro Vercel preset. Locally, `bun run build` produces the Node server and `bun run start` runs it.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

# lead-magnet

A focused Next.js landing page for capturing B2B leads — hero, benefits, email form, and API route ready to connect to your CRM or email provider.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub

Repository: `heath-gtm/lead-magnet`

```bash
# After renaming the repo on GitHub (Settings → Repository name → lead-magnet):
git remote set-url origin https://github.com/heath-gtm/lead-magnet.git
git push -u origin main
```

If the remote is still `Lead-Magnet`, rename it on GitHub first, then run the commands above.

## lead capture

Submissions POST to `/api/leads`. By default, leads are logged to the server console. Edit `app/api/leads/route.ts` to send to Resend, HubSpot, Airtable, or your database.

## Deploy on Vercel

```bash
npx vercel login
npx vercel link
npx vercel deploy --prod
```

Or connect this GitHub repo in the [Vercel dashboard](https://vercel.com/new) for automatic deploys on push.

## Project structure

```
app/
  api/leads/route.ts   # lead submission endpoint
  page.tsx             # landing page
  layout.tsx           # root layout + metadata
components/
  LeadForm.tsx         # opt-in form
  Benefits.tsx         # Value props section
```

## License

MIT

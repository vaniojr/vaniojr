# vaniojr

Premium personal website built with Next.js for vaniojr.com.br.

## Architecture Decisions

- App Router with scalable route structure for future sections.
- TypeScript-first and componentized UI for maintainability.
- Tailwind CSS + shadcn/ui primitives for design consistency.
- Framer Motion for subtle, performance-conscious motion.
- SEO prepared with metadata, Open Graph image route, sitemap and robots.
- Vercel-ready setup with host-based redirects for multi-domain strategy.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide Icons

## Project Structure

```text
src/
	app/
		page.tsx
		founder/page.tsx
		lab/page.tsx
		blog/page.tsx
		opengraph-image.tsx
		sitemap.ts
		robots.ts
	components/
		home/landing-page.tsx
		providers/theme-provider.tsx
		ui/*
	lib/
		content.ts
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment Variables

Copy the example and edit values:

```bash
cp .env.example .env.local
```

Prepared for future Supabase and database integrations.

## Vercel Deployment

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Set production domain as vaniojr.com.br.
4. Add additional domains:
	 - www.vaniojr.com.br
	 - junior.inf.br
	 - junior.tur.br
5. Configure required environment variables in Vercel Project Settings.
6. Deploy.

### Redirect Strategy

Configured in vercel.json:

- www.vaniojr.com.br -> vaniojr.com.br
- junior.inf.br -> vaniojr.com.br
- junior.tur.br -> vaniojr.com.br

## Content Editing

- Main content blocks: src/lib/content.ts
- Hero and section composition: src/components/home/landing-page.tsx
- Metadata and SEO: src/app/layout.tsx

## Next Steps

- Replace placeholder contact links.
- Add projects data source when ready.
- Implement blog content pipeline (MDX or CMS).
- Connect Supabase for dynamic content.

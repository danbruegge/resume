This is a static [Next.js](https://nextjs.org/) resume project with [TailwindCSS](https://tailwindcss.com/) and the JSON-based standard for resumes, [JSON Resume](https://jsonresume.org/schema/).

Resume Schema: 

## Getting Started

- Run `pnpm install`
- Copy `resume.example.json` to `resume.json`. Edit as you need it.
- Run `pnpm dev`
- Open [http://localhost:3000](http://localhost:3000) to see the result.

## Build

- Install `wkhtmltopdf` to generate PDF from Page on build.
- Run `pnpm build`

## Deploy

- Edit `<TARGET>` in `deploy.sh`
- Run `sh ./deploy.sh` to deploy the static site

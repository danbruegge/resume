This is a static [Next.js](https://nextjs.org/) resume project with [TailwindCSS](https://tailwindcss.com/).

## Getting Started

- Run `yarn install`
- Copy `resume.example.json` to `resume.json`. Edit as you need it.
- Run `yarn dev`
- Open [http://localhost:3000](http://localhost:3000) to see the result.

## Build

- Install `wkhtmltopdf` to generate PDF from Page on build.
- Run `yarn build`

## Deploy

- Edit `<TARGET>` in `deploy.sh`
- Run `yarn deploy` to deploy the static site

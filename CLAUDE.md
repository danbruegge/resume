# CLAUDE.md

Static Next.js resume site using JSON Resume schema. Generates web, PDF, and DOCX output.

## Important

- **Do not run `pnpm dev` or other dev servers automatically.**
- `resume.json` is symlinked to an external location; use `resume.example.json` as template.

## Commands

- `pnpm dev` - Dev server (Turbopack)
- `pnpm build` - Full build (page + PDF + DOCX)
- `pnpm types` / `pnpm lint` / `pnpm format` - Checks
- `pnpm deploy` - SCP to remote server

## Key Files

- `app/page.tsx` - Main page, renders resume sections
- `components/ui.tsx` - Reusable UI components
- `utils/buildDate.ts` - Date formatting (date-fns)
- `scripts/generate-pdf.mjs` - PDF via Puppeteer
- `scripts/generate-docx.mjs` - DOCX via html-to-docx

## Notes

- Static export (`output: "export"` in `next.config.js`)
- TailwindCSS v4 with dark mode and `print:` variants
- PDF: A4, 2cm margins, saved to `public/cv.pdf`
- DOCX: saved to `public/cv.docx`

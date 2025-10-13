import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");

const htmlPath = join(projectRoot, "out", "index.html");
const pdfPath = join(projectRoot, "public", "cv.pdf");

(async () => {
  console.log("📝 Generating PDF...");

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const html = readFileSync(htmlPath, "utf-8")
    .replace(/href="\/_next\//g, 'href="./_next/')
    .replace(/src="\/_next\//g, 'src="./_next/');

  await page.goto(`file://${dirname(htmlPath)}`, {
    waitUntil: "domcontentloaded",
  });
  await page.setContent(html, { waitUntil: "networkidle0" });

  await page.pdf({
    path: pdfPath,
    format: "A4",
    margin: { top: "2cm", bottom: "2cm", left: "2cm", right: "2cm" },
  });

  await browser.close();

  console.log(`✅ PDF saved to: ${pdfPath}`);
})();

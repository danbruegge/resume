import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");

const htmlPath = join(projectRoot, "out", "index.html");
const pdfPath = join(projectRoot, "public", "cv.pdf");

(async () => {
  console.log("🚀 Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  // Enable print media emulation
  await page.emulateMediaType("print");

  console.log(`📄 Loading HTML from: ${htmlPath}`);
  await page.goto(`file://${htmlPath}`, {
    waitUntil: "networkidle0",
  });

  console.log("📝 Generating PDF...");
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: false,
    margin: {
      top: "2cm",
      bottom: "2cm",
      left: "2cm",
      right: "2cm",
    },
  });

  console.log(`✅ PDF saved to: ${pdfPath}`);

  await browser.close();
})();

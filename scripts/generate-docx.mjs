import HTMLtoDOCX from "html-to-docx";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");

const htmlPath = join(projectRoot, "out", "index.html");
const docxPath = join(projectRoot, "public", "cv.docx");

(async () => {
  console.log("📝 Generating DOCX...");

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(readFileSync(htmlPath, "utf-8"), {
    waitUntil: "domcontentloaded",
  });

  await page.evaluate(() => {
    document.querySelectorAll("script").forEach((el) => el.remove());
    document
      .querySelectorAll('[class*="print:invisible"]')
      .forEach((el) => el.remove());
  });

  const cleanedHtml = await page.content();
  await browser.close();

  const docxBuffer = await HTMLtoDOCX(cleanedHtml);
  writeFileSync(docxPath, docxBuffer);

  console.log(`✅ DOCX saved to: ${docxPath}`);
})();

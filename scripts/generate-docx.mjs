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
    document.querySelectorAll('[class*="print:invisible"]').forEach((el) => el.remove());

    // Transform inline skill lists to comma-separated text
    document.querySelectorAll("ul").forEach((ul) => {
      const items = ul.querySelectorAll("li");
      const isInlineList =
        items.length > 0 && [...items].every((li) => li.classList.contains("inline-block"));

      if (isInlineList) {
        const text = [...items].map((li) => li.textContent.trim()).join(", ");
        const p = document.createElement("p");
        p.textContent = text;
        ul.replaceWith(p);
      }
    });

    // Remove all <style> and <link rel="stylesheet"> tags
    document.querySelectorAll("style").forEach((el) => el.remove());
    document.querySelectorAll('link[rel="stylesheet"]').forEach((el) => el.remove());

    // Remove all print: prefixed classes
    document.querySelectorAll('[class*="print:"]').forEach((el) => {
      [...el.classList]
        .filter((cls) => cls.startsWith("print:"))
        .forEach((cls) => el.classList.remove(cls));
    });

    // Remove inline page-break styles
    document.querySelectorAll("[style]").forEach((el) => {
      el.style.removeProperty("break-before");
      el.style.removeProperty("break-after");
      el.style.removeProperty("break-inside");
      el.style.removeProperty("page-break-before");
      el.style.removeProperty("page-break-after");
      el.style.removeProperty("page-break-inside");
    });
  });

  // Extract only body content to avoid <head> artifacts confusing html-to-docx
  const cleanedHtml = await page.evaluate(() => document.body.innerHTML);
  await browser.close();

  const docxBuffer = await HTMLtoDOCX(cleanedHtml, null, {
    margins: {
      top: 1134, // 2cm in TWIP
      bottom: 1134,
      left: 1134,
      right: 1134,
    },
    font: "Arial",
    fontSize: 22, // 11pt in HIP
  });
  writeFileSync(docxPath, docxBuffer);

  console.log(`✅ DOCX saved to: ${docxPath}`);
})();

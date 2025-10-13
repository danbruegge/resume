import HTMLtoDOCX from "html-to-docx";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");

const htmlPath = join(projectRoot, "out", "index.html");
const docxPath = join(projectRoot, "public", "cv.docx");

(async () => {
  console.log(`📄 Loading HTML from: ${htmlPath}`);
  let htmlString = readFileSync(htmlPath, "utf-8");

  console.log("🧹 Cleaning HTML (removing script tags)...");
  // Remove all script tags and their content
  htmlString = htmlString.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  console.log("📝 Generating DOCX...");
  const docxBuffer = await HTMLtoDOCX(htmlString);

  writeFileSync(docxPath, docxBuffer);
  console.log(`✅ DOCX saved to: ${docxPath}`);
})();

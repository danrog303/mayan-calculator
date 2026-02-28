import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, "..", ".env");
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, "utf8")
    .split("\n")
    .forEach((line) => {
      const [key, ...rest] = line.split("=");
      if (key && rest.length && !process.env[key.trim()]) {
        process.env[key.trim()] = rest.join("=").trim();
      }
    });
}

const BASE_URL = process.env.VITE_SITE_URL || "https://danielrogowski.net";
const BUILD_DIR = path.join(__dirname, "..", "build", "client");
const OUTPUT_PATH = path.join(BUILD_DIR, "sitemap.xml");

function getPrerenderedPaths(dir, base = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const paths = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const relativePath = base + "/" + entry.name;
    const indexFile = path.join(dir, entry.name, "index.html");
    if (fs.existsSync(indexFile)) {
      paths.push(relativePath);
    }
    paths.push(...getPrerenderedPaths(path.join(dir, entry.name), relativePath));
  }

  return paths;
}

function buildSitemap(urls) {
  const urlEntries = urls
    .map(({ loc, priority }) => `  <url>\n    <loc>${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
}

const EXCLUDED_PATHS = new Set(["/404"]);

const subPaths = getPrerenderedPaths(BUILD_DIR).filter((p) => !EXCLUDED_PATHS.has(p));

const urls = [
  { loc: `${BASE_URL}/`, priority: "1.0" },
  ...subPaths.map((p) => ({ loc: `${BASE_URL}${p}/`, priority: "0.8" })),
];

const sitemap = buildSitemap(urls);
fs.writeFileSync(OUTPUT_PATH, sitemap, "utf8");

console.log(`Sitemap written to ${OUTPUT_PATH} with ${urls.length} URLs:`);
urls.forEach(({ loc }) => console.log(`  ${loc}`));

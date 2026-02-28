import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, "..", "build", "client", "404", "index.html");
const dest = path.join(__dirname, "..", "build", "client", "404.html");

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  fs.rmSync(path.dirname(src), { recursive: true });
  console.log(`404.html written to build/client/`);
} else {
  console.warn("Warning: build/client/404/index.html not found — skipping 404.html generation");
}

const filesToRemove = [
  "__spa-fallback.html",
  "_redirects"
];

filesToRemove.forEach(file => {
  const p = path.join(__dirname, "..", "build", "client", file);
  if (fs.existsSync(p)) {
    fs.rmSync(p);
    console.log(`${file} removed from build/client/`);
  }
});

// Usage: node upload-crops.mjs <baseUrl> <email> <password> <materi> <peta> <step> <cropsDir> <chromeExecutable>
// Uploads <cropsDir>/L{step}-{n}.png into the n-th <input type=file> of /belajar/{materi}/{peta}/{step}?edit-foto=true
// (inputs appear in DOM order = urutan 1..N). Set ONLY=3,5 to upload a subset (1-based urutan).
// Requires: `npm i playwright` in a scratch dir (not the project).
import { chromium } from "playwright";
import fs from "node:fs";

const [base, email, pass, materi, peta, step, dir, exe] = process.argv.slice(2);
const only = process.env.ONLY?.split(",").map(Number);
const b = await chromium.launch({ executablePath: exe });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto(`${base}/login`, { waitUntil: "networkidle" });
await p.fill('input[type="email"]', email);
await p.fill('input[type="password"]', pass);
await p.keyboard.press("Enter");
await p.waitForTimeout(4000);
await p.goto(`${base}/belajar/${materi}/${peta}/${step}?edit-foto=true`, { waitUntil: "networkidle" });
const n = await p.locator("input[type=file]").count();
console.log("file inputs:", n);
for (let i = 0; i < n; i++) {
  const file = `${dir}/L${step}-${i + 1}.png`;
  if (!fs.existsSync(file) || (only && !only.includes(i + 1))) continue;
  await p.locator("input[type=file]").nth(i).setInputFiles(file);
  await p.waitForFunction(() => !document.body.innerText.includes("Mengunggah"), null, { timeout: 30000 }).catch(() => {});
  await p.waitForTimeout(2500);
  console.log("uploaded urutan", i + 1);
}
await p.goto(`${base}/belajar/${materi}/${peta}/${step}`, { waitUntil: "networkidle" });
await p.screenshot({ path: `${dir}/result-step${step}.png`, fullPage: true });
await b.close();

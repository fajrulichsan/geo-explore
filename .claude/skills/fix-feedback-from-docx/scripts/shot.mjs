import { chromium } from "playwright";
const [email, pass, exe, ...paths] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: exe });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto("http://localhost:3000/login", { waitUntil: "networkidle" });
await p.fill('input[type="email"]', email); await p.fill('input[type="password"]', pass);
await p.keyboard.press("Enter"); await p.waitForTimeout(4000);
for (const path of paths) {
  await p.goto("http://localhost:3000" + path, { waitUntil: "networkidle" });
  console.log(path, "->", p.url());
  await p.screenshot({ path: `s-${path.replace(/\W/g, "_")}.png`, fullPage: true });
}
await b.close();

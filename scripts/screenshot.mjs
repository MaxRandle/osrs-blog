#!/usr/bin/env node
// Captures transparent PNG screenshots of each page's parchment body.

import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = "http://localhost:4000";

function startDevServer() {
  return new Promise((resolve, reject) => {
    const server = spawn("npm", ["run", "dev", "--", "-p", "4000"], {
      cwd: join(__dirname, ".."),
      stdio: ["ignore", "pipe", "pipe"],
    });
    server.stdout.on("data", (data) => {
      const text = data.toString();
      process.stdout.write(text);
      if (text.includes("Ready") || text.includes("ready")) {
        resolve(server);
      }
    });
    server.stderr.on("data", (data) => process.stderr.write(data));
    server.on("error", reject);
  });
}

console.log("Starting dev server...");
const server = await startDevServer();
console.log("Dev server ready. Taking screenshots...\n");

const routes = [
  "/colo-rewards/1",
  "/colo-rewards/2",
  "/colo-rewards/3",
  "/colo-rewards/4",
];

const outputDir = join(__dirname, "..", "screenshots");
mkdirSync(outputDir, { recursive: true });

const browser = await puppeteer.launch();

for (const route of routes) {
  const name = route.slice(1).replace(/\//g, "-");
  const page = await browser.newPage();
  await page.setViewport({ width: 480, height: 900, deviceScaleFactor: 2 });
  await page.goto(BASE_URL + route, { waitUntil: "networkidle0" });

  await page.evaluate(() => {
    document.documentElement.style.background = "transparent";
    document.body.style.background = "transparent";
    // Remove min-h-svh so the body shrinks to fit content
    document.body.style.minHeight = "auto";
    // Remove Next.js dev indicator
    document.querySelector("nextjs-portal")?.remove();
  });

  const bodyEl = await page.$("body");
  const outputPath = join(outputDir, `${name}.png`);
  await bodyEl.screenshot({ path: outputPath, omitBackground: true });

  console.log(`Saved: screenshots/${name}.png`);
  await page.close();
}

await browser.close();
server.kill();
console.log("Done.");

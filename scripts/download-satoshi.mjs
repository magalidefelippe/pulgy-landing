import { writeFile } from "fs/promises";

// Satoshi font files from Fontshare CDN - download and self-host
const fonts = [
  {
    name: "Satoshi-Medium",
    weight: 500,
    style: "normal",
    url: "https://api.fontshare.com/v2/css?f[]=satoshi@500&display=swap",
  },
  {
    name: "Satoshi-SemiBold",
    weight: 600,
    style: "normal",
    url: "https://api.fontshare.com/v2/css?f[]=satoshi@600&display=swap",
  },
  {
    name: "Satoshi-Bold",
    weight: 700,
    style: "normal",
    url: "https://api.fontshare.com/v2/css?f[]=satoshi@700&display=swap",
  },
];

async function extractWoff2Url(cssUrl) {
  const res = await fetch(cssUrl);
  const css = await res.text();
  console.log("[v0] CSS response:", css.substring(0, 500));
  const match = css.match(/url\(([^)]+\.woff2)\)/);
  if (match) return match[1];
  // Try without .woff2 extension
  const match2 = css.match(/url\(([^)]+)\)\s*format\(['"]?woff2/);
  if (match2) return match2[1];
  return null;
}

async function downloadFont(url, filename) {
  console.log(`[v0] Downloading ${filename} from ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const buffer = await res.arrayBuffer();
  await writeFile(`public/fonts/${filename}`, Buffer.from(buffer));
  console.log(`[v0] Saved ${filename} (${buffer.byteLength} bytes)`);
}

async function main() {
  // First, get the CSS to find the actual woff2 URLs
  for (const font of fonts) {
    try {
      const woff2Url = await extractWoff2Url(font.url);
      if (woff2Url) {
        await downloadFont(woff2Url, `${font.name}.woff2`);
      } else {
        console.log(`[v0] Could not find woff2 URL for ${font.name}`);
      }
    } catch (err) {
      console.error(`[v0] Error with ${font.name}:`, err.message);
    }
  }
}

main();

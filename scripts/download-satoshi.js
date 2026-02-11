import fs from "fs";
import path from "path";

const fontsDir = path.join(process.cwd(), "public", "fonts");

if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const fonts = [
  {
    name: "Satoshi-Medium",
    weight: 500,
    url: "https://api.fontshare.com/v2/css?f[]=satoshi@500&display=swap",
  },
  {
    name: "Satoshi-SemiBold",
    weight: 600,
    url: "https://api.fontshare.com/v2/css?f[]=satoshi@600&display=swap",
  },
  {
    name: "Satoshi-Bold",
    weight: 700,
    url: "https://api.fontshare.com/v2/css?f[]=satoshi@700&display=swap",
  },
];

async function extractWoff2Url(cssUrl) {
  const res = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });
  const css = await res.text();
  // Match protocol-relative URLs (//cdn.fontshare.com/...) or https URLs
  const match = css.match(/url\(['"]*([^'")]+\.woff2)['"]*\)/);
  if (match) {
    let url = match[1];
    if (url.startsWith("//")) url = "https:" + url;
    return url;
  }
  return null;
}

async function downloadFont(url, filename) {
  console.log(`Downloading ${filename} from ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const filePath = path.join(fontsDir, filename);
  fs.writeFileSync(filePath, buffer);
  console.log(`Saved ${filePath} (${buffer.length} bytes)`);
}

async function main() {
  for (const font of fonts) {
    try {
      const woff2Url = await extractWoff2Url(font.url);
      if (woff2Url) {
        await downloadFont(woff2Url, `${font.name}.woff2`);
      } else {
        console.error(`Could not find woff2 URL for ${font.name}`);
      }
    } catch (err) {
      console.error(`Error with ${font.name}:`, err.message);
    }
  }
  console.log("Done!");
}

main();

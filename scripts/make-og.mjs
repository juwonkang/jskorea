// 카톡·SNS 공유 미리보기 이미지(1200x630) 생성 → public/og.jpg
// 실행: npm run og   (npm run images 이후에 실행)

import sharp from "sharp";
import path from "node:path";
import { existsSync } from "node:fs";

const W = 1200;
const H = 630;
const img = (n) => path.resolve("public/images", n);

const shade = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#08162a" stop-opacity="0.85"/>
      <stop offset="0.6" stop-color="#08162a" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#08162a" stop-opacity="0.1"/>
    </linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
  </svg>`
);

const layers = [{ input: shade }];

if (existsSync(img("logo-white.png"))) {
  const { data, info } = await sharp(img("logo-white.png"))
    .resize({ width: 520 })
    .toBuffer({ resolveWithObject: true });
  layers.push({ input: data, left: 70, top: H - 70 - info.height });
}

await sharp(img("hero-1.jpg"))
  .resize(W, H, { fit: "cover", position: "centre" })
  .composite(layers)
  .jpeg({ quality: 85 })
  .toFile(path.resolve("public/og.jpg"));

console.log("✓ public/og.jpg");

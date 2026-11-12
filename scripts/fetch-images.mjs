// 기존 jskkorea.com 이미지를 받아서 public/images 에 저장
// 기존 사이트는 본문이 통이미지라서, 그 안의 사진 영역만 잘라서 개별 파일로 만듭니다.
// 실행: npm run images   (한 번만 돌리고 결과물을 git에 커밋하면 됨)

import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "http://www.jskkorea.com/php/";
const OUT = path.resolve("public/images");

// 통째로 받는 이미지
const direct = {
  "hero-1.jpg": "skin/images/main_fla_img1.jpg",
  "hero-2.jpg": "skin/images/main_fla_img2.jpg",
  "hero-3.jpg": "skin/images/main_fla_img3.jpg",
  "logo.png": "skin/images/logo.png",
  "logo-white.png": "skin/images/logo_w.png",
};

// 본문 통이미지에서 잘라낼 영역 [left, top, width, height] (원본 710px 기준)
const P = [34, 56, 256, 172]; // 제품 상세 상단 대표 이미지 공통 위치
const crops = {
  "about-team.jpg": ["sub0101", [252, 216, 432, 216]],
  "history-1.jpg": ["sub0103", [450, 410, 234, 154]],
  "history-2.jpg": ["sub0103", [450, 584, 234, 154]],
  "eng-1.jpg": ["sub0201", [36, 180, 304, 204]],
  "eng-2.jpg": ["sub0201", [372, 180, 304, 204]],
  "eng-3.jpg": ["sub0201", [36, 412, 304, 208]],
  "eng-4.jpg": ["sub0201", [372, 412, 304, 208]],
  "solar-1.jpg": ["sub0201", [36, 884, 304, 204]],
  "solar-2.jpg": ["sub0201", [372, 884, 304, 204]],
  "cleanroom-1.jpg": ["sub0202_a", [36, 1896, 304, 204]],
  "cleanroom-2.jpg": ["sub0202_a", [372, 1896, 304, 204]],
  "portable-1.jpg": ["sub0202_b", [36, 260, 640, 292]],
  "portable-2.jpg": ["sub0202_b", [380, 652, 272, 232]],
  "p-ffu.jpg": ["sub0202_c", P],
  "p-ahu.jpg": ["sub0202_d", P],
  "p-afu.jpg": ["sub0202_e", [56, 68, 208, 220]],
  "p-tile.jpg": ["sub0202_f", P],
  "p-access.jpg": ["sub0202_g", P],
  "p-bfu.jpg": ["sub0202_h", P],
  "p-booth.jpg": ["sub0203_a", P],
  "p-bench.jpg": ["sub0203_b", P],
  "p-shower.jpg": ["sub0203_c", P],
  "p-passbox.jpg": ["sub0203_d", P],
  "p-damper.jpg": ["sub0203_e", P],
  "p-particle.jpg": ["sub0203_f", [40, 1028, 200, 148]],
  "booth-install-1.jpg": ["sub0203_a", [36, 556, 304, 208]],
  "booth-install-2.jpg": ["sub0203_a", [372, 556, 304, 208]],
};

async function get(rel) {
  const res = await fetch(BASE + rel);
  if (!res.ok) throw new Error(`${res.status} ${rel}`);
  return Buffer.from(await res.arrayBuffer());
}

await mkdir(OUT, { recursive: true });

for (const [name, rel] of Object.entries(direct)) {
  try {
    await writeFile(path.join(OUT, name), await get(rel));
    console.log("✓", name);
  } catch (e) {
    console.log("✗", name, e.message);
  }
}

const cache = {};
for (const [name, [page, [left, top, width, height]]] of Object.entries(crops)) {
  try {
    cache[page] ??= await get(`skin/body/${page}.jpg`);
    await sharp(cache[page])
      .extract({ left, top, width, height })
      .resize({ width: width * 2, withoutEnlargement: false, kernel: "lanczos3" })
      .jpeg({ quality: 88 })
      .toFile(path.join(OUT, name));
    console.log("✓", name);
  } catch (e) {
    console.log("✗", name, e.message);
  }
}

console.log("\n완료 → public/images");

# 정석코리아 리뉴얼 시안

Next.js 15 (App Router) · TypeScript · 순수 CSS

## 처음 세팅

```bash
npm install
npm run images   # 기존 jskkorea.com에서 사진 받아서 public/images 에 저장 (최초 1회)
npm run dev      # http://localhost:3000
```

`npm run images`는 기존 사이트의 통이미지에서 사진 영역만 잘라 개별 파일로 만듭니다.
결과물(public/images)까지 같이 커밋해야 Vercel에서도 보입니다.

## Vercel 배포

1. GitHub에 새 레포 만들고 push
2. Vercel → Add New Project → 레포 선택 → Deploy (설정 그대로)

## 문구·사진 바꾸는 법

화면 코드와 내용이 분리돼 있어서 **content 폴더의 JSON만 고치면** 됩니다.

| 파일 | 내용 |
|---|---|
| `content/site.json` | 회사 정보(주소·전화·메일), 메뉴 |
| `content/home.json` | 메인 히어로 문구·슬라이드, 회사소개 요약, 사업분야 카드 |
| `content/about.json` | CEO 인사말, 비전, 연혁(사업실적 페이지도 여기서 읽음), 조직도, 해외 거점 |
| `content/business.json` | 사업분야 4개 섹션 |
| `content/products.json` | 제품 분류와 제품 14종 (상세페이지 자동 생성) |

- 사진 교체: `public/images`에 같은 이름으로 덮어쓰거나, 새 파일 넣고 JSON 경로 수정
- 연혁 추가: `about.json`의 `history` 맨 위에 한 줄 추가 (`type`: `global` 해외 / `domestic` 국내)
- 제품 추가: `products.json`의 `items`에 하나 추가하면 목록과 `/products/슬러그` 상세가 자동 생성

나중에 CMS(Keystatic 등)를 붙일 때도 이 JSON 구조를 그대로 연결하면 됩니다.

## 페이지

`/` 메인 · `/about` 회사소개 · `/business` 사업분야 · `/products` 제품 · `/products/[slug]` 제품 상세 · `/technology` 기술과 혁신 · `/results` 사업실적 · `/contact` 문의하기

문의하기 폼은 현재 UI만 동작합니다(시안). 컨펌 후 Google Apps Script 웹앱 URL로 전송 연결 예정.

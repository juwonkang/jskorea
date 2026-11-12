import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const title = "정석코리아 | 크린룸·플랜트 엔지니어링 전문기업";
const description =
  "1997년 창립한 크린룸·플랜트 엔지니어링 전문기업 정석코리아. 슈퍼크린룸, 이동식 크린룸, FFU, 크린부스, 에어샤워 등 설계부터 장비 생산, 해외 시공까지.";

// 공유 미리보기 이미지는 절대 주소가 필요해서 배포 주소를 기준으로 잡음
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "정석코리아",
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "정석코리아" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}

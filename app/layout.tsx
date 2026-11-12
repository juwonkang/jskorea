import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "정석코리아 | 크린룸·플랜트 엔지니어링 전문기업",
  description:
    "1997년 창립한 크린룸·플랜트 엔지니어링 전문기업 정석코리아. 슈퍼크린룸, 이동식 크린룸, FFU, 크린부스, 에어샤워 등 설계부터 장비 생산, 해외 시공까지.",
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

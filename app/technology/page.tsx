import Link from "next/link";
import PageHero from "@/components/PageHero";
import products from "@/content/products.json";

export const metadata = { title: "기술과 혁신 | 정석코리아" };

export default function TechnologyPage() {
  const portable = products.items.find((p) => p.slug === "portable-cleanroom")! as (typeof products.items)[number] & { features: string[] };
  const particle = products.items.find((p) => p.slug === "particle-remover")! as (typeof products.items)[number] & { features: string[] };

  return (
    <>
      <PageHero title="기술과 혁신" en="Technology" image="/images/hero-3.jpg" crumb="기술과 혁신 / 특화기술" />

      <section className="section">
        <div className="container tech-feature">
          <div className="reveal">
            <span className="eyebrow">Specialized Technology 01</span>
            <h2 className="h2">{"소형 이동식\n크린룸 시스템"}</h2>
            <p className="lead">산업화가 점점 소형화·첨단화됨에 따라 개발한 컴팩트한 이동식 크린룸 시스템입니다.</p>
            <ul className="checks">
              {portable.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="pd-actions">
              <Link href="/products/portable-cleanroom" className="btn btn-line">
                제품 상세 <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="reveal" style={{ display: "grid", gap: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/portable-1.jpg" alt="이동식 컨테이너 크린룸" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/portable-2.jpg" alt="이동식 간이 크린룸" />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container tech-feature">
          <div className="reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={particle.image} alt={particle.nameKo} />
          </div>
          <div className="reveal">
            <span className="eyebrow">Specialized Technology 02</span>
            <h2 className="h2">{"LCD·Glass\n파티클 제거 장치"}</h2>
            {particle.features.map((f) => (
              <p key={f} className="lead">
                {f}
              </p>
            ))}
            <ul className="checks">
              {particle.summary.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

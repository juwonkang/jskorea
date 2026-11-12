import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import home from "@/content/home.json";
import about from "@/content/about.json";
import products from "@/content/products.json";
import site from "@/content/site.json";

const featured = ["super-cleanroom", "portable-cleanroom", "ffu", "clean-booth", "air-shower", "clean-bench", "access-floor", "pass-box"];
const countries = ["사우디아라비아", "UAE 두바이", "중국", "베트남", "일본", "프랑스", "인도", "미국", "멕시코"];

export default function Home() {
  const items = featured.map((s) => products.items.find((p) => p.slug === s)!).filter(Boolean);
  const years = new Date().getFullYear() - site.company.founded;

  return (
    <>
      <HeroSlider />

      {/* 회사 소개 */}
      <section className="section">
        <div className="container">
          <div className="intro reveal">
            <div>
              <span className="eyebrow">{home.intro.eyebrow}</span>
              <h2 className="h2">{home.intro.title}</h2>
              <p className="lead">{home.intro.body}</p>
              <div style={{ marginTop: 36 }}>
                <Link href="/about" className="btn btn-line">
                  회사소개 <span className="arrow">→</span>
                </Link>
              </div>
            </div>
            <div className="img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={home.intro.image} alt="정석코리아 크린룸 작업 현장" />
            </div>
          </div>
          <div className="stats reveal">
            <div>
              <strong>{years}년</strong>
              <span>{home.stats[0].value} 창립 이래</span>
            </div>
            {home.stats.slice(1).map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 사업분야 */}
      <section className="section soft">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">{home.business.eyebrow}</span>
              <h2 className="h2">{home.business.title}</h2>
            </div>
            <Link href="/business" className="btn btn-line">
              전체 보기 <span className="arrow">→</span>
            </Link>
          </div>
          <div className="biz-grid reveal">
            {home.business.items.map((b, i) => (
              <Link key={b.key} href={`/business#${b.key}`} className="biz-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.image} alt={b.title} />
                <span className="no">0{i + 1}</span>
                <span className="en">{b.en}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 제품 */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Products</span>
              <h2 className="h2">주요 제품</h2>
            </div>
            <Link href="/products" className="btn btn-line">
              제품 전체 <span className="arrow">→</span>
            </Link>
          </div>
          <div className="prod-grid reveal">
            {items.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="prod-card">
                <div className="thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.nameKo} />
                </div>
                <div className="info">
                  <div className="name">{p.name}</div>
                  <h3>{p.nameKo}</h3>
                  <p>{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 글로벌 실적 */}
      <section className="section dark">
        <div className="container global">
          <div className="reveal">
            <span className="eyebrow">Global Track Record</span>
            <h2 className="h2">{"세계 현장에서\n검증된 크린룸 기술"}</h2>
            <p className="lead">
              중동의 랜드마크부터 글로벌 전자·디스플레이 기업의 생산라인까지, 정석코리아의 크린룸이 함께하고 있습니다.
            </p>
            <div className="countries">
              {countries.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <Link href="/results" className="btn btn-ghost">
                사업실적 전체 <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <ul className="timeline-mini reveal">
            {about.history.slice(0, 8).map((h) => (
              <li key={h.year + h.text}>
                <span className="y">{h.year}</span>
                <span className="t">{h.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={home.hero.slides[1]} alt="" />
            <div>
              <h2>{home.cta.title}</h2>
              <p>{home.cta.body}</p>
            </div>
            <div>
              <a href={`tel:${site.company.tel}`} className="phone">
                {site.company.tel}
              </a>
              <Link href="/contact" className="btn btn-primary">
                온라인 문의하기 <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

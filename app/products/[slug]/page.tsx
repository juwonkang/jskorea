import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import products from "@/content/products.json";

type Product = (typeof products.items)[number] & { features?: string[]; gallery?: string[] };

export function generateStaticParams() {
  return products.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.items.find((x) => x.slug === slug);
  return { title: p ? `${p.nameKo} | 정석코리아` : "제품 | 정석코리아" };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.items.find((x) => x.slug === slug) as Product | undefined;
  if (!p) notFound();

  const cat = products.categories.find((c) => c.key === p.category)!;
  const related = products.items.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);

  return (
    <>
      <PageHero title={cat.title} en={cat.en} image="/images/hero-2.jpg" crumb={`제품 / ${p.nameKo}`} />

      <section className="section">
        <div className="container pd">
          <div className="reveal">
            <div className="main-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.nameKo} />
            </div>
            {p.gallery && (
              <div className="gallery">
                {p.gallery.map((g) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={g} src={g} alt={`${p.nameKo} 설치 사진`} />
                ))}
              </div>
            )}
          </div>
          <div className="reveal">
            <div className="name">{p.name}</div>
            <h1>{p.nameKo}</h1>
            <p className="tagline">{p.tagline}</p>
            <ul className="checks">
              {p.summary.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="pd-actions">
              <Link href={`/contact?product=${p.slug}`} className="btn btn-primary">
                이 제품 견적 문의 <span className="arrow">→</span>
              </Link>
              <Link href="/products" className="btn btn-line">
                제품 목록
              </Link>
            </div>
          </div>
        </div>
      </section>

      {p.features && (
        <section className="section soft">
          <div className="container">
            <div className="sec-head reveal">
              <div>
                <span className="eyebrow">Feature</span>
                <h2 className="h2">제품 특징</h2>
              </div>
            </div>
            <ol className="feat-list reveal">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="sec-head reveal">
              <div>
                <span className="eyebrow">Related</span>
                <h2 className="h2">같은 분류의 제품</h2>
              </div>
            </div>
            <div className="prod-grid reveal">
              {related.map((r) => (
                <Link key={r.slug} href={`/products/${r.slug}`} className="prod-card">
                  <div className="thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.image} alt={r.nameKo} />
                  </div>
                  <div className="info">
                    <div className="name">{r.name}</div>
                    <h3>{r.nameKo}</h3>
                    <p>{r.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

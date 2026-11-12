import Link from "next/link";
import PageHero from "@/components/PageHero";
import products from "@/content/products.json";

export const metadata = { title: "제품 | 정석코리아" };

export default function ProductsPage() {
  return (
    <>
      <PageHero title="제품" en="Products" image="/images/hero-2.jpg" />
      <nav className="subnav">
        <div className="container">
          <ul>
            {products.categories.map((c) => (
              <li key={c.key}>
                <a href={`#${c.key}`}>{c.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          {products.categories.map((cat) => (
            <div key={cat.key} id={cat.key} className="cat-block reveal">
              <div className="cat-head">
                <h2>{cat.title}</h2>
                <span>{cat.en}</span>
              </div>
              <div className="prod-grid">
                {products.items
                  .filter((p) => p.category === cat.key)
                  .map((p) => (
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
          ))}
        </div>
      </section>
    </>
  );
}

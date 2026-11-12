import Link from "next/link";
import PageHero from "@/components/PageHero";
import business from "@/content/business.json";

export const metadata = { title: "사업분야 | 정석코리아" };

export default function BusinessPage() {
  return (
    <>
      <PageHero title={business.hero.title} en={business.hero.en} image={business.hero.image} />
      <nav className="subnav">
        <div className="container">
          <ul>
            {business.sections.map((s) => (
              <li key={s.key}>
                <a href={`#${s.key}`}>{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container">
        {business.sections.map((s) => (
          <section key={s.key} id={s.key} className="biz-sec">
            <div className="reveal">
              <div className="no">{s.no}</div>
              <h2>
                {s.title} · {s.en}
              </h2>
              <h3>{s.headline}</h3>
              <p>{s.body}</p>
              <div className="tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {s.link && (
                <div style={{ marginTop: 32 }}>
                  <Link href={s.link.href} className="btn btn-line">
                    {s.link.label} <span className="arrow">→</span>
                  </Link>
                </div>
              )}
            </div>
            <div className={`imgs reveal ${s.images.length === 2 ? "two" : ""}`}>
              {s.images.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt={s.title} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

import PageHero from "@/components/PageHero";
import about from "@/content/about.json";
import site from "@/content/site.json";

export const metadata = { title: "회사소개 | 정석코리아" };

export default function AboutPage() {
  const c = site.company;
  const sub = site.nav.find((n) => n.href === "/about")!.children!;
  const mapQuery = encodeURIComponent(c.address);

  return (
    <>
      <PageHero title={about.hero.title} en={about.hero.en} image={about.hero.image} />
      <nav className="subnav">
        <div className="container">
          <ul>
            {sub.map((s) => (
              <li key={s.href}>
                <a href={s.href.replace("/about", "")}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* CEO */}
      <section id="ceo" className="section">
        <div className="container ceo">
          <div className="img reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={about.ceo.image} alt="정석코리아 작업 현장" />
          </div>
          <div className="text reveal">
            <span className="eyebrow">CEO Message</span>
            <h2 className="h2" style={{ marginBottom: 40 }}>{about.ceo.headline}</h2>
            {about.ceo.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="sign">{about.ceo.sign}</div>
          </div>
        </div>
      </section>

      {/* 비전 */}
      <section id="vision" className="section soft">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Vision</span>
              <h2 className="h2">{about.vision.slogan}</h2>
              <p className="lead">
                <strong style={{ color: "var(--ink)" }}>{about.vision.sloganKo}</strong> — {about.vision.body}
              </p>
            </div>
          </div>
          <div className="values reveal">
            {about.vision.values.map((v, i) => (
              <div key={v.title}>
                <span className="n">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section id="history" className="section">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">History</span>
              <h2 className="h2">주요연혁</h2>
            </div>
          </div>
          <div className="timeline">
            <ol className="reveal">
              {about.history.map((h) => (
                <li key={h.year + h.text}>
                  <div className="y">{h.year}</div>
                  <div className="t">{h.text}</div>
                  {h.period && <div className="p">설치기간 {h.period}</div>}
                </li>
              ))}
            </ol>
            <div className="photos reveal">
              {about.historyImages.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="해외 현장" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 조직 */}
      <section id="organization" className="section soft">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Organization</span>
              <h2 className="h2">국내외 조직</h2>
            </div>
          </div>
          <div className="org reveal">
            <div className="node top">{about.organization.top}</div>
            <div className="vline" />
            <div className="mid-row">
              <span />
              <div className="node mid">{about.organization.middle}</div>
              <div className="side">
                <span className="hline" />
                <div className="node">
                  {about.organization.side.title}
                  <small>{about.organization.side.desc}</small>
                </div>
              </div>
            </div>
            <div className="vline" />
            <div className="divs">
              {about.organization.divisions.map((d) => (
                <div key={d} className="node">
                  {d}
                </div>
              ))}
            </div>
          </div>
          <div className="offices reveal">
            {about.offices.map((o) => (
              <div key={o.name} className="office">
                <div className="r">{o.region}</div>
                <h3>{o.name}</h3>
                <p>{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section id="location" className="section">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Location</span>
              <h2 className="h2">찾아오시는 길</h2>
            </div>
          </div>
          <div className="location reveal">
            <iframe
              title="정석코리아 위치"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
            />
            <dl className="info">
              <div>
                <dt>ADDRESS</dt>
                <dd>{c.address}</dd>
              </div>
              <div>
                <dt>TEL / FAX</dt>
                <dd>
                  {c.tel} / {c.fax}
                </dd>
              </div>
              <div>
                <dt>E-MAIL</dt>
                <dd>{c.email}</dd>
              </div>
              <div className="links">
                <a href={`https://map.naver.com/p/search/${mapQuery}`} target="_blank" rel="noreferrer">
                  네이버 지도
                </a>
                <a href={`https://map.kakao.com/?q=${mapQuery}`} target="_blank" rel="noreferrer">
                  카카오맵
                </a>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import site from "@/content/site.json";

export default function Footer() {
  const c = site.company;
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div>
            <div className="brand">
              <span className="star">✶</span>
              {c.nameKo}
            </div>
            <div className="brand-en">{c.nameEn}</div>
          </div>
          <div className="cols">
            {site.nav.slice(0, 3).map((item) => (
              <div key={item.href}>
                <h4>{item.label}</h4>
                <ul>
                  {item.children?.map((ch) => (
                    <li key={ch.href}>
                      <Link href={ch.href}>{ch.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4>고객센터</h4>
              <ul>
                <li>{c.tel}</li>
                <li>{c.email}</li>
                <li>{c.hours}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <span>상호 {c.nameKo}</span>
            <span>주소 {c.address}</span>
            <br />
            <span>TEL {c.tel}</span>
            <span>FAX {c.fax}</span>
            <span>E-mail {c.email}</span>
          </div>
          <div>Copyright © JUNGSEOK KOREA. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

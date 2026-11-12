"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import site from "@/content/site.json";

function Logo({ white }: { white: boolean }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const src = white ? site.company.logoWhite : site.company.logo;
  // 하이드레이션 전에 이미 로딩 실패한 경우도 텍스트 로고로 대체
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);
  if (failed) {
    return (
      <span className="text">
        <span className="star">✶</span>
        {site.company.nameKo.replace(" 주식회사", "")}
      </span>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={site.company.nameKo} onError={() => setFailed(true)} />;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = !scrolled && !open;

  return (
    <header className={`header ${transparent ? "transparent" : ""}`}>
      <div className="container inner">
        <Link href="/" className="logo" aria-label="홈">
          <Logo white={transparent} />
        </Link>

        <ul className="gnb">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              {item.children && (
                <div className="dropdown">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <a href={`tel:${site.company.tel}`} className="header-cta">
          <span className="dot" />
          {site.company.tel}
        </a>

        <button className="menu-btn" aria-label="메뉴" onClick={() => setOpen((v) => !v)}>
          <span />
        </button>
      </div>

      <nav className={`mobile-nav ${open ? "open" : ""}`}>
        <ul>
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              {item.children && (
                <div className="sub">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} onClick={() => setOpen(false)}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

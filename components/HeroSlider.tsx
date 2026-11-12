"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import home from "@/content/home.json";

export default function HeroSlider() {
  const { slides, eyebrow, title, description } = home.hero;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="hero">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`slide ${i === idx ? "active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="container content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="actions">
          <Link href="/business" className="btn btn-primary">
            사업분야 보기 <span className="arrow">→</span>
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            프로젝트 문의
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="dots">
            {slides.map((s, i) => (
              <button
                key={s}
                aria-label={`${i + 1}번 슬라이드`}
                className={i === idx ? "active" : ""}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
          <span className="scroll-hint">SCROLL ↓</span>
        </div>
      </div>
    </section>
  );
}

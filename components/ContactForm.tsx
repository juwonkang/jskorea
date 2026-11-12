"use client";

import { useState } from "react";
import products from "@/content/products.json";

// 디자인 컨펌용 UI. 실제 전송은 다음 단계에서 Google Apps Script 웹앱 URL로 연결
export default function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="row">
        <label>
          회사명
          <input name="company" placeholder="회사명을 입력해 주세요" />
        </label>
        <label>
          담당자명 *
          <input name="name" required placeholder="이름" />
        </label>
      </div>
      <div className="row">
        <label>
          연락처 *
          <input name="phone" required placeholder="010-0000-0000" />
        </label>
        <label>
          이메일
          <input name="email" type="email" placeholder="example@company.com" />
        </label>
      </div>
      <label>
        문의 제품·분야
        <select name="product" defaultValue={defaultProduct}>
          <option value="">선택해 주세요</option>
          <option value="engineering">엔지니어링 / 플랜트</option>
          {products.items.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.nameKo} ({p.name})
            </option>
          ))}
          <option value="etc">기타</option>
        </select>
      </label>
      <label>
        문의 내용 *
        <textarea name="message" required placeholder="설치 장소, 규모, 필요 청정도 등을 적어주시면 더 정확한 상담이 가능합니다." />
      </label>
      <label className="agree">
        <input type="checkbox" required /> 개인정보 수집 및 이용에 동의합니다.
      </label>
      {sent ? (
        <div className="done">문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다. (시안 화면)</div>
      ) : (
        <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
          문의 보내기
        </button>
      )}
    </form>
  );
}

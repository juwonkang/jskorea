"use client";

import { useState } from "react";
import about from "@/content/about.json";

type Row = { year: string; text: string; period?: string; type?: string };
const rows = (about.history as Row[]).filter((h) => h.year !== "1997");

const tabs = [
  { key: "all", label: "전체" },
  { key: "global", label: "해외" },
  { key: "domestic", label: "국내" },
];

export default function ResultsTable() {
  const [tab, setTab] = useState("all");
  const list = tab === "all" ? rows : rows.filter((r) => r.type === tab);

  return (
    <div className="reveal">
      <div className="filter">
        {tabs.map((t) => (
          <button key={t.key} className={tab === t.key ? "on" : ""} onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>
      <table className="results-table">
        <thead>
          <tr>
            <th>연도</th>
            <th>프로젝트</th>
            <th className="p">설치기간</th>
          </tr>
        </thead>
        <tbody>
          {list.map((r) => (
            <tr key={r.year + r.text}>
              <td className="y">{r.year}</td>
              <td>
                {r.type && (
                  <span className={`badge ${r.type}`}>{r.type === "global" ? "해외" : "국내"}</span>
                )}
                {r.text}
              </td>
              <td className="p">{r.period ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

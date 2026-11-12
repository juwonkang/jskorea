import PageHero from "@/components/PageHero";
import ResultsTable from "@/components/ResultsTable";

export const metadata = { title: "사업실적 | 정석코리아" };

export default function ResultsPage() {
  return (
    <>
      <PageHero title="사업실적" en="Results" image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Track Record</span>
              <h2 className="h2">주요 사업실적</h2>
              <p className="lead">국내외 크린룸 공사와 크린 장비 설치 실적입니다.</p>
            </div>
          </div>
          <ResultsTable />
        </div>
      </section>
    </>
  );
}

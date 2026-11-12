import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import site from "@/content/site.json";

export const metadata = { title: "문의하기 | 정석코리아" };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  const c = site.company;

  return (
    <>
      <PageHero title="문의하기" en="Contact" image="/images/hero-2.jpg" crumb="고객센터 / 문의하기" />
      <section className="section">
        <div className="container contact">
          <div className="side reveal">
            <span className="eyebrow">Customer Center</span>
            <h2 className="h2">{"궁금하신 점은\n언제든지 문의주세요"}</h2>
            <dl>
              <div>
                <dt>대표전화</dt>
                <dd>
                  <a href={`tel:${c.tel}`}>{c.tel}</a>
                </dd>
              </div>
              <div>
                <dt>팩스</dt>
                <dd>{c.fax}</dd>
              </div>
              <div>
                <dt>이메일</dt>
                <dd>
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </dd>
              </div>
              <div>
                <dt>상담시간</dt>
                <dd style={{ fontSize: 17 }}>{c.hours}</dd>
              </div>
            </dl>
          </div>
          <div className="reveal">
            <ContactForm defaultProduct={product ?? ""} />
          </div>
        </div>
      </section>
    </>
  );
}

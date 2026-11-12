export default function PageHero({
  title,
  en,
  image,
  crumb,
}: {
  title: string;
  en: string;
  image: string;
  crumb?: string;
}) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <div className="en">{en}</div>
        <h1>{title}</h1>
        <div className="crumb">Home &nbsp;/&nbsp; {crumb ?? title}</div>
      </div>
    </section>
  );
}

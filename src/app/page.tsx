const offers = [
  {
    title: "Business Clarity",
    text: "Programmes focuses on offer clarity, strategic positioning, pricing and premium client perception.",
  },
  {
    title: "Digital Structure",
    text: "Training paths around SEO, conversion architecture, landing pages and digital foundations that sell better.",
  },
  {
    title: "Founder Growth",
    text: "A premium learning environment tailored for founders, independents and modern service businesses.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Genesis Academy",
  description:
    "Premium digital training platform focused on business clarity, SEO, positioning and conversion.",
  url: "https://academy.example.com",
};

export default function HomePage() {
  return (
    <main>
      <div className="shell">
        <header className="nav">
          <div className="logo">Genesis Academy</div>
          <div className="nav-links">
            <span>Formations</span>
            <span>Programmes</span>
            <span>SEO Learning</span>
            <span>Contact</span>
          </div>
        </header>

        <section className="hero">
          <p className="eyebrow">Premium Training Platform</p>
          <h1>A dedicated site focused only on training, clarity and progression.</h1>
          <p>
            Genesis Academy is built as a separate platform so its content, SEO, structure and user
            journey can stay fully focused on premium learning experiences for entrepreneurs, founders
            and brands.
          </p>
          <div className="actions">
            <a className="button" href="mailto:hello@genesisconnectstudio.com">Contact</a>
            <a className="button" href="#tracks">View tracks</a>
          </div>
        </section>

        <section id="tracks" className="grid">
          {offers.map((offer) => (
            <article key={offer.title} className="card">
              <p className="eyebrow">Genesis Academy</p>
              <h2>{offer.title}</h2>
              <p>{offer.text}</p>
            </article>
          ))}
        </section>

        <section className="grid">
          <article className="card">
            <p className="eyebrow">SEO Focus</p>
            <h3>Built for semantic depth</h3>
            <p>
              The website is prepared to host focused landing pages, rich metadata, structured copy,
              sitemap coverage and topical authority around premium education.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Responsive</p>
            <h3>Mobile-first reading experience</h3>
            <p>
              The layout is designed to stay clean, legible and conversion-ready on mobile without the
              heavy visual layer of the flagship studio website.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Architecture</p>
            <h3>Ready for its own repository</h3>
            <p>
              This local base can now be moved to a dedicated repo and mapped to its own domain when you
              share the final GitHub URL and domain name.
            </p>
          </article>
        </section>

        <p className="footer-copy">
          Genesis Academy is intentionally separated from the flagship site to improve content focus,
          SEO precision, performance and buyer intent.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

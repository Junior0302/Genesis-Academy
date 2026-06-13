const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://academy.genesisconnectstudio.com";

const ecosystemLinks = [
  { label: "Studio", href: process.env.NEXT_PUBLIC_MAIN_SITE_URL ?? "http://localhost:3000/fr" },
  { label: "Market", href: process.env.NEXT_PUBLIC_GENESIS_MARKET_URL ?? "http://localhost:3002/" },
  { label: "Aide", href: process.env.NEXT_PUBLIC_GENESIS_AIDE_URL ?? "http://localhost:3003/" },
];

const formations = [
  {
    title: "Positionnement et clarte",
    text: "Pour aider une marque ou un independant a clarifier son offre, sa promesse et son discours premium.",
  },
  {
    title: "SEO et structure digitale",
    text: "Pour poser une base solide sur le referencement, les pages strategiques et la logique de conversion.",
  },
  {
    title: "Croissance du fondateur",
    text: "Pour transformer l'experience terrain en methode lisible, actionnable et rentable dans la duree.",
  },
];

const parcours = [
  "Selection d'un programme principal selon votre niveau et votre objectif.",
  "Acces a un parcours clair, structure et pense pour des entrepreneurs en action.",
  "Inscriptions et futurs paiements centralises sur Genesis Academy uniquement.",
];

const benefits = [
  {
    title: "Catalogue plus lisible",
    text: "Chaque formation peut vivre sur sa propre page sans brouiller la lecture du site principal.",
  },
  {
    title: "SEO formation dedie",
    text: "Les contenus peuvent cibler des requetes education, apprentissage, expertise et progression.",
  },
  {
    title: "Parcours d'achat coherent",
    text: "Le visiteur decouvre, comprend, choisit et regle sa formation dans le meme environnement.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Genesis Academy",
  description:
    "Plateforme de formation premium dediee au positionnement, au SEO, a la structure digitale et a la progression entrepreneuriale.",
  url: siteUrl,
};

export default function HomePage() {
  return (
    <main>
      <div className="shell">
        <header className="nav">
          <div className="logo">Genesis Academy</div>
          <div className="nav-links">
            <span>Formations</span>
            {ecosystemLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </header>

        <section className="hero hero-grid">
          <div className="stack">
            <p className="eyebrow">Plateforme Formation</p>
            <h1>Un site clair pour vendre, delivrer et faire evoluer les formations Genesis.</h1>
            <p>
              Genesis Academy se concentre uniquement sur les parcours de formation. Le ton reste
              premium, la typographie garde l&apos;ADN Genesis, mais l&apos;experience est plus legere, plus
              lumineuse et plus directe que le site principal.
            </p>
            <p>
              Les programmes, inscriptions et futurs paiements formation doivent vivre ici pour garder
              un tunnel d&apos;apprentissage coherent et lisible.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#formations">
                Voir les formations
              </a>
              <a className="button" href="mailto:hello@genesisconnectstudio.com">
                Demander le programme
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <p className="eyebrow">Organisation</p>
            <h2>Ce qui doit vivre sur Academy</h2>
            <ul className="list">
              <li>Pages formation et detail des modules</li>
              <li>Pages de vente et argumentaires pedagogiques</li>
              <li>Inscriptions, paiements et futurs espaces eleves</li>
            </ul>
          </aside>
        </section>

        <section id="formations" className="grid">
          {formations.map((offer) => (
            <article key={offer.title} className="card">
              <p className="eyebrow">Formation</p>
              <h2>{offer.title}</h2>
              <p>{offer.text}</p>
            </article>
          ))}
        </section>

        <section className="panel stack">
          <div>
            <p className="eyebrow">Parcours</p>
            <h2 className="section-title">Une experience de formation separee du studio.</h2>
          </div>
          <div className="list-grid">
            {parcours.map((item) => (
              <div key={item} className="list-card">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid">
          {benefits.map((item) => (
            <article key={item.title} className="card">
              <p className="eyebrow">Benefice</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <p className="footer-copy">
          Genesis Academy est pense comme un site dedie a la formation afin de garder un message clair,
          un design lumineux et un parcours commercial autonome par rapport au site principal.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

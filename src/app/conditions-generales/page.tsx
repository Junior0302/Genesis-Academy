import Link from "next/link";

const conditions = [
  {
    title: "Acces au site",
    text: "Genesis Academy est accessible pour consulter les informations relatives aux formations, parcours et contenus pedagogiques proposes par l'ecosysteme Genesis.",
  },
  {
    title: "Informations diffusees",
    text: "Les contenus sont fournis a titre informatif et peuvent etre mis a jour, completes ou modifies a tout moment selon l'evolution de l'offre.",
  },
  {
    title: "Inscription et paiement",
    text: "Les parcours d'inscription et les futurs paiements de formation ont vocation a etre centralises sur Genesis Academy. Le site principal ne gere pas ces transactions.",
  },
  {
    title: "Propriete intellectuelle",
    text: "Les supports, methodes, textes, visuels et elements de formation demeurent la propriete de Genesis Connect Studio sauf mention contraire.",
  },
  {
    title: "Responsabilite",
    text: "L'utilisateur reste responsable de l'usage qu'il fait des informations diffusees sur le site. Genesis Connect Studio ne peut etre tenu responsable d'un dommage indirect lie a l'usage du site.",
  },
];

export default function ConditionsPage() {
  return (
    <main>
      <div className="shell">
        <header className="nav">
          <div className="logo">Genesis Academy</div>
          <div className="nav-links">
            <Link href="/">Accueil</Link>
            <span>Conditions d&apos;utilisation</span>
          </div>
        </header>

        <section className="hero">
          <p className="eyebrow">Cadre d&apos;utilisation</p>
          <h1>Conditions generales d&apos;utilisation.</h1>
          <p>
            Ces conditions encadrent l&apos;acces et l&apos;utilisation du site Genesis
            Academy ainsi que la consultation des contenus lies aux formations.
          </p>
        </section>

        <section className="grid">
          {conditions.map((condition) => (
            <article key={condition.title} className="card">
              <p className="eyebrow">Condition</p>
              <h2>{condition.title}</h2>
              <p>{condition.text}</p>
            </article>
          ))}
        </section>

        <p className="footer-copy">
          En poursuivant la navigation sur Genesis Academy, l&apos;utilisateur accepte
          le cadre general d&apos;utilisation du site et le respect des droits de
          propriete intellectuelle de l&apos;editeur.
        </p>
        <div className="footer-links">
          <Link href="/">Retour a l&apos;accueil</Link>
          <Link href="/mentions-legales">Mentions legales</Link>
        </div>
      </div>
    </main>
  );
}

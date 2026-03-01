import Image from "next/image";

/* =========================
   DATA
========================= */

const partenairesOperationnels = [
  { name: "Partenaire 1", logo: "/assets/partenaires/p1.jpeg" },
  { name: "Partenaire 2", logo: "/assets/partenaires/p2.avif" },
  { name: "Partenaire 5", logo: "/assets/partenaires/p5.avif" },
];

const publics = [
  {
    title: "Mineurs Non Accompagnés (MNA)",
    description:
      "Accompagnement linguistique et socio-éducatif en lien avec les structures de protection de l’enfance.",
  },
  {
    title: "Personnes migrantes et réfugiées",
    description:
      "Apprentissage du français et accompagnement vers l’autonomie sociale.",
  },
  {
    title: "Adultes en situation d’illettrisme",
    description:
      "Parcours d’alphabétisation adaptés aux besoins des apprenants.",
  },
  {
    title: "Publics en insertion professionnelle",
    description:
      "Ateliers socio-professionnels et accompagnement vers l’emploi.",
  },
];

const structures = [
  {
    title: "Structures MNA",
    items: ["St Elme", "PJJ", "ADSEAAV"],
  },
  {
    title: "Immigration",
    items: [
      "CADA",
      "OFII",
      "SPADA COSI",
      "CIMADE",
      "Welcome",
      "Sud Formation",
      "HUDA ADOMA",
    ],
  },
  {
    title: "Insertion professionnelle",
    items: [
      "France Travail",
      "GRETA",
      "ESAT",
      "LADAPT",
      "ASPI",
      "SIAO",
      "ADAPEI",
    ],
  },
  {
    title: "Département du Var",
    items: [
      "CCAS",
      "Conseil Départemental",
      "Mission Locale",
      "Croix-Rouge",
      "Ariane Méditerranée",
      "UDAF",
      "CHRS",
      "FACE",
      "UTS",
      "CEDIS",
      "Maison des frères",
      "Conseil général",
    ],
  },
  {
    title: "Ville de Toulon",
    items: [
      "Mairie",
      "Toulon Habitat",
      "Femmes dans la cité",
      "Mouvement du Nid",
      "Café culture",
      "Évêché",
      "FACE",
      "Support scolaire",
      "Conseil santé",
    ],
  },
];

/* =========================
   PAGE
========================= */

export default function PartenairesPage() {
  return (
    <main className="min-h-screen bg-base-100">

      {/* HERO : LÉGITIMITÉ */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto space-y-6">
          <div className="mb-6">

    <h2 className="text-4xl font-bold text-center mb-8 px-6 py-4 rounded-xl bg-primary/10 text-primary shadow-sm">
          Une action locale portée par un réseau solidaire
        </h2>
  </div>
        

        <p className="text-lg text-base-content/70">
          Le CAAA agit au sein du groupement d’économie sociale et solidaire
        </p>

        <a
          href="https://www.udv-asso.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <Image
            src="/logos/udv-4.png"
            alt="Logo Union Diaconale du Var"
            width={1000}
            height={800}
            className="h-50 w-auto hover:opacity-80 transition"
          />
        </a>
      </section>

      {/* PUBLICS */}
      <section className="px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos publics accompagnés
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {publics.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-base-200 shadow-md hover:shadow-xl transition p-6 bg-base-100"
              >
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-base-content/70">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURES */}
      <section className="px-6   ">
        <div className="max-w-5xl mx-auto bg-base-200 rounded-2xl p-10">
          
          <h2 className="text-3xl font-bold text-center mb-12">
            Réseau de partenaires
          </h2>

          <div className="space-y-10">
            {structures.map((s) => (
              <div key={s.title} className="border-l-4 border-warning pl-6">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-base-content/70">
                  {s.items.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES OPÉRATIONNELS */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partenaires associatifs & opérationnels
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3  gap-10 place-items-center">
            {partenairesOperationnels.map((p) => (
              <Image
                key={p.name}
                src={p.logo}
                alt={p.name}
                width={140}
                height={140}
                className="object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
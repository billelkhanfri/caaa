import Image from "next/image";

/* =========================
   DATA
========================= */

const partenairesFinanciers = [
  { name: "Préfecture du Var", logo: "/assets/partenaires/prefecture.png" },
  { name: "Ville de Toulon", logo: "/assets/partenaires/toulon.png" },
  { name: "Conseil Départemental", logo: "/assets/partenaires/departement.png" },
];

const partenairesOperationnels = [
  { name: "Partenaire 1", logo: "/assets/partenaires/p1.jpeg" },
  { name: "Partenaire 2", logo: "/assets/partenaires/p2.avif" },
  { name: "Partenaire 3", logo: "/assets/partenaires/p3.avif" },
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
    items: ["CADA", "OFII", "SPADA COSI", "CIMADE", "Welcome","Sud Formation", "HUDA ADOMA"],
  },
  {
    title: "Insertion professionnelle",
    items: ["France Travail", "GRETA", "ESAT", "LADAPT", "ASPI","SIAO", "ADAPEI"],
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
"Conseil général"
]
    
  },
    {
    title: "Ville  de Toulon",
    items: [
      "mairie",
      "Toulon Habitat",
      "Femmes dans la cité",
      "Mouvement du Nid",
      "Café culture",
      "UDV ",
    "Évêché",
  "FACE",
  "+ support scolaire",
  "+ conseil santé"
    
]
    },
];


/* =========================
   COMPONENTS
========================= */

function LogoCard({ logo, name }) {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="card-body flex items-center justify-center p-8">
        <Image
          src={logo}
          alt={name}
          width={120}
          height={120}
          className="object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
        />
      </div>
    </div>
  );
}

/* =========================
   PAGE
========================= */

export default function PartenairesPage() {
  return (
    <main className="min-h-screen bg-base-100">

      {/* HERO */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 px-6 py-4 rounded-2xl bg-primary/10 text-primary shadow-sm">
          Publics & partenaires
        </h1>
        <p className="text-lg text-base-content/70">
          Le CAAA agit en réseau avec des acteurs institutionnels, sociaux et
          associatifs pour accompagner durablement les publics accueillis.
        </p>
      </section>

      {/* PUBLICS */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-10 text-center">
            Publics accompagnés
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publics.map((p) => (
              <div
                key={p.title}
                className="card  rounded-lg bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition"
              >
                <div className="card-body">
                  <h3 className="card-title text-primary text-lg">
                    {p.title}
                  </h3>
                  <p className="text-sm text-base-content/70">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURES */}
      <section className="px-6 py-16 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-10 text-center">
            Structures partenaires
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {structures.map((s) => (
              <div
                key={s.title}
                className="card  text-warning bg-secondary backdrop-blur border border-base-300 shadow-sm rounded-lg"
              >
                <div className="card-body">
                  <h3 className="card-title text-white text-lg">
                    {s.title}
                  </h3>
                  <ul className="text-sm text-white list-disc list-inside space-y-1">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* PARTENAIRES OPÉRATIONNELS */}
      <section className="px-6 py-16 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-10 text-center">
            Partenaires associatifs & opérationnels
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {partenairesOperationnels.map((p) => (
              <LogoCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

"use client";

import Image from "next/image";

/* =========================
   DATA
========================= */

const actionsPrincipales = [
  {
    title: "Adultes",
    description:
      "Insertion linguistique, sociale et culturelle à travers les cours de français et les ateliers.",
    image: "/assets/formation.webp",
  },
  {
    title: "Enfants & jeunes",
    description:
      "Accompagnement à la scolarité et soutien éducatif en lien avec les structures partenaires.",
    image: "/assets/enfants.webp",
  },
  {
    title: "Vie associative",
    description:
      "Sorties culturelles, ateliers créatifs et événements favorisant l’ouverture culturelle.",
    image: "/assets/chance.webp",
  },
];

const chiffresCles = [
  { label: "Cours / semaine", value: "49" },
  { label: "Heures / semaine", value: "88 h" },
  { label: "Salariés", value: "2" },
  { label: "Bénévoles", value: "39" },
  { label: "Budget 2024", value: "105 000 €" },
  { label: "Subventions", value: "80 500 €" },
];

const niveauxFLE = [
  "A1.1 – Débutant",
  "A1 – Débutant",
  "A2 – Élémentaire",
  "B1 – Intermédiaire",
  "B2 – Avancé",
  "C1 – Perfectionnement",
];
  "jusqu'à 3 cours de français de 2 heures par semaine + ateliers socio-culturels en complément "


const ateliers = [
  "Atelier socio-professionnel (recherche d’emploi)",
  "Initiation au code de la route",
  "Anglais professionnel (niveaux débutant et avancé)",

  "Atelier Scrabble",
  "atelier d'écriture ",
  "Ateliers théâtre (A1-A2 et B1-B2-C1)",
];

const sorties = [
  "Théâtre (répétitions et spectacles)",
  "Cinéma",
  "Expositions et musées",
  "Lycée hôtelier (dégustation)",
  "Villages typiques et dégustations",
  "Ateliers créatifs",
  "Fête de la culture francophone",
];

/* =========================
   PAGE
========================= */

export default function NosActionsPage() {
  return (
    <main className="bg-base-100">
{/* HERO */}
<section className="py-16 px-6 text-center max-w-5xl mx-auto">
  {/* Badge */}
  <div className="mb-6">

    <h2 className="text-4xl font-bold text-center mb-8 px-6 py-4 rounded-xl bg-primary/10 text-primary shadow-sm">
          Nos engagements
        </h2>
  </div>



  {/* Texte principal */}
  <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
    Le CAAA agit pour l’insertion linguistique, sociale et culturelle des publics
    qu’il accompagne.
  </p>

  {/* Info complémentaire */}
  <div className="mt-8 flex flex-wrap justify-center gap-3">
    <span className="badge badge-secondary badge-lg">
      Jusqu’à 3 cours / semaine
    </span>
    <span className="badge badge-secondary badge-lg">
      Sessions de 2h
    </span>
    <span className="badge badge-secondary badge-lg">
      Ateliers socio-culturels
    </span>
  </div>
</section>



      {/* ACTIONS VISUELLES */}
      <section className="px-6 py-16 bg-base-200">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {actionsPrincipales.map((action) => (
            <div
              key={action.title}
              className="group card overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <figure className="relative h-72">
                <Image
                  src={action.image}
                  alt={action.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
              </figure>

           <div className="card-body absolute inset-x-0 bottom-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent">
  <h2 className="text-2xl font-bold mb-2">
    {action.title}
  </h2>
  <p className="text-sm opacity-90">
    {action.description}
  </p>
</div>

            </div>
          ))}
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      {/* <section className="px-6 py-16 bg-base-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {chiffresCles.map((item) => (
            <div
              key={item.label}
              className="card bg-base-100 border border-base-200 shadow-sm text-center"
            >
              <div className="card-body p-4">
                <p className="text-2xl font-bold text-primary">
                  {item.value}
                </p>
                <p className="text-sm text-base-content/70">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* COURS DE FRANÇAIS */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
 <h2 className=" badge badge-outline badge-xl  badge-primary p-4 ">
            Cours de français & alphabétisation
          </h2>

          </div>
         
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {niveauxFLE.map((niveau) => (
              <div
                key={niveau}
                className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition"
              >
                <div className="card-body">
                  <h3 className="font-semibold text-primary">
                    {niveau}
                  </h3>
                  <p className="text-sm text-base-content/70">
                    Atelier FLE adapté au niveau des apprenants.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="card bg-base-200/70 backdrop-blur border border-base-300">
              <div className="card-body">
                <h3 className="font-semibold text-primary">Alpha écriture</h3>
                <p className="text-sm text-base-content/70">
                  3 ateliers de 2h par semaine pour personnes non ou peu scolarisées.
                </p>
              </div>
            </div>

            <div className="card bg-base-200/70 backdrop-blur border border-base-300">
              <div className="card-body">
                <h3 className="font-semibold text-primary">ECLER</h3>
                <p className="text-sm text-base-content/70">
                  Alphabétisation avancée – 2 ateliers de 2h par semaine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATELIERS */}
      <section className="px-6 py-16 bg-base-200">
        <div className="max-w-6xl mx-auto">
        
           <div className="flex justify-center mb-6">
    <h2 className="badge badge-primary badge-outline badge-xl p-4 ">
            Ateliers complémentaires
    </h2>
  </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ateliers.map((atelier) => (
              <div
                key={atelier}
                className="card bg-base-100 border border-base-200 shadow-sm"
              >
                <div className="card-body">
                  <p className="font-medium">{atelier}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SORTIES */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
       
                  
           <div className="flex justify-center mb-6">
    <h2 className="badge badge-primary badge-outline badge-xl p-4 ">
            Sorties culturelles & événements
    </h2>
  </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorties.map((sortie) => (
              <div
                key={sortie}
                className="card bg-base-100 border border-base-200 shadow-sm"
              >
                <div className="card-body">
                  <p className="text-base-content/80">{sortie}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

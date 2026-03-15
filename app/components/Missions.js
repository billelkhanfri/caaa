import React from "react";
import Image from "next/image";

const missions = [
  {
    title: "Former au français langue étrangère (FLE) et faciliter l’intégration",
    text: "La maîtrise du FLE est indispensable pour l’intégration et notamment pour l’insertion professionnelle.",
    img: "/assets/entraides.jpg",
    newLabel: "",
  },

  {
    title: "Formation & Culture",
    text: "Favoriser la formation et le développement culturel des apprenants grâce à l’organisation de visites culturelles dans l’agglomération de Toulon (musées, etc.) ainsi que d’ateliers culturels variés (théâtre, etc.). Un soutien scolaire destiné aux jeunes est également mis en place.",
    img: "/assets/formation.jpg",
    newLabel: "",
  },
    {
    title: "Lien social",
    text: "Contribuer au renforcement du lien social et de la citoyenneté.",
    img: "/assets/lien.jpg",
    newLabel: "",
  },
  // {
  //   title: "Accompagnement",
  //   text: "Accompagner les familles dans leurs projets de vie.",
  //   img: "/assets/accompagnement.jpg",
  //   newLabel: "",
  // },
];

function MissionCard({ title, text, img, newLabel }) {
  return (
    <div className="card rounded-xl bg-base-100 w-full  shadow-sm h-full flex flex-col">
      <figure className="h-48 overflow-hidden">
        <Image
          src={img}
          className="w-full h-full object-cover"
          alt={title}
          width={400}
          height={200}
        />
      </figure>

      <div className="card-body flex flex-col flex-grow">
        <h2 className="card-title">{title}</h2>

        {/* {newLabel && <div className="badge badge-secondary">nouveau</div>} */}

    
                      <p className="text-md text-base-content/70 mb-4">{text}</p>

      </div>
    </div>
  );
}


export default function Missions() {
  return (
    <section className="py-16  px-6 bg-base-200">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">

     Nos Missions</h2>

      {/* ⭐ Responsive container */}
      <div className=" mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {missions.map((m) => (
            <MissionCard key={m.title} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

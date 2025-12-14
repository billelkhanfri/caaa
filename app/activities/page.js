// app/activites/page.js
import React from "react";
import Image from "next/image";

export default function Activites() {
  return (
    <div className="container mx-auto px-4 py-12">
   
      <h1 className="text-4xl font-bold text-center mb-8 px-6 py-4 rounded-xl bg-primary/10 text-primary shadow-sm">
         Nos Activités
         </h1>
      {/* Section Adultes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-primary">
          Pour les adultes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-xl overflow-hidden">
            <Image
              src="/assets/projet.avif"
              alt="Cours de FLE"
              width={600}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Cours de FLE et alphabétisation
              </h3>
              <p className="mb-4">
                Le projet consiste à proposer des cours d'alphabétisation ou de
                Français Langue Étrangère. Chaque adhérent bénéficie au minimum
                de 2 heures de cours 2 fois par semaine (4 heures au total).
              </p>
              <p className="font-semibold">Horaires :</p>
              <ul className="list-disc list-inside">
                <li>Lundi, mardi, mercredi et vendredi : 9h à 11h</li>
                <li>Lundi, mardi, jeudi et vendredi : 14h à 16h</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl overflow-hidden">
            <Image
              src="/assets/atelier.avif"
              alt="Ateliers"
              width={600}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Ateliers sociaux, culturels et numériques
              </h3>
              <p className="mb-4">
                Des ateliers pour faciliter l'intégration sociale et
                professionnelle, approfondir certains points, et aborder la
                langue autrement.
              </p>
              <p className="font-semibold">Exemples :</p>
              <ul className="list-disc list-inside">
                <li>
                  Ateliers numériques (recherche d'emploi, code de la route,
                  bibliothèque, etc.)
                </li>
                <li>Sorties culturelles et récréatives autour de Toulon</li>
                <li>Ateliers de création animés par des artistes locaux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Enfants */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">
          Pour les enfants
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-xl overflow-hidden">
            <Image
              src="/assets/activitéesEnfants.avif"
              alt="Accompagnement à la scolarité"
              width={600}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Accompagnement à la scolarité
              </h3>
              <p className="mb-4">
                Séances destinées aux enfants de primaire, collège et lycée.
              </p>
              <p className="font-semibold">Horaires :</p>
              <ul className="list-disc list-inside">
                <li>
                  Élèves de primaire : mercredi 14h-15h15, samedi 9h30-10h45
                </li>
                <li>
                  Élèves de collège : mercredi 14h-15h15, samedi 9h30-10h45
                </li>
                <li>Élèves de lycée : mercredi 14h-17h</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Image from "next/image.js";


function History() {
  return (
    <section className="py-16 px-6 lg:px-32 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Notre Histoire</h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Texte à gauche */}
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <p className="text-lg  font-light leading-relaxed relative pl-10 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-accent before:rounded-full">
                Le CAAA-Coeur de Ville-UDV, association loi 1901, a été créé en
                juillet 1972 par des Sœurs Blanches pour soutenir les femmes du
                centre-ville de Toulon.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <p className="text-lg  font-light leading-relaxed  relative pl-10 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-accent before:rounded-full">
                Pour répondre aux besoins d’un public en évolution, nos missions
                se sont orientées vers le soutien scolaire et le français langue
                étrangère, tout en valorisant les arts et la culture.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <p className=" text-lg  font-light leading-relaxed  relative pl-10 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-accent before:rounded-full">
                Aujourd’hui, nous continuons à accompagner les familles et à
                favoriser l’intégration culturelle et sociale de tous.
              </p>
            </div>
          </div>
        </div>

        {/* Image à droite */}
        <div className="lg:w-1/2  h-full flex justify-center lg:justify-end">
          <div className="relative card w-full max-w-md bg-base-200 shadow-xl hover:scale-105 transition-transform duration-300">
            <figure className="overflow-hidden rounded-lg">
              <Image
                src="/assets/histoire.webp"
                alt="Histoire CAAA"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;

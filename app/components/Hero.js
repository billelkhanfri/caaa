import React from "react";
import ScrollButton from "./ScrollButton.js";
import Image from "next/image.js";

function Hero() {
  return (
    <>
      {/* Hero principal */}
      <div className="relative min-h-[50vh] bg-gradient-to-b from-primary/90 to-primary/60 text-white overflow-hidden">
        {/* Overlay pour améliorer la lecture */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="hero-content text-center relative z-10 px-6">
          <div className="hero-content flex-col lg:flex-row items-center">
            <Image
              src="/assets/IMG_5773_HEIC.avif"
              className="max-w-sm  w-full max-w-full rounded-lg shadow-2xl mb-6 lg:mb-0"
              alt="Photo CAAA"
              width={600}
              height={600}
            />
            <div className="text-center lg:text-left lg:ml-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100 ">
                Bienvenue au CAAA – Cœur de Ville UDV
              </h1>
           

              <div className="flex justify-center lg:justify-start">
                <p className="text-left text-xl font-light mb-6 text-gray-200 max-w-xl leading-relaxed">
                  Le CAAA-Coeur de Ville-UDV est une association de bénévoles,
                  active depuis 49 ans dans le centre-ville de Toulon. Notre
                  mission : l’alphabétisation, l’apprentissage du Français
                  Langue Étrangère et l’accompagnement à la scolarité des
                  enfants du Centre Ancien. Découvrez notre action et
                  rejoignez-nous pour soutenir nos projets.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <ScrollButton targetId="video-section">
                  Découvrir notre action
                </ScrollButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

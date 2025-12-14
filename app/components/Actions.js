import React from "react";
import Image from "next/image";

function Actions() {
  const actions = [
    {
      title: "Pour les adultes",
      text: "Insertion principalement linguistique, culturelle et numérique.",
      bg: "bg-primary",
      image: "/assets/adulte.webp",
    },
    {
      image: "/assets/chance.webp",
    },
    {
      title: "Pour les enfants",
      text: "Accompagnement à la scolarité et activités éducatives.",
      bg: "bg-accent",
      image: "/assets/enfants.webp",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-32 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-16">Nos Actions</h2>

      <div
        className="grid gap-12 max-w-6xl mx-auto 
                md:grid-cols-[4fr_auto_4fr] items-center"
      >
        {actions.map((action, index) => {
          /* 👉 CAS IMAGE SIMPLE */
          if (index === 1) {
            return (
              <div
                key={index}
                className="w-full max-w-sm md:max-w-md mx-auto flex items-center justify-center"
              >
                <Image
                  src={action.image}
                  alt="Illustration"
                  width={120}
                  height={100}
                  className="rounded-3xl object-contain"
                />
              </div>
            );
          }

          /* 👉 CAS FLIP CARD */
          return (
            <div
              key={index}
              className="perspective w-full max-w-sm md:max-w-md mx-auto aspect-[4/3]"
            >
              <div className="relative h-full transition-transform duration-700 preserve-3d hover:rotate-y-180">
                {/* FACE AVANT */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="card image-full h-full rounded-3xl shadow-sm">
                    <figure className="relative h-full">
                      <Image
                        src={action.image}
                        alt={action.title}
                        fill
                        className="object-cover"
                      />
                    </figure>
                    <div className="card-body flex items-center justify-center text-center">
                      <h2 className="text-2xl md:text-4xl font-bold">
                        {action.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* FACE ARRIÈRE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div
                    className={`card ${action.bg} h-full rounded-3xl text-primary-content shadow-sm flex items-center justify-center p-6`}
                  >
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold">{action.title}</h3>
                      <p>{action.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Actions;

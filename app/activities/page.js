

import ScheduleTable from "../components/ScheduleTable";
export default function Activites() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">

    {/* HERO */}
<div className="text-center mb-16">
 

<h2 className="text-4xl font-bold text-center mb-8 px-6 py-4 rounded-xl bg-primary/10 text-primary shadow-sm">
         Horaires et cours
        </h2>

  <p className="text-base-content/70 max-w-3xl mx-auto">
    Informations sur les horaires d’ouverture, les cours de français
    et l’accompagnement scolaire proposés par l’association.
  </p>
</div>

      {/* ADULTES */}
      <section className="mb-20">
      <div className="text-center ">
  <span className="badge badge-primary badge-outline mb-4 badge-xl p-4">
   Adultes
  </span>
  </div>

        <div className="card bg-base-100 shadow-lg border border-base-200">
          <div className="card-body">
            <h3 className="card-title text-xl">
              Cours de FLE et alphabétisation
            </h3>

            <p className="text-base-content/70">
              Cours de Français Langue Étrangère et d’alphabétisation.
              Minimum 4 heures de cours par semaine.
            </p>

            <ScheduleTable
              rows={[
                { day: "Lundi", morning: "09h – 11h", afternoon: "14h – 16h" },
                { day: "Mardi", morning: "09h – 11h", afternoon: "14h – 16h" },
                { day: "Mercredi", morning: "09h – 11h" },
                { day: "Jeudi", afternoon: "14h – 16h" },
                { day: "Vendredi", morning: "09h – 11h", afternoon: "14h – 16h" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ENFANTS */}
      <section>
      
             <div className="text-center ">
  <span className="badge badge-primary badge-outline mb-4 badge-xl p-4">
     Enfants et jeunes
  </span>
  </div>

        <div className="card bg-base-100 shadow-lg border border-base-200">
          <div className="card-body">
            <h3 className="card-title text-xl">
              Accompagnement à la scolarité
            </h3>

            <p className="text-base-content/70">
              Soutien scolaire pour les élèves du primaire, collège et lycée.
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="table table-zebra w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Niveau</th>
                    <th>Jour</th>
                    <th>Horaires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Primaire</td>
                    <td>Mercredi / Samedi</td>
                    <td>14h – 15h15 / 09h30 – 10h45</td>
                  </tr>
                  <tr>
                    <td>Collège</td>
                    <td>Mercredi / Samedi</td>
                    <td>14h – 15h15 / 09h30 – 10h45</td>
                  </tr>
                  <tr>
                    <td>Lycée</td>
                    <td>Mercredi</td>
                    <td>14h – 17h</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default function OrganisationSection() {
  return (
    <section  className="bg-base-200 py-16 px-6">
      <div className="container mx-auto ">

        {/* Titre */}
        <div className="text-center max-w-2xl mx-auto mb-12">
        
           <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Notre organisation
      </h2>
          <p className="text-base-content/70">
            Une structure claire et transparente au service de nos actions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Locaux */}
          <div className="card bg-base-100 shadow-md rounded-lg">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="card-title justify-center">
                Nos locaux
              </h3>
              <p className="text-md text-base-content/70">
                Des locaux loués situés en centre-ville, accessibles au public.
              </p>
            </div>
          </div>

          {/* Équipe */}
          <div className="card bg-base-100 shadow-md rounded-lg">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="card-title justify-center">
                Notre équipe
              </h3>
              <p className="text-md text-base-content/70">
                Deux salariés, dont une personne disposant de toutes les
                qualifications FLE.
              </p>
            </div>
          </div>

          {/* Financement */}
          <div className="card bg-base-100 shadow-md rounded-lg">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="card-title justify-center">
                Financement
              </h3>
              <p className="text-md text-base-content/70">
                Notre budget repose principalement sur des subventions publiques
                (État, Ville de Toulon, Département).
              </p>
            </div>
          </div>

          {/* Dons */}
          <div className="card bg-base-100 shadow-md border border-primary/20 rounded-lg">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="card-title justify-center">
                Soutenir nos actions
              </h3>
              <p className="text-md text-base-content/70 mb-4">
                Depuis 2025, nous faisons appel à la générosité du public.
                Les dons ouvrent droit à des avantages fiscaux.
              </p>
              <a
                href="https://www.helloasso.com/associations/union-diaconale-du-var/formulaires/6?_ga=2.232942622.184921141.1614845505-700122102.1614674721"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Je donne
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

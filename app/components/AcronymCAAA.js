export default function AcronymCAAA() {
  return (
    <div className="w-full bg-blue-50/70 border-b border-blue-100">

      <div className="max-w-7xl mx-auto px-4 py-2">

        <div className="flex flex-wrap justify-center items-center text-slate-700 text-sm md:text-base font-medium tracking-wide">

          {/* Comité */}
          <div className="flex items-center px-2">
            <span className="text-primary text-3xl md:text-4xl font-black mr-1">
              C
            </span>
            <span className="mt-1">Comité</span>
          </div>

          <span className="text-yellow-400 mx-2 hidden md:inline">|</span>

          {/* Accueil */}
          <div className="flex items-center px-2">
            <span className="text-warning text-3xl md:text-4xl font-black mr-1">
              A
            </span>
            <span className="mt-1">Accueil</span>
          </div>

          <span className="text-yellow-400 mx-2 hidden md:inline">|</span>

          {/* Alphabétisation */}
          <div className="flex items-center px-2">
            <span className="text-warning text-3xl md:text-4xl font-black mr-1">
              A
            </span>
            <span className="mt-1">Alphabétisation</span>
          </div>

          <span className="text-yellow-400 mx-2 hidden md:inline">|</span>

          {/* Animation */}
          <div className="flex items-center px-2">
            <span className="text-warning text-3xl md:text-4xl font-black mr-1">
              A
            </span>
            <span className="mt-1">Animation</span>
          </div>

        </div>

      </div>

    </div>
  );
}
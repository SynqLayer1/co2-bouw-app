import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500 selection:text-white">
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            BouwSubsidie AI
          </span>
        </div>
        <span className="text-xs px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 font-mono">
          SynqLab v1.0 • Productieklaar
        </span>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Geautomatiseerde CO2-subsidie en klimaatprestatie berekening voor MKB-bouwbedrijven.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Speciaal ontwikkeld voor ondernemers in de Benelux. Geen ingewikkelde spreadsheets meer, maar direct resultaat en volledige controle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition shadow-lg shadow-indigo-600/20">
            Direct Gratis Starten
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl transition border border-slate-700">
            Bekijk Documentatie
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-950/40 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition">
          <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 font-bold mb-4 font-mono">01</div>
          <h3 className="font-semibold text-lg mb-2">Project Invoer & CO2 Baseline</h3>
          <p className="text-slate-400 text-sm">Volledig geautomatiseerd en gekoppeld aan onze veilige zelf-gehoste PocketBase backend.</p>
        </div>
        <div className="p-6 bg-slate-950/40 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition">
          <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 font-bold mb-4 font-mono">02</div>
          <h3 className="font-semibold text-lg mb-2">Subsidie Calculator (€/ton reductie)</h3>
          <p className="text-slate-400 text-sm">Volledig geautomatiseerd en gekoppeld aan onze veilige zelf-gehoste PocketBase backend.</p>
        </div>
        <div className="p-6 bg-slate-950/40 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition">
          <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 font-bold mb-4 font-mono">03</div>
          <h3 className="font-semibold text-lg mb-2">Directe Overheidsaanvraag PDF Export</h3>
          <p className="text-slate-400 text-sm">Volledig geautomatiseerd en gekoppeld aan onze veilige zelf-gehoste PocketBase backend.</p>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm mt-20">
        <p>© 2026 BouwSubsidie AI • Onderdeel van het SynqLayer Ecosysteem.</p>
      </footer>
    </main>
  );
}

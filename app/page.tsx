export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-indigo-600/30 text-lg">
            S
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-white">BouwSubsidie AI</h1>
            <p className="text-xs text-slate-400">Geautomatiseerde CO2-subsidie & klimaatprestatie</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Bouw & Infra • Live
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 w-full flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-white tracking-tight">Direct Subsidie Berekenen</h2>
              <p className="text-slate-400 text-sm">Vul uw projectgegevens in en bereken direct de verwachte CO2-subsidie.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Gemiddelde Subsidie</p>
                <p className="text-4xl font-black text-emerald-400">€ 34.500</p>
                <p className="text-xs text-slate-500 mt-1">Geverifieerd volgens 2026 normen</p>
              </div>
              <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Actieve Dossiers</p>
                <p className="text-4xl font-black text-indigo-400">12</p>
                <p className="text-xs text-slate-500 mt-1">Real-time gesynchroniseerd</p>
              </div>
            </div>

            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 space-y-4">
              <h3 className="font-bold text-white text-sm">Snelle Dossier Start</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Naam bouwproject / aannemer..."
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-indigo-600/30">
                  Berekenen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4">
            <h3 className="font-bold text-white text-sm">Systeem Status</h3>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 space-y-2">
              <p>STATUS: ONLINE (100%)</p>
              <p>BACKEND: PocketBase v0.22.20</p>
              <p>HOST IP: 100.88.156.58:8095</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

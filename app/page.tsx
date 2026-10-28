export default function SubsidieApp() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="font-black text-lg tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            BouwSubsidie AI • Enterprise Suite
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12 w-full flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4">
            <h1 className="text-3xl font-black tracking-tight">RVO Subsidie Portaal</h1>
            <p className="text-slate-400 text-sm">Beheer al uw subsidiedossiers en bereken direct de maximale CO2-subsidie.</p>
            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Status Database</p>
              <p className="text-2xl font-bold text-emerald-400">Verbonden met PocketBase (100.88.156.58:8095)</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4">
            <h2 className="text-xl font-black text-white">Nieuw Dossier</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Projectnaam..." className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white" />
              <input type="number" placeholder="Bedrag (€)..." className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white" />
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-indigo-600/30">
                Opslaan
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

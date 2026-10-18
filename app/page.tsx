"use client";

import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overzicht");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAction = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md shadow-indigo-600/30">
            S
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            SynqLab Enterprise Dashboard
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            PocketBase DB: Online
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-semibold">
            SL
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-800 bg-slate-950/60 p-4 hidden md:flex flex-col justify-between">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("overzicht")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === "overzicht" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              }`}
            >
              📊 Live Overzicht
            </button>
            <button
              onClick={() => setActiveTab("data")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === "data" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              }`}
            >
              ⚙️ Actieve Module & Data
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === "settings" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              }`}
            >
              🔌 API & Backend Koppeling
            </button>
          </nav>
          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-slate-400">
            <p className="font-semibold text-slate-300 mb-1">SynqLayer Zandbak</p>
            <p>Productie-omgeving v1.0 geladen.</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto max-w-6xl mx-auto">
          {activeTab === "overzicht" && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h1 className="text-2xl font-bold tracking-tight mb-2">Welkom terug, Beheerder</h1>
                <p className="text-slate-400 text-sm">Hier is het real-time overzicht van je actieve SaaS module.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl shadow-sm">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Totale Omzet / Waarde</p>
                  <p className="text-3xl font-extrabold text-white">€ 24.850</p>
                  <span className="text-xs text-emerald-400 mt-2 inline-block">+12.4% deze maand</span>
                </div>
                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl shadow-sm">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Actieve Dossiers</p>
                  <p className="text-3xl font-extrabold text-white">142</p>
                  <span className="text-xs text-emerald-400 mt-2 inline-block">8 nieuwe vandaag</span>
                </div>
                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl shadow-sm">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Systeem Status</p>
                  <p className="text-3xl font-extrabold text-emerald-400">99.9%</p>
                  <span className="text-xs text-slate-400 mt-2 inline-block">Geen storingen</span>
                </div>
              </div>

              {/* Interactive Form / Action Section */}
              <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
                <h2 className="text-lg font-semibold mb-4">Nieuw Record Toevoegen / Berekenen</h2>
                {success && (
                  <div className="mb-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl">
                    Succesvol opgeslagen in de database!
                  </div>
                )}
                <form onSubmit={handleAction} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Project / Klant Naam</label>
                      <input
                        required
                        type="text"
                        placeholder="Bijv. Jansen Installatie BV"
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Categorie / Waarde</label>
                      <input
                        required
                        type="number"
                        placeholder="1500"
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition shadow-lg shadow-indigo-600/20 disabled:opacity-50"
                  >
                    {loading ? "Bezig met verwerken..." : "Gegevens Opslaan & Verwerken"}
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === "data" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Actieve Module Data & Tabellen</h2>
              <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-4">ID / Referentie</th>
                      <th className="p-4">Klant / Entiteit</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Laatste Update</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    <tr>
                      <td className="p-4 font-mono text-xs text-indigo-400">#SL-8921</td>
                      <td className="p-4 font-medium">Bouwbedrijf de Vries BV</td>
                      <td className="p-4"><span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">Voltooid</span></td>
                      <td className="p-4 text-slate-400 text-xs">Vandaag, 08:42</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-xs text-indigo-400">#SL-8922</td>
                      <td className="p-4 font-medium">Transport Service Midden NL</td>
                      <td className="p-4"><span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs">In behandeling</span></td>
                      <td className="p-4 text-slate-400 text-xs">Gisteren, 16:15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Backend & API Configuratie</h2>
              <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                <p className="text-slate-400 text-sm">
                  Deze toepassing communiceert rechtstreeks met onze zelf-gehoste PocketBase backend op de Ubuntu-server.
                </p>
                <div className="p-4 bg-slate-900 rounded-xl font-mono text-xs text-indigo-300 border border-slate-800">
                  PUBLIC_POCKETBASE_URL=http://100.88.156.58:8095
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

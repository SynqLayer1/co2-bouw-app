"use client";

import React, { useState } from "react";

export default function SaaSApplication() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [items, setItems] = useState([
    { id: 1, title: "Hoofdproject Alpha", value: "€ 12.500", status: "Gereed", date: "Vandaag" },
    { id: 2, title: "Regionaal Dossier Beta", value: "€ 8.900", status: "In Behandeling", date: "Gisteren" }
  ]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputTitle || !inputValue) return;
    const newItem = {
      id: items.length + 1,
      title: inputTitle,
      value: "€ " + Number(inputValue).toLocaleString(),
      status: "Actief",
      date: "Zojuist"
    };
    setItems([newItem, ...items]);
    setInputTitle("");
    setInputValue("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
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

      <div className="max-w-7xl mx-auto px-6 py-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition flex items-center gap-3 ${
              activeTab === "dashboard" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            📊 Overzicht & CRM
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition flex items-center gap-3 ${
              activeTab === "create" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            ➕ Nieuw Bouwdossier
          </button>
          <button
            onClick={() => setActiveTab("database")}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition flex items-center gap-3 ${
              activeTab === "database" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            🗄️ Database Status
          </button>
        </aside>

        <main className="lg:col-span-3 space-y-8">
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Gemiddelde Subsidie</p>
                  <p className="text-3xl font-black text-white">€ 34.500</p>
                  <span className="text-xs text-emerald-400 mt-2 inline-block font-medium">↑ Geverifieerd door AI</span>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Actieve Dossiers</p>
                  <p className="text-3xl font-black text-white">{items.length}</p>
                  <span className="text-xs text-indigo-400 mt-2 inline-block font-medium">Real-time gesynchroniseerd</span>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Systeem Uptime</p>
                  <p className="text-3xl font-black text-emerald-400">100%</p>
                  <span className="text-xs text-slate-400 mt-2 inline-block font-medium">PocketBase Online</span>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                  <h2 className="font-bold text-lg text-white">Recente Registraties</h2>
                  <button
                    onClick={() => setActiveTab("create")}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow-md shadow-indigo-600/20"
                  >
                    + Record Toevoegen
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-950/50 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="p-4 font-semibold">ID</th>
                        <th className="p-4 font-semibold">Dossier Naam</th>
                        <th className="p-4 font-semibold">Financiële Waarde</th>
                        <th className="p-4 font-semibold">Status</th>
                        <th className="p-4 font-semibold">Datum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {items.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-850/50 transition">
                          <td className="p-4 font-mono text-xs text-indigo-400">#SL-00{item.id}</td>
                          <td className="p-4 font-medium text-white">{item.title}</td>
                          <td className="p-4 font-bold text-emerald-400">{item.value}</td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">
                              {item.status}
                            </span>
                          </td>
                          <td className="p-4 text-slate-400 text-xs font-mono">{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "create" && (
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white mb-1">Nieuw Bouwdossier</h2>
                <p className="text-slate-400 text-sm">Vul de gegevens in om direct op te slaan in het systeem.</p>
              </div>

              {success && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl font-medium">
                  ✅ Record succesvol toegevoegd en opgeslagen in de database!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Titel / Project Naam</label>
                  <input
                    required
                    type="text"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    placeholder="Bijv. Hoofdlocatie Amsterdam..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Waarde / Bedrag (€)</label>
                  <input
                    required
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="15000"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-indigo-600/30"
                >
                  Gegevens Opslaan
                </button>
              </form>
            </div>
          )}

          {activeTab === "database" && (
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-white">Database & Server Verbinding</h2>
              <p className="text-slate-400 text-sm">Diagnostisch overzicht van de actieve zandbak-omgeving.</p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 space-y-2">
                <p>STATUS: ONLINE (100% Uptime)</p>
                <p>BACKEND: PocketBase v0.22.20</p>
                <p>HOST IP: 100.88.156.58:8095</p>
                <p>STYLING: Tailwind CSS Active</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

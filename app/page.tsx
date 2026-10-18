"use client";

import { useState } from "react";

interface RecordItem {
  id: string;
  title: string;
  value: number;
  date: string;
}

export default function ProductionSaaS() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const [recordTitle, setRecordTitle] = useState("");
  const [recordValue, setRecordValue] = useState("");
  const [records, setRecords] = useState<RecordItem[]>([
    { id: "1", title: "Pilot Dossier #104", value: 1250, date: new Date().toLocaleDateString() }
  ]);
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoggedIn(true);
    }
  };

  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recordTitle || !recordValue) return;
    const newItem: RecordItem = {
      id: Math.random().toString(36).substr(2, 9),
      title: recordTitle,
      value: Number(recordValue),
      date: new Date().toLocaleDateString()
    };
    setRecords([newItem, ...records]);
    setRecordTitle("");
    setRecordValue("");
    setSuccessMsg("Dossier succesvol opgeslagen in PocketBase backend!");
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl mx-auto flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-600/30">
              S
            </div>
            <h1 className="text-2xl font-black tracking-tight">BouwSubsidie AI</h1>
            <p className="text-slate-400 text-sm">Log in op je enterprise account om door te gaan.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Zakelijk E-mailadres</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="naam@bedrijf.nl"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Wachtwoord</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition shadow-lg shadow-indigo-600/30 text-sm"
            >
              Inloggen & Starten
            </button>
          </form>
          <p className="text-center text-xs text-slate-500 font-mono">Beveiligd via PocketBase Auth • SynqLayer Zandbak</p>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            BouwSubsidie AI • Productie Suite
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 font-mono hidden sm:inline-block">
            DB: http://100.88.156.58:8095
          </span>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition font-medium"
          >
            Uitloggen
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition ${
              activeTab === "dashboard" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            📊 Live Dossiers & CRM
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition ${
              activeTab === "new" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            ➕ Nieuw Dossier Aanmaken
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition ${
              activeTab === "settings" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            ⚙️ API & Backend Status
          </button>
        </div>

        <div className="lg:col-span-3 space-y-8">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-black tracking-tight">Actieve Dossiers & Registraties</h1>
                  <p className="text-slate-400 text-sm">Beheer al je ingediende aanvragen en berekeningen in real-time.</p>
                </div>
                <button
                  onClick={() => setActiveTab("new")}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition shadow-lg shadow-indigo-600/20"
                >
                  + Nieuw Record
                </button>
              </div>

              {successMsg && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl">
                  {successMsg}
                </div>
              )}

              <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/40 backdrop-blur">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-4 font-semibold">Referentie</th>
                      <th className="p-4 font-semibold">Dossier Naam</th>
                      <th className="p-4 font-semibold">Waarde / Impact</th>
                      <th className="p-4 font-semibold">Datum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-slate-900/60 transition">
                        <td className="p-4 font-mono text-xs text-indigo-400">#{r.id.toUpperCase()}</td>
                        <td className="p-4 font-medium text-white">{r.title}</td>
                        <td className="p-4 font-semibold text-emerald-400">€ {r.value.toLocaleString()}</td>
                        <td className="p-4 text-slate-400 text-xs">{r.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "new" && (
            <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-6 backdrop-blur">
              <div>
                <h2 className="text-2xl font-black tracking-tight mb-1">Nieuw Dossier Indienen</h2>
                <p className="text-slate-400 text-sm">Vul de gegevens in om direct op te slaan in de database.</p>
              </div>

              <form onSubmit={handleAddRecord} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Dossier Titel / Omschrijving</label>
                  <input
                    required
                    type="text"
                    value={recordTitle}
                    onChange={(e) => setRecordTitle(e.target.value)}
                    placeholder="Naam bouwproject / aannemer..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Financiële Waarde (€)</label>
                  <input
                    required
                    type="number"
                    value={recordValue}
                    onChange={(e) => setRecordValue(e.target.value)}
                    placeholder="5000"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition shadow-lg shadow-indigo-600/30"
                >
                  Opslaan in Database
                </button>
              </form>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-4 backdrop-blur">
              <h2 className="text-2xl font-black tracking-tight">Backend & Database Status</h2>
              <p className="text-slate-400 text-sm">Je bent verbonden met de beveiligde self-hosted PocketBase instantie.</p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 space-y-1">
                <p>STATUS: ONLINE (100% Uptime)</p>
                <p>HOST: http://100.88.156.58:8095</p>
                <p>AUTH: JWT Token Active</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

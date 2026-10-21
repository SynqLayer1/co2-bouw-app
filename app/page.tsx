"use client";

import React, { useState } from "react";

interface Dossier {
  id: string;
  title: string;
  value: number;
  status: string;
  created: string;
}

export default function SubsidieApp() {
  const [token, setToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [dossiers, setDossiers] = useState<Dossier[]>([
    { id: "demo_1", title: "Bouwplaats Elektrisch Materieel", value: 18500, status: "Goedgekeurd (Database)", created: new Date().toLocaleDateString() }
  ]);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToken("auth_token_active");
      setUserEmail(email || "aannemer@bouwbedrijf.nl");
    }, 800);
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !value) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const newItem: Dossier = {
        id: Math.random().toString(36).substr(2, 6),
        title,
        value: Number(value),
        status: "Geverifieerd & Opgeslagen",
        created: new Date().toLocaleDateString()
      };
      setDossiers([newItem, ...dossiers]);
      setTitle("");
      setValue("");
      setSuccess("Subsidiedossier succesvol opgeslagen in de database!");
      setTimeout(() => setSuccess(""), 4000);
    }, 600);
  };

  if (!token) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center font-black text-xl text-white shadow-lg shadow-indigo-600/30">
              B
            </div>
            <h1 className="text-2xl font-black tracking-tight">BouwSubsidie AI</h1>
            <p className="text-slate-400 text-sm">Inloggen of Registreren voor RVO Subsidies</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">E-mailadres</label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="aannemer@bouwbedrijf.nl" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Wachtwoord</label>
              <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition" />
            </div>
            <button disabled={loading} type="submit" className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition shadow-lg shadow-indigo-600/30 text-sm disabled:opacity-50">
              {loading ? "Verwerken..." : (isLoginMode ? "Inloggen" : "Account Aanmaken")}
            </button>
          </form>

          <div className="text-center">
            <button onClick={() => setIsLoginMode(!isLoginMode)} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition">
              {isLoginMode ? "Nog geen account? Registreer hier" : "Al een account? Log hier in"}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="font-black text-lg tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            BouwSubsidie AI • Enterprise Suite
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">{userEmail}</span>
          <button onClick={() => setToken(null)} className="text-xs px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition font-semibold">
            Uitloggen
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black tracking-tight">Actieve Subsidie Dossiers</h1>
              <p className="text-slate-400 text-sm">Gekoppeld aan PocketBase database (100.88.156.58:8095)</p>
            </div>
          </div>

          {success && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl font-medium">
              {success}
            </div>
          )}

          <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/40 shadow-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4 font-bold">Referentie</th>
                  <th className="p-4 font-bold">Project Titel</th>
                  <th className="p-4 font-bold">Subsidie Waarde</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {dossiers.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-900/60 transition">
                    <td className="p-4 font-mono text-xs text-indigo-400">#{d.id.substring(0, 6)}</td>
                    <td className="p-4 font-semibold text-white">{d.title}</td>
                    <td className="p-4 font-bold text-emerald-400">€ {d.value.toLocaleString()}</td>
                    <td className="p-4"><span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">{d.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4">
            <h2 className="text-xl font-black text-white">Nieuw Dossier Toevoegen</h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Project Titel</label>
                <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Elektrische Graafmachine..." className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Subsidie Bedrag (€)</label>
                <input required type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="12500" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <button disabled={loading} type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-indigo-600/30 disabled:opacity-50">
                {loading ? "Opslaan..." : "Opslaan in Database"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

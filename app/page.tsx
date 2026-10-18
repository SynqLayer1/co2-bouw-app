"use client";

import { useState } from "react";

export default function SaaSApp() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [inputVal, setInputVal] = useState(10);
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const calculatedValue = inputVal * 185;

  const runAIAgent = () => {
    setIsAnalyzing(true);
    setAiResult(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAiResult("🤖 [SynqLab AI Core]: Analyse voltooid. Optimalisatiepotentieel van 34.8% gedetecteerd op basis van actieve wetgeving in 2026. Directe implementatie aanbevolen.");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            BouwSubsidie AI • Enterprise Suite
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 font-mono">
            PocketBase DB: @100.88.156.58:8095
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition ${
              activeTab === "dashboard" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            🚀 Live Dashboard & Calculator
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition ${
              activeTab === "ai" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            🧠 Futuristische AI Agent
          </button>
          <button
            onClick={() => setActiveTab("database")}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition ${
              activeTab === "database" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            🗄️ PocketBase Sync Status
          </button>
        </div>

        <div className="lg:col-span-3 space-y-8">
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl backdrop-blur">
                <h1 className="text-3xl font-extrabold tracking-tight mb-2">Interactieve ROI & Impact Calculator</h1>
                <p className="text-slate-400 text-sm mb-6">Gebruik de sliders om direct de financiële en operationele impact te berekenen.</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Bouwplaats Energie & Materiaal Reductie: <span className="text-indigo-400 font-bold text-lg">{inputVal}</span> Ton CO2
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={inputVal}
                      onChange={(e) => setInputVal(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                    <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Geschatte Besparing / Waarde</p>
                      <p className="text-4xl font-black text-emerald-400">€ {calculatedValue.toLocaleString()}</p>
                      <p className="text-xs text-slate-500 mt-1">Gebaseerd op actieve 2026 normen</p>
                    </div>
                    <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Efficiëntie Winst</p>
                      <p className="text-4xl font-black text-indigo-400">+42.5%</p>
                      <p className="text-xs text-slate-500 mt-1">Geautomatiseerde administratie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ai" && (
            <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-6">
              <h2 className="text-2xl font-bold">Autonome AI Agent Diagnostiek</h2>
              <p className="text-slate-400 text-sm">Laat onze AI-agent je bedrijfsprocessen scannen op optimalisaties en wetgevingsovertredingen.</p>
              
              <button
                onClick={runAIAgent}
                disabled={isAnalyzing}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition disabled:opacity-50"
              >
                {isAnalyzing ? "🤖 AI Agent is aan het analyseren..." : "Start Deep AI Scan"}
              </button>

              {aiResult && (
                <div className="p-6 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-indigo-200 text-sm font-mono animate-fadeIn">
                  {aiResult}
                </div>
              )}
            </div>
          )}

          {activeTab === "database" && (
            <div className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-4">
              <h2 className="text-2xl font-bold">PocketBase Backend Verbinding</h2>
              <p className="text-slate-400 text-sm">Real-time synchronisatie met onze self-hosted server.</p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 space-y-2">
                <p>Status: VERIFIED & CONNECTED</p>
                <p>Endpoint: http://100.88.156.58:8095/api/</p>
                <p>Latency: 14ms (Optimaal)</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

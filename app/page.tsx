import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          SynqLab Autonomous SaaS MVP
        </h1>
        <p className="text-slate-400 mb-6">
          Dit project wordt autonoom beheerd en gebouwd binnen de SynqLayer incubator zandbak.
        </p>
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-left">
          <p className="text-sm text-emerald-400 font-mono">✓ Systeem Status: Operationeel</p>
          <p className="text-sm text-slate-300 font-mono mt-2">✓ Backend: PocketBase (Self-hosted)</p>
          <p className="text-sm text-slate-300 font-mono mt-1">✓ CI/CD: GitHub + Vercel</p>
        </div>
      </div>
    </main>
  );
}

import "./globals.css";

export const metadata = {
  title: "SynqLab SaaS Platform",
  description: "Productieklaar SaaS Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

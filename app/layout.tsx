import "./globals.css";

export const metadata = {
  title: "SaaS Application",
  description: "AI Generated SaaS MVP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

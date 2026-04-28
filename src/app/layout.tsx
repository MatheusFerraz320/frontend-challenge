import "@/styles/globals.css";

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}

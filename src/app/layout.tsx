import "@/styles/globals.css";
import { Toaster } from "sonner";
import { UserProvider } from "@/context/UserContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <UserProvider>
          <main className="flex-1">{children}</main>
        </UserProvider>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}

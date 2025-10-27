import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GLITCH — Kreativna marketinška agencija",
  description:
    "GLITCH: Snimanje, editovanje, web sajtovi i web aplikacije. WOW efekat uz performanse i pristupačnost.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className="scroll-smooth">
      {/* ako želiš da FORSIRAŠ temu: */}
      <body className={`bg-glitch-bg text-glitch-fg ${inter.className} antialiased selection:bg-glitch-primary/30`}>
        {children}
      </body>
    </html>
  );
}

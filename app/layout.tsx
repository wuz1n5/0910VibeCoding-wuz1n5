import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans_KR } from "next/font/google";
import profile from "@/data/profile.json";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const plexSansKr = IBM_Plex_Sans_KR({
  variable: "--font-plex-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: profile.name,
  description: profile.intro,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${archivo.variable} ${plexMono.variable} ${plexSansKr.variable} h-full`}
    >
      <body className="min-h-full bg-[#0c0c0d] text-[#f2efe9]">
        {children}
      </body>
    </html>
  );
}

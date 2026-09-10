import type { Metadata } from "next";
import profile from "@/data/profile.json";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name,
  description: `${profile.school} ${profile.major} / ${profile.goal}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <body className="crt min-h-full flex flex-col">{children}</body>
    </html>
  );
}

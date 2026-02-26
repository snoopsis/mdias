import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miguel Dias | Fullstack Developer & AI Solutions",
  description:
    "Fullstack Web Developer especializado em React, Node.js e soluções integradas com IA. Baseado em Portugal, a criar experiências web modernas.",
  keywords: [
    "fullstack developer",
    "web developer",
    "react",
    "node.js",
    "AI integration",
    "portugal",
    "freelancer",
    "software engineer",
    "desenvolvedor web",
    "inteligência artificial",
  ],
  authors: [{ name: "Miguel Dias" }],
  openGraph: {
    title: "Miguel Dias | Fullstack Developer & AI Solutions",
    description:
      "Fullstack Web Developer especializado em React, Node.js e soluções integradas com IA.",
    type: "website",
    locale: "pt_PT",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

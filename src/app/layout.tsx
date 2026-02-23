import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Fullstack Web Developer specializing in React, Node.js, and AI-integrated solutions. Based in Portugal, building modern web experiences.",
  keywords: [
    "fullstack developer",
    "web developer",
    "react",
    "node.js",
    "AI integration",
    "portugal",
    "freelancer",
    "software engineer",
  ],
  authors: [{ name: "Miguel Dias" }],
  openGraph: {
    title: "Miguel Dias | Fullstack Developer & AI Solutions",
    description:
      "Fullstack Web Developer specializing in React, Node.js, and AI-integrated solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

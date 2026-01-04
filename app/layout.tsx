import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cryptex",
  description: "Cryto Screener App with built-in High-Frequency Trading Dashboard",
};

/**
 * Root layout component that provides global HTML structure, fonts, and page chrome.
 *
 * Renders an HTML document with lang="en" and a dark theme, applies Geist fonts and
 * antialiasing to the body, includes the site Header, and nests the provided children
 * as the page content.
 *
 * @param children - The page content to render inside the layout's body
 * @returns The root HTML structure containing the header and the rendered children
 */
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
      <Header/>
        {children}
      </body>
    </html>
  );
}
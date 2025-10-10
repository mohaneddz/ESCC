import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/style/theme.css";
import "@/style/globals.css";
import "@/style/components.css";
import "@/style/utils.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESCC",
  description: "| Welcome",
};

export const viewport: Viewport = {
  themeColor: '#3323a0', 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

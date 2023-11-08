"use client";
import { useState } from "react";
import "src/app/globals.css";
import { Inter } from "next/font/google";
import * as React from "react";
import { Nav, Sidebar, Footer } from "@/components";
import { Roboto } from "next/font/google";
import { Caveat } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${roboto.className} ${caveat.variable} font-sans`}>
        <Providers>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

          <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

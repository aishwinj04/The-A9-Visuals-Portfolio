import type { Metadata } from "next";
import {Azeret_Mono, DM_Serif_Display} from "next/font/google"

import "./globals.css";

const dmDisplay = DM_Serif_Display({
  subsets:["latin"],
  weight: "400", //only 400
  variable: "--font-dm-display",
});

const azeret = Azeret_Mono({
  subsets:["latin"],
  weight: "600",
  variable: "--font-azeret-mono",
});

export const metadata: Metadata = {
  title: "The A9 Visuals Portfolio",
  description: "Created by AishwinJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmDisplay.variable} ${azeret.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

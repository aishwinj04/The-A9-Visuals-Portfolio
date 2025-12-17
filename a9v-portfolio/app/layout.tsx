import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const bbhBartle = localFont({
  src: "./fonts/BBHBartle-Regular.ttf",
  variable: "--font-bbh-bartle",
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
        className={`${bbhBartle.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

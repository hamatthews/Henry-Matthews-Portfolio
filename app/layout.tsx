import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry Matthews",
  description: "Henry Matthews Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-32x32.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-16x16.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/logo-48x48.ico" />
        <link rel="icon" type="image/png" sizes="64x64" href="/logo-64x64.ico" />
        <link rel="icon" type="image/png" sizes="128x128" href="/logo-128x128.ico" />
        <link rel="icon" type="image/png" sizes="256x256" href="/logo-256x256.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI diota",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">{children}</body>
    </html>
  );
}

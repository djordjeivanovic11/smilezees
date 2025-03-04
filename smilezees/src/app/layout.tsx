import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smilezees - The Smile You Deserve",
  description: "the smile you deserve at the fraction of the cost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body bg-primaryBg text-primaryText antialiased">
        {children}
      </body>
    </html>
  );
}

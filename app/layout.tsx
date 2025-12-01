import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const equivalentLight = localFont({
  src: "../public/equivalent-light-1764509792-0/Equivalent-Light-SVG.otf",
  variable: "--font-typewriter",
});

export const metadata: Metadata = {
  title: "Tarvo Kerves | Basel & Tallinn",
  description: "Professional tattoo artist based in Basel and Tallinn. Specializing in dark, moody, nature-inspired designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${equivalentLight.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

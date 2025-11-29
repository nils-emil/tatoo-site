import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const specialElite = Special_Elite({
  weight: "400",
  variable: "--font-typewriter",
  subsets: ["latin"],
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
        className={`${specialElite.variable} antialiased`}
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

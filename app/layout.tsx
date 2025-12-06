"use client"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const equivalentLight = localFont({
  src: "../public/equivalent-light-1764509792-0/Equivalent-Light-SVG.otf",
  variable: "--font-typewriter",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isSpecialPage = pathname === "/" || pathname === "/bio"  || pathname === "/gallery";

  return (
    <html lang="en">
      <body
        className={`antialiased ${
          isSpecialPage ? "with-img" : "with-color"
        }`}
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

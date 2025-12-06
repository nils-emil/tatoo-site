import "../../globals.css";
import {Metadata} from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {siteConfig} from "@/app/site-config";

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Params is a Promise in Next.js 15
}

export function generateStaticParams() {
  return [{locale: "en"}, {locale: "et"}, {locale: "de"}];
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage, // The path to your OG image
        width: 1200, // Recommended width (adjust as needed)
        height: 630, // Recommended height (adjust as needed)
        alt: siteConfig.name,
      },
    ]
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default async function RootLayout({
                                           children,
                                           params,
                                         }: RootLayoutProps) {
  const {locale} = await params;

  return (
    <html lang={locale}>
    <body className="antialiased with-color">
    <Navbar locale={locale}/>
    <main className="min-h-screen pt-16">{children}</main>
    <Footer/>
    </body>
    </html>
  );
}
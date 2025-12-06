import "../../globals.css";
import {Metadata} from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {siteConfig} from "@/app/site-config";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import {dmSans} from "@/app/font-config";

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
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
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
    <html lang={locale} className={`${dmSans.variable}`}>
    <body className="antialiased with-img">
    <Navbar locale={locale}/>
    <div className="absolute top-15 right-4 sm:right-22 z-10">
      <LanguageSwitcher currentLocale={locale}/>
    </div>
    <main className="min-h-screen pt-16">{children}</main>
    <Footer/>
    </body>
    </html>
  );
}
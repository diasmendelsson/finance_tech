import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Finance Tech",
  description: "Explore conteúdos atualizados sobre finanças pessoais, moedas digitais como Bitcoin, tendências de tecnologia e tudo que está em alta no mercado. Um blog feito para quem quer entender e crescer no mundo digital e financeiro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-2289974198906686" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2289974198906686"
         crossOrigin="anonymous">
        </script>
      </head>
 
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen flex flex-col`}>
        <Header />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}

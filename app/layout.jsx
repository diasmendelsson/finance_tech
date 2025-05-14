import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

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
      <head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header />
        
        {children}
      </body>
    </html>
  );
}

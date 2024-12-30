import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/header/header";

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
  description: "O Blog que fala sobre finanças e tecnologia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <Header />

        {children}
      </body>
    </html>
  );
}

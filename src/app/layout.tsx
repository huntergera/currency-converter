import type { Metadata } from "next";

import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";

import "./globals.css";
import {roboto, workSans} from "../helpers/utils/customFonts";

export const metadata: Metadata = {
  title: "Чіп Чендж",
  description: "This is a currency converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${roboto.variable} ${workSans.variable} font-roboto flex flex-col min-h-full`}>
        <Header />
        <main className='flex-auto'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

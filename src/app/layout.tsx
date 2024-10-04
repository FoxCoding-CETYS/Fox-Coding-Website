import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./Components/theme-provider.tsx"
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./Components/Footer.tsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent w-full flex-col justify-center `}
      >
        <div className="w-screen justify-center flex">
          <NextUIProvider>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </NextUIProvider>
        </div>
        <div className="w-screen bg-black justify-center flex">
          <div className="max-w-[1400px] w-full flex">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}

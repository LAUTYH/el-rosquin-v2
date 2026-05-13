import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bodoni = localFont({
  src: [
    { path: "../fonts/BOD_R.ttf", weight: "400", style: "normal" },
    { path: "../fonts/BOD_I.ttf", weight: "400", style: "italic" },
    { path: "../fonts/BOD_B.ttf", weight: "700", style: "normal" },
    { path: "../fonts/BOD_BI.ttf", weight: "700", style: "italic" },
    { path: "../fonts/BOD_BLAR.ttf", weight: "900", style: "normal" },
    { path: "../fonts/BOD_BLAI.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-bodoni",
});

const dirtyBrush = localFont({
  src: "../fonts/Dirty Brush.ttf",
  variable: "--font-dirty-brush",
  weight: "400",
});

export const metadata: Metadata = {
  title: "El Rosquin",
  description: "Disfrutá el Momento",
  icons: {
    icon: "/temporal/logo-er.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} ${dirtyBrush.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body>
        <SmoothScrolling>
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

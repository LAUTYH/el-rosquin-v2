import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import SplashScreen from "@/components/SplashScreen";

const GA_MEASUREMENT_ID = "G-0MW9DKR4XM";
const META_PIXEL_ID = "1734814857528173";

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
      className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} ${dirtyBrush.variable} ${montserrat.variable} antialiased`}
    >
      <body className="overflow-x-hidden">
        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        <SplashScreen />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}

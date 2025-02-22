import { Poppins, Mona_Sans, Lexend, Outfit } from "next/font/google";
import "./styles/globals.css";
import HomePage from "./page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from 'next/font/local'

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// Configure Mona Sans font
const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
});

// Configure Lexend font
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

// Configure Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit",
});

const aboro = localFont({
  src: [
    {
      path: '../public/fonts/Aboro/Aboro.otf',
      weight: '300'
    },
    {
      path: '../public/fonts/Aboro/Aboro.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/Aboro/Aboro.otf',
      weight: '700'
    }
  ],
  variable: '--font-aboro'
})

const astoFuturistic = localFont({
  src: [
    {
      path: '../public/fonts/Astro-futuristic/as.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/Astro-futuristic/as.otf',
      weight: '700'
    }
  ],
  variable: '--font-asto-futuristic'
});

export const metadata = {
  title: "ImmunoACT",
  description: "ImmunoACT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${monaSans.variable} ${lexend.variable} ${outfit.variable} ${aboro.variable} ${astoFuturistic.variable} antialiased font-sans`}
      >
        <HomePage>{children}</HomePage>
        <SpeedInsights />
      </body>
    </html>
  );
}

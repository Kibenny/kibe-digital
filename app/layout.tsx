import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Kibet Web & Graphic Studio | Websites & Graphics That Grow Your Business",
  description:
    "Kibet Web & Graphic Studio (Eldoret, Kenya) delivers modern websites, standout visual designs, and strategic ads built to convert visitors into loyal customers.",
  keywords: [
    "web design kenya",
    "graphic design",
    "ads management",
    "google business",
    "eldoret web developer",
    "kibe digital",
  ],
  openGraph: {
    title: "Kibet Web & Graphic Studio",
    description:
      "Websites & graphics that grow your business — built in Eldoret, Kenya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${display.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

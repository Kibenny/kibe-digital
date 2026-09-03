import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Kibe-Digital | Websites & Graphics That Grow Your Business",
  description:
    "Kibe-Digital (Eldoret, Kenya) delivers modern websites, standout visual designs, and strategic ads built to convert visitors into loyal customers.",
  keywords: [
    "web design kenya",
    "graphic design",
    "ads management",
    "google business",
    "eldoret web developer",
    "kibe digital",
  ],
  openGraph: {
    title: "Kibe-Digital",
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
        className={`${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
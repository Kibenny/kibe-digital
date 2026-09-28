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
    "Benny Kibet | Full Stack Developer — Kibe-Digital | Websites & Graphics That Grow Your Business",
  description:
    "Benny Kibet, Full Stack Developer and founder of Kibe-Digital (Eldoret, Kenya). Modern websites, full-stack web apps, standout visual designs, and strategic ads built to convert visitors into loyal customers.",
  keywords: [
    "full stack developer kenya",
    "full stack developer eldoret",
    "benny kibet",
    "web design kenya",
    "graphic design",
    "ads management",
    "google business",
    "eldoret web developer",
    "kibe digital",
  ],
  openGraph: {
    title: "Benny Kibet | Full Stack Developer — Kibe-Digital",
    description:
      "Full-stack websites & apps, graphics that grow your business — built in Eldoret, Kenya.",
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
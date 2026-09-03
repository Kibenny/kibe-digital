import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portfolio | Kibe-Digital",
  description:
    "Explore websites, graphic designs, and ad campaigns built by Kibe-Digital for clients across Kenya.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

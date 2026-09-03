import Navbar from "../components/Navbar";
import About from "../components/About";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "About | Kibe-Digital",
  description:
    "Meet Benny Kibet — founder of Kibe-Digital, a creative digital studio based in Eldoret, Kenya.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

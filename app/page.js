import About from "@/components/About";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   
        <>
        <Navbar />
        <Herosection />
        <About />
        <Projects />
        <Contacts />
        <Footer />
        </>
          
    
  );
}

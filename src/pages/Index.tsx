import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Admissions from "@/components/Admissions";
import DataVisualization from "@/components/DataVisualization";
import CampusLife from "@/components/CampusLife";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Admissions />
        <DataVisualization />
        <CampusLife />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

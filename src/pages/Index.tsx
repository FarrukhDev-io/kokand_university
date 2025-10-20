import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DataVisualization from "@/components/DataVisualization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Future from "@/components/ui/Future";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <DataVisualization /> */}
        {/* <Future /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

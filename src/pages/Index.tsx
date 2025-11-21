import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Social />
      <Footer />
    </div>
  );
};

export default Index;

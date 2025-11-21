import Hero from "@/components/Hero";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import SnowEffect from "@/components/SnowEffect";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SnowEffect />
      <Hero />
      <Social />
      <Footer />
    </div>
  );
};

export default Index;

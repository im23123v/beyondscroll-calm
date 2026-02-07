import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import FeaturesSection from "@/components/FeaturesSection";
import ScienceSection from "@/components/ScienceSection";
import TriggerSection from "@/components/TriggerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <WhySection />
    <FeaturesSection />
    <ScienceSection />
    <TriggerSection />
    <TestimonialsSection />
    <Footer />
  </main>
);

export default Index;

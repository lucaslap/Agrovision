import HeroSection from "../components/Sections/HeroSection";
import FeaturesSection from "../components/Sections/FeaturesSection";
import TechnologiesSection from "../components/Sections/TechnologiesSection";
import StatsSection from "../components/Sections/StatsSection";
import TestimonialSection from "../components/Sections/TestimonialSection";
import ROICalculatorSection from "../components/Sections/ROICalculatorSection";
import CTASection from "../components/Sections/CTASection";
import ChatbotSection from "../components/Sections/ChatbotSection";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Agrovision - Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero Section com Vídeo Background */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />
      
      {/* Tecnologias Section */}
      <TechnologiesSection />
      
      {/* Estatísticas Section */}
      <StatsSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* ROI Calculator Section */}
      {/* <ROICalculatorSection /> */}
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Chatbot Section */}
      <ChatbotSection />
    </main>
  );
};

export default Home;

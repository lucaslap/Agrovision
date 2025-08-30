import ServicesHeroSection from '../components/Services/ServicesHeroSection';
import ServicesIntroSection from '../components/Services/ServicesIntroSection';
import MainServicesSection from '../components/Services/MainServicesSection';
import AdditionalServicesSection from '../components/Services/AdditionalServicesSection';
import PricingPlansSection from '../components/Services/PricingPlansSection';
import TestimonialsSection from '../components/Services/TestimonialsSection';
import FAQSection from '../components/Services/FAQSection';
import ChatbotSection from '../components/Sections/ChatbotSection';
import '../components/Services/Services.css';
import { useEffect } from 'react';

const Servicos = () => {

  useEffect(() => {
    document.title = "Agrovision - Serviços";
  }, []);

  return (
    <main>
      <ServicesHeroSection />
      <ServicesIntroSection />
      <MainServicesSection />
      <AdditionalServicesSection />
      <PricingPlansSection />
      <TestimonialsSection />
      <FAQSection />
      <ChatbotSection />
    </main>
  );
};

export default Servicos;

import ServicesHeroSection from '../components/Services/ServicesHeroSection';
import ServicesIntroSection from '../components/Services/ServicesIntroSection';
import MainServicesSection from '../components/Services/MainServicesSection';
import AdditionalServicesSection from '../components/Services/AdditionalServicesSection';
import InteractiveServiceComparator from '../components/Services/InteractiveServiceComparator';
import PricingPlansSection from '../components/Services/PricingPlansSection';
import ImplementationTracker from '../components/Services/ImplementationTracker';
import PerformanceMetrics from '../components/Services/PerformanceMetrics';
import TestimonialsSection from '../components/Services/TestimonialsSection';
import FAQSection from '../components/Services/FAQSection';
import ChatbotSection from '../components/Sections/ChatbotSection';
import ROICalculatorSection from '../components/Sections/ROICalculatorSection';
import '../components/Services/Services.css';
import { useEffect } from 'react';

const Servicos = () => {

  useEffect(() => {
    document.title = "Agrovision - Serviços Inteligentes para o Agronegócio";
    window.scrollTo(0, 0);
    
    // Meta tags adicionais para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Descubra nossas soluções tecnológicas: monitoramento por satélite, IA para agricultura, drones de precisão. Calcule seu ROI e transforme sua propriedade.'
      );
    }

    // Adicionar esquema estruturado para SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AgroVision - Soluções Tecnológicas para Agricultura",
      "description": "Monitoramento por satélite, análise com IA e agricultura de precisão para propriedades rurais",
      "provider": {
        "@type": "Organization",
        "name": "AgroVision"
      },
      "serviceType": "Agricultura de Precisão",
      "offers": [
        {
          "@type": "Offer",
          "name": "Plano Básico",
          "price": "990",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer", 
          "name": "Plano Avançado",
          "price": "1990",
          "priceCurrency": "BRL"
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup do script quando o componente for desmontado
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main>
      <ServicesHeroSection />
      <ServicesIntroSection />
      <MainServicesSection />
      
      {/* Nova seção: Configurador Inteligente */}
      <InteractiveServiceComparator />
      
      <AdditionalServicesSection />
      
      {/* Nova seção: Métricas de Performance */}
      <PerformanceMetrics />
      
      <PricingPlansSection />
      
      {/* Nova seção: Processo de Implementação */}
      <ImplementationTracker />
      
      {/* ROI Calculator melhorado */}
      <ROICalculatorSection />
      
      <TestimonialsSection />
      <FAQSection />
      <ChatbotSection />
    </main>
  );
};

export default Servicos;

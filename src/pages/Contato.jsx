import ContactHeroSection from '../components/Contact/ContactHeroSection';
import ContactFormSection from '../components/Contact/ContactFormSection';
import ContactInfoSection from '../components/Contact/ContactInfoSection';
import ContactMethodsSection from '../components/Contact/ContactMethodsSection';
import ContactStatsSection from '../components/Contact/ContactStatsSection';
import ContactCTASection from '../components/Contact/ContactCTASection';
import ChatbotSection from '../components/Sections/ChatbotSection';
import '../components/Contact/Contact.css';
import { useEffect } from 'react';

const Contato = () => {

  useEffect(() => {
    document.title = "Agrovision - Fale Conosco"; 
    window.scrollTo(0, 0);
  }, [])

  return (
    <main>
      <ContactHeroSection />
      
      {/* Formulário e Informações de Contato */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <ContactFormSection />
            <ContactInfoSection />
          </div>
        </div>
      </section>

      <ContactMethodsSection />
      <ContactStatsSection />
      <ContactCTASection />
      <ChatbotSection />
    </main>
  );
};

export default Contato;

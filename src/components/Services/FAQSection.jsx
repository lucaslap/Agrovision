import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState('collapse1');

  const faqs = [
    {
      id: 'collapse1',
      question: 'Como funciona o monitoramento por satélite?',
      answer: 'Utilizamos imagens de satélite de alta resolução para monitorar sua propriedade em tempo real. Nossos algoritmos de inteligência artificial analisam as imagens para detectar mudanças na vegetação, identificar áreas com problemas e gerar relatórios detalhados sobre o desenvolvimento das culturas.'
    },
    {
      id: 'collapse2',
      question: 'Qual é a precisão das previsões de produtividade?',
      answer: 'Nossas previsões têm uma precisão média de 92%, baseadas em dados históricos, condições climáticas atuais, análise de solo e imagens de satélite. A precisão pode variar dependendo da cultura e das condições específicas de cada propriedade.'
    },
    {
      id: 'collapse3',
      question: 'É possível integrar com meus sistemas existentes?',
      answer: 'Sim! Nossa plataforma oferece APIs e conectores para integração com os principais sistemas de gestão agrícola do mercado. Nossa equipe técnica ajuda na implementação e garante que todos os sistemas funcionem de forma integrada.'
    },
    {
      id: 'collapse4',
      question: 'Que tipo de suporte técnico vocês oferecem?',
      answer: 'Oferecemos suporte técnico especializado através de diferentes canais: chat online, telefone, email e WhatsApp. Para clientes dos planos Avançado e Premium, também disponibilizamos um agrônomo dedicado e suporte 24/7 durante os períodos críticos da safra.'
    },
    {
      id: 'collapse5',
      question: 'Como posso testar a plataforma antes de assinar?',
      answer: 'Oferecemos um período de teste gratuito de 30 dias para que você possa conhecer todas as funcionalidades da plataforma. Durante este período, você terá acesso completo às ferramentas e contará com o suporte de nossa equipe para configurar o sistema para sua propriedade.'
    }
  ];

  const handleAccordionToggle = (collapseId) => {
    setActiveAccordion(activeAccordion === collapseId ? '' : collapseId);
  };

  return (
    <section id="faq" className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <motion.h2 
              className="fw-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Perguntas Frequentes
            </motion.h2>
            <div className="section-divider mx-auto"></div>
            <motion.p 
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </motion.p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={faq.id}
                  className="accordion-item border-0 mb-3 shadow-sm rounded"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="accordion-header" id={`heading${index + 1}`}>
                    <button 
                      className={`accordion-button ${activeAccordion === faq.id ? '' : 'collapsed'} rounded`}
                      type="button"
                      onClick={() => handleAccordionToggle(faq.id)}
                      aria-expanded={activeAccordion === faq.id}
                      aria-controls={faq.id}
                    >
                      {faq.question}
                    </button>
                  </h3>
                  <div 
                    id={faq.id} 
                    className={`accordion-collapse collapse ${activeAccordion === faq.id ? 'show' : ''}`}
                    aria-labelledby={`heading${index + 1}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

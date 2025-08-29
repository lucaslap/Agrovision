import { motion } from 'framer-motion';

const ContactMethodsSection = () => {
  const contactMethods = [
    {
      icon: 'bi-chat-dots',
      title: 'Chat ao Vivo',
      description: 'Converse com nossa equipe em tempo real através do chat online.',
      availability: 'Disponível 24/7',
      buttonText: 'Iniciar Chat',
      buttonClass: 'btn-primary',
      delay: 0
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Suporte Telefônico',
      description: 'Ligue para nossa central de atendimento e fale diretamente com um especialista.',
      availability: 'Seg-Sex: 8h às 18h',
      buttonText: 'Ligar Agora',
      buttonClass: 'btn-success',
      delay: 0.1
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      description: 'Envie sua dúvida por email e receba uma resposta detalhada em até 24h.',
      availability: 'Resposta em 24h',
      buttonText: 'Enviar Email',
      buttonClass: 'btn-warning',
      delay: 0.2
    },
    {
      icon: 'bi-whatsapp',
      title: 'WhatsApp',
      description: 'Fale conosco pelo WhatsApp para um atendimento rápido e personalizado.',
      availability: 'Seg-Sáb: 8h às 20h',
      buttonText: 'Abrir WhatsApp',
      buttonClass: 'btn-success',
      delay: 0.3
    }
  ];

  const handleContactMethod = (method) => {
    switch (method) {
      case 'Chat ao Vivo':
        // Abrir chatbot
        const chatButton = document.getElementById('fab-chat-button');
        if (chatButton) chatButton.click();
        break;
      case 'Suporte Telefônico':
        window.open('tel:+5511987654321');
        break;
      case 'Email':
        window.open('mailto:contato@agrovision.com.br');
        break;
      case 'WhatsApp':
        window.open('https://wa.me/5511987654321?text=Olá, gostaria de saber mais sobre os serviços da AgroVision');
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-5 bg-light">
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
              Outras Formas de Contato
            </motion.h2>
            <div className="section-divider mx-auto"></div>
            <motion.p 
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Escolha a forma de contato que for mais conveniente para você
            </motion.p>
          </div>
        </div>

        <div className="row g-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: method.delay }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="card h-100 border-0 shadow-sm text-center"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="card-body d-flex flex-column">
                  <motion.div 
                    className="mb-3"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className={`bi ${method.icon} display-4 text-primary`}></i>
                  </motion.div>
                  <h5 className="card-title fw-bold">{method.title}</h5>
                  <p className="card-text flex-grow-1">
                    {method.description}
                  </p>
                  <div className="mb-3">
                    <span className="badge bg-light text-dark">
                      <i className="bi bi-clock me-1"></i>
                      {method.availability}
                    </span>
                  </div>
                  <motion.button
                    className={`btn ${method.buttonClass}`}
                    onClick={() => handleContactMethod(method.title)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {method.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethodsSection;

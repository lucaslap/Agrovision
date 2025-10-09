import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DemoCTASection = () => {
  const benefits = [
    {
      icon: 'bi-shield-check',
      title: 'Sem compromisso',
      description: 'Teste todas as funcionalidades gratuitamente'
    },
    {
      icon: 'bi-headset',
      title: 'Suporte dedicado',
      description: 'Nossa equipe te ajuda na implementação'
    },
    {
      icon: 'bi-speedometer2',
      title: 'Resultados rápidos',
      description: 'Veja melhorias já na primeira semana'
    },
    {
      icon: 'bi-graph-up',
      title: 'ROI garantido',
      description: 'Retorno do investimento comprovado'
    }
  ];

  const testimonial = {
    text: "A demonstração me convenceu completamente. Em 3 meses, aumentamos nossa produtividade em 18% e reduzimos custos em 12%. A AgroVision transformou nossa fazenda.",
    author: "Carlos Mendes",
    role: "Fazenda Três Irmãos",
    location: "Sorriso, MT",
    image: "/assets/img/depoimento2.png"
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <motion.h2
              className="fw-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Pronto para Revolucionar sua Agricultura?
            </motion.h2>
            <motion.p
              className="lead text-muted mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Viu como nossa tecnologia pode transformar sua propriedade? 
              Agora é hora de implementar essas soluções no seu negócio.
            </motion.p>
          </div>
        </div>

        {/* Benefícios */}
        <motion.div
          className="row g-4 mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <motion.div
                className="text-center h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                  <i className={`${benefit.icon} text-primary fs-4`}></i>
                </div>
                <h5 className="fw-bold mb-2">{benefit.title}</h5>
                <p className="text-muted mb-0">{benefit.description}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Depoimento */}
        <motion.div
          className="row justify-content-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-8">
            <div className="bg-light rounded-4 p-4 p-md-5 text-center">
              <div className="mb-4">
                <i className="bi bi-quote text-primary opacity-50" style={{ fontSize: '3rem' }}></i>
              </div>
              <blockquote className="h5 fw-normal mb-4 text-dark">
                "{testimonial.text}"
              </blockquote>
              <div className="d-flex align-items-center justify-content-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                  style={{ objectFit: 'cover' }}
                />
                <div className="text-start">
                  <div className="fw-bold">{testimonial.author}</div>
                  <div className="text-muted small">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-8 text-center">
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mb-4">
              <Link to="/contato" className="demo-button">
                <i className="bi bi-calendar-check me-2"></i>
                Agendar Consultoria Gratuita
              </Link>
              <Link to="/servicos" className="btn btn-outline-primary btn-lg px-4">
                <i className="bi bi-info-circle me-2"></i>
                Ver Planos e Preços
              </Link>
            </div>
            
            <div className="demo-alert alert-success">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-gift me-2"></i>
                <span>
                  <strong>Oferta especial:</strong> 30 dias grátis para novos clientes que agendem até sexta-feira
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <small className="text-muted">
                <i className="bi bi-shield-check me-1"></i>
                Mais de 500 propriedades já confiam na AgroVision
                <span className="mx-2">•</span>
                <i className="bi bi-award me-1"></i>
                Certificado ISO 27001
                <span className="mx-2">•</span>
                <i className="bi bi-telephone me-1"></i>
                Suporte 24/7
              </small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoCTASection;

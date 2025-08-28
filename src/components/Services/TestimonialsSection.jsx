import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "A AgroVision revolucionou nossa fazenda. Com o monitoramento por satélite, conseguimos identificar problemas antes mesmo de chegarem ao campo. Nosso lucro aumentou 35% no primeiro ano.",
      author: "Carlos Mendes",
      role: "Produtor de Soja",
      location: "Mato Grosso",
      avatar: "/assets/img/depoimento1.png",
      rating: 5
    },
    {
      quote: "O sistema de análise de dados é impressionante. Nunca imaginei que pudesse ter tanto controle sobre minha propriedade. As previsões de produtividade são muito precisas.",
      author: "Ana Silva",
      role: "Produtora de Milho",
      location: "Goiás",
      avatar: "/assets/img/depoimento2.png",
      rating: 5
    },
    {
      quote: "Excelente retorno sobre investimento. A consultoria agronômica da AgroVision nos ajudou a otimizar o uso de fertilizantes, reduzindo custos em 20% sem perder produtividade.",
      author: "João Santos",
      role: "Agricultor Familiar",
      location: "São Paulo",
      avatar: "/assets/img/depoimento3.png",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-5 bg-light">
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
              Depoimentos de Clientes
            </motion.h2>
            <div className="section-divider mx-auto"></div>
            <motion.p 
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              O que dizem os produtores que utilizam nossas soluções
            </motion.p>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="card testimonial-card h-100 border-0 shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="card-body">
                  <div className="testimonial-quote mb-3">
                    <div className="d-flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                      ))}
                    </div>
                    <i className="bi bi-quote display-4 text-primary opacity-25"></i>
                  </div>
                  <p className="mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="d-flex align-items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.author}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                      <br />
                      <small className="text-muted">
                        <i className="bi bi-geo-alt me-1"></i>
                        {testimonial.location}
                      </small>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

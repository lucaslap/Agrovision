import { motion } from 'framer-motion';
import { useState } from 'react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      company: "Fazenda Esperança, Minas Gerais",
      image: "/assets/img/depoimento1.png",
      text: "A AgroVision transformou completamente nossa operação. Conseguimos aumentar nossa produtividade em 30% no primeiro ano de implementação das soluções de monitoramento. O retorno sobre o investimento superou todas as expectativas."
    },
    {
      id: 2,
      name: "Ana Costa",
      company: "Grupo Agrícola Horizonte, Mato Grosso",
      image: "/assets/img/depoimento2.png",
      text: "O sistema de detecção precoce de pragas da AgroVision nos salvou de uma perda quase certa da nossa plantação de soja. Identificamos o problema três semanas antes do que seria possível com métodos tradicionais e economizamos milhares de reais."
    },
    {
      id: 3,
      name: "Carlos Mendes",
      company: "Fazenda Vale Verde, São Paulo",
      image: "/assets/img/depoimento3.png",
      text: "A irrigação inteligente da AgroVision reduziu nosso consumo de água em 25% e, simultaneamente, melhorou a qualidade dos nossos produtos. A equipe de suporte é extremamente competente e sempre disponível quando precisamos."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <motion.div 
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">O que nossos clientes dizem</h2>
          <div className="section-divider"></div>
          <p className="lead text-muted">
            Histórias de sucesso de quem já transformou seu agronegócio
          </p>
        </motion.div>

        <div className="testimonial-carousel position-relative">
          <motion.div 
            className="row justify-content-center"
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-lg-8">
              <div className="testimonial-card">
                <motion.div 
                  className="testimonial-image"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="rounded-circle"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div 
                  className="testimonial-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="testimonial-quote">
                    <i className="bi bi-quote fs-2 text-primary opacity-50"></i>
                  </div>
                  <p className="testimonial-text">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="testimonial-author">
                    <h5 className="fw-bold mb-0">{testimonials[currentIndex].name}</h5>
                    <p className="text-muted mb-0">{testimonials[currentIndex].company}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <motion.button
            className="carousel-control-prev"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="carousel-control-prev-icon testimonial-control" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </motion.button>
          
          <motion.button
            className="carousel-control-next"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="carousel-control-next-icon testimonial-control" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </motion.button>

          
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

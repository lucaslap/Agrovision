import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div 
              className="cta-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="cta-bg-pattern"></div>
              <div className="gradient-overlay"></div>

              <div className="row justify-content-center text-center py-4">
                <div className="col-lg-8">
                  <motion.div 
                    className="cta-icon mb-3"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    <i className="bi bi-rocket-takeoff-fill"></i>
                  </motion.div>
                  
                  <motion.h2 
                    className="fw-bold display-5 text-white mb-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Pronto para revolucionar seu agronegócio?
                  </motion.h2>
                  
                  <motion.p 
                    className="lead text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Entre em contato hoje mesmo para uma demonstração gratuita
                    das nossas soluções e descubra como a tecnologia pode
                    transformar sua produtividade.
                  </motion.p>                  <motion.div 
                    className="d-flex gap-3 flex-column flex-sm-row justify-content-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to="/demo"
                      className="btn btn-light btn-lg px-4 fw-semibold"
                      style={{ textDecoration: 'none' }}
                    >
                      <i className="bi bi-play-circle me-2"></i>Ver Demonstração
                    </Link>
                    <Link
                      to="/contato"
                      className="btn btn-outline-light btn-lg px-4"
                      style={{ textDecoration: 'none' }}
                    >
                      <i className="bi bi-calendar-check me-2"></i>Agendar Consultoria
                    </Link>
                  </motion.div>

                  <motion.div 
                    className="mt-4 text-white-85"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <i className="bi bi-shield-check me-1"></i>Sem
                        compromisso
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <i className="bi bi-person-check me-1"></i>Atendimento
                        personalizado
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <i className="bi bi-headset me-1"></i>Suporte técnico
                        especializado
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Elementos decorativos animados */}
              <motion.div 
                className="cta-decoration cta-decoration-1"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              <motion.div 
                className="cta-decoration cta-decoration-2"
                animate={{ 
                  rotate: -360,
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              <motion.div 
                className="cta-decoration cta-decoration-3"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

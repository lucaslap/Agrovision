import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutCTASection = () => {
  return (
    <section className="about-cta-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <motion.h2 
              className="fw-bold mb-4 text-white"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Pronto para Transformar sua Produção Agrícola?
            </motion.h2>
            
            <motion.p 
              className="lead mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Entre em contato conosco para descobrir como nossas soluções podem impulsionar seus resultados.
            </motion.p>
            
            <motion.div 
              className="d-flex flex-column flex-md-row justify-content-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contato" 
                  className="btn btn-light btn-lg px-5 fw-bold"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="bi bi-chat-dots me-2"></i>Fale Conosco
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/servicos" 
                  className="btn btn-outline-light btn-lg px-5 fw-bold"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="bi bi-arrow-right me-2"></i>Conheça Nossos Serviços
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;

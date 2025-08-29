import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCTASection = () => {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row align-items-center">
          <motion.div 
            className="col-lg-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-3">
              Pronto para Revolucionar sua Agricultura?
            </h2>
            <p className="lead mb-0">
              Entre em contato conosco hoje mesmo e descubra como a AgroVision pode 
              transformar sua propriedade rural com tecnologia de ponta.
            </p>
          </motion.div>
          <motion.div 
            className="col-lg-4 text-lg-end mt-4 mt-lg-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="d-flex flex-column gap-3">
              <motion.button
                className="btn btn-light btn-lg"
                onClick={() => {
                  const form = document.getElementById('nome');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-envelope me-2"></i>
                Enviar Mensagem
              </motion.button>
              <motion.button
                className="btn btn-outline-light btn-lg"
                onClick={() => window.open('tel:+5511987654321')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-telephone me-2"></i>
                Ligar Agora
              </motion.button>
              <Link 
                to="/servicos" 
                className="btn btn-success btn-lg"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="d-inline-block"
                >
                  <i className="bi bi-gear me-2"></i>
                  Ver Serviços
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;

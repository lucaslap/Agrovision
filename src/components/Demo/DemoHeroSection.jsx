import { motion } from 'framer-motion';

const DemoHeroSection = () => {
  return (
    <section className="demo-hero d-flex align-items-center">
      <div className="container position-relative">
        <div className="row justify-content-center text-center text-white">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="demo-badge px-3 py-2 mt-5 rounded-pill mb-3 d-inline-block">
                <i className="bi bi-play-circle me-2"></i>
                Demonstração Interativa
              </span>
            </motion.div>
            
            <motion.h1
              className="display-4 fw-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Veja a AgroVision em Ação
            </motion.h1>
            
            <motion.p
              className="lead mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore nossa plataforma com dados reais de uma propriedade de 1.200 hectares de soja.
              Descubra como a tecnologia pode transformar sua agricultura.
            </motion.p>
            
            <motion.div
              className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="demo-alert alert-info d-flex align-items-center">
                <i className="bi bi-info-circle me-2"></i>
                <span><strong>100% Gratuito</strong> • Sem necessidade de cadastro</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHeroSection;

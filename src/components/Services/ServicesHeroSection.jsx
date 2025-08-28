import { motion } from 'framer-motion';

const ServicesHeroSection = () => {
  return (
    <section className="py-5 text-center text-white position-relative" 
             style={{background: 'linear-gradient(90deg, #198754 0%, #157347 100%)', marginTop: '35px'}}>
      <div className="container mt-5 pt-3">
        <motion.h1 
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nossos Serviços
        </motion.h1>
        <motion.p 
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Conheça as soluções inovadoras que estão transformando o agronegócio
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHeroSection;

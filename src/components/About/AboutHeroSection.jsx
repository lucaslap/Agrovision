import { motion } from 'framer-motion';

const AboutHeroSection = () => {
  return (
    <section className="hero-about py-5 text-center text-white">
      <div className="container pt-5">
        <motion.h1 
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nós
        </motion.h1>
        <motion.p 
          className="lead"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Conheça a AgroVision: tecnologia e inovação transformando o agronegócio brasileiro
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHeroSection;

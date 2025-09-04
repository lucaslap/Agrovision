import { motion } from 'framer-motion';

const ServicesIntroSection = () => {
  const badges = [
    { icon: 'bi-award', text: 'Tecnologia de ponta', color: 'primary' },
    { icon: 'bi-shield-check', text: 'Suporte especializado', color: 'success' },
    { icon: 'bi-graph-up', text: 'Resultados comprovados', color: 'warning' }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <motion.p 
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              A AgroVision oferece um conjunto completo de soluções tecnológicas para
              potencializar cada aspecto da sua operação agrícola.
            </motion.p>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-4 mb-5">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="badge-container text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className={`badge rounded-pill bg-${badge.color} px-3 py-2 fs-6 ${badge.color === 'warning' ? 'text-dark' : ''}`}>
                    <i className={`bi ${badge.icon} me-1`}></i> {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroSection;

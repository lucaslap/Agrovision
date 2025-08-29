import { motion } from 'framer-motion';

const MissionValuesSection = () => {
  const values = [
    {
      icon: "bi bi-lightbulb-fill",
      title: "Inovação:",
      description: "Buscamos constantemente novas soluções."
    },
    {
      icon: "bi bi-droplet-fill",
      title: "Sustentabilidade:",
      description: "Comprometidos com práticas sustentáveis."
    },
    {
      icon: "bi bi-shield-fill-check",
      title: "Ética:",
      description: "Transparência em todas as nossas operações."
    },
    {
      icon: "bi bi-people-fill",
      title: "Compromisso:",
      description: "Focados no sucesso de nossos clientes."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto text-center">
            <motion.h2 
              className="fw-bold mb-3"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Missão e Valores
            </motion.h2>
            <div className="section-divider mx-auto mb-4"></div>
            <motion.p 
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              O que nos move e os princípios que guiam cada solução AgroVision.
            </motion.p>
          </div>
        </div>
        
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6">
            <motion.div 
              className="mission-values-card h-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <motion.div
                  className="mission-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <i className="bi bi-bullseye fs-2"></i>
                </motion.div>
                <h3 className="card-title mb-3 fw-bold">Nossa Missão</h3>
                <p className="card-text lead text-muted">
                  Transformar o agronegócio por meio da tecnologia, oferecendo soluções que aumentem a eficiência e a
                  sustentabilidade das operações agrícolas.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="col-md-6">
            <motion.div 
              className="mission-values-card h-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <motion.div
                  className="values-icon"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <i className="bi bi-stars fs-2"></i>
                </motion.div>
                <h3 className="card-title mb-3 fw-bold">Nossos Valores</h3>
                <motion.ul 
                  className="values-list w-100"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {values.map((value, index) => (
                    <motion.li 
                      key={index}
                      className="value-item"
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <span className="value-icon">
                        <i className={`${value.icon} text-success`}></i>
                      </span>
                      <span>
                        <strong>{value.title}</strong> {value.description}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValuesSection;

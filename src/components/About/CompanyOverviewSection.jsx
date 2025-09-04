import { motion } from 'framer-motion';

const CompanyOverviewSection = () => {
  const features = [
    {
      icon: "bi bi-cpu",
      title: "Tecnologia de Ponta",
      description: "Utilizamos as mais avançadas tecnologias para monitoramento e análise do agronegócio."
    },
    {
      icon: "bi bi-bar-chart-line-fill",
      title: "Foco em Resultados",
      description: "Trabalhamos para que nossos clientes alcancem maior produtividade e eficiência."
    },
    {
      icon: "bi bi-globe2",
      title: "Monitoramento por Satélite",
      description: "Acompanhamento em tempo real para decisões mais inteligentes e precisas."
    },
    {
      icon: "bi bi-tree-fill",
      title: "Sustentabilidade",
      description: "Compromisso com práticas agrícolas responsáveis e respeito ao meio ambiente."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div 
              className="text-center mb-5"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold mb-3">Quem Somos</h2>
              <div className="section-divider mx-auto mb-4"></div>
            </motion.div>
            
            <motion.div 
              className="company-overview-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-body">
                <motion.div 
                  className="d-flex flex-column align-items-center mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="company-founded-icon">
                    <i className="bi bi-building fs-2"></i>
                  </div>
                  <h3 className="h4 mb-0 fw-bold text-center">Fundada em 2025</h3>
                </motion.div>

                <motion.p 
                  className="lead mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  A <span className="fw-bold text-success">AgroVision</span> é dedicada a soluções tecnológicas inovadoras
                  para o agronegócio. Nossa missão é ajudar produtores a maximizar resultados de forma sustentável, com
                  tecnologia de ponta e conhecimento especializado.
                </motion.p>

                <motion.div 
                  className="row g-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {features.map((feature, index) => (
                    <div key={index} className="col-md-6">
                      <motion.div
                        className="feature-item"
                        variants={itemVariants}
                        whileHover={{ x: 10, transition: { duration: 0.3 } }}
                      >
                        <span className="feature-icon">
                          <i className={feature.icon}></i>
                        </span>
                        <div>
                          <h4 className="h6 fw-bold mb-1">{feature.title}</h4>
                          <p className="mb-0 small text-muted">{feature.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>

                <motion.p 
                  className="mt-4 mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Com foco em <span className="fw-semibold text-success">monitoramento por satélite</span>, <span
                    className="fw-semibold text-success">análise de dados</span> e <span
                    className="fw-semibold text-success">agricultura de precisão</span>, ajudamos produtores rurais a
                  tomarem decisões mais inteligentes, maximizando resultados de forma sustentável.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;

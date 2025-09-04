import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "bi bi-camera",
      title: "Monitoramento por Satélite",
      description: "Visão completa da sua propriedade com tecnologia de sensoriamento remoto para detecção precoce de problemas e tomada de decisões baseada em dados.",
      benefits: [
        "Mapeamento com índices NDVI",
        "Identificação antecipada de problemas",
        "Relatórios precisos de área e produção"
      ],
      color: "primary"
    },
    {
      id: 2,
      icon: "bi bi-graph-up",
      title: "Análise de Dados Agrícolas",
      description: "Plataforma que transforma dados complexos em estratégias claras para maximizar a rentabilidade e otimizar o desempenho da sua lavoura.",
      benefits: [
        "Dashboards em tempo real",
        "Previsões para planejamento de safra",
        "Comparação de desempenho por áreas"
      ],
      color: "success"
    },
    {
      id: 3,
      icon: "bi bi-airplane",
      title: "Agricultura de Precisão",
      description: "Drones especializados para mapeamento detalhado, diagnóstico de plantio e aplicação localizada de defensivos com economia de recursos.",
      benefits: [
        "Imagens em alta resolução",
        "Economia de até 60% em defensivos",
        "Detecção de falhas e pragas"
      ],
      color: "warning"
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="features-section py-5">
      <div className="container">
        <motion.div 
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">Nossos Diferenciais</h2>
          <div className="section-divider"></div>
          <p className="lead text-muted">
            Tecnologias que transformam a agricultura convencional em
            agronegócio de precisão
          </p>
        </motion.div>

        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <div key={feature.id} className="col-md-4">
              <motion.div
                className="feature-card-wrapper h-100"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="feature-card h-100">
                  <div className="feature-icon-wrapper">
                    <div className={`feature-icon bg-${feature.color} bg-gradient text-white`}>
                      <i className={feature.icon}></i>
                    </div>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <ul className="feature-benefits">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle-fill"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-3">
                    <Link
                      to="/servicos"
                      className="btn btn-sm btn-outline-primary"
                      style={{ textDecoration: 'none' }}
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

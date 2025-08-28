import { motion } from 'framer-motion';
import { useState } from 'react';

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState('ia');

  const technologies = {
    ia: {
      title: "Inteligência Artificial",
      description: "Algoritmos avançados que analisam padrões de crescimento, condições do solo e previsões climáticas para otimizar a produção.",
      image: "/assets/img/imgFeatureIA.jpg",
      benefits: [
        "Detecção precoce de doenças e pragas",
        "Recomendações personalizadas para cada área da lavoura",
        "Modelos preditivos para estimativa de colheita",
        "Otimização de insumos baseada em dados históricos"
      ]
    },
    remote: {
      title: "Sensoriamento Remoto",
      description: "Imagens de satélite e drones para monitoramento em tempo real do desenvolvimento das plantações.",
      image: "/assets/img/imgFeatureSensoriamento.jpg",
      benefits: [
        "Mapeamento detalhado da propriedade",
        "Identificação de áreas com stress hídrico",
        "Análise de índices de vegetação (NDVI, EVI)",
        "Monitoramento da evolução da lavoura ao longo do tempo"
      ]
    },
    iot: {
      title: "Internet das Coisas (IoT)",
      description: "Sensores conectados que fornecem dados em tempo real sobre umidade do solo, temperatura e outros fatores críticos.",
      image: "/assets/img/imgFeatureIot.jpeg",
      benefits: [
        "Monitoramento 24/7 de parâmetros críticos",
        "Economia de água através de irrigação inteligente",
        "Alertas em tempo real de condições adversas",
        "Integração com sistemas automatizados de irrigação e pulverização"
      ]
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="tech-section py-5">
      <div className="container">
        <motion.div 
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">Tecnologias de Ponta</h2>
          <div className="section-divider"></div>
          <p className="lead text-muted">
            Combinamos as tecnologias mais avançadas para revolucionar o
            agronegócio
          </p>
        </motion.div>

        <div className="tech-tabs">
          <motion.ul
            className="nav nav-pills mb-4 justify-content-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <li className="nav-item">
              <motion.button
                className={`nav-link ${activeTab === 'ia' ? 'active' : ''}`}
                onClick={() => setActiveTab('ia')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-cpu"></i> Inteligência Artificial
              </motion.button>
            </li>
            <li className="nav-item">
              <motion.button
                className={`nav-link ${activeTab === 'remote' ? 'active' : ''}`}
                onClick={() => setActiveTab('remote')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-globe"></i> Sensoriamento Remoto
              </motion.button>
            </li>
            <li className="nav-item">
              <motion.button
                className={`nav-link ${activeTab === 'iot' ? 'active' : ''}`}
                onClick={() => setActiveTab('iot')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-wifi"></i> Internet das Coisas
              </motion.button>
            </li>
          </motion.ul>

          <motion.div 
            className="tab-content"
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <motion.div 
                  className="tech-image-container"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={technologies[activeTab].image}
                    alt={technologies[activeTab].title}
                    className="img-fluid rounded shadow tech-image"
                    loading="lazy"
                  />
                </motion.div>
              </div>
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="mb-4">{technologies[activeTab].title}</h3>
                  <p className="lead">{technologies[activeTab].description}</p>
                  <ul className="tech-benefits">
                    {technologies[activeTab].benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                      >
                        <i className="bi bi-check-circle text-success"></i>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;

import { motion } from 'framer-motion';
import { useState } from 'react';

const FeatureToggle = () => {
  const [activeFeature, setActiveFeature] = useState('satellite');

  const features = {
    satellite: {
      name: 'Monitoramento por Satélite',
      icon: 'bi-satellite',
      description: 'Imagens de alta resolução e análise NDVI em tempo real'
    },
    analytics: {
      name: 'Análise de Dados com IA',
      icon: 'bi-graph-up',
      description: 'Algoritmos avançados para previsão e otimização'
    },
    drone: {
      name: 'Operações com Drones',
      icon: 'bi-airplane',
      description: 'Mapeamento detalhado e aplicação de precisão'
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              className="feature-toggle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="feature-nav">
                <nav className="nav nav-pills nav-fill">
                  {Object.entries(features).map(([key, feature]) => (
                    <button
                      key={key}
                      className={`nav-link ${activeFeature === key ? 'active' : ''}`}
                      onClick={() => setActiveFeature(key)}
                    >
                      <i className={`${feature.icon} me-2`}></i>
                      <span className="d-none d-md-inline">{feature.name}</span>
                      <span className="d-md-none">{feature.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="p-4 text-center">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`bg-primary bg-opacity-10 rounded-circle p-4 d-inline-flex mb-3`}>
                    <i className={`${features[activeFeature].icon} text-primary`} style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h4 className="fw-bold mb-2">{features[activeFeature].name}</h4>
                  <p className="text-muted mb-4">{features[activeFeature].description}</p>
                  
                  <div className="demo-alert alert-info">
                    <i className="bi bi-arrow-down me-2"></i>
                    <strong>Role para baixo</strong> para ver esta funcionalidade em ação
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureToggle;

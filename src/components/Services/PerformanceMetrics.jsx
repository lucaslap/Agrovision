import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PerformanceMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      id: 'productivity',
      icon: 'bi-graph-up-arrow',
      value: 25,
      suffix: '%',
      label: 'Aumento médio na produtividade',
      color: 'success',
      description: 'Clientes relatam aumento médio de 25% na produtividade após implementação'
    },
    {
      id: 'cost-reduction',
      icon: 'bi-arrow-down-circle',
      value: 30,
      suffix: '%',
      label: 'Redução nos custos operacionais',
      color: 'primary',
      description: 'Economia significativa em insumos e mão de obra'
    },
    {
      id: 'detection',
      icon: 'bi-eye',
      value: 95,
      suffix: '%',
      label: 'Precisão na detecção de problemas',
      color: 'warning',
      description: 'IA detecta pragas e doenças com alta precisão'
    },
    {
      id: 'satisfaction',
      icon: 'bi-emoji-smile',
      value: 4.8,
      suffix: '/5',
      label: 'Satisfação dos clientes',
      color: 'info',
      description: 'Avaliação média dos nossos clientes'
    }
  ];

  const [animatedValues, setAnimatedValues] = useState(
    metrics.reduce((acc, metric) => {
      acc[metric.id] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    if (isVisible) {
      const animateNumbers = () => {
        metrics.forEach(metric => {
          let start = 0;
          const end = metric.value;
          const duration = 2000; // 2 segundos
          const increment = end / (duration / 16); // 60 FPS
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            
            setAnimatedValues(prev => ({
              ...prev,
              [metric.id]: start
            }));
          }, 16);
        });
      };

      // Delay para iniciar a animação
      const timeout = setTimeout(animateNumbers, 500);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <section className="py-5 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
        >
          <h2 className="fw-bold mb-3">
            <i className="bi bi-award me-2 text-primary"></i>
            Resultados Comprovados
          </h2>
          <div className="section-divider mx-auto mb-3"></div>
          <p className="lead text-muted">
            Números que demonstram o impacto real das nossas soluções
          </p>
        </motion.div>

        <div className="row g-4">
          {metrics.map((metric, index) => (
            <div key={metric.id} className="col-lg-3 col-md-6">
              <motion.div
                className="text-center h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`bg-${metric.color} bg-opacity-10 rounded-4 p-4 h-100 d-flex flex-column justify-content-center position-relative overflow-hidden`}>
                  {/* Background decoration */}
                  <div className={`position-absolute top-0 end-0 opacity-10`} style={{fontSize: '4rem'}}>
                    <i className={metric.icon}></i>
                  </div>
                  
                  {/* Content */}
                  <div className="position-relative">
                    <div className={`bg-${metric.color} text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`} 
                         style={{width: '80px', height: '80px', fontSize: '2rem'}}>
                      <i className={metric.icon}></i>
                    </div>
                    
                    <motion.div
                      className={`display-4 fw-bold text-${metric.color} mb-2`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {isVisible ? (
                        <>
                          {metric.id === 'satisfaction' 
                            ? animatedValues[metric.id].toFixed(1)
                            : Math.round(animatedValues[metric.id])
                          }
                          <span className="fs-3">{metric.suffix}</span>
                        </>
                      ) : (
                        '0' + metric.suffix
                      )}
                    </motion.div>
                    
                    <h5 className={`text-${metric.color} mb-3`}>
                      {metric.label}
                    </h5>
                    
                    <p className="text-muted small mb-0">
                      {metric.description}
                    </p>
                  </div>
                  
                  {/* Animated progress bar */}
                  <motion.div
                    className="mt-3"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className={`bg-${metric.color} bg-opacity-20 rounded-pill`} style={{height: '4px'}}>
                      <motion.div
                        className={`bg-${metric.color} rounded-pill h-100`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${metric.value > 5 ? metric.value : metric.value * 20}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Additional insights */}
        <motion.div
          className="row mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-8 mx-auto">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center">
              <h5 className="text-primary mb-3">
                <i className="bi bi-graph-up me-2"></i>
                Crescimento Sustentável
              </h5>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3 me-3">
                      <i className="bi bi-calendar-check text-success"></i>
                    </div>
                    <div className="text-start">
                      <div className="fw-bold">500+</div>
                      <small className="text-muted">Propriedades atendidas</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                      <i className="bi bi-geo-alt text-primary"></i>
                    </div>
                    <div className="text-start">
                      <div className="fw-bold">1M+</div>
                      <small className="text-muted">Hectares monitorados</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="bg-warning bg-opacity-10 rounded-circle p-3 me-3">
                      <i className="bi bi-clock text-warning"></i>
                    </div>
                    <div className="text-start">
                      <div className="fw-bold">24/7</div>
                      <small className="text-muted">Monitoramento ativo</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <a 
            href="/contato" 
            className="btn btn-primary btn-lg px-5"
          >
            <i className="bi bi-rocket me-2"></i>
            Seja Parte Dessas Estatísticas
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;

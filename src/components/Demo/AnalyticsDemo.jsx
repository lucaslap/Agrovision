import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnalyticsDemo = () => {
  const [selectedMetric, setSelectedMetric] = useState('productivity');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const metrics = {
    productivity: {
      name: 'Produtividade',
      current: '58.5 sc/ha',
      prediction: '61.2 sc/ha',
      change: '+4.6%',
      trend: 'up',
      color: 'success'
    },
    costs: {
      name: 'Custos Operacionais',
      current: 'R$ 2.847/ha',
      prediction: 'R$ 2.695/ha',
      change: '-5.3%',
      trend: 'down',
      color: 'primary'
    },
    water: {
      name: 'Consumo de Água',
      current: '485 mm',
      prediction: '412 mm',
      change: '-15.1%',
      trend: 'down',
      color: 'info'
    },
    fertilizer: {
      name: 'Uso de Fertilizantes',
      current: '285 kg/ha',
      prediction: '267 kg/ha',
      change: '-6.3%',
      trend: 'down',
      color: 'warning'
    }
  };

  const recommendations = [
    {
      id: 1,
      priority: 'alta',
      title: 'Aplicação de Potássio no Talhão 3',
      description: 'Deficiência de K detectada via análise foliar. Aplicar 40kg/ha de KCl.',
      impact: 'Aumento estimado: +3.2 sc/ha',
      icon: 'bi-droplet'
    },
    {
      id: 2,
      priority: 'média',
      title: 'Otimização da Irrigação',
      description: 'Ajustar horários de irrigação para reduzir evapotranspiração.',
      impact: 'Economia: 85mm de água',
      icon: 'bi-moisture'
    },
    {
      id: 3,
      priority: 'baixa',
      title: 'Monitoramento de Pragas',
      description: 'Risco elevado de percevejo nos próximos 7 dias.',
      impact: 'Prevenção de perdas',
      icon: 'bi-bug'
    }
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <motion.h2
              className="fw-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <i className="bi bi-graph-up me-2 text-success"></i>
              Análise de Dados com IA
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Inteligência artificial que transforma dados em decisões estratégicas
            </motion.p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="row g-3 mb-4">
              {Object.entries(metrics).map(([key, metric]) => (
                <div key={key} className="col-md-6">
                  <motion.div
                    className={`chart-container border ${selectedMetric === key ? 'border-primary' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedMetric(key)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 className="fw-bold mb-1">{metric.name}</h6>
                        <div className="h4 mb-0">{metric.current}</div>
                      </div>
                      <span className={`badge bg-${metric.color} bg-opacity-25 text-${metric.color}`}>
                        <i className={`bi bi-arrow-${metric.trend === 'up' ? 'up' : 'down'} me-1`}></i>
                        {metric.change}
                      </span>
                    </div>
                    
                    <div className="chart-placeholder position-relative">
                      <div className="chart-line" style={{ top: '30%' }}></div>
                      <div className="chart-line" style={{ top: '50%', animationDelay: '0.5s' }}></div>
                      <div className="chart-line" style={{ top: '70%', animationDelay: '1s' }}></div>
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <i className={`bi bi-graph-up text-${metric.color} opacity-25`} style={{ fontSize: '3rem' }}></i>
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <small className="text-muted">
                        Previsão: <strong className={`text-${metric.color}`}>{metric.prediction}</strong>
                      </small>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button 
                className="demo-button"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <i className="loading-spinner bi bi-arrow-clockwise me-2"></i>
                    Analisando dados...
                  </>
                ) : (
                  <>
                    <i className="bi bi-cpu me-2"></i>
                    Executar Nova Análise
                  </>
                )}
              </button>
              
              {isAnalyzing && (
                <div className="mt-3">
                  <div className="demo-alert alert-info">
                    <div className="d-flex align-items-center">
                      <div className="loading-spinner bi bi-gear me-2"></div>
                      <span>Processando 247.000 pontos de dados com algoritmos de machine learning...</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <div className="col-lg-4">
            <div className="h-100">
              <h5 className="fw-bold mb-3">
                <i className="bi bi-lightbulb me-2 text-warning"></i>
                Recomendações IA
              </h5>
              
              <div className="d-flex flex-column gap-3">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    className="p-3 bg-white rounded shadow-sm border-start border-3"
                    style={{ 
                      borderColor: rec.priority === 'alta' ? '#dc3545' : 
                                  rec.priority === 'média' ? '#ffc107' : '#6c757d' 
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="d-flex align-items-start">
                      <div className={`bg-${rec.priority === 'alta' ? 'danger' : rec.priority === 'média' ? 'warning' : 'secondary'} bg-opacity-10 rounded-circle p-2 me-3`}>
                        <i className={`${rec.icon} text-${rec.priority === 'alta' ? 'danger' : rec.priority === 'média' ? 'warning' : 'secondary'}`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-1">
                          <h6 className="fw-bold mb-0">{rec.title}</h6>
                          <span className={`badge bg-${rec.priority === 'alta' ? 'danger' : rec.priority === 'média' ? 'warning' : 'secondary'} bg-opacity-25 text-${rec.priority === 'alta' ? 'danger' : rec.priority === 'média' ? 'warning' : 'secondary'}`}>
                            {rec.priority}
                          </span>
                        </div>
                        <p className="small text-muted mb-2">{rec.description}</p>
                        <div className="small fw-medium text-success">
                          <i className="bi bi-arrow-up-right me-1"></i>
                          {rec.impact}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-primary bg-opacity-5 rounded">
                <h6 className="fw-bold text-primary mb-2">
                  <i className="bi bi-trophy me-2"></i>
                  ROI Estimado
                </h6>
                <div className="h3 text-primary mb-1">R$ 847.300</div>
                <small className="text-muted">Retorno previsto na safra atual</small>
                <div className="mt-2">
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '78%' }}></div>
                  </div>
                  <small className="text-muted">78% de confiança na previsão</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDemo;

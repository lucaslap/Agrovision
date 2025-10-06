import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SatelliteDemo = () => {
  const [currentView, setCurrentView] = useState('rgb');
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const views = {
    rgb: {
      name: 'Visão RGB',
      description: 'Imagem natural da propriedade',
      color: '#007bff'
    },
    ndvi: {
      name: 'Índice NDVI',
      description: 'Análise de vigor vegetativo',
      color: '#28a745'
    },
    thermal: {
      name: 'Termal',
      description: 'Detecção de stress hídrico',
      color: '#dc3545'
    }
  };

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Área com baixo NDVI detectada no Talhão 3',
      time: '2 min atrás',
      icon: 'bi-exclamation-triangle'
    },
    {
      id: 2,
      type: 'success',
      message: 'Irrigação otimizada no Talhão 1 - economia de 15%',
      time: '5 min atrás',
      icon: 'bi-check-circle'
    },
    {
      id: 3,
      type: 'info',
      message: 'Nova imagem de satélite processada',
      time: '10 min atrás',
      icon: 'bi-satellite'
    }
  ];

  return (
    <section className="py-5 bg-light">
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
              <i className="bi bi-satellite me-2 text-primary"></i>
              Monitoramento por Satélite
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Acompanhe sua propriedade com imagens de satélite atualizadas a cada 3 dias
            </motion.p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <motion.div
              className="satellite-map position-relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="map-overlay"></div>
              
              <div className="position-absolute top-0 start-0 p-3">
                <div className="bg-white rounded shadow-sm p-2 mb-2">
                  <small className="text-muted d-block">Coordenadas</small>
                  <strong>-15.5561°S, -54.2952°W</strong>
                </div>
                <div className="bg-white rounded shadow-sm p-2">
                  <small className="text-muted d-block">Última atualização</small>
                  <strong>Hoje, 14:30</strong>
                </div>
              </div>

              <div className="ndvi-legend">
                <h6 className="mb-2">Legenda NDVI</h6>
                <div className="ndvi-bar"></div>
                <div className="d-flex justify-content-between small text-muted">
                  <span>Baixo</span>
                  <span>Alto</span>
                </div>
                <div className="mt-2">
                  <small className="text-success">
                    <i className="bi bi-circle-fill me-1"></i>
                    94% da área em boa condição
                  </small>
                </div>
              </div>

              <div className="position-absolute bottom-0 start-0 end-0 p-3">
                <div className="progress mb-2" style={{ height: '6px' }}>
                  <div 
                    className="progress-bar bg-primary" 
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>
                <small className="text-muted">
                  <i className="loading-spinner bi bi-arrow-clockwise me-1"></i>
                  Processando imagens... {scanProgress}%
                </small>
              </div>
            </motion.div>

            <div className="mt-3">
              <div className="btn-group w-100" role="group">
                {Object.entries(views).map(([key, view]) => (
                  <button
                    key={key}
                    type="button"
                    className={`btn ${currentView === key ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setCurrentView(key)}
                  >
                    {view.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="h-100">
              <h5 className="fw-bold mb-3">Alertas em Tempo Real</h5>
              
              <div className="d-flex flex-column gap-3">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    className={`demo-alert alert-${alert.type}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="d-flex">
                      <i className={`${alert.icon} me-2 mt-1`}></i>
                      <div className="flex-grow-1">
                        <div className="fw-medium">{alert.message}</div>
                        <small className="text-muted">{alert.time}</small>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-white rounded shadow-sm">
                <h6 className="fw-bold mb-3">Estatísticas da Semana</h6>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="text-center">
                      <div className="h4 text-primary mb-1">18</div>
                      <small className="text-muted">Imagens processadas</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <div className="h4 text-success mb-1">5</div>
                      <small className="text-muted">Alertas enviados</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <div className="h4 text-warning mb-1">2.3</div>
                      <small className="text-muted">NDVI médio</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <div className="h4 text-info mb-1">98%</div>
                      <small className="text-muted">Cobertura</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteDemo;

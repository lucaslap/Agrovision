import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DashboardDemo = () => {
  const [currentMetrics, setCurrentMetrics] = useState({
    area: 1200,
    productivity: 58.5,
    health: 94,
    efficiency: 87
  });

  // Simular atualização em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetrics(prev => ({
        area: prev.area,
        productivity: parseFloat((prev.productivity + (Math.random() - 0.5) * 2).toFixed(1)),
        health: Math.max(85, Math.min(98, prev.health + (Math.random() - 0.5) * 4)),
        efficiency: Math.max(80, Math.min(95, prev.efficiency + (Math.random() - 0.5) * 3))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      id: 'area',
      label: 'Área Monitorada',
      value: currentMetrics.area,
      unit: 'ha',
      icon: 'bi-geo-alt',
      color: 'primary',
      change: null
    },
    {
      id: 'productivity',
      label: 'Produtividade Prevista',
      value: currentMetrics.productivity,
      unit: 'sc/ha',
      icon: 'bi-graph-up',
      color: 'success',
      change: '+12.3%'
    },
    {
      id: 'health',
      label: 'Índice de Saúde',
      value: Math.round(currentMetrics.health),
      unit: '%',
      icon: 'bi-heart-pulse',
      color: 'warning',
      change: '+5.2%'
    },
    {
      id: 'efficiency',
      label: 'Eficiência Operacional',
      value: Math.round(currentMetrics.efficiency),
      unit: '%',
      icon: 'bi-speedometer2',
      color: 'danger',
      change: '+8.7%'
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
              Dashboard em Tempo Real
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Visualização completa da sua propriedade com dados atualizados em tempo real
            </motion.p>
          </div>
        </div>

        <motion.div
          className="dashboard-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="dashboard-header">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h4 className="mb-1">Fazenda São Miguel - Soja</h4>
                <p className="mb-0 opacity-75">
                  <i className="bi bi-geo-alt me-1"></i>
                  Primavera do Leste, MT • Safra 2024/25
                </p>
              </div>
              <div className="col-md-4 text-md-end">
                <span className="badge bg-white bg-opacity-75  text-success border border-success px-3 py-2">
                  <i className="bi bi-circle-fill me-1" style={{ fontSize: '0.6rem' }}></i>
                  Online
                </span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="row g-4">
              {metrics.map((metric, index) => (
                <div key={metric.id} className="col-md-6 col-lg-3">
                  <motion.div
                    className={`metric-card ${metric.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className={`bg-${metric.color} bg-opacity-10 rounded-circle p-3`}>
                        <i className={`${metric.icon} text-${metric.color} fs-4`}></i>
                      </div>
                      {metric.change && (
                        <span className="metric-change positive">
                          <i className="bi bi-arrow-up"></i> {metric.change}
                        </span>
                      )}
                    </div>
                    
                    <div className="metric-value text-dark">
                      {metric.value}
                      <span className="fs-6 text-muted ms-1">{metric.unit}</span>
                    </div>
                    
                    <div className="metric-label">{metric.label}</div>
                    
                    <div className="data-flow mt-2"></div>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="row">
                <div className="col-md-8">
                  <div className="demo-alert alert-success">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle me-2"></i>
                      <div>
                        <strong>Tudo funcionando perfeitamente!</strong>
                        <br />
                        <small>Última atualização: há 2 minutos</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                  <button className="demo-button w-100">
                    <i className="bi bi-download me-2"></i>
                    Baixar Relatório
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardDemo;

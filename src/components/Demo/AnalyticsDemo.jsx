import { motion } from 'framer-motion';
import { useState } from 'react';

const AnalyticsDemo = () => {
  const [selectedMetric, setSelectedMetric] = useState('productivity');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

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
    setShowResults(false);
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  return (
    <section className="py-5" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill mb-4" 
                   style={{ background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(32, 201, 151, 0.1) 100%)', border: '1px solid rgba(40, 167, 69, 0.2)' }}>
                <i className="bi bi-robot text-success" style={{ fontSize: '1.2rem' }}></i>
                <span className="fw-semibold text-success">Machine Learning & IA</span>
              </div>
              
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
                <i className="bi bi-graph-up me-3" style={{ color: '#28a745', fontSize: '2.5rem' }}></i>
                Análise Preditiva com IA
              </h2>
              <p className="lead text-muted" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Inteligência artificial que transforma dados históricos em previsões precisas
                e decisões estratégicas para maximizar sua produtividade
              </p>
            </motion.div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-12">
            <div className="d-flex flex-column gap-4 mb-5">
              {Object.entries(metrics).map(([key, metric], index) => (
                <motion.div
                  key={key}
                  className="position-relative rounded-4 overflow-hidden"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedMetric(key)}
                  whileHover={{ 
                    y: -5,
                    boxShadow: selectedMetric === key 
                      ? '0 20px 50px rgba(40, 167, 69, 0.25)'
                      : '0 15px 40px rgba(0,0,0,0.12)',
                    transition: { duration: 0.2 }
                  }}
                  style={{ 
                    cursor: 'pointer',
                    background: selectedMetric === key 
                      ? `linear-gradient(135deg, rgba(${metric.color === 'success' ? '40, 167, 69' : metric.color === 'primary' ? '0, 123, 255' : '23, 162, 184'}, 0.15) 0%, rgba(${metric.color === 'success' ? '40, 167, 69' : metric.color === 'primary' ? '0, 123, 255' : '23, 162, 184'}, 0.08) 100%)`
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)',
                    border: selectedMetric === key ? `3px solid var(--bs-${metric.color})` : '2px solid rgba(0,0,0,0.08)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: selectedMetric === key 
                      ? '0 15px 40px rgba(40, 167, 69, 0.2)'
                      : '0 8px 25px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease'
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setSelectedMetric(key)}
                  aria-label={`Selecionar métrica de ${metric.name}`}
                >
                  {/* Indicator Bar */}
                  {selectedMetric === key && (
                    <motion.div
                      className="position-absolute top-0 start-0 w-100"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      style={{
                        height: '6px',
                        background: `linear-gradient(90deg, var(--bs-${metric.color}), rgba(${metric.color === 'success' ? '40, 167, 69' : metric.color === 'primary' ? '0, 123, 255' : '23, 162, 184'}, 0.5))`,
                        transformOrigin: 'left'
                      }}
                    />
                  )}
                  
                  <div className="p-4">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <motion.div 
                          className="rounded-3 d-flex align-items-center justify-content-center"
                          animate={selectedMetric === key ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            width: '80px',
                            height: '80px',
                            background: `linear-gradient(135deg, var(--bs-${metric.color}) 0%, rgba(${metric.color === 'success' ? '40, 167, 69' : metric.color === 'primary' ? '0, 123, 255' : '23, 162, 184'}, 0.8) 100%)`,
                            boxShadow: selectedMetric === key 
                              ? `0 10px 30px rgba(${metric.color === 'success' ? '40, 167, 69' : metric.color === 'primary' ? '0, 123, 255' : '23, 162, 184'}, 0.4)`
                              : `0 8px 20px rgba(${metric.color === 'success' ? '40, 167, 69' : metric.color === 'primary' ? '0, 123, 255' : '23, 162, 184'}, 0.2)`
                          }}
                        >
                          <i className="bi bi-graph-up-arrow text-white" style={{ fontSize: '2.2rem' }}></i>
                        </motion.div>
                      </div>
                      
                      <div className="col">
                        <div className="mb-2">
                          <small className="text-uppercase fw-bold text-muted d-flex align-items-center gap-2" style={{ fontSize: '0.75rem', letterSpacing: '1.5px' }}>
                            <i className="bi bi-dot" style={{ fontSize: '1.5rem', color: `var(--bs-${metric.color})` }}></i>
                            {metric.name}
                          </small>
                        </div>
                        <div className="d-flex align-items-end gap-3 mb-2">
                          <motion.h2 
                            className="mb-0 fw-bold" 
                            style={{ fontSize: '2.8rem', lineHeight: '1', color: '#2c3e50' }}
                            key={metric.current}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {metric.current}
                          </motion.h2>
                          <div className="mb-2">
                            <span 
                              className={`badge px-3 py-2 rounded-pill`} 
                              style={{ 
                                fontSize: '0.95rem',
                                background: `var(--bs-${metric.color})20`,
                                border: `2px solid var(--bs-${metric.color})40`,
                                color: `var(--bs-${metric.color})`
                              }}
                            >
                              <i className={`bi bi-arrow-${metric.trend === 'up' ? 'up' : 'down'}-circle-fill me-1`}></i>
                              {metric.change}
                            </span>
                          </div>
                        </div>
                        <small className="text-muted">
                          <i className="bi bi-clock-history me-1"></i>
                          Comparado à safra anterior
                        </small>
                      </div>
                      
                      <div className="col-auto text-end">
                        <div 
                          className="rounded-3 p-3 mb-3"
                          style={{
                            background: selectedMetric === key 
                              ? `linear-gradient(135deg, var(--bs-${metric.color})20 0%, var(--bs-${metric.color})10 100%)`
                              : 'rgba(248, 249, 250, 0.5)',
                            border: `2px solid ${selectedMetric === key ? `var(--bs-${metric.color})40` : 'rgba(0,0,0,0.05)'}`,
                            minWidth: '180px'
                          }}
                        >
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <i className="bi bi-stars" style={{ color: `var(--bs-${metric.color})`, fontSize: '1.2rem' }}></i>
                            <small className="text-muted fw-semibold" style={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                              PREVISÃO IA
                            </small>
                          </div>
                          <motion.div 
                            className={`h3 mb-0 fw-bold`}
                            style={{ color: `var(--bs-${metric.color})` }}
                            key={metric.prediction}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                          >
                            {metric.prediction}
                          </motion.div>
                        </div>
                        <div className="d-flex align-items-end justify-content-end gap-1">
                          {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                            <motion.div 
                              key={bar}
                              className={`bg-${metric.color}`}
                              initial={{ height: 0 }}
                              animate={{ 
                                height: selectedMetric === key 
                                  ? `${Math.random() * 35 + 25}px` 
                                  : `${Math.random() * 20 + 15}px`,
                                opacity: selectedMetric === key ? 0.8 : 0.3
                              }}
                              transition={{ duration: 0.5, delay: bar * 0.05 }}
                              style={{
                                width: '5px',
                                borderRadius: '3px 3px 0 0',
                                transition: 'all 0.3s ease'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center my-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="btn btn-lg px-5 py-3 rounded-pill position-relative overflow-hidden"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                whileHover={{ scale: isAnalyzing ? 1 : 1.05 }}
                whileTap={{ scale: isAnalyzing ? 1 : 0.95 }}
                style={{
                  background: isAnalyzing 
                    ? 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)'
                    : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  border: 'none',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.15rem',
                  boxShadow: isAnalyzing ? 'none' : '0 10px 30px rgba(40, 167, 69, 0.4)',
                  transition: 'all 0.3s ease',
                  cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                  opacity: isAnalyzing ? 0.7 : 1
                }}
                aria-label="Executar análise de dados com IA"
              >
                {isAnalyzing ? (
                  <>
                    <i className="loading-spinner bi bi-arrow-clockwise me-2"></i>
                    Processando Análise...
                  </>
                ) : (
                  <>
                    <i className="bi bi-cpu-fill me-2"></i>
                    {showResults ? 'Executar Nova Análise' : 'Iniciar Análise Preditiva'}
                  </>
                )}
              </motion.button>
              
              {isAnalyzing && (
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="d-inline-flex align-items-center gap-3 px-5 py-4 rounded-4" 
                       style={{ 
                         background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.12) 0%, rgba(0, 123, 255, 0.12) 100%)', 
                         border: '2px solid rgba(23, 162, 184, 0.3)',
                         boxShadow: '0 8px 25px rgba(23, 162, 184, 0.2)'
                       }}>
                    <div className="loading-spinner bi bi-gear-fill text-info" style={{ fontSize: '2rem' }}></div>
                    <div className="text-start">
                      <div className="fw-bold text-dark mb-1" style={{ fontSize: '1.05rem' }}>Processando dados em tempo real</div>
                      <div className="d-flex gap-3">
                        <small className="text-muted">
                          <i className="bi bi-database me-1"></i>
                          247.000 pontos
                        </small>
                        <small className="text-muted">
                          <i className="bi bi-cpu me-1"></i>
                          Machine Learning
                        </small>
                        <small className="text-muted">
                          <i className="bi bi-graph-up me-1"></i>
                          Deep Analysis
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mx-auto" style={{ maxWidth: '500px' }}>
                    <div className="d-flex justify-content-between mb-2">
                      <small className="text-muted fw-semibold">Analisando padrões históricos...</small>
                      <small className="text-info fw-bold">
                        <i className="bi bi-arrow-clockwise loading-spinner me-1"></i>
                        Em andamento
                      </small>
                    </div>
                    <div className="progress" style={{ height: '10px', borderRadius: '10px', background: 'rgba(0,0,0,0.05)' }}>
                      <div className="progress-bar progress-bar-striped progress-bar-animated" 
                           style={{ 
                             width: '100%',
                             background: 'linear-gradient(90deg, #17a2b8 0%, #007bff 100%)'
                           }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
          
          <div className="col-lg-12">
            {showResults && (
              <motion.div 
                className="h-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div>
                    <h4 className="fw-bold mb-2 d-flex align-items-center gap-2">
                      <div 
                        className="rounded-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: '48px',
                          height: '48px',
                          background: 'linear-gradient(135deg, #ffc107 0%, #e0a800 100%)',
                          boxShadow: '0 6px 20px rgba(255, 193, 7, 0.3)'
                        }}
                      >
                        <i className="bi bi-lightbulb-fill text-white" style={{ fontSize: '1.5rem' }}></i>
                      </div>
                      Recomendações Inteligentes
                    </h4>
                    <small className="text-muted ms-5 ps-3">
                      <i className="bi bi-robot me-1"></i>
                      Geradas por IA baseado em análise preditiva
                    </small>
                  </div>
                  <span className="badge px-4 py-3 rounded-pill" 
                        style={{ 
                          fontSize: '1rem',
                          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                          color: 'white',
                          boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)'
                        }}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    {recommendations.length} Ações Identificadas
                  </span>
                </div>
                
                <div className="row g-4">
                  {recommendations.map((rec, index) => (
                    <div key={rec.id} className="col-lg-4 col-md-6">
                      <motion.div
                        className="h-100 rounded-4 overflow-hidden position-relative"
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)',
                          border: '1px solid rgba(0,0,0,0.08)',
                          backdropFilter: 'blur(10px)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        whileHover={{ 
                          y: -8,
                          boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div 
                          className="position-absolute top-0 start-0 w-100" 
                          style={{ 
                            height: '6px',
                            background: rec.priority === 'alta' ? 'linear-gradient(90deg, #dc3545, #c82333)' : 
                                       rec.priority === 'média' ? 'linear-gradient(90deg, #ffc107, #e0a800)' : 
                                       'linear-gradient(90deg, #6c757d, #5a6268)'
                          }}
                        />
                        
                        <div className="p-4">
                          <div className="d-flex align-items-start justify-content-between mb-3">
                            <div 
                              className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{
                                width: '56px',
                                height: '56px',
                                background: rec.priority === 'alta' ? 'linear-gradient(135deg, #dc3545, #c82333)' : 
                                           rec.priority === 'média' ? 'linear-gradient(135deg, #ffc107, #e0a800)' : 
                                           'linear-gradient(135deg, #6c757d, #5a6268)',
                                boxShadow: `0 6px 20px rgba(${rec.priority === 'alta' ? '220, 53, 69' : rec.priority === 'média' ? '255, 193, 7' : '108, 117, 125'}, 0.4)`
                              }}
                            >
                              <i className={`${rec.icon} text-white`} style={{ fontSize: '1.5rem' }}></i>
                            </div>
                            <span 
                              className="badge text-uppercase px-3 py-2 rounded-pill" 
                              style={{ 
                                fontSize: '0.7rem',
                                fontWeight: '700',
                                letterSpacing: '0.8px',
                                background: rec.priority === 'alta' ? 'rgba(220, 53, 69, 0.15)' : 
                                           rec.priority === 'média' ? 'rgba(255, 193, 7, 0.15)' : 
                                           'rgba(108, 117, 125, 0.15)',
                                color: rec.priority === 'alta' ? '#dc3545' : 
                                      rec.priority === 'média' ? '#e0a800' : '#6c757d'
                              }}
                            >
                              {rec.priority}
                            </span>
                          </div>
                          
                          <h6 className="fw-bold mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>{rec.title}</h6>
                          <p className="text-muted mb-4" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{rec.description}</p>
                          
                          <div 
                            className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" 
                            style={{ background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.2)' }}
                          >
                            <i className="bi bi-graph-up-arrow text-success" style={{ fontSize: '1.1rem' }}></i>
                            <small className="text-success fw-semibold">{rec.impact}</small>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>

                <motion.div 
                  className="mt-5 p-5 rounded-4 position-relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.08) 0%, rgba(32, 201, 151, 0.08) 100%)',
                    border: '2px solid rgba(40, 167, 69, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: '64px',
                            height: '64px',
                            background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                            boxShadow: '0 8px 25px rgba(40, 167, 69, 0.4)'
                          }}
                        >
                          <i className="bi bi-trophy-fill text-white" style={{ fontSize: '2rem' }}></i>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-1" style={{ color: '#28a745' }}>ROI Estimado</h5>
                          <small className="text-muted">Retorno previsto para a safra atual</small>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="display-4 fw-bold mb-3"
                        style={{ color: '#28a745' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        R$ 847.300
                      </motion.div>
                      
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between mb-2">
                            <small className="fw-semibold text-dark">Nível de Confiança</small>
                            <small className="fw-bold text-success">78%</small>
                          </div>
                          <div className="progress" style={{ height: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.08)' }}>
                            <motion.div 
                              className="progress-bar"
                              style={{ 
                                background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)',
                                borderRadius: '8px'
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: '78%' }}
                              transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                        <div 
                          className="badge bg-success text-white px-3 py-2 rounded-pill"
                          style={{ fontSize: '0.85rem', fontWeight: '600' }}
                        >
                          <i className="bi bi-check-circle-fill me-1"></i>
                          Alta Precisão
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 text-center">
                      <div className="position-relative d-inline-block">
                        <svg width="160" height="160" viewBox="0 0 160 160">
                          <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="12"/>
                          <motion.circle 
                            cx="80" 
                            cy="80" 
                            r="70" 
                            fill="none" 
                            stroke="url(#gradient)" 
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeDasharray="440"
                            initial={{ strokeDashoffset: 440 }}
                            animate={{ strokeDashoffset: 440 - (440 * 0.78) }}
                            transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
                            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#28a745" />
                              <stop offset="100%" stopColor="#20c997" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="position-absolute top-50 start-50 translate-middle text-center">
                          <div className="h3 fw-bold text-success mb-0">78%</div>
                          <small className="text-muted">Confiança</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDemo;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Demo.css';

const AIAnalysisDemo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const exampleAnalyses = {
    soja: {
      crop: 'Soja',
      health: 72,
      status: 'Atenção Necessária',
      issues: [
        {
          type: 'Ferrugem Asiática',
          severity: 'Média',
          confidence: 87,
          description: 'Detectadas lesões características de ferrugem asiática nas folhas',
          treatment: 'Aplicação de fungicida triazol + estrobilurina. Recomenda-se tratamento em até 48 horas.'
        },
        {
          type: 'Deficiência Nutricional',
          severity: 'Baixa',
          confidence: 65,
          description: 'Possível deficiência de potássio identificada',
          treatment: 'Aplicação foliar de cloreto de potássio (200g/ha)'
        }
      ],
      recommendations: [
        'Monitorar evolução em 72 horas',
        'Aumentar frequência de irrigação em 15%',
        'Verificar pH do solo na próxima análise'
      ]
    },
    milho: {
      crop: 'Milho',
      health: 88,
      status: 'Bom Estado',
      issues: [
        {
          type: 'Lagarta do Cartucho',
          severity: 'Baixa',
          confidence: 76,
          description: 'Presença inicial de lagarta do cartucho detectada',
          treatment: 'Aplicação de inseticida biológico (Bacillus thuringiensis)'
        }
      ],
      recommendations: [
        'Manter monitoramento semanal',
        'Plantação em excelente desenvolvimento',
        'Continuar protocolo atual de manejo'
      ]
    },
    trigo: {
      crop: 'Trigo',
      health: 45,
      status: 'Crítico',
      issues: [
        {
          type: 'Brusone',
          severity: 'Alta',
          confidence: 92,
          description: 'Infecção avançada por brusone identificada',
          treatment: 'URGENTE: Aplicação imediata de fungicida específico (Triciclazol). Isolamento da área afetada.'
        },
        {
          type: 'Estresse Hídrico',
          severity: 'Alta',
          confidence: 89,
          description: 'Sinais severos de falta de água',
          treatment: 'Irrigação emergencial. Aumentar turno de rega.'
        }
      ],
      recommendations: [
        'Ação imediata necessária',
        'Consultar agrônomo para avaliação in loco',
        'Possível perda parcial da safra se não tratado em 24h'
      ]
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setAnalysis(null);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setAnalysis(null);
    }
  };

  const simulateAnalysis = () => {
    if (!selectedImage) return;

    setAnalyzing(true);
    setAnalysis(null);

    // Simula processamento de IA
    setTimeout(() => {
      // Escolhe aleatoriamente entre os exemplos
      const crops = Object.keys(exampleAnalyses);
      const randomCrop = crops[Math.floor(Math.random() * crops.length)];
      setAnalysis(exampleAnalyses[randomCrop]);
      setAnalyzing(false);
    }, 3000);
  };

  const getHealthColor = (health) => {
    if (health >= 80) return '#10b981';
    if (health >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const getSeverityColor = (severity) => {
    if (severity === 'Alta') return '#ef4444';
    if (severity === 'Média') return '#f59e0b';
    return '#3b82f6';
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
                <i className="bi bi-stars text-success" style={{ fontSize: '1.2rem' }}></i>
                <span className="fw-semibold text-success">Powered by AI</span>
              </div>
              
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
                <i className="bi bi-cpu-fill me-3" style={{ color: '#28a745', fontSize: '2.5rem' }}></i>
                Análise de Plantação por IA
              </h2>
              <p className="lead text-muted" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Faça upload de uma foto da sua plantação e nossa inteligência artificial
                analisará a saúde das plantas, identificará possíveis pragas ou doenças
                e sugerirá tratamentos adequados em tempo real
              </p>
            </motion.div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {!imagePreview ? (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-4 overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.9) 100%)',
                      border: dragActive ? '3px dashed #28a745' : '2px dashed rgba(0,0,0,0.1)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: dragActive ? '0 15px 40px rgba(40, 167, 69, 0.2)' : '0 8px 25px rgba(0,0,0,0.08)'
                    }}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <label htmlFor="image-upload" className="d-block p-5 text-center" style={{ cursor: 'pointer', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <motion.div
                        animate={dragActive ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="mb-4">
                          <div 
                            className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                            style={{
                              width: '100px',
                              height: '100px',
                              background: dragActive ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' : 'linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(32, 201, 151, 0.1) 100%)',
                              boxShadow: dragActive ? '0 10px 30px rgba(40, 167, 69, 0.3)' : 'none',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <i className={`bi ${dragActive ? 'bi-cloud-arrow-down-fill' : 'bi-cloud-arrow-up'}`} 
                               style={{ fontSize: '3rem', color: dragActive ? 'white' : '#28a745', transition: 'all 0.3s ease' }}></i>
                          </div>
                        </div>
                        
                        <h3 className="fw-bold mb-2" style={{ color: dragActive ? '#28a745' : '#2c3e50' }}>
                          {dragActive ? 'Solte a imagem aqui' : 'Clique para fazer upload'}
                        </h3>
                        <p className="text-muted mb-3" style={{ fontSize: '1rem' }}>
                          ou arraste e solte uma imagem aqui
                        </p>
                        
                        <div className="d-flex justify-content-center gap-2 mb-3">
                          <span className="badge bg-light text-dark px-3 py-2" style={{ fontSize: '0.85rem' }}>
                            <i className="bi bi-file-image me-1"></i>PNG
                          </span>
                          <span className="badge bg-light text-dark px-3 py-2" style={{ fontSize: '0.85rem' }}>
                            <i className="bi bi-file-image me-1"></i>JPG
                          </span>
                          <span className="badge bg-light text-dark px-3 py-2" style={{ fontSize: '0.85rem' }}>
                            <i className="bi bi-file-image me-1"></i>JPEG
                          </span>
                        </div>
                        
                        <small className="text-muted">Tamanho máximo: 10MB</small>
                      </motion.div>
                      
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </motion.div>
                ) : (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-4 overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.9) 100%)',
                      border: '2px solid rgba(0,0,0,0.08)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div className="p-4">
                      <div className="position-relative rounded-3 overflow-hidden mb-3" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                        <img src={imagePreview} alt="Preview" className="w-100" style={{ display: 'block', maxHeight: '350px', objectFit: 'cover' }} />
                        <div className="position-absolute top-0 start-0 m-3">
                          <span className="badge bg-success text-white px-3 py-2" style={{ fontSize: '0.85rem', backdropFilter: 'blur(10px)' }}>
                            <i className="bi bi-check-circle-fill me-1"></i>
                            Imagem Carregada
                          </span>
                        </div>
                      </div>
                      
                      <motion.button
                        className="btn btn-outline-secondary w-100 rounded-pill py-2"
                        onClick={() => {
                          setImagePreview(null);
                          setSelectedImage(null);
                          setAnalysis(null);
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <i className="bi bi-arrow-counterclockwise me-2"></i>
                        Trocar Imagem
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {selectedImage && !analyzing && !analysis && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="btn btn-lg w-100 mt-3 rounded-pill py-3"
                    onClick={simulateAnalysis}
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(40, 167, 69, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                      border: 'none',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      boxShadow: '0 8px 25px rgba(40, 167, 69, 0.3)'
                    }}
                  >
                    <i className="bi bi-cpu-fill me-2"></i>
                    Iniciar Análise com IA
                  </motion.button>
                )}

                {analyzing && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-3 rounded-4 p-4 text-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(0, 123, 255, 0.1) 100%)',
                      border: '2px solid rgba(23, 162, 184, 0.2)'
                    }}
                  >
                    <div className="loading-spinner bi bi-arrow-clockwise text-info mb-3" style={{ fontSize: '3rem' }}></div>
                    <h5 className="fw-bold mb-2">Analisando imagem...</h5>
                    <p className="text-muted mb-3">Processando com algoritmos de Deep Learning</p>
                    
                    <div className="progress mb-2" style={{ height: '8px', borderRadius: '10px', background: 'rgba(0,0,0,0.05)' }}>
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: '100%' }}></div>
                    </div>
                    
                    <div className="d-flex justify-content-center gap-3 mt-3">
                      <small className="text-muted">
                        <i className="bi bi-shield-check me-1"></i>
                        Verificando qualidade
                      </small>
                      <small className="text-muted">
                        <i className="bi bi-bug me-1"></i>
                        Detectando pragas
                      </small>
                      <small className="text-muted">
                        <i className="bi bi-droplet me-1"></i>
                        Analisando saúde
                      </small>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <AnimatePresence mode="wait">
              {analysis ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-4 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)',
                    border: '2px solid rgba(0,0,0,0.08)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }}
                >
                  <div className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4 pb-3" style={{ borderBottom: '2px solid #e9ecef' }}>
                      <h4 className="fw-bold mb-0">
                        <i className="bi bi-clipboard-data me-2 text-success"></i>
                        Resultado da Análise
                      </h4>
                      <span className="badge px-3 py-2 rounded-pill" style={{
                        background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}>
                        <i className="bi bi-plant-fill me-1"></i>
                        {analysis.crop}
                      </span>
                    </div>

                    {/* Health Score with Animation */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted fw-semibold">Índice de Saúde</span>
                        <motion.span 
                          className="h3 fw-bold mb-0"
                          style={{ color: getHealthColor(analysis.health) }}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {analysis.health}%
                        </motion.span>
                      </div>
                      
                      <div className="progress mb-3" style={{ height: '16px', borderRadius: '10px', background: 'rgba(0,0,0,0.05)' }}>
                        <motion.div
                          className="progress-bar"
                          style={{
                            background: `linear-gradient(90deg, ${getHealthColor(analysis.health)}, ${getHealthColor(analysis.health)}dd)`,
                            borderRadius: '10px'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${analysis.health}%` }}
                          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        />
                      </div>
                      
                      <div className="d-inline-block px-3 py-2 rounded-pill" style={{
                        background: `${getHealthColor(analysis.health)}20`,
                        border: `2px solid ${getHealthColor(analysis.health)}40`
                      }}>
                        <span className="fw-semibold" style={{ color: getHealthColor(analysis.health) }}>
                          <i className={`bi ${analysis.health >= 80 ? 'bi-check-circle-fill' : analysis.health >= 60 ? 'bi-exclamation-circle-fill' : 'bi-x-circle-fill'} me-2`}></i>
                          {analysis.status}
                        </span>
                      </div>
                    </div>

                    {/* Detected Issues */}
                    {analysis.issues.length > 0 && (
                      <div className="mb-4">
                        <h5 className="fw-bold mb-3">
                          <i className="bi bi-exclamation-triangle me-2 text-warning"></i>
                          Problemas Identificados ({analysis.issues.length})
                        </h5>
                        
                        <div className="d-flex flex-column gap-3">
                          {analysis.issues.map((issue, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.5 + (index * 0.15) }}
                              className="rounded-3 p-3"
                              style={{
                                background: '#f8f9fa',
                                border: `2px solid ${getSeverityColor(issue.severity)}30`
                              }}
                            >
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <div className="flex-grow-1">
                                  <h6 className="fw-bold mb-1">{issue.type}</h6>
                                  <small className="text-muted">
                                    <i className="bi bi-graph-up me-1"></i>
                                    Confiança: {issue.confidence}%
                                  </small>
                                </div>
                                <span className="badge px-3 py-2 rounded-pill" style={{
                                  backgroundColor: getSeverityColor(issue.severity),
                                  color: 'white',
                                  fontSize: '0.75rem',
                                  fontWeight: '700'
                                }}>
                                  {issue.severity}
                                </span>
                              </div>
                              
                              <p className="text-muted mb-3 small">{issue.description}</p>
                              
                              <div className="rounded-3 p-3" style={{
                                background: 'white',
                                borderLeft: `4px solid #28a745`
                              }}>
                                <div className="d-flex gap-2 align-items-start">
                                  <i className="bi bi-prescription2 text-success mt-1" style={{ fontSize: '1.2rem' }}></i>
                                  <div>
                                    <strong className="text-success d-block mb-1" style={{ fontSize: '0.85rem' }}>
                                      Tratamento Recomendado:
                                    </strong>
                                    <p className="mb-0 small text-muted">{issue.treatment}</p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Recommendations */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="rounded-3 p-3 mb-3"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.08) 0%, rgba(23, 162, 184, 0.08) 100%)',
                        border: '2px solid rgba(0, 123, 255, 0.2)'
                      }}
                    >
                      <h5 className="fw-bold mb-3">
                        <i className="bi bi-lightbulb-fill me-2" style={{ color: '#ffc107' }}></i>
                        Recomendações
                      </h5>
                      
                      <div className="d-flex flex-column gap-2">
                        {analysis.recommendations.map((rec, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                            className="d-flex align-items-start gap-2"
                          >
                            <i className="bi bi-check-circle-fill text-success mt-1" style={{ fontSize: '1.1rem' }}></i>
                            <span className="text-muted">{rec}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.button
                      className="btn btn-primary w-100 rounded-pill py-2"
                      onClick={() => {
                        setImagePreview(null);
                        setSelectedImage(null);
                        setAnalysis(null);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <i className="bi bi-arrow-repeat me-2"></i>
                      Nova Análise
                    </motion.button>
                  </div>
                </motion.div>
              ) : !analyzing && (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-4 overflow-hidden h-100 d-flex align-items-center justify-content-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(248, 249, 250, 0.5) 100%)',
                    border: '2px dashed rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(10px)',
                    minHeight: '400px'
                  }}
                >
                  <div className="text-center p-5">
                    <i className="bi bi-stars text-muted mb-3" style={{ fontSize: '4rem', opacity: 0.3 }}></i>
                    <h5 className="text-muted fw-semibold">Resultados aparecerão aqui</h5>
                    <p className="text-muted small">Faça upload de uma imagem e clique em analisar</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="row g-4 mt-4">
          {[
            { icon: 'bi-bullseye', title: 'Precisão Elevada', desc: 'Modelos treinados com milhares de imagens de plantações', color: '#007bff' },
            { icon: 'bi-lightning-charge-fill', title: 'Análise Rápida', desc: 'Resultados em segundos com recomendações práticas', color: '#ffc107' },
            { icon: 'bi-box-seam', title: 'Múltiplas Culturas', desc: 'Suporte para soja, milho, trigo, algodão e mais', color: '#28a745' },
            { icon: 'bi-graph-up', title: 'Histórico Completo', desc: 'Acompanhe a evolução da saúde das plantações', color: '#17a2b8' }
          ].map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 15px 40px rgba(0,0,0,0.12)' }}
                className="rounded-4 p-4 text-center h-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.8) 100%)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '70px',
                    height: '70px',
                    background: `${item.color}20`,
                    border: `2px solid ${item.color}40`
                  }}
                >
                  <i className={`bi ${item.icon}`} style={{ fontSize: '2rem', color: item.color }}></i>
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted mb-0 small">{item.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAnalysisDemo;

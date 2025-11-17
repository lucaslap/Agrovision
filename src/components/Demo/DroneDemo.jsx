import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const DroneDemo = () => {
  const [missionStatus, setMissionStatus] = useState('planning');
  const [dronePosition, setDronePosition] = useState({ x: 10, y: 50 });
  const [completedArea, setCompletedArea] = useState(0);
  const [photoCount, setPhotoCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(25);
  const [showResults, setShowResults] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  const missionPhases = {
    planning: {
      name: 'Planejamento',
      description: 'Definindo rota de voo otimizada',
      color: '#6c757d',
      icon: 'bi-map-fill',
      gradient: 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)'
    },
    takeoff: {
      name: 'Decolagem',
      description: 'Drone iniciando missão',
      color: '#ffc107',
      icon: 'bi-rocket-takeoff-fill',
      gradient: 'linear-gradient(135deg, #ffc107 0%, #e0a800 100%)'
    },
    scanning: {
      name: 'Escaneamento',
      description: 'Capturando imagens aéreas em alta resolução',
      color: '#007bff',
      icon: 'bi-camera-fill',
      gradient: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)'
    },
    analysis: {
      name: 'Processamento',
      description: 'Analisando dados coletados com IA',
      color: '#17a2b8',
      icon: 'bi-cpu-fill',
      gradient: 'linear-gradient(135deg, #17a2b8 0%, #117a8b 100%)'
    },
    completed: {
      name: 'Concluído',
      description: 'Missão finalizada com sucesso',
      color: '#28a745',
      icon: 'bi-check-circle-fill',
      gradient: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)'
    }
  };

  const detectedIssues = [
    {
      id: 1,
      type: 'pest',
      severity: 'high',
      location: 'Talhão 2 - Quadrante NE',
      description: 'Focos de lagarta-da-soja detectados',
      area: '12.5 ha',
      action: 'Aplicação localizada de inseticida recomendada',
      icon: 'bi-bug-fill',
      color: '#dc3545',
      confidence: 92
    },
    {
      id: 2,
      type: 'water',
      severity: 'medium',
      location: 'Talhão 1 - Setor Central',
      description: 'Estresse hídrico moderado identificado',
      area: '8.2 ha',
      action: 'Intensificar irrigação nas próximas 48h',
      icon: 'bi-droplet-fill',
      color: '#ffc107',
      confidence: 87
    },
    {
      id: 3,
      type: 'nutrition',
      severity: 'low',
      location: 'Talhão 3 - Bordadura Sul',
      description: 'Deficiência nutricional leve (Nitrogênio)',
      area: '3.7 ha',
      action: 'Monitoramento contínuo e adubação foliar',
      icon: 'bi-droplet-half',
      color: '#17a2b8',
      confidence: 78
    }
  ];

  const startMission = () => {
    const phases = ['planning', 'takeoff', 'scanning', 'analysis', 'completed'];
    let currentPhaseIndex = 0;
    
    setMissionStatus('planning');
    setCompletedArea(0);
    setPhotoCount(0);
    setTimeRemaining(25);
    setShowResults(false);
    setIsFlying(false);
    setDronePosition({ x: 10, y: 50 });
    
    const interval = setInterval(() => {
      currentPhaseIndex++;
      if (currentPhaseIndex < phases.length) {
        setMissionStatus(phases[currentPhaseIndex]);
        
        if (phases[currentPhaseIndex] === 'scanning') {
          setIsFlying(true);
        }
        
        if (phases[currentPhaseIndex] === 'analysis' || phases[currentPhaseIndex] === 'completed') {
          setIsFlying(false);
        }
        
        // Atualizar progresso
        const progress = ((currentPhaseIndex + 1) / phases.length) * 100;
        setCompletedArea(progress);
        
      } else {
        clearInterval(interval);
        setShowResults(true);
        setCompletedArea(100);
        setPhotoCount(1247);
        setTimeRemaining(0);
      }
    }, 2500);
  };

  // Simular movimento do drone durante scanning
  useEffect(() => {
    if (isFlying && missionStatus === 'scanning') {
      const interval = setInterval(() => {
        setDronePosition(prev => {
          const newX = prev.x + 0.8;
          if (newX > 90) {
            setIsFlying(false);
            return { x: 90, y: 50 };
          }
          return {
            x: newX,
            y: 50 + Math.sin(newX * 0.15) * 15
          };
        });
        
        // Incrementar fotos e atualizar tempo
        setPhotoCount(prev => Math.min(prev + Math.floor(Math.random() * 15 + 5), 1247));
        setTimeRemaining(prev => Math.max(prev - 0.3, 0));
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isFlying, missionStatus]);

  const getSeverityBadge = (severity) => {
    const badges = {
      high: { label: 'Alta', color: '#dc3545' },
      medium: { label: 'Média', color: '#ffc107' },
      low: { label: 'Baixa', color: '#17a2b8' }
    };
    return badges[severity];
  };

  return (
    <section className="py-5" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)' }}>
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
                   style={{ background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(253, 126, 20, 0.1) 100%)', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                <i className="bi bi-broadcast text-warning" style={{ fontSize: '1.2rem' }}></i>
                <span className="fw-semibold text-warning">Tecnologia Autônoma</span>
              </div>
              
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
                <i className="bi bi-airplane me-3" style={{ color: '#ffc107', fontSize: '2.5rem' }}></i>
                Monitoramento com Drones
              </h2>
              <p className="lead text-muted" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Mapeamento aéreo de alta precisão com detecção automática de pragas,
                doenças e otimização de aplicação de defensivos
              </p>
            </motion.div>
          </div>
        </div>

        {/* Drone Flight Simulator */}
        <div className="row mb-4">
          <div className="col-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-4 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)',
                border: '2px solid rgba(0,0,0,0.08)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
              }}
            >
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center p-4" style={{ borderBottom: '2px solid #e9ecef' }}>
                <div>
                  <h4 className="fw-bold mb-1">
                    <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                    Missão: Mapeamento Completo
                  </h4>
                  <small className="text-muted">
                    <i className="bi bi-pin-map me-1"></i>
                    Fazenda São Miguel • 1.200 hectares
                  </small>
                </div>
                <div className="text-end">
                  <div 
                    className="badge px-4 py-2 rounded-pill" 
                    style={{
                      background: `${missionPhases[missionStatus].color}20`,
                      border: `2px solid ${missionPhases[missionStatus].color}40`,
                      color: missionPhases[missionStatus].color,
                      fontSize: '0.95rem',
                      fontWeight: '600'
                    }}
                  >
                    <i className={`${missionPhases[missionStatus].icon} me-2`}></i>
                    {missionPhases[missionStatus].name}
                  </div>
                </div>
              </div>

              {/* Flight Area Visualization */}
              <div className="p-4 position-relative" style={{ minHeight: '300px', background: 'linear-gradient(180deg, #e3f2fd 0%, #f5f5f5 100%)' }}>
                {/* Grid Background */}
                <svg width="100%" height="280" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.3 }}>
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ccc" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Flight Path */}
                <svg width="100%" height="280" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <motion.path
                    d="M 5% 50% Q 25% 30%, 45% 50% T 85% 50%"
                    stroke="#007bff"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: missionStatus !== 'planning' ? 1 : 0, 
                      opacity: missionStatus !== 'planning' ? 0.6 : 0 
                    }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />
                </svg>

                {/* Drone Icon */}
                <AnimatePresence>
                  {(missionStatus === 'scanning' || missionStatus === 'takeoff') && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      style={{
                        position: 'absolute',
                        left: `${dronePosition.x}%`,
                        top: `${dronePosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10
                      }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                            boxShadow: '0 8px 25px rgba(0, 123, 255, 0.5)'
                          }}
                        >
                          <i className="bi bi-airplane-fill text-white" style={{ fontSize: '1.8rem' }}></i>
                        </div>
                        {/* Camera pulse effect */}
                        {missionStatus === 'scanning' && (
                          <motion.div
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: '100px',
                              height: '100px',
                              borderRadius: '50%',
                              border: '3px solid #28a745',
                              transform: 'translate(-50%, -50%)'
                            }}
                            animate={{
                              scale: [1, 2, 2],
                              opacity: [0.8, 0.4, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeOut'
                            }}
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Area Markers */}
                {[
                  { x: 15, y: 30, label: 'Talhão 1' },
                  { x: 40, y: 65, label: 'Talhão 2' },
                  { x: 70, y: 35, label: 'Talhão 3' }
                ].map((marker, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    style={{
                      position: 'absolute',
                      left: `${marker.x}%`,
                      top: `${marker.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="rounded-circle mb-1"
                        style={{
                          width: '12px',
                          height: '12px',
                          background: '#28a745',
                          border: '3px solid white',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                          margin: '0 auto'
                        }}
                      />
                      <small className="badge bg-white text-dark px-2 py-1" style={{ fontSize: '0.7rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        {marker.label}
                      </small>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="row g-0" style={{ borderTop: '2px solid #e9ecef' }}>
                <div className="col-4 p-4 text-center" style={{ borderRight: '1px solid #e9ecef' }}>
                  <motion.div
                    key={completedArea}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h2 fw-bold mb-1" style={{ color: '#007bff' }}>
                      {completedArea.toFixed(0)}%
                    </div>
                    <small className="text-muted fw-semibold">
                      <i className="bi bi-grid-3x3-gap me-1"></i>
                      Área Mapeada
                    </small>
                  </motion.div>
                </div>
                
                <div className="col-4 p-4 text-center" style={{ borderRight: '1px solid #e9ecef' }}>
                  <motion.div
                    key={photoCount}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h2 fw-bold mb-1" style={{ color: '#28a745' }}>
                      {photoCount.toLocaleString()}
                    </div>
                    <small className="text-muted fw-semibold">
                      <i className="bi bi-camera me-1"></i>
                      Fotos Capturadas
                    </small>
                  </motion.div>
                </div>
                
                <div className="col-4 p-4 text-center">
                  <motion.div
                    key={timeRemaining}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h2 fw-bold mb-1" style={{ color: '#ffc107' }}>
                      {Math.ceil(timeRemaining)}min
                    </div>
                    <small className="text-muted fw-semibold">
                      <i className="bi bi-clock me-1"></i>
                      Tempo Restante
                    </small>
                  </motion.div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="px-4 pb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted fw-semibold">{missionPhases[missionStatus].description}</small>
                  <small className="fw-bold" style={{ color: missionPhases[missionStatus].color }}>
                    {missionStatus === 'completed' ? '100%' : `${completedArea.toFixed(0)}%`}
                  </small>
                </div>
                <div className="progress" style={{ height: '12px', borderRadius: '10px', background: 'rgba(0,0,0,0.05)' }}>
                  <motion.div
                    className="progress-bar"
                    style={{
                      background: missionPhases[missionStatus].gradient,
                      borderRadius: '10px'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${completedArea}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Control Button */}
            <div className="text-center mt-4">
              <motion.button
                className="btn btn-lg px-5 py-3 rounded-pill"
                onClick={startMission}
                disabled={missionStatus !== 'planning' && missionStatus !== 'completed'}
                whileHover={{ scale: missionStatus === 'planning' || missionStatus === 'completed' ? 1.05 : 1 }}
                whileTap={{ scale: missionStatus === 'planning' || missionStatus === 'completed' ? 0.95 : 1 }}
                style={{
                  background: missionStatus === 'planning' || missionStatus === 'completed' 
                    ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)'
                    : 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)',
                  border: 'none',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: missionStatus === 'planning' || missionStatus === 'completed' 
                    ? '0 8px 25px rgba(40, 167, 69, 0.4)' 
                    : 'none',
                  cursor: missionStatus === 'planning' || missionStatus === 'completed' ? 'pointer' : 'not-allowed',
                  opacity: missionStatus === 'planning' || missionStatus === 'completed' ? 1 : 0.6
                }}
              >
                <i className={`bi ${missionStatus === 'completed' ? 'bi-arrow-repeat' : 'bi-play-fill'} me-2`}></i>
                {missionStatus === 'completed' ? 'Reiniciar Missão' : missionStatus === 'planning' ? 'Iniciar Missão' : 'Em Andamento...'}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <AnimatePresence>
          {showResults && missionStatus === 'completed' && (
            <motion.div
              className="row g-4 mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Detected Issues */}
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="fw-bold mb-4">
                    <i className="bi bi-exclamation-triangle-fill me-2" style={{ color: '#ffc107' }}></i>
                    Problemas Detectados
                  </h4>
                  
                  <div className="d-flex flex-column gap-3">
                    {detectedIssues.map((issue, index) => (
                      <motion.div
                        key={issue.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + (index * 0.15) }}
                        whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}
                        className="rounded-4 p-4"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)',
                          border: `2px solid ${issue.color}30`,
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div className="d-flex align-items-center gap-3">
                            <div 
                              className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{
                                width: '56px',
                                height: '56px',
                                background: `${issue.color}20`,
                                border: `2px solid ${issue.color}40`
                              }}
                            >
                              <i className={`bi ${issue.icon}`} style={{ fontSize: '1.5rem', color: issue.color }}></i>
                            </div>
                            <div>
                              <h6 className="fw-bold mb-1">{issue.description}</h6>
                              <small className="text-muted">
                                <i className="bi bi-geo-alt me-1"></i>
                                {issue.location}
                              </small>
                            </div>
                          </div>
                          <span 
                            className="badge px-3 py-2 rounded-pill" 
                            style={{
                              background: `${getSeverityBadge(issue.severity).color}20`,
                              border: `2px solid ${getSeverityBadge(issue.severity).color}40`,
                              color: getSeverityBadge(issue.severity).color,
                              fontSize: '0.75rem',
                              fontWeight: '700',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {getSeverityBadge(issue.severity).label}
                          </span>
                        </div>
                        
                        <div className="d-flex gap-3 mb-3">
                          <div className="flex-grow-1">
                            <small className="text-muted d-block mb-1">Área Afetada</small>
                            <div className="fw-bold" style={{ color: issue.color }}>{issue.area}</div>
                          </div>
                          <div className="flex-grow-1">
                            <small className="text-muted d-block mb-1">Confiança</small>
                            <div className="fw-bold text-success">{issue.confidence}%</div>
                          </div>
                        </div>
                        
                        <div 
                          className="rounded-3 p-3"
                          style={{
                            background: 'rgba(40, 167, 69, 0.08)',
                            border: '2px solid rgba(40, 167, 69, 0.2)'
                          }}
                        >
                          <div className="d-flex gap-2 align-items-start">
                            <i className="bi bi-lightbulb-fill text-success mt-1" style={{ fontSize: '1.1rem' }}></i>
                            <div>
                              <strong className="text-success d-block mb-1" style={{ fontSize: '0.85rem' }}>
                                Ação Recomendada:
                              </strong>
                              <p className="mb-0 small text-muted">{issue.action}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Insights and Next Steps */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  {/* Next Mission */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="rounded-4 p-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(253, 126, 20, 0.1) 100%)',
                      border: '2px solid rgba(255, 193, 7, 0.3)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 15px rgba(255, 193, 7, 0.2)'
                    }}
                  >
                    <h5 className="fw-bold mb-3">
                      <i className="bi bi-calendar-check-fill me-2 text-warning"></i>
                      Próxima Missão Agendada
                    </h5>
                    
                    <div className="mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <i className="bi bi-droplet-fill" style={{ color: '#dc3545', fontSize: '1.2rem' }}></i>
                        <strong>Aplicação de Defensivos</strong>
                      </div>
                      <div className="ms-4">
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <i className="bi bi-clock text-muted"></i>
                          <span className="text-muted">Data: <strong className="text-warning">Amanhã, 06:00</strong></span>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <i className="bi bi-geo-alt text-muted"></i>
                          <span className="text-muted">Local: <strong>Talhão 2 - 12.5 ha</strong></span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="bi bi-droplet text-muted"></i>
                          <span className="text-muted">Produto: <strong>Inseticida para lagarta</strong></span>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className="rounded-3 p-3"
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(255, 193, 7, 0.2)'
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="small fw-semibold">Status</span>
                        <span className="badge bg-warning text-dark px-3 py-1">
                          <i className="bi bi-check-circle me-1"></i>
                          Confirmado
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Efficiency Stats */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="rounded-4 p-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(32, 201, 151, 0.1) 100%)',
                      border: '2px solid rgba(40, 167, 69, 0.3)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 15px rgba(40, 167, 69, 0.2)'
                    }}
                  >
                    <h5 className="fw-bold mb-3">
                      <i className="bi bi-graph-up-arrow me-2 text-success"></i>
                      Eficiência e Economia
                    </h5>
                    
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted">Redução de Defensivos</span>
                        <span className="h4 fw-bold text-success mb-0">60%</span>
                      </div>
                      <div className="progress mb-3" style={{ height: '10px', borderRadius: '10px', background: 'rgba(0,0,0,0.05)' }}>
                        <motion.div
                          className="progress-bar"
                          style={{
                            background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)',
                            borderRadius: '10px'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: '60%' }}
                          transition={{ duration: 1, delay: 0.7 }}
                        />
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted">Precisão de Aplicação</span>
                        <span className="h4 fw-bold text-success mb-0">95%</span>
                      </div>
                      <div className="progress" style={{ height: '10px', borderRadius: '10px', background: 'rgba(0,0,0,0.05)' }}>
                        <motion.div
                          className="progress-bar"
                          style={{
                            background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)',
                            borderRadius: '10px'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: '95%' }}
                          transition={{ duration: 1, delay: 0.8 }}
                        />
                      </div>
                    </div>
                    
                    <div 
                      className="rounded-3 p-3 text-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(40, 167, 69, 0.2)'
                      }}
                    >
                      <small className="text-muted d-block mb-1">Economia Estimada</small>
                      <div className="h3 fw-bold text-success mb-0">R$ 142.500</div>
                      <small className="text-muted">por safra com aplicação localizada</small>
                    </div>
                  </motion.div>

                  {/* Coverage Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="rounded-4 p-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(23, 162, 184, 0.1) 100%)',
                      border: '2px solid rgba(0, 123, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 15px rgba(0, 123, 255, 0.2)'
                    }}
                  >
                    <h5 className="fw-bold mb-3">
                      <i className="bi bi-info-circle-fill me-2 text-primary"></i>
                      Dados da Missão
                    </h5>
                    
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="text-center p-2 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                          <i className="bi bi-speedometer2 text-primary mb-2" style={{ fontSize: '1.5rem' }}></i>
                          <div className="fw-bold">15 m/s</div>
                          <small className="text-muted">Velocidade Média</small>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-center p-2 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                          <i className="bi bi-arrows-angle-expand text-primary mb-2" style={{ fontSize: '1.5rem' }}></i>
                          <div className="fw-bold">120m</div>
                          <small className="text-muted">Altitude Média</small>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-center p-2 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                          <i className="bi bi-battery-full text-success mb-2" style={{ fontSize: '1.5rem' }}></i>
                          <div className="fw-bold">87%</div>
                          <small className="text-muted">Bateria Restante</small>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-center p-2 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                          <i className="bi bi-wifi text-success mb-2" style={{ fontSize: '1.5rem' }}></i>
                          <div className="fw-bold">Excelente</div>
                          <small className="text-muted">Sinal GPS</small>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DroneDemo;

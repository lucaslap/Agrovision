import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DroneDemo = () => {
  const [missionStatus, setMissionStatus] = useState('planning');
  const [dronePosition, setDronePosition] = useState({ x: 0, y: 0 });
  const [completedArea, setCompletedArea] = useState(0);

  const missionPhases = {
    planning: {
      name: 'Planejamento',
      description: 'Definindo rota de voo otimizada',
      color: 'secondary',
      icon: 'bi-map'
    },
    takeoff: {
      name: 'Decolagem',
      description: 'Drone iniciando missão',
      color: 'warning',
      icon: 'bi-airplane-engines'
    },
    scanning: {
      name: 'Escaneamento',
      description: 'Capturando imagens aéreas',
      color: 'primary',
      icon: 'bi-camera'
    },
    analysis: {
      name: 'Análise',
      description: 'Processando dados coletados',
      color: 'info',
      icon: 'bi-cpu'
    },
    completed: {
      name: 'Concluído',
      description: 'Missão finalizada com sucesso',
      color: 'success',
      icon: 'bi-check-circle'
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
      action: 'Aplicação localizada recomendada'
    },
    {
      id: 2,
      type: 'water',
      severity: 'medium',
      location: 'Talhão 1 - Centro',
      description: 'Stress hídrico moderado',
      area: '8.2 ha',
      action: 'Intensificar irrigação'
    },
    {
      id: 3,
      type: 'nutrition',
      severity: 'low',
      location: 'Talhão 3 - Bordadura',
      description: 'Deficiência nutricional leve',
      area: '3.7 ha',
      action: 'Monitoramento contínuo'
    }
  ];

  const startMission = () => {
    const phases = Object.keys(missionPhases);
    let currentPhaseIndex = 0;
    
    setMissionStatus(phases[0]);
    setCompletedArea(0);
    
    const interval = setInterval(() => {
      currentPhaseIndex++;
      if (currentPhaseIndex < phases.length) {
        setMissionStatus(phases[currentPhaseIndex]);
        setCompletedArea((currentPhaseIndex / phases.length) * 100);
      } else {
        clearInterval(interval);
      }
    }, 2000);
  };

  // Simular movimento do drone
  useEffect(() => {
    if (missionStatus === 'scanning') {
      const interval = setInterval(() => {
        setDronePosition(prev => ({
          x: (prev.x + 5) % 100,
          y: 20 + Math.sin(prev.x * 0.1) * 10
        }));
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [missionStatus]);

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
              <i className="bi bi-airplane me-2 text-warning"></i>
              Operações com Drones
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mapeamento aéreo de alta precisão e aplicação localizada de defensivos
            </motion.p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-12">
            <motion.div
              className="drone-flight-path bg-white rounded shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                <div>
                  <h5 className="fw-bold mb-1">Missão: Mapeamento Completo</h5>
                  <small className="text-muted">Fazenda São Miguel - 1.200 ha</small>
                </div>
                <div className="text-end">
                  <div className={`badge bg-${missionPhases[missionStatus].color} bg-opacity-25 text-${missionPhases[missionStatus].color} px-3 py-2`}>
                    <i className={`${missionPhases[missionStatus].icon} me-1`}></i>
                    {missionPhases[missionStatus].name}
                  </div>
                </div>
              </div>
              
              <div className="p-3">
                {missionStatus === 'scanning' && (
                  <div 
                    className="drone-icon"
                    style={{
                      left: `${dronePosition.x}%`,
                      top: `${dronePosition.y}%`
                    }}
                  >
                    <i className="bi bi-airplane"></i>
                  </div>
                )}
                
                <svg className="flight-path" viewBox="0 0 100 30">
                  <path
                    d="M5,15 Q25,5 45,15 T85,15"
                    stroke="#007bff"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
                
                <div className="row mt-4">
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="h5 text-primary mb-1">{completedArea.toFixed(0)}%</div>
                      <small className="text-muted">Área Escaneada</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="h5 text-success mb-1">847</div>
                      <small className="text-muted">Fotos Capturadas</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="h5 text-warning mb-1">23min</div>
                      <small className="text-muted">Tempo Restante</small>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="progress" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar bg-primary" 
                      style={{ width: `${completedArea}%` }}
                    ></div>
                  </div>
                  <small className="text-muted">{missionPhases[missionStatus].description}</small>
                </div>
              </div>
            </motion.div>

            <div className="mt-3 text-center">
              <button 
                className="demo-button"
                onClick={startMission}
                disabled={missionStatus !== 'planning' && missionStatus !== 'completed'}
              >
                <i className="bi bi-play me-2"></i>
                {missionStatus === 'completed' ? 'Reiniciar Missão' : 'Iniciar Missão'}
              </button>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="h-100">
              <h5 className="fw-bold mb-3">
                <i className="bi bi-exclamation-triangle me-2 text-warning"></i>
                Problemas Detectados
              </h5>
              
              <div className="d-flex flex-column gap-3">
                {detectedIssues.map((issue, index) => (
                  <motion.div
                    key={issue.id}
                    className="p-3 bg-white rounded shadow-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div className="d-flex align-items-center">
                        <div className={`bg-${issue.severity === 'high' ? 'danger' : issue.severity === 'medium' ? 'warning' : 'info'} bg-opacity-10 rounded-circle p-2 me-2`}>
                          <i className={`bi bi-${issue.type === 'pest' ? 'bug' : issue.type === 'water' ? 'droplet' : 'leaf'} text-${issue.severity === 'high' ? 'danger' : issue.severity === 'medium' ? 'warning' : 'info'}`}></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0">{issue.description}</h6>
                        </div>
                      </div>
                      <span className={`badge bg-${issue.severity === 'high' ? 'danger' : issue.severity === 'medium' ? 'warning' : 'info'} bg-opacity-25 text-${issue.severity === 'high' ? 'danger' : issue.severity === 'medium' ? 'warning' : 'info'}`}>
                        {issue.severity === 'high' ? 'Alta' : issue.severity === 'medium' ? 'Média' : 'Baixa'}
                      </span>
                    </div>
                    
                    <div className="small text-muted mb-2">
                      <i className="bi bi-geo-alt me-1"></i>
                      {issue.location} • {issue.area}
                    </div>
                    
                    <div className="small">
                      <strong>Ação recomendada:</strong> {issue.action}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

          <div className='col-lg-4'>
            <div className='h-100'>
              <h5 className='fw-bold mb-3'>
                <i className='bi bi-calendar-check me-2 text-info'></i>
                Agendamentos
              </h5>
              <div className="mt-3 p-3 bg-warning bg-opacity-10 rounded">
                <h6 className="fw-bold text-warning mb-2">
                  <i className="bi bi-clock me-2"></i>
                  Próxima Missão
                </h6>
                <div className="small">
                  <strong>Aplicação de defensivos</strong><br />
                  Agendada para: <span className="text-warning">Amanhã, 06:00</span><br />
                  Área: Talhão 2 - 12.5 ha<br />
                  Produto: Inseticida para lagarta
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='h-100'>
              <h5 className='fw-bold mb-3'>
                <i className='bi bi-clipboard-data me-2 text-success'></i>
                Previsão
              </h5>

              <div className="mt-3 p-3 bg-success bg-opacity-10 rounded">
                <h6 className="fw-bold text-success mb-2">
                  <i className="bi bi-graph-up me-2"></i>
                  Economia Estimada
                </h6>
                <div className="h4 text-success mb-1">60%</div>
                <small className="text-muted">
                  Redução no uso de defensivos com aplicação de precisão
                </small>
              </div>
              
            </div>
          </div>
          


        </div>
      </div>
    </section>
  );
};

export default DroneDemo;

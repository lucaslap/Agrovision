import { motion } from 'framer-motion';
import { useState } from 'react';

const ImplementationTracker = () => {
  const [selectedService, setSelectedService] = useState('satellite');
  
  const implementationSteps = {
    satellite: [
      {
        id: 1,
        title: 'Análise Inicial',
        description: 'Avaliação da propriedade e definição de objetivos',
        duration: '1-2 dias',
        icon: 'bi-search',
        color: 'primary'
      },
      {
        id: 2,
        title: 'Configuração do Sistema',
        description: 'Setup da plataforma e definição de parâmetros',
        duration: '2-3 dias',
        icon: 'bi-gear',
        color: 'info'
      },
      {
        id: 3,
        title: 'Primeira Captura',
        description: 'Primeiras imagens de satélite e análise inicial',
        duration: '3-5 dias',
        icon: 'bi-camera',
        color: 'warning'
      },
      {
        id: 4,
        title: 'Treinamento',
        description: 'Capacitação da equipe na plataforma',
        duration: '1 dia',
        icon: 'bi-person-check',
        color: 'success'
      },
      {
        id: 5,
        title: 'Monitoramento Ativo',
        description: 'Início do monitoramento contínuo',
        duration: 'Ongoing',
        icon: 'bi-activity',
        color: 'primary'
      }
    ],
    ai: [
      {
        id: 1,
        title: 'Coleta de Dados Históricos',
        description: 'Análise de dados passados da propriedade',
        duration: '2-3 dias',
        icon: 'bi-database',
        color: 'primary'
      },
      {
        id: 2,
        title: 'Calibração da IA',
        description: 'Ajuste dos algoritmos para sua propriedade',
        duration: '3-5 dias',
        icon: 'bi-cpu',
        color: 'info'
      },
      {
        id: 3,
        title: 'Integração de Sistemas',
        description: 'Conexão com sistemas existentes',
        duration: '2-4 dias',
        icon: 'bi-diagram-3',
        color: 'warning'
      },
      {
        id: 4,
        title: 'Teste e Validação',
        description: 'Validação das previsões e ajustes finais',
        duration: '5-7 dias',
        icon: 'bi-check-square',
        color: 'success'
      },
      {
        id: 5,
        title: 'Operação Completa',
        description: 'Sistema funcionando com previsões ativas',
        duration: 'Ongoing',
        icon: 'bi-graph-up',
        color: 'primary'
      }
    ],
    drone: [
      {
        id: 1,
        title: 'Planejamento de Voo',
        description: 'Definição de rotas e áreas de interesse',
        duration: '1-2 dias',
        icon: 'bi-map',
        color: 'primary'
      },
      {
        id: 2,
        title: 'Licenciamento',
        description: 'Aprovações regulatórias necessárias',
        duration: '3-7 dias',
        icon: 'bi-shield-check',
        color: 'info'
      },
      {
        id: 3,
        title: 'Primeiro Mapeamento',
        description: 'Voo inicial e captura de dados',
        duration: '1-2 dias',
        icon: 'bi-airplane',
        color: 'warning'
      },
      {
        id: 4,
        title: 'Processamento e Análise',
        description: 'Análise dos dados coletados',
        duration: '2-3 dias',
        icon: 'bi-processor',
        color: 'success'
      },
      {
        id: 5,
        title: 'Monitoramento Regular',
        description: 'Voos programados conforme necessidade',
        duration: 'Mensal/Semanal',
        icon: 'bi-calendar-check',
        color: 'primary'
      }
    ]
  };

  const serviceOptions = [
    { id: 'satellite', name: 'Monitoramento por Satélite', icon: 'bi-globe' },
    { id: 'ai', name: 'Análise com IA', icon: 'bi-cpu' },
    { id: 'drone', name: 'Agricultura de Precisão', icon: 'bi-airplane' }
  ];

  const getTotalDuration = (steps) => {
    const totalDays = steps.reduce((total, step) => {
      const match = step.duration.match(/(\d+)-?(\d+)?/);
      if (match) {
        const min = parseInt(match[1]);
        const max = match[2] ? parseInt(match[2]) : min;
        return total + Math.ceil((min + max) / 2);
      }
      return total;
    }, 0);
    
    return Math.ceil(totalDays / 7); // Converter para semanas
  };

  return (
    <section className="py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-3">
            <i className="bi bi-diagram-3 me-2 text-primary"></i>
            Processo de Implementação
          </h2>
          <div className="section-divider mx-auto mb-3"></div>
          <p className="lead text-muted">
            Veja como implementamos nossas soluções em sua propriedade
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            {/* Seletor de Serviço */}
            <motion.div
              className="d-flex justify-content-center mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="btn-group" role="group">
                {serviceOptions.map(option => (
                  <button
                    key={option.id}
                    type="button"
                    className={`btn ${selectedService === option.id ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedService(option.id)}
                  >
                    <i className={`${option.icon} me-2`}></i>
                    {option.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Timeline de Implementação */}
            <motion.div
              className="position-relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Linha vertical do timeline */}
              <div className="position-absolute top-0 start-50 translate-middle-x bg-primary opacity-25" 
                   style={{width: '2px', height: '100%', zIndex: 1}}></div>

              {implementationSteps[selectedService].map((step, index) => (
                <motion.div
                  key={step.id}
                  className="row align-items-center mb-5 position-relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{zIndex: 2}}
                >
                  {index % 2 === 0 ? (
                    <>
                      {/* Card à esquerda */}
                      <div className="col-md-5">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                              <div className={`bg-${step.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`}
                                   style={{width: '50px', height: '50px', fontSize: '1.2rem'}}>
                                <i className={step.icon}></i>
                              </div>
                              <div>
                                <h5 className="mb-1">{step.title}</h5>
                                <small className={`text-${step.color} fw-semibold`}>
                                  <i className="bi bi-clock me-1"></i>
                                  {step.duration}
                                </small>
                              </div>
                            </div>
                            <p className="text-muted mb-0">{step.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Número central */}
                      <div className="col-md-2 text-center">
                        <div className={`bg-${step.color} text-white rounded-circle d-flex align-items-center justify-content-center mx-auto fw-bold`}
                             style={{width: '60px', height: '60px', fontSize: '1.5rem', zIndex: 3, position: 'relative'}}>
                          {step.id}
                        </div>
                      </div>
                      
                      <div className="col-md-5"></div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-5"></div>
                      
                      {/* Número central */}
                      <div className="col-md-2 text-center">
                        <div className={`bg-${step.color} text-white rounded-circle d-flex align-items-center justify-content-center mx-auto fw-bold`}
                             style={{width: '60px', height: '60px', fontSize: '1.5rem', zIndex: 3, position: 'relative'}}>
                          {step.id}
                        </div>
                      </div>
                      
                      {/* Card à direita */}
                      <div className="col-md-5">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                              <div className={`bg-${step.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`}
                                   style={{width: '50px', height: '50px', fontSize: '1.2rem'}}>
                                <i className={step.icon}></i>
                              </div>
                              <div>
                                <h5 className="mb-1">{step.title}</h5>
                                <small className={`text-${step.color} fw-semibold`}>
                                  <i className="bi bi-clock me-1"></i>
                                  {step.duration}
                                </small>
                              </div>
                            </div>
                            <p className="text-muted mb-0">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Resumo do Tempo */}
            <motion.div
              className="text-center mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-light rounded-4 p-4 d-inline-block">
                <h5 className="text-primary mb-2">
                  <i className="bi bi-stopwatch me-2"></i>
                  Tempo Total de Implementação
                </h5>
                <div className="h3 text-dark mb-2">
                  {getTotalDuration(implementationSteps[selectedService])} semanas
                </div>
                <p className="text-muted mb-0">
                  Incluindo treinamento e otimização inicial
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a href="/contato" className="btn btn-primary btn-lg">
                <i className="bi bi-rocket me-2"></i>
                Iniciar Implementação
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationTracker;

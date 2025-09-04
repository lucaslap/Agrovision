import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const InteractiveServiceComparator = () => {
  const [filters, setFilters] = useState({
    area: '',
    budget: '',
    priority: '',
    cropType: ''
  });
  
  const [recommendation, setRecommendation] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const services = [
    {
      id: 'satellite',
      name: 'Monitoramento por Satélite',
      icon: 'bi-globe',
      basePrice: 'R$ 50/ha/ano',
      features: ['Imagens de alta resolução', 'Análise NDVI', 'Detecção precoce de problemas'],
      suitableFor: ['pequena', 'media', 'grande'],
      priority: ['monitoramento', 'prevencao']
    },
    {
      id: 'ai-analysis',
      name: 'Análise com IA',
      icon: 'bi-cpu',
      basePrice: 'R$ 75/ha/ano',
      features: ['Previsões de safra', 'Otimização de recursos', 'Alertas inteligentes'],
      suitableFor: ['media', 'grande'],
      priority: ['otimizacao', 'predicao']
    },
    {
      id: 'drone-precision',
      name: 'Agricultura de Precisão',
      icon: 'bi-airplane',
      basePrice: 'R$ 100/ha/ano',
      features: ['Mapeamento detalhado', 'Aplicação localizada', 'Análise térmica'],
      suitableFor: ['media', 'grande'],
      priority: ['precisao', 'aplicacao']
    }
  ];

  const cropTypes = [
    { value: 'soja', label: 'Soja', icon: '🌱' },
    { value: 'milho', label: 'Milho', icon: '🌽' },
    { value: 'cafe', label: 'Café', icon: '☕' },
    { value: 'cana', label: 'Cana-de-açúcar', icon: '🌾' },
    { value: 'algodao', label: 'Algodão', icon: '🌸' },
    { value: 'outros', label: 'Outros', icon: '🌿' }
  ];

  useEffect(() => {
    generateRecommendation();
  }, [filters]);

  const generateRecommendation = () => {
    const { area, budget, priority, cropType } = filters;
    
    if (!area || !budget || !priority) {
      setRecommendation(null);
      return;
    }

    let recommendedServices = [];
    let totalEstimate = 0;
    
    // Lógica de recomendação baseada nos filtros
    services.forEach(service => {
      let score = 0;
      
      // Pontuação baseada na área
      if (service.suitableFor.includes(area)) score += 3;
      
      // Pontuação baseada na prioridade
      if (service.priority.includes(priority)) score += 4;
      
      // Considerar tipo de cultura para ajustes específicos
      if (cropType === 'cafe' && service.id === 'drone-precision') score += 2;
      if (cropType === 'soja' && service.id === 'satellite') score += 2;
      if (cropType === 'milho' && service.id === 'ai-analysis') score += 2;
      
      service.score = score;
    });

    // Filtrar por orçamento
    const budgetLimits = {
      'baixo': 2000,
      'medio': 5000,
      'alto': 15000
    };
    
    const maxBudget = budgetLimits[budget];
    let currentBudget = 0;
    
    // Ordenar por pontuação e selecionar dentro do orçamento
    const sortedServices = [...services].sort((a, b) => b.score - a.score);
    
    sortedServices.forEach(service => {
      const estimatedCost = getServiceCost(service.id, area);
      if (currentBudget + estimatedCost <= maxBudget && service.score >= 3) {
        recommendedServices.push({
          ...service,
          estimatedCost
        });
        currentBudget += estimatedCost;
      }
    });

    setRecommendation({
      services: recommendedServices,
      totalCost: currentBudget,
      savings: maxBudget - currentBudget,
      roi: calculateExpectedROI(recommendedServices, area)
    });
  };

  const getServiceCost = (serviceId, area) => {
    const areaSizes = { pequena: 100, media: 500, grande: 1500 };
    const areaHA = areaSizes[area];
    
    const costs = {
      'satellite': areaHA * 50,
      'ai-analysis': areaHA * 75,
      'drone-precision': areaHA * 100
    };
    
    return costs[serviceId] || 0;
  };

  const calculateExpectedROI = (services, area) => {
    const baseROI = {
      'satellite': 15,
      'ai-analysis': 25,
      'drone-precision': 35
    };
    
    return services.reduce((total, service) => {
      return total + (baseROI[service.id] || 0);
    }, 0);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-3">
            <i className="bi bi-gear me-2 text-primary"></i>
            Configurador Inteligente de Serviços
          </h2>
          <div className="section-divider mx-auto mb-3"></div>
          <p className="lead text-muted">
            Encontre a combinação perfeita de serviços para sua propriedade
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <motion.div
              className="bg-white rounded-4 shadow-lg p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Filtros */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-map me-2"></i>Tamanho da Propriedade
                  </label>
                  <select 
                    className="form-select"
                    value={filters.area}
                    onChange={(e) => handleFilterChange('area', e.target.value)}
                  >
                    <option value="">Selecione o tamanho</option>
                    <option value="pequena">Pequena (até 500ha)</option>
                    <option value="media">Média (500-1500ha)</option>
                    <option value="grande">Grande (1500ha+)</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-wallet me-2"></i>Orçamento Anual
                  </label>
                  <select 
                    className="form-select"
                    value={filters.budget}
                    onChange={(e) => handleFilterChange('budget', e.target.value)}
                  >
                    <option value="">Selecione o orçamento</option>
                    <option value="baixo">Até R$ 2.000</option>
                    <option value="medio">R$ 2.000 - R$ 5.000</option>
                    <option value="alto">Acima de R$ 5.000</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-target me-2"></i>Principal Objetivo
                  </label>
                  <select 
                    className="form-select"
                    value={filters.priority}
                    onChange={(e) => handleFilterChange('priority', e.target.value)}
                  >
                    <option value="">Selecione o objetivo</option>
                    <option value="monitoramento">Monitoramento e Controle</option>
                    <option value="otimizacao">Otimização de Recursos</option>
                    <option value="predicao">Previsão e Planejamento</option>
                    <option value="precisao">Agricultura de Precisão</option>
                    <option value="prevencao">Prevenção de Problemas</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-flower1 me-2"></i>Tipo de Cultura
                  </label>
                  <select 
                    className="form-select"
                    value={filters.cropType}
                    onChange={(e) => handleFilterChange('cropType', e.target.value)}
                  >
                    <option value="">Selecione a cultura</option>
                    {cropTypes.map(crop => (
                      <option key={crop.value} value={crop.value}>
                        {crop.icon} {crop.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Resultados da Recomendação */}
              {recommendation && (
                <motion.div
                  className="border-top pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h5 className="text-primary mb-3">
                    <i className="bi bi-lightbulb me-2"></i>
                    Recomendação Personalizada
                  </h5>
                  
                  {recommendation.services.length > 0 ? (
                    <>
                      <div className="row g-3 mb-4">
                        {recommendation.services.map((service, index) => (
                          <div key={service.id} className="col-md-6">
                            <div className="card h-100 border-primary shadow-sm">
                              <div className="card-body">
                                <div className="d-flex align-items-center mb-2">
                                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                                       style={{width: '40px', height: '40px'}}>
                                    <i className={service.icon}></i>
                                  </div>
                                  <h6 className="mb-0">{service.name}</h6>
                                </div>
                                <ul className="list-unstyled mb-2">
                                  {service.features.slice(0, 2).map((feature, idx) => (
                                    <li key={idx} className="small text-muted">
                                      <i className="bi bi-check-circle-fill text-success me-1"></i>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                                <div className="text-primary fw-bold">
                                  R$ {service.estimatedCost.toLocaleString()}/ano
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="row g-3">
                        <div className="col-md-4">
                          <div className="text-center p-3 bg-primary bg-opacity-10 rounded">
                            <h6 className="text-primary mb-1">Investimento Total</h6>
                            <div className="h5 mb-0">R$ {recommendation.totalCost.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center p-3 bg-success bg-opacity-10 rounded">
                            <h6 className="text-success mb-1">ROI Esperado</h6>
                            <div className="h5 mb-0">{recommendation.roi}% ao ano</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center p-3 bg-info bg-opacity-10 rounded">
                            <h6 className="text-info mb-1">Economia</h6>
                            <div className="h5 mb-0">R$ {recommendation.savings.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-4">
                        <button 
                          className="btn btn-primary me-3"
                          onClick={() => setShowComparison(!showComparison)}
                        >
                          <i className="bi bi-bar-chart me-2"></i>
                          Ver Comparação Detalhada
                        </button>
                        <a href="/contato" className="btn btn-outline-primary">
                          <i className="bi bi-envelope me-2"></i>
                          Solicitar Orçamento
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <i className="bi bi-exclamation-triangle text-warning mb-2" style={{fontSize: '2rem'}}></i>
                      <p className="text-muted mb-3">
                        Não encontramos serviços que se encaixem no seu orçamento atual.
                      </p>
                      <p className="small text-muted">
                        Entre em contato conosco para opções personalizadas.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Comparação Detalhada */}
              {showComparison && recommendation && (
                <motion.div
                  className="border-top pt-4 mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5 }}
                >
                  <h6 className="mb-3">Comparação de Benefícios</h6>
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th>Serviço</th>
                          <th>Benefício Principal</th>
                          <th>ROI Individual</th>
                          <th>Tempo de Retorno</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recommendation.services.map(service => (
                          <tr key={service.id}>
                            <td>{service.name}</td>
                            <td>{service.features[0]}</td>
                            <td className="text-success">
                              {Math.round(service.estimatedCost * 0.2)}% ao ano
                            </td>
                            <td>
                              {Math.round(12 / (service.estimatedCost * 0.002))} meses
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServiceComparator;

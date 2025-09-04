import { motion } from 'framer-motion';
import { useState } from 'react';

const ROICalculatorSection = () => {
  const [formData, setFormData] = useState({
    areaHectares: '',
    producaoAtual: '',
    precoTonelada: '',
    custosAtuais: '',
    tipoCultura: '',
    nivelTecnologia: '',
    problemasAtuais: []
  });
  
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const culturas = [
    { value: 'soja', label: 'Soja', potencialAumento: 25 },
    { value: 'milho', label: 'Milho', potencialAumento: 30 },
    { value: 'cafe', label: 'Café', potencialAumento: 35 },
    { value: 'cana', label: 'Cana-de-açúcar', potencialAumento: 20 },
    { value: 'algodao', label: 'Algodão', potencialAumento: 28 },
    { value: 'outros', label: 'Outras', potencialAumento: 22 }
  ];

  const niveistecnologia = [
    { value: 'baixo', label: 'Baixo - Agricultura tradicional', multiplicador: 1.4 },
    { value: 'medio', label: 'Médio - Algumas tecnologias', multiplicador: 1.2 },
    { value: 'alto', label: 'Alto - Agricultura moderna', multiplicador: 1.0 }
  ];

  const problemasDisponiveis = [
    { id: 'pragas', label: 'Pragas e doenças', potencialEconomia: 15 },
    { id: 'irrigacao', label: 'Problemas de irrigação', potencialEconomia: 20 },
    { id: 'fertilizacao', label: 'Fertilização inadequada', potencialEconomia: 18 },
    { id: 'perdas', label: 'Perdas na colheita', potencialEconomia: 12 },
    { id: 'clima', label: 'Riscos climáticos', potencialEconomia: 25 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProblemasChange = (problemaId) => {
    setFormData(prev => ({
      ...prev,
      problemasAtuais: prev.problemasAtuais.includes(problemaId)
        ? prev.problemasAtuais.filter(id => id !== problemaId)
        : [...prev.problemasAtuais, problemaId]
    }));
  };

  const calculateROI = () => {
    const { areaHectares, producaoAtual, precoTonelada, custosAtuais, tipoCultura, nivelTecnologia, problemasAtuais } = formData;
    
    if (!areaHectares || !producaoAtual || !precoTonelada || !custosAtuais) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const area = parseFloat(areaHectares);
    const producao = parseFloat(producaoAtual);
    const preco = parseFloat(precoTonelada);
    const custos = parseFloat(custosAtuais);

    const producaoTotal = area * producao;
    const receitaAtual = producaoTotal * preco;
    const lucroAtual = receitaAtual - custos;
    
    let potencialAumento = 20;
    
    if (tipoCultura) {
      const cultura = culturas.find(c => c.value === tipoCultura);
      if (cultura) {
        potencialAumento = cultura.potencialAumento;
      }
    }
    
    if (nivelTecnologia) {
      const nivel = niveistecnologia.find(n => n.value === nivelTecnologia);
      if (nivel) {
        potencialAumento *= nivel.multiplicador;
      }
    }
    
    const economiaProblemas = problemasAtuais.reduce((total, problemaId) => {
      const problema = problemasDisponiveis.find(p => p.id === problemaId);
      return total + (problema ? problema.potencialEconomia : 0);
    }, 0);
    
    const aumentoProdutividade = (potencialAumento + economiaProblemas / 2) / 100;
    const novaProducao = producaoTotal * (1 + aumentoProdutividade);
    const receitaComAgroVision = novaProducao * preco;
    
    let custoBasePorHA = 50;
    if (area > 1000) custoBasePorHA = 45;
    if (area > 2000) custoBasePorHA = 40;
    
    const custoAgroVision = area * custoBasePorHA;
    const novosCustos = custos + custoAgroVision;
    const novoLucro = receitaComAgroVision - novosCustos;
    
    const ganhoAnual = novoLucro - lucroAtual;
    const roi = (ganhoAnual / custoAgroVision) * 100;
    const tempoRetorno = custoAgroVision / (ganhoAnual / 12);
    const margemMelhoria = ((novoLucro / receitaComAgroVision) - (lucroAtual / receitaAtual)) * 100;
    
    const ganhoAcumulado5Anos = ganhoAnual * 5;
    const investimentoTotal5Anos = custoAgroVision * 5;
    const roiAcumulado5Anos = (ganhoAcumulado5Anos / investimentoTotal5Anos) * 100;

    setResult({
      receitaAtual: receitaAtual.toFixed(0),
      receitaComAgroVision: receitaComAgroVision.toFixed(0),
      lucroAtual: lucroAtual.toFixed(0),
      novoLucro: novoLucro.toFixed(0),
      ganhoAnual: ganhoAnual.toFixed(0),
      custoAgroVision: custoAgroVision.toFixed(0),
      roi: roi.toFixed(1),
      tempoRetorno: tempoRetorno.toFixed(1),
      margemMelhoria: margemMelhoria.toFixed(1),
      aumentoProdutividade: (aumentoProdutividade * 100).toFixed(1),
      ganhoAcumulado5Anos: ganhoAcumulado5Anos.toFixed(0),
      roiAcumulado5Anos: roiAcumulado5Anos.toFixed(1),
      economiaProblemas: economiaProblemas.toFixed(1),
      area,
      cultura: tipoCultura ? culturas.find(c => c.value === tipoCultura)?.label : 'Não informado'
    });
    
    setShowResult(true);
  };

  const resetCalculator = () => {
    setFormData({
      areaHectares: '',
      producaoAtual: '',
      precoTonelada: '',
      custosAtuais: '',
      tipoCultura: '',
      nivelTecnologia: '',
      problemasAtuais: []
    });
    setResult(null);
    setShowResult(false);
  };

  const getRecommendedPlan = () => {
    if (!result) return null;
    
    const area = parseFloat(result.area);
    if (area <= 500) return 'Básico';
    if (area <= 1500) return 'Avançado';
    return 'Premium';
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
            <i className="bi bi-calculator me-2 text-primary"></i>
            Calculadora Inteligente de ROI
          </h2>
          <div className="section-divider mx-auto mb-3"></div>
          <p className="lead text-muted">
            Descubra o potencial de retorno da AgroVision para sua propriedade
          </p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              className="bg-white rounded-4 shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {!showResult ? (
                <div className="p-5">
                  <form onSubmit={(e) => { e.preventDefault(); calculateROI(); }}>
                    <div className="row g-4 mb-4">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          <i className="bi bi-map me-2"></i>Área da propriedade (hectares) *
                        </label>
                        <input
                          type="number"
                          name="areaHectares"
                          className="form-control form-control-lg"
                          value={formData.areaHectares}
                          onChange={handleInputChange}
                          placeholder="Ex: 500"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          <i className="bi bi-bar-chart me-2"></i>Produção atual (ton/ha/ano) *
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          name="producaoAtual"
                          className="form-control form-control-lg"
                          value={formData.producaoAtual}
                          onChange={handleInputChange}
                          placeholder="Ex: 3.5"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          <i className="bi bi-currency-dollar me-2"></i>Preço por tonelada (R$) *
                        </label>
                        <input
                          type="number"
                          name="precoTonelada"
                          className="form-control form-control-lg"
                          value={formData.precoTonelada}
                          onChange={handleInputChange}
                          placeholder="Ex: 1500"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          <i className="bi bi-wallet me-2"></i>Custos anuais atuais (R$) *
                        </label>
                        <input
                          type="number"
                          name="custosAtuais"
                          className="form-control form-control-lg"
                          value={formData.custosAtuais}
                          onChange={handleInputChange}
                          placeholder="Ex: 800000"
                          required
                        />
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                      >
                        <i className={`bi bi-${showAdvanced ? 'chevron-up' : 'chevron-down'} me-2`}></i>
                        {showAdvanced ? 'Ocultar' : 'Mostrar'} Configurações Avançadas
                      </button>
                    </div>

                    {showAdvanced && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="border-top pt-4 mb-4"
                      >
                        <h5 className="text-primary mb-3">
                          <i className="bi bi-gear me-2"></i>
                          Configurações Avançadas
                        </h5>
                        
                        <div className="row g-4 mb-4">
                          <div className="col-md-6">
                            <label className="form-label fw-semibold">
                              <i className="bi bi-flower1 me-2"></i>Tipo de cultura principal
                            </label>
                            <select
                              name="tipoCultura"
                              className="form-select form-select-lg"
                              value={formData.tipoCultura}
                              onChange={handleInputChange}
                            >
                              <option value="">Selecione a cultura</option>
                              {culturas.map(cultura => (
                                <option key={cultura.value} value={cultura.value}>
                                  {cultura.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-semibold">
                              <i className="bi bi-cpu me-2"></i>Nível tecnológico atual
                            </label>
                            <select
                              name="nivelTecnologia"
                              className="form-select form-select-lg"
                              value={formData.nivelTecnologia}
                              onChange={handleInputChange}
                            >
                              <option value="">Selecione o nível</option>
                              {niveistecnologia.map(nivel => (
                                <option key={nivel.value} value={nivel.value}>
                                  {nivel.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="mb-4">
                          <label className="form-label fw-semibold">
                            <i className="bi bi-exclamation-triangle me-2"></i>
                            Principais problemas atuais (selecione todos que se aplicam)
                          </label>
                          <div className="row g-2 mt-2">
                            {problemasDisponiveis.map(problema => (
                              <div key={problema.id} className="col-md-6">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={problema.id}
                                    checked={formData.problemasAtuais.includes(problema.id)}
                                    onChange={() => handleProblemasChange(problema.id)}
                                  />
                                  <label className="form-check-label" htmlFor={problema.id}>
                                    {problema.label}
                                    <small className="text-success ms-1">
                                      (+{problema.potencialEconomia}% economia)
                                    </small>
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-5"
                      >
                        <i className="bi bi-calculator me-2"></i>
                        Calcular ROI
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-5">
                  <div className="text-center mb-4">
                    <h3 className="text-primary">
                      <i className="bi bi-graph-up me-2"></i>
                      Análise de ROI Personalizada
                    </h3>
                    <p className="text-muted">
                      Propriedade de {result.area} hectares - Cultura: {result.cultura}
                    </p>
                  </div>

                  <div className="row g-4 mb-5">
                    <div className="col-md-3">
                      <div className="text-center p-4 bg-primary bg-opacity-10 rounded-3">
                        <i className="bi bi-graph-up-arrow text-primary mb-2" style={{fontSize: '2rem'}}></i>
                        <h4 className="text-primary mb-1">{result.roi}%</h4>
                        <p className="mb-0 small text-muted">ROI Anual</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center p-4 bg-success bg-opacity-10 rounded-3">
                        <i className="bi bi-currency-dollar text-success mb-2" style={{fontSize: '2rem'}}></i>
                        <h4 className="text-success mb-1">R$ {parseInt(result.ganhoAnual).toLocaleString()}</h4>
                        <p className="mb-0 small text-muted">Ganho Anual</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center p-4 bg-warning bg-opacity-10 rounded-3">
                        <i className="bi bi-clock text-warning mb-2" style={{fontSize: '2rem'}}></i>
                        <h4 className="text-warning mb-1">{result.tempoRetorno} meses</h4>
                        <p className="mb-0 small text-muted">Tempo de Retorno</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center p-4 bg-info bg-opacity-10 rounded-3">
                        <i className="bi bi-arrow-up text-info mb-2" style={{fontSize: '2rem'}}></i>
                        <h4 className="text-info mb-1">{result.aumentoProdutividade}%</h4>
                        <p className="mb-0 small text-muted">Aumento Produtividade</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col-lg-6">
                      <h5 className="mb-3">
                        <i className="bi bi-bar-chart me-2"></i>
                        Comparação Financeira
                      </h5>
                      <div className="table-responsive">
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <td>Receita Atual</td>
                              <td className="text-end">R$ {parseInt(result.receitaAtual).toLocaleString()}</td>
                            </tr>
                            <tr>
                              <td>Receita com AgroVision</td>
                              <td className="text-end text-success">R$ {parseInt(result.receitaComAgroVision).toLocaleString()}</td>
                            </tr>
                            <tr>
                              <td>Lucro Atual</td>
                              <td className="text-end">R$ {parseInt(result.lucroAtual).toLocaleString()}</td>
                            </tr>
                            <tr>
                              <td>Lucro com AgroVision</td>
                              <td className="text-end text-success">R$ {parseInt(result.novoLucro).toLocaleString()}</td>
                            </tr>
                            <tr className="fw-bold">
                              <td>Investimento Anual</td>
                              <td className="text-end text-primary">R$ {parseInt(result.custoAgroVision).toLocaleString()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <h5 className="mb-3">
                        <i className="bi bi-calendar me-2"></i>
                        Projeção 5 Anos
                      </h5>
                      <div className="bg-light p-4 rounded-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Ganho Acumulado:</span>
                          <span className="fw-bold text-success">
                            R$ {parseInt(result.ganhoAcumulado5Anos).toLocaleString()}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span>ROI Acumulado:</span>
                          <span className="fw-bold text-primary">{result.roiAcumulado5Anos}%</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Melhoria na Margem:</span>
                          <span className="fw-bold text-info">+{result.margemMelhoria}%</span>
                        </div>
                      </div>

                      {parseFloat(result.economiaProblemas) > 0 && (
                        <div className="mt-3 p-3 bg-success bg-opacity-10 rounded-3">
                          <small className="text-success fw-semibold">
                            <i className="bi bi-check-circle me-1"></i>
                            Economia adicional de {result.economiaProblemas}% identificada
                            pelos problemas selecionados
                          </small>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-primary bg-opacity-10 rounded-3 p-4 mb-4">
                    <h5 className="text-primary mb-2">
                      <i className="bi bi-star me-2"></i>
                      Plano Recomendado: {getRecommendedPlan()}
                    </h5>
                    <p className="mb-0">
                      Baseado no tamanho da sua propriedade e potencial de retorno, 
                      recomendamos o plano {getRecommendedPlan()} para maximizar seus resultados.
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-outline-secondary me-3"
                      onClick={resetCalculator}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
                      Nova Simulação
                    </button>
                    <a href="/contato" className="btn btn-primary">
                      <i className="bi bi-envelope me-2"></i>
                      Solicitar Proposta
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;

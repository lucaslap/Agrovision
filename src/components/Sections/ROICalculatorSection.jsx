import { motion } from 'framer-motion';
import { useState } from 'react';

const ROICalculatorSection = () => {
  const [formData, setFormData] = useState({
    areaHectares: '',
    producaoAtual: '',
    precoTonelada: '',
    custosAtuais: ''
  });
  
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateROI = () => {
    const { areaHectares, producaoAtual, precoTonelada, custosAtuais } = formData;
    
    // Validação básica
    if (!areaHectares || !producaoAtual || !precoTonelada || !custosAtuais) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const area = parseFloat(areaHectares);
    const producao = parseFloat(producaoAtual);
    const preco = parseFloat(precoTonelada);
    const custos = parseFloat(custosAtuais);

    // Cálculos
    const producaoTotal = area * producao;
    const receitaAtual = producaoTotal * preco;
    
    // Estimativa de aumento de 20% na produtividade com AgroVision
    const aumentoProdutividade = 0.20;
    const novaProducao = producaoTotal * (1 + aumentoProdutividade);
    const receitaComAgroVision = novaProducao * preco;
    
    // Custo estimado da solução AgroVision (baseado na área)
    const custoAgroVision = area * 50; // R$ 50 por hectare/ano
    const novosCustos = custos + custoAgroVision;
    
    // ROI
    const ganhoAnual = receitaComAgroVision - receitaAtual - custoAgroVision;
    const roiPercentual = (ganhoAnual / custoAgroVision) * 100;
    const tempoRetorno = custoAgroVision / (ganhoAnual / 12); // em meses

    setResult({
      receitaAtual: receitaAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      receitaComAgroVision: receitaComAgroVision.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      ganhoAnual: ganhoAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      roiPercentual: roiPercentual.toFixed(1),
      tempoRetorno: Math.max(1, tempoRetorno.toFixed(1))
    });

    setShowResult(true);
  };

  const loadExample = () => {
    setFormData({
      areaHectares: '100',
      producaoAtual: '3.5',
      precoTonelada: '1200',
      custosAtuais: '50000'
    });
  };

  return (
    <section className="roi-calculator-section py-5 bg-light">
      <div className="container">
        <motion.div 
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">Calculadora de ROI Agrícola</h2>
          <div className="section-divider"></div>
          <p className="lead text-muted">
            Calcule o retorno sobre investimento das nossas soluções para sua
            propriedade
          </p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div 
              className="roi-calculator-card bg-white p-4 rounded shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="needs-validation" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="areaHectares" className="form-label">
                      Área da propriedade (hectares)*
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="areaHectares"
                      name="areaHectares"
                      min="1"
                      max="100000"
                      placeholder="Ex: 100"
                      value={formData.areaHectares}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="producaoAtual" className="form-label">
                      Produção atual (toneladas/hectare)*
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="producaoAtual"
                      name="producaoAtual"
                      min="0.1"
                      max="50"
                      step="0.1"
                      placeholder="Ex: 3.5"
                      value={formData.producaoAtual}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="precoTonelada" className="form-label">
                      Preço por tonelada (R$)*
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="precoTonelada"
                      name="precoTonelada"
                      min="100"
                      max="50000"
                      placeholder="Ex: 1200"
                      value={formData.precoTonelada}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="custosAtuais" className="form-label">
                      Custos anuais atuais (R$)*
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="custosAtuais"
                      name="custosAtuais"
                      min="1000"
                      max="10000000"
                      placeholder="Ex: 50000"
                      value={formData.custosAtuais}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <motion.button
                    type="button"
                    className="btn btn-success btn-lg px-4 me-2"
                    onClick={calculateROI}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="bi bi-calculator me-2"></i>Calcular ROI
                  </motion.button>
                  <motion.button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                    onClick={loadExample}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="bi bi-clipboard-data me-2"></i>Exemplo
                  </motion.button>
                </div>
              </form>

              {/* Resultado do cálculo */}
              {showResult && result && (
                <motion.div
                  className="roi-result mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="alert alert-success">
                    <h4 className="alert-heading">
                      <i className="bi bi-graph-up-arrow me-2"></i>Resultado da
                      Análise
                    </h4>
                    <hr />
                    <div className="row text-center">
                      <div className="col-md-4 mb-3">
                        <h5 className="text-success">Receita Atual</h5>
                        <p className="fs-4 fw-bold">{result.receitaAtual}</p>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h5 className="text-primary">Receita com AgroVision</h5>
                        <p className="fs-4 fw-bold">{result.receitaComAgroVision}</p>
                        <small className="text-muted">
                          (Estimativa com 20% de aumento)
                        </small>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h5 className="text-warning">ROI Anual</h5>
                        <p className="fs-4 fw-bold">{result.roiPercentual}%</p>
                      </div>
                    </div>
                    <hr />
                    <p className="mb-0">
                      <strong>Ganho estimado anual:</strong>{" "}
                      <span className="text-success fw-bold">{result.ganhoAnual}</span>
                    </p>
                    <p className="mb-0">
                      <strong>Tempo estimado para retorno do investimento:</strong>{" "}
                      <span className="text-info fw-bold">{result.tempoRetorno} meses</span>
                    </p>
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

export default ROICalculatorSection;

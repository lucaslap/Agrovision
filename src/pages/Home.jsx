import HeroSection from "../components/Sections/HeroSection";

const Home = () => {
  return (
    <main>
      {/* Hero Section com Vídeo Background */}
      <HeroSection />

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="fw-bold">Nossos Diferenciais</h2>
            <div className="section-divider"></div>
            <p className="lead text-muted">
              Tecnologias que transformam a agricultura convencional em
              agronegócio de precisão
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4 feature-card-wrapper">
              <div className="feature-card h-100">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon bg-primary bg-gradient text-white">
                    <i className="bi bi-camera"></i>
                  </div>
                </div>
                <h3>Monitoramento por Satélite</h3>
                <p>
                  Visão completa da sua propriedade com tecnologia de
                  sensoriamento remoto para detecção precoce de problemas e
                  tomada de decisões baseada em dados.
                </p>
                <ul className="feature-benefits">
                  <li>
                    <i className="bi bi-check-circle-fill"></i>Mapeamento com
                    índices NDVI
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>Identificação
                    antecipada de problemas
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>Relatórios
                    precisos de área e produção
                  </li>
                </ul>
                <div className="text-center mt-3">
                  <a
                    href="servicos.html"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 feature-card-wrapper">
              <div className="feature-card h-100">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon bg-success bg-gradient text-white">
                    <i className="bi bi-graph-up"></i>
                  </div>
                </div>
                <h3>Análise de Dados Agrícolas</h3>
                <p>
                  Plataforma que transforma dados complexos em estratégias
                  claras para maximizar a rentabilidade e otimizar o desempenho
                  da sua lavoura.
                </p>
                <ul className="feature-benefits">
                  <li>
                    <i className="bi bi-check-circle-fill"></i>Dashboards em
                    tempo real
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>Previsões para
                    planejamento de safra
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>Comparação de
                    desempenho por áreas
                  </li>
                </ul>
                <div className="text-center mt-3">
                  <a
                    href="servicos.html"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 feature-card-wrapper">
              <div className="feature-card h-100">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon bg-warning bg-gradient text-white">
                    <i className="bi bi-airplane"></i>
                  </div>
                </div>
                <h3>Agricultura de Precisão</h3>
                <p>
                  Drones especializados para mapeamento detalhado, diagnóstico
                  de plantio e aplicação localizada de defensivos com economia
                  de recursos.
                </p>
                <ul className="feature-benefits">
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Imagens em alta
                    resolução
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Economia de até
                    60% em defensivos
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Detecção de
                    falhas e pragas
                  </li>
                </ul>
                <div className="text-center mt-3">
                  <a
                    href="servicos.html"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tecnologias Section */}
      <section className="tech-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="fw-bold">Tecnologias de Ponta</h2>
            <div className="section-divider"></div>
            <p className="lead text-muted">
              Combinamos as tecnologias mais avançadas para revolucionar o
              agronegócio
            </p>
          </div>

          <div className="tech-tabs">
            <ul
              className="nav nav-pills mb-4 justify-content-center"
              id="techTabs"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="ia-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#ia-content"
                  type="button"
                >
                  <i className="bi bi-cpu"></i> Inteligência Artificial
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="remote-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#remote-content"
                  type="button"
                >
                  <i className="bi bi-globe"></i> Sensoriamento Remoto
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="iot-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#iot-content"
                  type="button"
                >
                  <i className="bi bi-wifi"></i> Internet das Coisas
                </button>
              </li>
            </ul>

            <div className="tab-content" id="techTabsContent">
              {/* IA Tab */}
              <div className="tab-pane fade show active" id="ia-content">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="tech-image-container">
                      <img
                        src="assets/img/imgFeatureIA.jpg"
                        alt="Inteligência Artificial na Agricultura"
                        className="img-fluid rounded shadow tech-image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="mb-4">Inteligência Artificial</h3>
                    <p className="lead">
                      Algoritmos avançados que analisam padrões de crescimento,
                      condições do solo e previsões climáticas para otimizar a
                      produção.
                    </p>
                    <ul className="tech-benefits">
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Detecção precoce de doenças e pragas
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Recomendações personalizadas para cada área da lavoura
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Modelos preditivos para estimativa de colheita
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Otimização de insumos baseada em dados históricos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sensoriamento Remoto Tab */}
              <div className="tab-pane fade" id="remote-content">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="tech-image-container">
                      <img
                        src="assets/img/imgFeatureSensoriamento.jpg"
                        alt="Sensoriamento Remoto"
                        className="img-fluid rounded shadow tech-image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="mb-4">Sensoriamento Remoto</h3>
                    <p className="lead">
                      Imagens de satélite e drones para monitoramento em tempo
                      real do desenvolvimento das plantações.
                    </p>
                    <ul className="tech-benefits">
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Mapeamento detalhado da propriedade
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Identificação de áreas com stress hídrico
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Análise de índices de vegetação (NDVI, EVI)
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Monitoramento da evolução da lavoura ao longo do tempo
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* IoT Tab */}
              <div className="tab-pane fade" id="iot-content">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="tech-image-container">
                      <img
                        src="assets/img/imgFeatureIot.jpeg"
                        alt="Internet das Coisas na Agricultura"
                        className="img-fluid rounded shadow tech-image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="mb-4">Internet das Coisas (IoT)</h3>
                    <p className="lead">
                      Sensores conectados que fornecem dados em tempo real sobre
                      umidade do solo, temperatura e outros fatores críticos.
                    </p>
                    <ul className="tech-benefits">
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Monitoramento 24/7 de parâmetros críticos
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Economia de água através de irrigação inteligente
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Alertas em tempo real de condições adversas
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success"></i>
                        Integração com sistemas automatizados de irrigação e
                        pulverização
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Estatísticas Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="fw-bold">Resultados Comprovados</h2>
            <div className="section-divider"></div>
            <p className="lead text-muted">
              Impacto real das nossas soluções tecnológicas no campo
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="stat-card h-100">
                <div className="stat-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <div className="stat-value" data-count="30">
                  0<span>%</span>
                </div>
                <div className="stat-label">Aumento médio na produtividade</div>
                <div className="stat-bar" style={{ width: "30%" }}></div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-card h-100">
                <div className="stat-icon">
                  <i className="bi bi-droplet"></i>
                </div>
                <div className="stat-value" data-count="25">
                  0<span>%</span>
                </div>
                <div className="stat-label">
                  Redução no uso de recursos hídricos
                </div>
                <div className="stat-bar" style={{ width: "25%" }}></div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-card h-100">
                <div className="stat-icon">
                  <i className="bi bi-bug"></i>
                </div>
                <div className="stat-value" data-count="45">
                  0<span>%</span>
                </div>
                <div className="stat-label">
                  Diminuição de perdas por pragas
                </div>
                <div className="stat-bar" style={{ width: "45%" }}></div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-card h-100">
                <div className="stat-icon">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="stat-value" data-count="40">
                  0<span>%</span>
                </div>
                <div className="stat-label">
                  Redução média nos custos operacionais
                </div>
                <div className="stat-bar" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="testimonial-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="fw-bold">O que nossos clientes dizem</h2>
            <div className="section-divider"></div>
            <p className="lead text-muted">
              Histórias de sucesso de quem já transformou seu agronegócio
            </p>
          </div>

          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Primeiro depoimento */}
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="testimonial-card">
                      <div className="testimonial-image">
                        <img
                          src="assets/img/depoimento1.png"
                          alt="João Silva"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-quote">
                          <i className="bi bi-quote fs-2 text-primary opacity-50"></i>
                        </div>
                        <p className="testimonial-text">
                          "A AgroVision transformou completamente nossa
                          operação. Conseguimos aumentar nossa produtividade em
                          30% no primeiro ano de implementação das soluções de
                          monitoramento. O retorno sobre o investimento superou
                          todas as expectativas."
                        </p>
                        <div className="testimonial-author">
                          <h5 className="fw-bold mb-0">João Silva</h5>
                          <p className="text-muted mb-0">
                            Fazenda Esperança, Minas Gerais
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Segundo depoimento */}
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="testimonial-card">
                      <div className="testimonial-image">
                        <img
                          src="assets/img/depoimento2.png"
                          alt="Ana Costa"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-quote">
                          <i className="bi bi-quote fs-2 text-primary opacity-50"></i>
                        </div>
                        <p className="testimonial-text">
                          "O sistema de detecção precoce de pragas da AgroVision
                          nos salvou de uma perda quase certa da nossa plantação
                          de soja. Identificamos o problema três semanas antes
                          do que seria possível com métodos tradicionais e
                          economizamos milhares de reais."
                        </p>
                        <div className="testimonial-author">
                          <h5 className="fw-bold mb-0">Ana Costa</h5>
                          <p className="text-muted mb-0">
                            Grupo Agrícola Horizonte, Mato Grosso
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terceiro depoimento */}
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="testimonial-card">
                      <div className="testimonial-image">
                        <img
                          src="assets/img/depoimento3.png"
                          alt="Carlos Mendes"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-quote">
                          <i className="bi bi-quote fs-2 text-primary opacity-50"></i>
                        </div>
                        <p className="testimonial-text">
                          "A irrigação inteligente da AgroVision reduziu nosso
                          consumo de água em 25% e, simultaneamente, melhorou a
                          qualidade dos nossos produtos. A equipe de suporte é
                          extremamente competente e sempre disponível quando
                          precisamos."
                        </p>
                        <div className="testimonial-author">
                          <h5 className="fw-bold mb-0">Carlos Mendes</h5>
                          <p className="text-muted mb-0">
                            Fazenda Vale Verde, São Paulo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon testimonial-control"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon testimonial-control"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Próximo</span>
            </button>

            <div className="carousel-indicators testimonial-indicators">
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Depoimento 1"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="1"
                aria-label="Depoimento 2"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="2"
                aria-label="Depoimento 3"
              ></button>
            </div>
          </div>
        </div>
      </section>
      {/* ROI Calculator Section */}
      <section className="roi-calculator-section py-5 bg-light">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="fw-bold">Calculadora de ROI Agrícola</h2>
            <div className="section-divider"></div>
            <p className="lead text-muted">
              Calcule o retorno sobre investimento das nossas soluções para sua
              propriedade
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="roi-calculator-card bg-white p-4 rounded shadow">
                <form
                  id="roiCalculator"
                  className="needs-validation"
                  noValidate
                >
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
                        required
                      />
                      <div className="invalid-feedback">
                        Informe a área em hectares (1 a 100.000)
                      </div>
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
                        required
                      />
                      <div className="invalid-feedback">
                        Informe a produção atual por hectare
                      </div>
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
                        required
                      />
                      <div className="invalid-feedback">
                        Informe o preço por tonelada em reais
                      </div>
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
                        required
                      />
                      <div className="invalid-feedback">
                        Informe os custos anuais atuais
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-success btn-lg px-4 me-2"
                      onClick={() => {}}
                    >
                      <i className="bi bi-calculator me-2"></i>Calcular ROI
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg px-4"
                      onClick={() => {}}
                    >
                      <i className="bi bi-clipboard-data me-2"></i>Exemplo
                    </button>
                  </div>
                </form>

                {/* Resultado do cálculo */}
                <div
                  id="roiResult"
                  className="roi-result mt-4"
                  style={{ display: "none" }}
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
                        <p className="fs-4 fw-bold" id="receitaAtual">
                          R$ 0
                        </p>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h5 className="text-primary">Receita com AgroVision</h5>
                        <p className="fs-4 fw-bold" id="receitaComAgroVision">
                          R$ 0
                        </p>
                        <small className="text-muted">
                          (Estimativa com 15-25% de aumento)
                        </small>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h5 className="text-warning">ROI Anual</h5>
                        <p className="fs-4 fw-bold" id="roiPercentual">
                          0%
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="mb-0">
                      <strong>Ganho estimado anual:</strong>{" "}
                      <span id="ganhoAnual" className="text-success fw-bold">
                        R$ 0
                      </span>
                    </p>
                    <p className="mb-0">
                      <strong>
                        Tempo estimado para retorno do investimento:
                      </strong>{" "}
                      <span id="tempoRetorno" className="text-info fw-bold">
                        0 meses
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cta-card">
                <div className="cta-bg-pattern"></div>
                <div className="gradient-overlay"></div>

                <div className="row justify-content-center text-center py-4">
                  <div className="col-lg-8">
                    <div className="cta-icon mb-3">
                      <i className="bi bi-rocket-takeoff-fill"></i>
                    </div>
                    <h2 className="fw-bold display-5 text-white mb-3">
                      Pronto para revolucionar seu agronegócio?
                    </h2>
                    <p className="lead text-white mb-4">
                      Entre em contato hoje mesmo para uma demonstração gratuita
                      das nossas soluções e descubra como a tecnologia pode
                      transformar sua produtividade.
                    </p>

                    <div className="d-flex gap-3 flex-column flex-sm-row justify-content-center">
                      <a
                        href="contato.html"
                        className="btn btn-light btn-lg px-4 fw-semibold"
                      >
                        <i className="bi bi-calendar-check me-2"></i>Agende uma
                        demonstração
                      </a>
                      <a
                        href="contato.html"
                        className="btn btn-outline-light btn-lg px-4"
                      >
                        <i className="bi bi-telephone me-2"></i>Fale conosco
                      </a>
                    </div>

                    <div className="mt-4 text-white-85">
                      <div className="d-flex flex-wrap justify-content-center gap-3">
                        <span>
                          <i className="bi bi-shield-check me-1"></i>Sem
                          compromisso
                        </span>
                        <span>
                          <i className="bi bi-person-check me-1"></i>Atendimento
                          personalizado
                        </span>
                        <span>
                          <i className="bi bi-headset me-1"></i>Suporte técnico
                          especializado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos em substituição à imagem */}
                <div className="cta-decoration cta-decoration-1"></div>
                <div className="cta-decoration cta-decoration-2"></div>
                <div className="cta-decoration cta-decoration-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chatbot Section */}
      <div id="chat-window-container">
        <div className="card shadow-lg">
          <div
            id="chat-header"
            className="card-header bg-success text-white d-flex justify-content-between align-items-center p-3"
          >
            <div className="d-flex align-items-center">
              <h5 className="mb-0 text-white">Assistente Virtual AgroBot</h5>
            </div>
            <button
              id="close-chat-btn"
              type="button"
              className="btn-close btn-close-white"
              aria-label="Fechar"
            ></button>
          </div>
          <div id="chat-messages" className="card-body"></div>
          <div
            id="chat-input-area"
            className="card-footer d-flex align-items-center p-2"
          >
            <input
              type="text"
              id="user-input"
              className="form-control me-2"
              placeholder="Digite sua mensagem..."
            />
            <button id="send-button" className="btn btn-success">
              <i className="bi bi-send-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <button
        id="fab-chat-button"
        className="btn btn-success btn-lg rounded-circle"
        type="button"
        aria-label="Abrir chat"
      >
        <i id="fab-icon" className="bi bi-chat-dots-fill"></i>
      </button>
    </main>
  );
};

export default Home;

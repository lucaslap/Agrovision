import React, { useState, useEffect } from 'react';
// --- COMPONENTE DA PÁGINA DE SERVIÇOS ---//

const Servicos = () => {
  return (  

    <>
      {/* Hero Section */}
      <section className="py-5 text-center text-white position-relative" style={{ background: 'linear-gradient(90deg, #198754 0%, #157347 100%)', marginTop: '35px' }}>
        <div className="container mt-5 pt-3">
          <h1 className="display-4 fw-bold">Nossos Serviços</h1>
          <p className="lead">Conheça as soluções inovadoras que estão transformando o agronegócio</p>
        </div>
      </section>

      <main>
        {/* Introdução aos Serviços */}
        <section className="py-5 bg-light">
            {/* ... (código da introdução) ... */}
        </section>

        {/* Serviços Principais */}
        <section id="solucoes-completas" className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 className="fw-bold">Soluções Completas</h2>
                <div className="section-divider mx-auto"></div>
                <p className="lead text-muted mb-5">Nossas tecnologias integradas para maximizar sua produtividade</p>
              </div>
            </div>
            {mainServices.map((service, index) => (
              <MainService key={index} {...service} />
            ))}
          </div>
        </section>
        
        {/* Soluções Complementares */}
        <section id="solucoes-complementares" className="py-5 bg-light">
            {/* ... (código das soluções complementares) ... */}
        </section>

        {/* Planos e Pacotes */}
        <section id="planos" className="py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="fw-bold">Nossos Planos</h2>
                        <div className="section-divider mx-auto"></div>
                        <p className="lead text-muted mb-5">Escolha o plano ideal para as necessidades da sua operação</p>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    {pricingPlans.map((plan, index) => (
                        <PricingPlanCard key={index} {...plan} />
                    ))}
                </div>
                 <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p className="text-muted">
                            Também oferecemos planos personalizados para necessidades específicas.
                            <a href="contato.html" className="text-primary"> Entre em contato </a> 
                            para mais informações.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Comparador Interativo de Planos */}
        <PlanComparator />

        {/* Testemunhos, FAQ e Chatbot iriam aqui como seus próprios componentes */}
        
      </main>
    </>
  );
};
const mainServices = [
  {
    title: 'Monitoramento por Satélite',
    description: 'Monitoramento completo da sua propriedade com imagens de satélite de alta resolução, permitindo detecção precoce de problemas e otimização da produção.',
    imageUrl: 'assets/img/imgFeatureSensoriamento.jpg',
    icon: 'bi-cloud-fill',
    features: [
      'Imagens atualizadas a cada 5 dias', 'Mapas de índices de vegetação NDVI', 'Detecção de áreas com stress hídrico',
      'Relatórios de evolução da lavoura', 'Identificação de falhas de plantio', 'Estimativa precisa de área plantada'
    ],
    imageLeft: true, // Para alternar a posição da imagem
  },
  {
    title: 'Análise de Dados Agrícolas',
    description: 'Nossa plataforma de análise transforma dados complexos em estratégias claras e acionáveis para maximizar a rentabilidade da sua operação.',
    imageUrl: 'assets/img/imgFeatureIA.jpg',
    icon: 'bi-graph-up',
    features: [
        'Dashboards personalizados', 'Algoritmos de inteligência artificial', 'Alertas em tempo real',
        'Previsões de safra baseadas em dados', 'Análise comparativa de desempenho', 'Recomendações de otimização'
    ],
    imageLeft: false,
  },
  {
    title: 'Agricultura de Precisão com Drones',
    description: 'Utilizamos drones especializados para mapeamentos detalhados, diagnósticos fitossanitários e aplicações localizadas de defensivos.',
    imageUrl: 'assets/img/imgFeatureIot.jpeg',
    icon: 'bi-airplane',
    features: [
        'Imagens de alta resolução (2cm/pixel)', 'Identificação precisa de pragas', 'Mapeamento 3D da propriedade',
        'Pulverização seletiva com drones', 'Economia de até 60% em defensivos', 'Avaliação da qualidade de plantio'
    ],
    imageLeft: true,
  }
];

const pricingPlans = [
    {
        name: 'Básico',
        price: '990',
        description: 'Ideal para pequenas propriedades',
        features: [
            { text: 'Monitoramento por satélite (área até 500ha)', included: true },
            { text: 'Atualização de imagens quinzenal', included: true },
            { text: 'Dashboard básico de análise', included: true },
            { text: 'Relatórios mensais', included: true },
            { text: 'Suporte por e-mail', included: true },
            { text: 'Serviço de drones', included: false },
            { text: 'Consultoria agronômica', included: false },
        ],
        featured: false,
    },
    {
        name: 'Avançado',
        price: '1.990',
        description: 'Para propriedades médias',
        features: [
            { text: 'Monitoramento por satélite (área até 1.500ha)', included: true },
            { text: 'Atualização de imagens semanal', included: true },
            { text: 'Dashboard completo de análise', included: true },
            { text: 'Relatórios semanais', included: true },
            { text: 'Suporte por telefone e e-mail', included: true },
            { text: '1 mapeamento com drone por trimestre', included: true },
            { text: 'Consultoria agronômica', included: false },
        ],
        featured: true,
    },
    {
        name: 'Premium',
        price: '3.490',
        description: 'Para grandes operações',
        features: [
            { text: 'Monitoramento por satélite (área até 5.000ha)', included: true },
            { text: 'Atualização de imagens a cada 3 dias', included: true },
            { text: 'Dashboard avançado com IA preditiva', included: true },
            { text: 'Relatórios personalizados', included: true },
            { text: 'Suporte prioritário 24/7', included: true },
            { text: 'Mapeamentos mensais com drone', included: true },
            { text: 'Consultoria agronômica mensal', included: true },
        ],
        featured: false,
    }
];

const testimonials = [
    {
        quote: "As análises de satélite da AgroVision nos permitiram identificar problemas na lavoura que seriam impossíveis de detectar a olho nu. Economizamos tempo e recursos.",
        author: "João Silva",
        location: "Fazenda Esperança, MG",
        imageUrl: "assets/img/depoimento1.png"
    },
    {
        quote: "O sistema de agricultura de precisão com drones nos ajudou a reduzir o uso de defensivos em 45%. Além da economia, diminuímos o impacto ambiental.",
        author: "Ana Costa",
        location: "Grupo Agrícola Horizonte, MT",
        imageUrl: "assets/img/depoimento2.png"
    },
    {
        quote: "A plataforma de análise de dados transformou nossa maneira de gerenciar a fazenda. Conseguimos aumentar a produtividade em 22% já no primeiro ano.",
        author: "Carlos Mendes",
        location: "Fazenda Vale Verde, SP",
        imageUrl: "assets/img/depoimento3.png"
    }
];

const faqItems = [
    {
        question: "Como funciona o monitoramento por satélite?",
        answer: "Nosso sistema utiliza imagens de satélites que capturam frequentemente sua propriedade. Estas imagens são processadas por nossos algoritmos que identificam variações na saúde das plantas, problemas com irrigação, falhas de plantio e outras anomalias. Você recebe relatórios periódicos e tem acesso a um dashboard online onde pode visualizar todos os dados e mapas da sua propriedade."
    },
    {
        question: "Qual o tamanho mínimo de propriedade para usar seus serviços?",
        answer: "Nossos serviços são escaláveis e podem ser adaptados para propriedades de diferentes tamanhos. Para o monitoramento por satélite, trabalhamos com áreas a partir de 20 hectares. Para serviços com drones, o tamanho mínimo recomendado é de 5 hectares. Entre em contato conosco para avaliarmos a melhor solução para sua propriedade específica."
    }
];


export default Servicos;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MainServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Monitoramento por Satélite',
      description: 'Monitoramento completo da sua propriedade com imagens de satélite de alta resolução, permitindo detecção precoce de problemas e otimização da produção.',
      image: '/assets/img/imgFeatureSensoriamento.jpg',
      icon: 'bi-cloud-fill',
      iconColor: 'primary',
      buttonColor: 'primary',
      features: [
        'Imagens de alta resolução em tempo real',
        'Análise de índices de vegetação (NDVI)',
        'Detecção de pragas e doenças',
        'Mapeamento de áreas irrigadas',
        'Relatórios automatizados semanais',
        'Histórico completo da propriedade'
      ],
      reverse: false
    },
    {
      id: 2,
      title: 'Análise de Dados Agrícolas',
      description: 'Nossa plataforma de análise transforma dados complexos em estratégias claras e acionáveis para maximizar a rentabilidade da sua operação.',
      image: '/assets/img/imgFeatureIA.jpg',
      icon: 'bi-graph-up',
      iconColor: 'success',
      buttonColor: 'success',
      features: [
        'Dashboard intuitivo e personalizado',
        'Previsões de produtividade',
        'Análise de custos e rentabilidade',
        'Otimização de recursos',
        'Relatórios detalhados por talhão',
        'Integração com sistemas existentes'
      ],
      reverse: true
    },
    {
      id: 3,
      title: 'Agricultura de Precisão com Drones',
      description: 'Utilizamos drones especializados para mapeamentos detalhados, diagnósticos fitossanitários e aplicações localizadas de defensivos.',
      image: '/assets/img/imgFeatureIot.jpeg',
      icon: 'bi-airplane',
      iconColor: 'warning',
      buttonColor: 'warning',
      features: [
        'Mapeamento aéreo de alta precisão',
        'Aplicação localizada de defensivos',
        'Monitoramento de plantio e colheita',
        'Contagem automática de plantas',
        'Análise termal da vegetação',
        'Voos programados automaticamente'
      ],
      reverse: false
    }
  ];

  return (
    <section id="solucoes-completas" className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <motion.h2 
              className="fw-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Soluções Completas
            </motion.h2>
            <div className="section-divider mx-auto"></div>
            <motion.p 
              className="lead text-muted mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nossas tecnologias integradas para maximizar sua produtividade
            </motion.p>
          </div>
        </div>

        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            className={`row align-items-center mb-5 pb-5 ${index < services.length - 1 ? 'border-bottom' : ''} ${service.reverse ? 'flex-lg-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.img 
                src={service.image} 
                alt={service.title}
                className="img-fluid rounded shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="col-lg-6">
              <div className="service-content">
                <div className="service-icon-wrapper mb-4">
                  <div className={`service-icon bg-${service.iconColor} text-white`}>
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                </div>
                <h3 className="mb-4">{service.title}</h3>
                <p className="lead">
                  {service.description}
                </p>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <ul className="list-unstyled service-features">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled service-features">
                      {service.features.slice(3).map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Link 
                    to="/contato" 
                    className={`btn btn-${service.buttonColor} ${service.buttonColor === 'warning' ? 'text-white' : ''}`}
                  >
                    <i className="bi bi-info-circle me-2"></i>Solicitar demonstração
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MainServicesSection;

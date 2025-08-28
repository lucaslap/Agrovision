import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AdditionalServicesSection = () => {
  const additionalServices = [
    {
      title: 'Previsão Climática',
      description: 'Previsões meteorológicas precisas para planejamento de operações agrícolas com alertas personalizados para sua região.',
      icon: 'bi-cloud-rain',
      iconBg: 'bg-primary-light',
      buttonColor: 'outline-primary',
      features: [
        'Previsões de 15 dias com alta precisão',
        'Alertas meteorológicos personalizados',
        'Recomendações de plantio e colheita'
      ]
    },
    {
      title: 'Irrigação Inteligente',
      description: 'Sistema de irrigação automatizado com sensores que otimiza o uso de água baseado nas necessidades reais da plantação.',
      icon: 'bi-droplet',
      iconBg: 'bg-success-light',
      buttonColor: 'outline-success',
      features: [
        'Sensores de umidade do solo em tempo real',
        'Automação completa do sistema de irrigação',
        'Economia de até 40% no consumo de água'
      ]
    },
    {
      title: 'Consultoria Agronômica',
      description: 'Aconselhamento especializado de agrônomos experientes com base nos dados coletados em sua propriedade.',
      icon: 'bi-person-check',
      iconBg: 'bg-warning-light',
      buttonColor: 'outline-warning',
      features: [
        'Consultoria personalizada por agrônomos',
        'Planos de manejo customizados',
        'Suporte técnico 24/7 durante safra'
      ]
    }
  ];

  return (
    <section id="solucoes-complementares" className="py-5 bg-light">
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
              Soluções Complementares
            </motion.h2>
            <div className="section-divider mx-auto"></div>
            <motion.p 
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Serviços adicionais para potencializar sua operação agrícola
            </motion.p>
          </div>
        </div>

        <div className="row g-4">
          {additionalServices.map((service, index) => (
            <motion.div 
              key={index}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="card h-100 border-0 shadow-sm"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className={`icon-circle ${service.iconBg} me-3`}>
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h4 className="card-title mb-0">{service.title}</h4>
                  </div>
                  <p className="card-text">
                    {service.description}
                  </p>
                  <ul className="list-unstyled small mb-0">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer bg-white border-0 pt-0">
                  <Link to="/contato" className={`btn btn-sm ${service.buttonColor}`}>
                    Mais detalhes
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;

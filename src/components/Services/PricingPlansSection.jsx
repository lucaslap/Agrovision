import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PricingPlansSection = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 990',
      period: '/mês',
      description: 'Ideal para pequenas propriedades',
      features: [
        { name: 'Monitoramento por satélite mensal', included: true },
        { name: 'Relatórios básicos de produtividade', included: true },
        { name: 'Suporte por email', included: true },
        { name: 'Dashboard web simples', included: true },
        { name: 'Histórico de 6 meses', included: true },
        { name: 'Análise de dados avançada', included: false },
        { name: 'Consultoria agronômica', included: false }
      ],
      buttonClass: 'btn-outline-primary',
      featured: false
    },
    {
      name: 'Avançado',
      price: 'R$ 1.990',
      period: '/mês',
      description: 'Para propriedades médias',
      features: [
        { name: 'Monitoramento por satélite semanal', included: true },
        { name: 'Análise de dados com IA', included: true },
        { name: 'Consultoria agronômica mensal', included: true },
        { name: 'Dashboard avançado', included: true },
        { name: 'Alertas em tempo real', included: true },
        { name: 'Histórico completo', included: true },
        { name: 'Suporte prioritário 24/7', included: true }
      ],
      buttonClass: 'btn-primary',
      featured: true
    },
    {
      name: 'Premium',
      price: 'Personalizado',
      period: '',
      description: 'Para grandes operações',
      features: [
        { name: 'Tudo do plano Avançado', included: true },
        { name: 'Monitoramento diário por satélite', included: true },
        { name: 'Análise preditiva avançada', included: true },
        { name: 'Consultoria agronômica semanal', included: true },
        { name: 'Integração com sistemas próprios', included: true },
        { name: 'Drones para mapeamento', included: true },
        { name: 'Gerente de conta dedicado', included: true }
      ],
      buttonClass: 'btn-outline-primary',
      featured: false
    }
  ];

  return (
    <section id="planos" className="py-5">
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
              Nossos Planos
            </motion.h2>
            <div className="section-divider mx-auto"></div>
            <motion.p 
              className="lead text-muted mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Escolha o plano ideal para as necessidades da sua operação
            </motion.p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`card plan-card h-100 border-0 shadow ${plan.featured ? 'plan-featured' : ''}`}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {plan.featured && (
                  <div className="featured-badge">Mais Popular</div>
                )}
                <div className="card-header text-center bg-white border-0 pt-4">
                  <h5 className="text-uppercase text-muted">Plano</h5>
                  <h3 className="fw-bold">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="display-4 fw-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted">{plan.period}</span>}
                  </div>
                  <p className="text-muted">{plan.description}</p>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled plan-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`mb-3 ${!feature.included ? 'text-muted' : ''}`}>
                        <i className={`bi ${feature.included ? 'bi-check-circle-fill text-success' : 'bi-x-circle text-muted'} me-2`}></i>
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer bg-white text-center border-0 pb-4">
                  <Link to="/contato" className={`btn ${plan.buttonClass} btn-lg px-4`}>
                    Selecionar
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <motion.p 
              className="text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Também oferecemos planos personalizados para necessidades específicas.{' '}
              <Link to="/contato" className="text-primary">Entre em contato</Link> para mais informações.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;

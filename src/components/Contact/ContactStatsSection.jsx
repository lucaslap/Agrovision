import { motion } from 'framer-motion';

const ContactStatsSection = () => {
  const stats = [
    {
      number: '24h',
      label: 'Tempo de Resposta',
      icon: 'bi-clock',
      description: 'Garantimos resposta em até 24 horas'
    },
    {
      number: '500+',
      label: 'Clientes Atendidos',
      icon: 'bi-people',
      description: 'Produtores rurais satisfeitos'
    },
    {
      number: '98%',
      label: 'Taxa de Satisfação',
      icon: 'bi-emoji-smile',
      description: 'Clientes recomendam nossos serviços'
    },
    {
      number: '24/7',
      label: 'Suporte Técnico',
      icon: 'bi-headset',
      description: 'Assistência técnica disponível sempre'
    }
  ];

  return (
    <section className="py-5">
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
              Por que Escolher Nosso Atendimento?
            </motion.h2>
            <div className="section-divider mx-auto"></div>
            <motion.p 
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Números que comprovam a qualidade do nosso atendimento
            </motion.p>
          </div>
        </div>

        <div className="row g-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-center p-4"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="mb-3"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={`bi ${stat.icon} display-3 text-success`}></i>
                </motion.div>
                <motion.h3 
                  className="fw-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <h5 className="fw-bold mb-2">{stat.label}</h5>
                <p className="text-muted small">{stat.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactStatsSection;

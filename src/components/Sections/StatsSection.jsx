import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    productivity: 0,
    waterSaving: 0,
    pestReduction: 0,
    costReduction: 0
  });

  const stats = [
    {
      key: 'productivity',
      icon: 'bi bi-graph-up-arrow',
      target: 30,
      label: 'Aumento médio na produtividade',
      suffix: '%'
    },
    {
      key: 'waterSaving',
      icon: 'bi bi-droplet',
      target: 25,
      label: 'Redução no uso de recursos hídricos',
      suffix: '%'
    },
    {
      key: 'pestReduction',
      icon: 'bi bi-bug',
      target: 45,
      label: 'Diminuição de perdas por pragas',
      suffix: '%'
    },
    {
      key: 'costReduction',
      icon: 'bi bi-currency-dollar',
      target: 40,
      label: 'Redução média nos custos operacionais',
      suffix: '%'
    }
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat) => {
        let current = 0;
        const increment = stat.target / 50; // 50 steps to reach target
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, 40);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="stats-section py-5 bg-light">
      <div className="container">
        <motion.div 
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">Resultados Comprovados</h2>
          <div className="section-divider"></div>
          <p className="lead text-muted">
            Impacto real das nossas soluções tecnológicas no campo
          </p>
        </motion.div>

        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setIsVisible(true)}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={stat.key} className="col-md-3">
              <motion.div
                className="stat-card h-100"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="stat-icon"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  <i className={stat.icon}></i>
                </motion.div>
                <motion.div 
                  className="stat-value"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {counts[stat.key]}<span>{stat.suffix}</span>
                </motion.div>
                <div className="stat-label">{stat.label}</div>
                <motion.div 
                  className="stat-bar" 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${counts[stat.key]}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

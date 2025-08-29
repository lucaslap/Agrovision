import { motion } from 'framer-motion';

const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Endereço',
      content: [
        'Av. Tecnologia Verde, 123',
        'São Paulo, SP - CEP 04000-000',
        'Brasil'
      ]
    },
    {
      icon: 'bi-telephone',
      title: 'Telefone',
      content: [
        '(11) 9876-5432',
        '(11) 1234-5678'
      ]
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      content: [
        'contato@agrovision.com.br',
        'suporte@agrovision.com.br'
      ]
    },
    {
      icon: 'bi-clock',
      title: 'Horário de Atendimento',
      content: [
        'Segunda a Sexta: 8h às 18h',
        'Sábados: 9h às 13h'
      ]
    }
  ];

  return (
    <motion.div 
      className="col-lg-5"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="bg-light p-4 rounded shadow-sm d-flex flex-column justify-content-between h-100">
        <div>
          <h2 className="mb-4">Informações de Contato</h2>
          
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              className="d-flex align-items-start mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-success rounded-circle p-2 text-white me-3"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <i className={`bi ${info.icon}`}></i>
              </motion.div>
              <div>
                <h5 className="fw-bold">{info.title}</h5>
                {info.content.map((line, lineIndex) => (
                  <p key={lineIndex} className={lineIndex === info.content.length - 1 ? 'mb-0' : 'mb-1'}>
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mapa */}
        <motion.div 
          className="mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="ratio ratio-16x9" style={{ height: '200px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975895363844!2d-46.65339388502166!3d-23.563244384682613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1619541534707!5m2!1spt-BR!2sbr"
              width="100%" 
              height="200" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Localização AgroVision"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfoSection;

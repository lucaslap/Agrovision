import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Lara de Paula",
      role: "Software Engineer",
      image: "/assets/img/ProfileLara.jpg",
      linkedin: "https://www.linkedin.com/in/lara-de-paula-84b5a4264",
      github: "https://github.com/lara-hdpb"
    },
    {
      name: "João Portugal",
      role: "Software Engineer",
      image: "/assets/img/ProfileJoao.jpg",
      linkedin: "https://www.linkedin.com/in/joaoportugaldev",
      github: "https://github.com/joaoportugaldev"
    },
    {
      name: "Diego Kanamori",
      role: "Software Engineer",
      image: "/assets/img/ProfileDiegoK.jpeg",
      linkedin: "https://www.linkedin.com/in/diego-kanamori-7b8593207/",
      github: "https://github.com/D13G0XD"
    },
    {
      name: "Lucas Pereira",
      role: "Software Engineer",
      image: "/assets/img/ProfileLucas.jpg",
      linkedin: "https://www.linkedin.com/in/lucas-lap/",
      github: "https://github.com/lucaslap"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
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
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <motion.h2 
              className="fw-bold mb-3"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Nossa Equipe
            </motion.h2>
            <div className="section-divider mx-auto mb-4"></div>
            <motion.p 
              className="lead mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Conheça os profissionais apaixonados que impulsionam a AgroVision.
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <motion.div
                className="team-card h-100"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="team-image-container"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="social-links">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link linkedin"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="bi bi-linkedin"></i>
                      </motion.a>
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link github"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="bi bi-github"></i>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
                <div className="team-info">
                  <motion.h5 
                    className="member-name"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {member.name}
                  </motion.h5>
                  <motion.p 
                    className="member-role"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {member.role}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

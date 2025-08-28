/**
 * Componente: Sobre
 * Descrição: O componente principal da página "Sobre Nós".
 **/

import React from 'react';
import TeamMemberCard from '../components/Cards/TeamMemberCard/TeamMemberCard';
import ChatBot from '../components/ChatBot/ChatBot';

const Sobre = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-about py-5 text-center text-white" style={{ background: 'linear-gradient(90deg, #198754 0%, #157347 100%)', marginTop: '80px' }}>
        <div className="container pt-3">
          <h1 className="display-4 fw-bold">Sobre Nós</h1>
          <p className="lead">Conheça a AgroVision: tecnologia e inovação transformando o agronegócio brasileiro</p>
        </div>
      </section>

      <main>
        {/* Visão Geral */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text-center mb-5">
                  <h2 className="fw-bold mb-3">Quem Somos</h2>
                  <hr className="section-divider mx-auto mb-4" style={{ width: '60px', borderTop: '3px solid #198754' }} />
                </div>
                <div className="card border-0 shadow-lg p-4 bg-white rounded-4">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center mb-4">
                      <div className="bg-success bg-gradient text-white d-flex align-items-center justify-content-center mb-2 shadow" style={{ width: '56px', height: '56px', borderRadius: '50%' }}>
                        <i className="bi bi-building fs-2"></i>
                      </div>
                      <h3 className="h4 mb-0 fw-bold text-center">Fundada em 2025</h3>
                    </div>
                    <p className="lead mb-4">
                      A <span className="fw-bold text-success">AgroVision</span> é dedicada a soluções tecnológicas inovadoras para o agronegócio. Nossa missão é ajudar produtores a maximizar resultados de forma sustentável, com tecnologia de ponta e conhecimento especializado.
                    </p>
                    {/* ... (resto da seção) */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Valores */}
        <section className="py-5 bg-light">
            {/* ... (código da seção missão e valores) ... */}
        </section>

        {/* Nossa Equipe */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="fw-bold mb-3">Nossa Equipe</h2>
                <hr className="section-divider mx-auto mb-4" style={{ width: '60px', borderTop: '3px solid #198754' }} />
                <p className="lead mb-4">Conheça os profissionais apaixonados que impulsionam a AgroVision.</p>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {/* Uso do .map para renderizar um TeamMemberCard para cada membro da equipe */}
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={index} // Chave única para cada item na lista
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  linkedinUrl={member.linkedinUrl}
                  githubUrl={member.githubUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-5 bg-primary text-white">
            {/* ... (código da seção CTA) ... */}
        </section>
        {/* Chatbot */}
        <ChatBot />
      </main>
    </>
  );
};


// Dados da equipe//
const teamMembers = [
  {
    name: 'Victor Peres',
    role: 'Software Engineer',
    imageUrl: 'assets/img/ProfileVictor.JPG',
    linkedinUrl: 'https://www.linkedin.com/in/victor-peres-b2011b247',
    githubUrl: 'https://github.com/victorperes246',
  },
  {
    name: 'Lara de Paula',
    role: 'Software Engineer',
    imageUrl: 'assets/img/ProfileLara.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/lara-de-paula-84b5a4264',
    githubUrl: 'https://github.com/lara-hdpb',
  },
  {
    name: 'João Portugal',
    role: 'Software Engineer',
    imageUrl: 'assets/img/ProfileJoao.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/joaoportugaldev',
    githubUrl: 'https://github.com/joaoportugaldev',
  },
  {
    name: 'Diego Kanamori',
    role: 'Software Engineer',
    imageUrl: 'assets/img/ProfileDiegoK.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/diego-kanamori-7b8593207/',
    githubUrl: 'https://github.com/D13G0XD',
  },
  {
    name: 'Lucas Pereira',
    role: 'Software Engineer',
    imageUrl: 'assets/img/ProfileLucas.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/lucas-lap/',
    githubUrl: 'https://github.com/lucaslap',
  },
];

export default Sobre;

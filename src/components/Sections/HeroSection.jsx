import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Transforme sua produção agrícola com tecnologia";

  useEffect(() => {
    // Verifica se é um dispositivo móvel
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Em dispositivos móveis, mostra o texto completo imediatamente
      setText(fullText);
      setIsTypingComplete(true);
    } else {
      // Em desktop, faz a animação de digitação
      let currentIndex = 0;
      const typingSpeed = 70;

      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setText(prev => prev + fullText.charAt(currentIndex));
          currentIndex++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, []);

  return (
    <section className="hero-video-section">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/assets/Videos/bannervideo.mp4" type="video/mp4" />
          {/* Fallback caso o navegador não suporte vídeo */}
          <div className="fallback-bg"></div>
        </video>
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <div className="container text-center">
          <div className="typewriter-container">
            <h1 className="display-4 fw-bold text-white ajuste-fonte">
              <span className={`typewriter ${isTypingComplete ? 'typing-complete' : ''}`}>
                {text}
              </span>
            </h1>
          </div>
          <p className="lead my-4 text-white">
            Soluções inteligentes para monitoramento, análise e otimização do
            seu agronegócio
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Link to="/servicos" className="btn btn-primary btn-lg px-4">
              Conheça nossos serviços
            </Link>
            <Link
              to="/contato"
              className="btn btn-outline-light btn-lg px-4"
            >
              Fale conosco
            </Link>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2">
            <a
              href="https://youtu.be/BFhtJp828pg"
              className="btn btn-secondary btn-lg px-5"
              target="_blank"
            >
              <i className="bi bi-youtube mt-2 me-2"></i>Link de Apresentação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

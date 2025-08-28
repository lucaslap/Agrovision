const HeroSection = () => {
  return (
    <section className="hero-video-section">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="assets/Videos/bannervideo.mp4" type="video/mp4" />
          {/* Fallback caso o navegador não suporte vídeo */}
          <div className="fallback-bg"></div>
        </video>
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <div className="container text-center">
          <div className="typewriter-container">
            <h1 className="display-4 fw-bold text-white ajuste-fonte">
              <span id="typewriter"></span>
            </h1>
          </div>
          <p className="lead my-4 text-white">
            Soluções inteligentes para monitoramento, análise e otimização do
            seu agronegócio
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <a href="servicos.html" className="btn btn-primary btn-lg px-4">
              Conheça nossos serviços
            </a>
            <a
              href="contato.html"
              className="btn btn-outline-light btn-lg px-4"
            >
              Fale conosco
            </a>
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

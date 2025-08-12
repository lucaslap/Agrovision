const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src="/assets/img/logo.svg" alt="Logo AgroVision" width="130" />
          </a>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-principal"
            aria-controls="nav-principal"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          <div className="collapse navbar-collapse" id="nav-principal">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  <i className="bi bi-house-door-fill me-1"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/sobre" className="nav-link">
                  <i className="bi bi-info-circle-fill me-1"></i>Sobre Nós
                </a>
              </li>
              <li className="nav-item">
                <a href="/servicos" className="nav-link">
                  <i className="bi bi-gear-fill me-1"></i>Serviços
                </a>
              </li>
              <li className="nav-item">
                <a href="/contato" className="nav-link">
                  <i className="bi bi-chat-dots-fill me-1"></i>Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

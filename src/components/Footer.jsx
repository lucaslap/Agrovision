import React, { useState } from 'react';
import logoFooter from '/assets/img/LogoFooter.svg';

const Footer = () => {
  const [newsletterFeedback, setNewsletterFeedback] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterFeedback(true);
    setTimeout(() => setNewsletterFeedback(false), 3000);
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4 w-100">
      <div className="container-fluid">
        <div className="row justify-content-around">
          {/* Logo e informações da empresa */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img
              src={logoFooter}
              alt="Logo AgroVision"
              width="130"
              className="mb-3"
            />
            <p className="small">
              Soluções tecnológicas inovadoras para o agronegócio, auxiliando
              produtores a maximizar resultados de forma sustentável.
            </p>
            <p className="small">Redes Sociais</p>
            <div className="mt-3 social-icons">
              <a href="#" className="social-icon me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon me-3">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://youtu.be/KHW60BkhiLw" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className="text-uppercase mb-4">Links Rápidos</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right small me-2"></i>Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/sobre" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right small me-2"></i>Sobre Nós
                </a>
              </li>
              <li className="mb-2">
                <a href="/servicos" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right small me-2"></i>Serviços
                </a>
              </li>
              <li className="mb-2">
                <a href="/contato" className="text-white text-decoration-none">
                  <i className="bi bi-chevron-right small me-2"></i>Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className="text-uppercase mb-4">Contato</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>Av. Tecnologia, 1500<br/>
                <span className="ms-4">São Paulo, SP - 04523-001</span>
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i> (11) 3456-7890
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i> contato@agrovision.com.br
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className="text-uppercase mb-4">Newsletter</h5>
            <p className="small">
              Receba novidades e atualizações sobre tecnologias agrícolas
            </p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="input-group mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Seu e-mail"
                  aria-label="E-mail"
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Assinar
                </button>
              </div>
              {newsletterFeedback && (
                <small className="form-text text-light">
                  E-mail cadastrado com sucesso!
                </small>
              )}
            </form>
          </div>
        </div>

        {/* Separador */}
        <hr className="my-4" />

        {/* Copyright e políticas */}
        <div className="row align-items-center">
          <div className="col-md-7 text-center text-md-start">
            <p className="small mb-md-0">
              &copy; {new Date().getFullYear()} AgroVision - Todos os direitos reservados
            </p>
          </div>
          <div className="col-md-5">
            <ul className="list-inline text-center text-md-end mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-white small">Política de Privacidade</a>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <a href="#" className="text-white small">Termos de Uso</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="back-to-top">
                  <i className="bi bi-arrow-up-circle"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

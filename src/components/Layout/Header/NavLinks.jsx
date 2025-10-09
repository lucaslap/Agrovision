import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();

  return (
    <>
      <li className="nav-item">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          aria-current={location.pathname === "/" ? "page" : undefined}
        >
          <i className="bi bi-house-door-fill me-1"></i>Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/sobre"
          className={`nav-link ${
            location.pathname === "/sobre" ? "active" : ""
          }`}
        >
          <i className="bi bi-info-circle-fill me-1"></i>Sobre Nós
        </Link>
      </li>      <li className="nav-item">
        <Link
          to="/servicos"
          className={`nav-link ${
            location.pathname === "/servicos" ? "active" : ""
          }`}
        >
          <i className="bi bi-gear-fill me-1"></i>Serviços
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/demo"
          className={`nav-link ${
            location.pathname === "/demo" ? "active" : ""
          }`}
        >
          <i className="bi bi-play-circle-fill me-1"></i>Demonstração
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contato"
          className={`nav-link ${
            location.pathname === "/contato" ? "active" : ""
          }`}
        >
          <i className="bi bi-chat-dots-fill me-1"></i>Fale Conosco
        </Link>
      </li>
    </>
  );
};

export default NavLinks;

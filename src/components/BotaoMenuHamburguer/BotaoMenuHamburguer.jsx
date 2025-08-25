const BotaoMenuHamburguer = () => {
  return (
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
  );
};

export default BotaoMenuHamburguer;

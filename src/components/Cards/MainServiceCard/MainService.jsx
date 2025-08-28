// Componente para cada serviço principal
const MainService = ({ title, description, imageUrl, icon, features, imageLeft }) => {
  const imageColumn = (
    <div className="col-lg-6 mb-4 mb-lg-0">
      <img src={imageUrl} alt={title} className="img-fluid rounded shadow-sm" />
    </div>
  );

  const textColumn = (
    <div className="col-lg-6">
      <div className="service-content">
        <div className="service-icon-wrapper mb-4">
          <div className="service-icon bg-primary text-white">
            <i className={`bi ${icon}`}></i>
          </div>
        </div>
        <h3 className="mb-4">{title}</h3>
        <p className="lead">{description}</p>
        <div className="row mt-4">
          {/* Dividindo as features em duas colunas */}
          <div className="col-md-6">
            <ul className="list-unstyled service-features">
              {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
                <li key={index}><i className="bi bi-check-circle-fill text-success me-2"></i>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled service-features">
              {features.slice(Math.ceil(features.length / 2)).map((feature, index) => (
                <li key={index}><i className="bi bi-check-circle-fill text-success me-2"></i>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <a href="contato.html" className="btn btn-primary">
            <i className="bi bi-info-circle me-2"></i>Solicitar demonstração
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`row align-items-center mb-5 pb-5 border-bottom ${!imageLeft ? 'flex-lg-row-reverse' : ''}`}>
      {imageColumn}
      {textColumn}
    </div>
  );
};
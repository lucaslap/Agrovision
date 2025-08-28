// Componente para cada plano de preço
const PricingPlanCard = ({ name, price, description, features, featured }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className={`card plan-card h-100 border-0 shadow ${featured ? 'plan-featured' : ''}`}>
                {featured && <div className="featured-badge">Mais Popular</div>}
                <div className="card-header text-center bg-white border-0 pt-4">
                    <h5 className="text-uppercase text-muted">Plano</h5>
                    <h3 className="fw-bold">{name}</h3>
                    <div className="plan-price">
                        <span className="display-4 fw-bold">R$ {price}</span>
                        <span className="text-muted">/mês</span>
                    </div>
                    <p className="text-muted">{description}</p>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled plan-features">
                        {features.map((feature, index) => (
                            <li key={index} className={`mb-3 ${!feature.included ? 'text-muted' : ''}`}>
                                <i className={`bi ${feature.included ? 'bi-check-circle-fill text-success' : 'bi-x-circle'} me-2`}></i>
                                {feature.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-footer bg-white text-center border-0 pb-4">
                    <a href="contato.html" className={`btn btn-lg px-4 ${featured ? 'btn-primary' : 'btn-outline-primary'}`}>
                        Selecionar
                    </a>
                </div>
            </div>
        </div>
    );
};
/**
 * Componente: TeamMemberCard
 * Descrição: Card reutilizável para exibir um membro da equipe.
 */
const TeamMemberCard = ({ name, role, imageUrl, linkedinUrl, githubUrl }) => {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
      <div className="card team-card h-100 border-0 shadow text-center bg-white rounded-4 transition-hover">
        <div className="mx-auto mt-4 mb-3 position-relative" style={{ width: '120px', height: '120px' }}>
          <img
            src={imageUrl}
            alt={name}
            className="img-fluid rounded-circle w-100 h-100 object-fit-cover border border-3 border-success shadow"
          />
        </div>
        <div className="card-body pt-0">
          <h5 className="card-title mb-1 fw-semibold">{name}</h5>
          <p className="card-text text-muted small mb-2">{role}</p>
          <div className="d-flex justify-content-center gap-2">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success btn-sm rounded-circle"
              aria-label={`LinkedIn ${name}`}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm rounded-circle"
              aria-label={`GitHub ${name}`}
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
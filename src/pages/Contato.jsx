// --- COMPONENTE DE PÁGINA ---

const Contato= () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 text-center text-white" style={{ background: 'linear-gradient(90deg, #198754 0%, #157347 100%)', marginTop: '35px' }}>
        <div className="container mt-5 pt-3">
          <h1 className="display-4 fw-bold">Fale Conosco</h1>
          <p className="lead">
            Estamos à disposição para responder suas dúvidas, receber sugestões ou discutir como podemos colaborar.
          </p>
        </div>
      </section>

      {/* Formulário e Informações de Contato */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <ContactForm />
            </div>
            <div className="col-lg-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default function Contato() {
 

}

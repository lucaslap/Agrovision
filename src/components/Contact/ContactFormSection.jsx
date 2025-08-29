import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'mensagem') {
      setCharacterCount(value.length);
    }
  };

  const validateForm = () => {
    if (!formData.nome.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, informe um email válido.');
      return false;
    }
    if (!formData.mensagem.trim() || formData.mensagem.length < 30) {
      setErrorMessage('A mensagem deve ter pelo menos 30 caracteres.');
      return false;
    }
    if (formData.mensagem.length > 500) {
      setErrorMessage('A mensagem deve ter no máximo 500 caracteres.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(false);
    setShowSuccess(false);

    if (!validateForm()) {
      setShowError(true);
      return;
    }

    // Simular envio do formulário
    console.log('Dados do formulário:', formData);
    
    // Mostrar mensagem de sucesso
    setShowSuccess(true);
    
    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
    setCharacterCount(0);

    // Esconder mensagem de sucesso após 5 segundos
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <motion.div 
      className="col-lg-7 mb-5 mb-lg-0"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="bg-light p-4 rounded shadow-sm d-flex flex-column justify-content-between h-100">
        <div>
          <h2 className="mb-4">Envie-nos uma mensagem</h2>
          <p className="mb-4">
            Preencha o formulário abaixo para entrar em contato com nossa
            equipe. Teremos prazer em responder suas perguntas o mais
            rápido possível.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome Completo*</label>
            <input 
              type="text" 
              className="form-control" 
              id="nome" 
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required 
            />
            <div className="form-text">Exemplo: João Silva</div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email*</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            <div className="form-text">Exemplo: joao.silva@email.com</div>
          </div>

          <div className="mb-3">
            <label htmlFor="telefone" className="form-label">Telefone</label>
            <input 
              type="tel" 
              className="form-control" 
              id="telefone" 
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              placeholder="(11) 99999-9999" 
            />
            <div className="form-text">Opcional - Formato: (XX) XXXXX-XXXX</div>
          </div>

          <div className="mb-3">
            <label htmlFor="assunto" className="form-label">Assunto</label>
            <select 
              className="form-select" 
              id="assunto" 
              name="assunto"
              value={formData.assunto}
              onChange={handleInputChange}
            >
              <option value="">Selecione um assunto</option>
              <option value="Dúvidas">Dúvidas sobre serviços</option>
              <option value="Orçamento">Solicitar orçamento</option>
              <option value="Suporte">Suporte técnico</option>
              <option value="Parceria">Proposta de parceria</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">Descrição da Mensagem*</label>
            <textarea 
              className="form-control" 
              id="mensagem" 
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              rows="5" 
              required
              placeholder="Descreva sua mensagem aqui..."
              maxLength="500"
            ></textarea>
            <div className={`form-text small ${characterCount < 30 ? 'text-danger' : 'text-muted'}`}>
              {characterCount}/500 caracteres (mínimo: 30)
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex">
            <motion.button 
              type="submit" 
              className="btn btn-success btn-lg px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-send me-2"></i>
              Enviar Mensagem
            </motion.button>
          </div>

          {/* Mensagem de erro */}
          {showError && (
            <motion.div 
              className="alert alert-danger mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <i className="bi bi-exclamation-triangle me-2"></i>
              {errorMessage}
            </motion.div>
          )}

          {/* Mensagem de sucesso */}
          {showSuccess && (
            <motion.div 
              className="alert alert-success mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <i className="bi bi-check-circle me-2"></i>
              Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactFormSection;

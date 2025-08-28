import React, { useState } from 'react';

/**
 * Componente: ContactForm
 * Descrição: Gerencia o estado e a lógica do formulário de contato.
 */
const ContactForm = () => {
  // O hook useState gerencia os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  // Estado para controlar as mensagens de sucesso/erro
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // Função para atualizar o estado quando o usuário digita
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o recarregamento da página

    // Lógica de validação (exemplo simples)
    if (!formData.nome || !formData.email || formData.mensagem.length < 30) {
      setStatusMessage({ type: 'error', text: 'Por favor, preencha todos os campos obrigatórios.' });
      return;
    }

    // Se a validação passar:
    console.log('Dados do formulário enviados:', formData);
    setStatusMessage({ type: 'success', text: 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.' });
    
    // Opcional: Limpar o formulário após o envio
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
  };

  const charCount = formData.mensagem.length;

  return (
    <div className="bg-light p-4 rounded shadow-sm d-flex flex-column justify-content-between h-100">
      <h2 className="mb-4">Envie-nos uma mensagem</h2>
      <p className="mb-4">
        Preencha o formulário abaixo para entrar em contato com nossa equipe.
      </p>

      <form id="contactForm" onSubmit={handleSubmit} noValidate>
        {/* Nome Completo */}
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome Completo*</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <div className="form-text">Exemplo: João Silva</div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email*</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="form-text">Exemplo: joao.silva@email.com</div>
        </div>

        {/* Telefone */}
        <div className="mb-3">
            <label htmlFor="telefone" className="form-label">Telefone</label>
            <input 
                type="tel" 
                className="form-control" 
                id="telefone" 
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999" 
            />
            <div className="form-text">Opcional - Formato: (XX) XXXXX-XXXX</div>
        </div>

        {/* Assunto */}
        <div className="mb-3">
          <label htmlFor="assunto" className="form-label">Assunto</label>
          <select
            className="form-select"
            id="assunto"
            value={formData.assunto}
            onChange={handleChange}
          >
            <option value="">Selecione um assunto</option>
            <option value="Dúvidas">Dúvidas sobre serviços</option>
            <option value="Orçamento">Solicitar orçamento</option>
            <option value="Suporte">Suporte técnico</option>
            <option value="Parceria">Proposta de parceria</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        {/* Mensagem */}
        <div className="mb-3">
          <label htmlFor="mensagem" className="form-label">Descrição da Mensagem*</label>
          <textarea
            className="form-control"
            id="mensagem"
            rows="5"
            value={formData.mensagem}
            onChange={handleChange}
            required
            placeholder="Descreva sua mensagem aqui..."
          ></textarea>
           <div id="contadorCaracteres" className="form-text text-muted small">
             {charCount}/500 caracteres (mínimo: 30)
            </div>
        </div>

        <div className="d-grid gap-2 d-md-flex">
          <button type="submit" className="btn btn-success btn-lg px-4">
            Enviar Mensagem
          </button>
        </div>
        
        {/* Mensagens de Status */}
        {statusMessage.text && (
            <div className={`alert ${statusMessage.type === 'success' ? 'alert-success' : 'alert-danger'} mt-4`}>
                {statusMessage.text}
            </div>
        )}
      </form>
    </div>
  );
};
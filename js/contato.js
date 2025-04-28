// Validação do Bootstrap
(function() {
  'use strict';
  
  // Busca todos os formulários aos quais queremos aplicar estilos de validação do Bootstrap
  var forms = document.querySelectorAll('.needs-validation');
  
  // Loop para prevenir o envio do formulário e aplicar validação
  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário
        
        if (!form.checkValidity()) {
          event.stopPropagation();
          
          // Adiciona a classe para mostrar o feedback visual apenas quando inválido
          form.classList.add('was-validated');
          
          // Mostra mensagem de erro geral
          showErrorMessage('Por favor, preencha todos os campos obrigatórios corretamente.');
        } else {
          // Se o formulário for válido, não adicionamos a classe was-validated
          // e apenas processamos os dados
          saveFormData(form);
        }
      }, false);
    });
    
  // Adiciona validação em tempo real para o email
  const emailInput = document.getElementById('email');
  if (emailInput) {
    emailInput.addEventListener('blur', function() {
      if (emailInput.value && !validarEmail(emailInput.value)) {
        emailInput.setCustomValidity('Por favor, insira um endereço de email válido');
        emailInput.reportValidity();
      } else {
        emailInput.setCustomValidity('');
      }
    });
  }

  // Limpa as mensagens de erro quando o usuário começa a digitar
  const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
  formInputs.forEach(input => {
    input.addEventListener('input', function() {
      hideErrorMessage();
      input.setCustomValidity('');
    });
  });
})();

// Função para validar formato de email
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Função para validar formato de telefone
function validarTelefone(telefone) {
  // Aceita formatos: (99) 99999-9999 ou 99999999999 ou 9999-9999
  const regex = /^(\(\d{2}\)\s?)?\d{4,5}[-\s]?\d{4}$|^\d{10,11}$/;
  return regex.test(telefone);
}

// Função para mostrar mensagem de erro
function showErrorMessage(message) {
  // Verifica se já existe uma mensagem de erro
  let errorMessage = document.getElementById('errorMessage');
  
  // Se não existir, cria uma
  if (!errorMessage) {
    errorMessage = document.createElement('div');
    errorMessage.id = 'errorMessage';
    errorMessage.className = 'alert alert-danger mt-4';
    errorMessage.style.display = 'none';
    
    // Insere antes da mensagem de sucesso ou no final do formulário
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('contactForm');
    
    if (successMessage) {
      successMessage.parentNode.insertBefore(errorMessage, successMessage);
    } else if (form) {
      form.parentNode.appendChild(errorMessage);
    }
  }
  
  // Atualiza a mensagem e exibe
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  
  // Scroll até a mensagem de erro
  errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Função para esconder mensagem de erro
function hideErrorMessage() {
  const errorMessage = document.getElementById('errorMessage');
  if (errorMessage) {
    errorMessage.style.display = 'none';
  }
}

// Função para salvar os dados do formulário
function saveFormData(form) {
  // Verifica se todos os campos obrigatórios estão preenchidos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value.trim();
  
  // Verifica se algum campo está vazio
  if (!nome || !email || !telefone || !assunto || !mensagem) {
    showErrorMessage('Todos os campos são obrigatórios.');
    console.error('Todos os campos são obrigatórios');
    // Adiciona a classe was-validated apenas quando houver campos vazios
    form.classList.add('was-validated');
    return; // Interrompe a execução da função
  }
  
  // Valida o formato do email
  if (!validarEmail(email)) {
    showErrorMessage('Por favor, insira um endereço de email válido.');
    const emailInput = document.getElementById('email');
    emailInput.setCustomValidity('Por favor, insira um endereço de email válido');
    emailInput.reportValidity();
    // Adiciona a classe was-validated apenas quando o email for inválido
    form.classList.add('was-validated');
    console.error('Email inválido');
    return; // Interrompe a execução da função
  }
  
  // Valida o formato do telefone
  if (!validarTelefone(telefone)) {
    showErrorMessage('Por favor, insira um número de telefone válido.');
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.setCustomValidity('Por favor, insira um número de telefone válido');
    telefoneInput.reportValidity();
    // Adiciona a classe was-validated apenas quando o telefone for inválido
    form.classList.add('was-validated');
    console.error('Telefone inválido');
    return; // Interrompe a execução da função
  }
  
  // Colete os dados do formulário
  const formData = {
    nome: nome,
    email: email,
    telefone: telefone,
    assunto: assunto,
    mensagem: mensagem,
    dataEnvio: new Date().toISOString()
  };
  
  // Para demonstração, vamos salvar no localStorage
  try {
    const contatos = JSON.parse(localStorage.getItem('agrovision_contatos') || '[]');
    contatos.push(formData);
    localStorage.setItem('agrovision_contatos', JSON.stringify(contatos));
    
    // Esconde mensagem de erro (se existir)
    hideErrorMessage();
    
    // Mostra a mensagem de sucesso
    document.getElementById('successMessage').style.display = 'block';
    
    // Limpa o formulário E a validação
    form.reset();
    form.classList.remove('was-validated'); // Remove a classe was-validated
    
    // Rola para a mensagem de sucesso
    document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
    
    // Log dos dados enviados
    console.log('Dados enviados:', formData);
  } catch (error) {
    showErrorMessage('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.');
    console.error('Erro ao salvar dados:', error);
  }
}
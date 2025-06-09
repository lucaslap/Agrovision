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
      // Adiciona validação em tempo real para os campos
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const mensagemInput = document.getElementById('mensagem');
  
  if (nomeInput) {
    nomeInput.addEventListener('blur', function() {
      if (nomeInput.value && !validarNomeCompleto(nomeInput.value)) {
        nomeInput.setCustomValidity('Por favor, informe seu nome completo (nome e sobrenome)');
        nomeInput.reportValidity();
      } else {
        nomeInput.setCustomValidity('');
      }
    });
  }
  
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
  
  if (mensagemInput) {
    mensagemInput.addEventListener('blur', function() {
      if (mensagemInput.value && !validarMensagem(mensagemInput.value)) {
        mensagemInput.setCustomValidity('A mensagem deve ter entre 30 e 500 caracteres');
        mensagemInput.reportValidity();
      } else {
        mensagemInput.setCustomValidity('');
      }
    });
    
    // Contador de caracteres para a mensagem
    mensagemInput.addEventListener('input', function() {
      const contador = document.getElementById('contadorCaracteres');
      if (contador) {
        const atual = mensagemInput.value.length;
        contador.textContent = `${atual}/500 caracteres`;
        contador.className = atual < 30 ? 'text-danger small' : atual > 450 ? 'text-warning small' : 'text-muted small';
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

// Função para validar nome completo
function validarNomeCompleto(nome) {
  const nomeArray = nome.trim().split(' ').filter(part => part.length > 0);
  return nomeArray.length >= 2; // Deve ter pelo menos 2 partes (nome e sobrenome)
}

// Função para validar mensagem
function validarMensagem(mensagem) {
  const mensagemLimpa = mensagem.trim();
  return mensagemLimpa.length >= 30 && mensagemLimpa.length <= 500;
}

// Função para salvar os dados do formulário
function saveFormData(form) {
  // Verifica se todos os campos obrigatórios estão preenchidos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value.trim();
  
  // Validação do nome completo (obrigatório e deve ter mais de um nome)
  if (!nome) {
    showErrorMessage('O campo Nome Completo é obrigatório.');
    form.classList.add('was-validated');
    return;
  }
  
  if (!validarNomeCompleto(nome)) {
    showErrorMessage('Por favor, informe seu nome completo (nome e sobrenome).');
    const nomeInput = document.getElementById('nome');
    nomeInput.setCustomValidity('Por favor, informe seu nome completo (nome e sobrenome)');
    nomeInput.reportValidity();
    form.classList.add('was-validated');
    return;
  }
  
  // Validação do email (obrigatório e formato válido)
  if (!email) {
    showErrorMessage('O campo E-mail é obrigatório.');
    form.classList.add('was-validated');
    return;
  }
  
  if (!validarEmail(email)) {
    showErrorMessage('Por favor, insira um endereço de email válido.');
    const emailInput = document.getElementById('email');
    emailInput.setCustomValidity('Por favor, insira um endereço de email válido');
    emailInput.reportValidity();
    form.classList.add('was-validated');
    return;
  }
  
  // Validação da mensagem (obrigatória e deve ter entre 30 e 500 caracteres)
  if (!mensagem) {
    showErrorMessage('O campo Descrição da Mensagem é obrigatório.');
    form.classList.add('was-validated');
    return;
  }
  
  if (!validarMensagem(mensagem)) {
    showErrorMessage('A mensagem deve ter entre 30 e 500 caracteres.');
    const mensagemInput = document.getElementById('mensagem');
    mensagemInput.setCustomValidity('A mensagem deve ter entre 30 e 500 caracteres');
    mensagemInput.reportValidity();
    form.classList.add('was-validated');
    return;
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
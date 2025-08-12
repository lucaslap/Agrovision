document.addEventListener('DOMContentLoaded', function() {
  
  // Texto a ser exibido
  const text = "Transforme sua produção agrícola com tecnologia";
  const typewriter = document.getElementById('typewriter');
  
  // Verifica se é um dispositivo móvel (largura < 768px)
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    // Em dispositivos móveis, renderiza o texto imediatamente sem animação
    typewriter.textContent = "Transforme sua produção agrícola com tecnologia";
    typewriter.style.whiteSpace = "normal";
    typewriter.style.borderRight = "none";
    typewriter.style.animation = "none";
    typewriter.classList.add('typing-complete');
  } else {
    // Em dispositivos desktop, mantém o efeito typewriter
    typewriter.textContent = "";
    
    // Velocidade de digitação (em milissegundos)
    const typingSpeed = 80;
    
    // Função para simular digitação
    let i = 0;
    function typeText() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Remove o cursor quando terminar de digitar
        typewriter.classList.add('typing-complete');
      }
    }
    
    // Pequeno atraso antes de iniciar a digitação
    setTimeout(typeText, 500);
  }

  // Animação para os cards de features
  const featureCards = document.querySelectorAll('.feature-card-wrapper');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  featureCards.forEach(card => {
    observer.observe(card);
  });

  // Animação para tabs de tecnologias
  const techTabs = document.querySelectorAll('[data-bs-toggle="pill"]');
  techTabs.forEach(tab => {
    tab.addEventListener('shown.bs.tab', function (event) {
      const targetPane = document.querySelector(event.target.getAttribute('data-bs-target'));
      targetPane.classList.add('animated-tab');
    });
  });

  // Animação para contadores de estatísticas
  animateStats();

  // Gerenciamento do formulário de newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterButton = document.getElementById('newsletter-button');
  const newsletterFeedback = document.getElementById('newsletter-feedback');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulação de envio
      newsletterButton.disabled = true;
      newsletterButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
      
      setTimeout(function() {
        newsletterButton.innerHTML = 'Assinar';
        newsletterButton.disabled = false;
        newsletterFeedback.classList.remove('d-none');
        newsletterFeedback.textContent = 'E-mail cadastrado com sucesso!';
        newsletterFeedback.className = 'form-text text-success';
        newsletterForm.reset();
        
        // Esconde a mensagem após 5 segundos
        setTimeout(function() {
          newsletterFeedback.classList.add('d-none');
        }, 5000);
      }, 1500);
    });
  }

  // Botão voltar ao topo
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Alteração da navbar ao rolar a página
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Inicializar validações da calculadora de ROI
  initializeROICalculator();
});

// Animação para contadores de estatísticas
function animateStats() {
  const statElements = document.querySelectorAll('.stat-value');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const finalValue = parseInt(element.getAttribute('data-count'));
        let currentValue = 0;
        const duration = 2000; // milissegundos
        const increment = Math.ceil(finalValue / (duration / 30));
        
        // Obtenha o span antes de iniciar a animação
        const spanElement = element.querySelector('span');
        const spanHTML = spanElement ? spanElement.outerHTML : '';
        
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            // Quando atingir o valor final, exiba o número e o símbolo
            element.innerHTML = finalValue + spanHTML;
            clearInterval(counter);
          } else {
            // Durante a contagem, mantenha o símbolo junto
            element.innerHTML = currentValue + spanHTML;
          }
        }, 30);
        
        statsObserver.unobserve(element);
      }
    });
  }, observerOptions);
  
  statElements.forEach(element => {
    statsObserver.observe(element);
  });
}

// Função para calcular ROI da AgroVision
function calcularROI() {
  // Validar todos os campos primeiro
  const fields = ['areaHectares', 'producaoAtual', 'precoTonelada', 'custosAtuais'];
  let allValid = true;
  
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field && !validateROIField(field)) {
      allValid = false;
    }
  });
  
  if (!allValid) {
    // Mostrar alerta personalizado
    showROIAlert('Por favor, corrija os campos destacados em vermelho antes de calcular.', 'warning');
    return;
  }
  
  // Obter valores dos campos
  const areaHectares = parseFloat(document.getElementById('areaHectares').value);
  const producaoAtual = parseFloat(document.getElementById('producaoAtual').value);
  const precoTonelada = parseFloat(document.getElementById('precoTonelada').value);
  const custosAtuais = parseFloat(document.getElementById('custosAtuais').value);
  
  // Mostrar loading no botão
  const calcButton = document.querySelector('button[onclick="calcularROI()"]');
  const originalText = calcButton.innerHTML;
  calcButton.disabled = true;
  calcButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Calculando...';
  
  // Simular processamento
  setTimeout(() => {
    try {
      // Cálculos da situação atual
      const producaoTotalAtual = areaHectares * producaoAtual;
      const receitaAtual = producaoTotalAtual * precoTonelada;
      const lucroAtual = receitaAtual - custosAtuais;
      
      // Estimativas com AgroVision (aumento de 15% a 25% na produtividade)
      const aumentoMinimo = 0.15; // 15%
      const aumentoMaximo = 0.25; // 25%
      const aumentoMedio = (aumentoMinimo + aumentoMaximo) / 2; // 20%
      
      const producaoComAgroVision = producaoTotalAtual * (1 + aumentoMedio);
      const receitaComAgroVision = producaoComAgroVision * precoTonelada;
      
      // Custos estimados do plano AgroVision (baseado no tamanho da propriedade)
      let custoPlanoAnual;
      let planRecomendado;
      if (areaHectares <= 500) {
        custoPlanoAnual = 990 * 12; // Plano Básico
        planRecomendado = 'Básico';
      } else if (areaHectares <= 1500) {
        custoPlanoAnual = 1990 * 12; // Plano Avançado  
        planRecomendado = 'Avançado';
      } else {
        custoPlanoAnual = 3490 * 12; // Plano Premium
        planRecomendado = 'Premium';
      }
      
      const custosComAgroVision = custosAtuais + custoPlanoAnual;
      const lucroComAgroVision = receitaComAgroVision - custosComAgroVision;
      
      // Ganho anual
      const ganhoAnual = lucroComAgroVision - lucroAtual;
      
      // ROI (Retorno sobre Investimento)
      const roi = (ganhoAnual / custoPlanoAnual) * 100;
      
      // Tempo de retorno (em meses)
      const tempoRetorno = custoPlanoAnual / (ganhoAnual / 12);
      
      // Verificar se o ROI é positivo
      if (roi <= 0) {
        showROIAlert(`Com base nos dados informados, recomendamos uma análise mais detalhada. Entre em contato conosco para uma consultoria personalizada.`, 'info');
        calcButton.disabled = false;
        calcButton.innerHTML = originalText;
        return;
      }
      
      // Exibir resultados
      document.getElementById('receitaAtual').textContent = formatarMoeda(receitaAtual);
      document.getElementById('receitaComAgroVision').textContent = formatarMoeda(receitaComAgroVision);
      document.getElementById('roiPercentual').textContent = roi.toFixed(1) + '%';
      document.getElementById('ganhoAnual').textContent = formatarMoeda(ganhoAnual);
      document.getElementById('tempoRetorno').textContent = Math.ceil(Math.max(1, tempoRetorno)) + ' meses';
      
      // Adicionar informação do plano recomendado
      const alertHeading = document.querySelector('#roiResult .alert-heading');
      alertHeading.innerHTML = `<i class="bi bi-graph-up-arrow me-2"></i>Resultado da Análise - Plano ${planRecomendado} Recomendado`;
      
      // Mostrar resultado com animação
      const resultadoDiv = document.getElementById('roiResult');
      resultadoDiv.style.display = 'block';
      
      // Animar aparição
      resultadoDiv.style.opacity = '0';
      resultadoDiv.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        resultadoDiv.style.transition = 'all 0.6s ease';
        resultadoDiv.style.opacity = '1';
        resultadoDiv.style.transform = 'translateY(0)';
      }, 100);
      
      // Scroll suave para o resultado
      setTimeout(() => {
        resultadoDiv.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 700);
      
      // Mostrar mensagem de sucesso
      showROIAlert('Cálculo realizado com sucesso! Confira os resultados abaixo.', 'success');
      
    } catch (error) {
      console.error('Erro no cálculo de ROI:', error);
      showROIAlert('Ocorreu um erro no cálculo. Por favor, verifique os dados e tente novamente.', 'danger');
    }
    
    // Restaurar botão
    calcButton.disabled = false;
    calcButton.innerHTML = originalText;
  }, 1500);
}

// Função auxiliar para formatar valores monetários
function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(valor);
}

// Função para inicializar a calculadora de ROI
function initializeROICalculator() {
  const roiForm = document.getElementById('roiCalculator');
  if (!roiForm) return;

  // Adicionar validação em tempo real nos campos
  const fields = ['areaHectares', 'producaoAtual', 'precoTonelada', 'custosAtuais'];
  
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      // Validação ao perder o foco
      field.addEventListener('blur', function() {
        validateROIField(this);
      });
      
      // Limpar erro ao digitar
      field.addEventListener('input', function() {
        this.setCustomValidity('');
        this.classList.remove('is-invalid');
      });
    }
  });

  // Permitir cálculo com Enter
  roiForm.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      calcularROI();
    }
  });
}

// Função para validar campos individuais da calculadora
function validateROIField(field) {
  const value = parseFloat(field.value);
  const fieldId = field.id;
  let isValid = true;
  let errorMessage = '';
  
  if (!field.value || isNaN(value) || value <= 0) {
    isValid = false;
    errorMessage = 'Este campo é obrigatório e deve ser maior que zero.';
  } else {
    // Validações específicas por campo
    switch (fieldId) {
      case 'areaHectares':
        if (value < 1 || value > 100000) {
          isValid = false;
          errorMessage = 'A área deve estar entre 1 e 100.000 hectares.';
        }
        break;
      case 'producaoAtual':
        if (value < 0.1 || value > 50) {
          isValid = false;
          errorMessage = 'A produção deve estar entre 0.1 e 50 toneladas/hectare.';
        }
        break;
      case 'precoTonelada':
        if (value < 100 || value > 50000) {
          isValid = false;
          errorMessage = 'O preço deve estar entre R$ 100 e R$ 50.000 por tonelada.';
        }
        break;
      case 'custosAtuais':
        if (value < 1000 || value > 10000000) {
          isValid = false;
          errorMessage = 'Os custos devem estar entre R$ 1.000 e R$ 10.000.000.';
        }
        break;
    }
  }
  
  if (!isValid) {
    field.setCustomValidity(errorMessage);
    field.classList.add('is-invalid');
    field.reportValidity();
  } else {
    field.setCustomValidity('');
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
  }
  
  return isValid;
}

// Função para mostrar alertas personalizados na calculadora
function showROIAlert(message, type = 'info') {
  // Remover alerta anterior se existir
  const existingAlert = document.querySelector('#roiCalculator .roi-alert');
  if (existingAlert) {
    existingAlert.remove();
  }
  
  // Criar novo alerta
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} roi-alert mt-3`;
  alertDiv.style.display = 'none';
  
  let icon = '';
  switch (type) {
    case 'success':
      icon = 'bi-check-circle-fill';
      break;
    case 'warning':
      icon = 'bi-exclamation-triangle-fill';
      break;
    case 'danger':
      icon = 'bi-x-circle-fill';
      break;
    default:
      icon = 'bi-info-circle-fill';
  }
  
  alertDiv.innerHTML = `
    <i class="bi ${icon} me-2"></i>
    ${message}
  `;
  
  // Inserir após o botão calcular
  const button = document.querySelector('button[onclick="calcularROI()"]');
  button.parentNode.insertBefore(alertDiv, button.nextSibling);
  
  // Animar aparição
  setTimeout(() => {
    alertDiv.style.display = 'block';
    alertDiv.style.opacity = '0';
    alertDiv.style.transform = 'translateY(-10px)';
    alertDiv.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
      alertDiv.style.opacity = '1';
      alertDiv.style.transform = 'translateY(0)';
    }, 10);
  }, 100);
  
  // Remover automaticamente após 5 segundos (exceto para sucesso)
  if (type !== 'success') {
    setTimeout(() => {
      if (alertDiv.parentNode) {
        alertDiv.style.opacity = '0';
        alertDiv.style.transform = 'translateY(-10px)';
        setTimeout(() => alertDiv.remove(), 300);
      }
    }, 5000);
  }
}

// Função para preencher dados de exemplo (útil para testes)
function preencherDadosExemplo() {
  document.getElementById('areaHectares').value = '250';
  document.getElementById('producaoAtual').value = '4.2';
  document.getElementById('precoTonelada').value = '1350';
  document.getElementById('custosAtuais').value = '180000';
  
  // Limpar validações anteriores
  const fields = ['areaHectares', 'producaoAtual', 'precoTonelada', 'custosAtuais'];
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.classList.remove('is-invalid', 'is-valid');
      field.setCustomValidity('');
    }
  });
}
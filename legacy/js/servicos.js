// JavaScript para funcionalidades da página de serviços

// Função para atualizar comparação de planos
function atualizarComparacao() {
  const area = document.getElementById('areaComparador').value;
  const necessidade = document.getElementById('necessidadeComparador').value;
  const orcamento = document.getElementById('orcamentoComparador').value;
  
  const resultadoDiv = document.getElementById('resultadoComparacao');
  const conteudoDiv = document.getElementById('recomendacaoConteudo');
  
  // Só mostra recomendação se pelo menos um filtro estiver selecionado
  if (!area && !necessidade && !orcamento) {
    resultadoDiv.style.display = 'none';
    return;
  }
  
  let recomendacao = '';
  let planoRecomendado = '';
  let justificativa = '';
  
  // Lógica de recomendação baseada nos critérios
  if (area === 'pequena' && orcamento === 'baixo') {
    planoRecomendado = 'Básico';
    justificativa = 'Ideal para propriedades menores com orçamento limitado, oferecendo monitoramento essencial.';
  } else if (area === 'media' || (necessidade === 'analise' && orcamento !== 'baixo')) {
    planoRecomendado = 'Avançado';
    justificativa = 'Equilibrio perfeito entre funcionalidades e custo, com análises mais detalhadas.';
  } else if (area === 'grande' || necessidade === 'completo' || orcamento === 'alto') {
    planoRecomendado = 'Premium';
    justificativa = 'Solução completa para operações que precisam de máximo controle e suporte dedicado.';
  } else {
    planoRecomendado = 'Avançado';
    justificativa = 'Baseado no seu perfil, este plano oferece a melhor relação custo-benefício.';
  }
  
  // Definir características específicas do plano recomendado
  let caracteristicas = '';
  switch (planoRecomendado) {
    case 'Básico':
      caracteristicas = `
        <ul class="list-unstyled mt-3">
          <li><i class="bi bi-check-circle text-success me-2"></i>Monitoramento por satélite até 500ha</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Imagens quinzenais</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Dashboard básico</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Suporte por e-mail</li>
        </ul>
      `;
      break;
    case 'Avançado':
      caracteristicas = `
        <ul class="list-unstyled mt-3">
          <li><i class="bi bi-check-circle text-success me-2"></i>Monitoramento por satélite até 1.500ha</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Imagens semanais</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Dashboard completo com análises</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Mapeamento com drone trimestral</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Suporte por telefone e e-mail</li>
        </ul>
      `;
      break;
    case 'Premium':
      caracteristicas = `
        <ul class="list-unstyled mt-3">
          <li><i class="bi bi-check-circle text-success me-2"></i>Monitoramento por satélite até 5.000ha</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Imagens a cada 3 dias</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Dashboard avançado com IA preditiva</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Mapeamento mensal com drone</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Consultoria agronômica mensal</li>
          <li><i class="bi bi-check-circle text-success me-2"></i>Suporte 24/7 dedicado</li>
        </ul>
      `;
      break;
  }
  
  recomendacao = `
    <div class="recommendation-content">
      <h6 class="fw-bold text-primary">Plano recomendado: ${planoRecomendado}</h6>
      <p class="mb-2">${justificativa}</p>
      ${caracteristicas}
      <div class="mt-3 p-3 bg-light rounded">
        <small class="text-muted">
          <i class="bi bi-info-circle me-1"></i>
          Esta recomendação é baseada nas informações fornecidas. Para uma análise mais detalhada, 
          entre em contato com nossa equipe de consultores.
        </small>
      </div>
    </div>
  `;
  
  conteudoDiv.innerHTML = recomendacao;
  resultadoDiv.style.display = 'block';
  
  // Animar a aparição do resultado
  resultadoDiv.style.opacity = '0';
  resultadoDiv.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    resultadoDiv.style.transition = 'all 0.5s ease';
    resultadoDiv.style.opacity = '1';
    resultadoDiv.style.transform = 'translateY(0)';
  }, 100);
  
  // Destacar o plano recomendado na tabela
  destacarPlanoRecomendado(planoRecomendado);
}

// Função para destacar o plano recomendado na tabela
function destacarPlanoRecomendado(plano) {
  // Remover destaque anterior
  const headers = document.querySelectorAll('.comparison-table th');
  headers.forEach(header => {
    header.classList.remove('recommended-plan');
  });
  
  // Adicionar destaque ao plano recomendado
  let colunaIndex = 0;
  switch (plano) {
    case 'Básico':
      colunaIndex = 1;
      break;
    case 'Avançado':
      colunaIndex = 2;
      break;
    case 'Premium':
      colunaIndex = 3;
      break;
  }
  
  if (colunaIndex > 0) {
    const headerRecomendado = document.querySelector(`.comparison-table th:nth-child(${colunaIndex + 1})`);
    if (headerRecomendado) {
      headerRecomendado.classList.add('recommended-plan');
    }
  }
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar tooltips do Bootstrap
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Adicionar efeitos de hover nos cards de serviços
  const serviceCards = document.querySelectorAll('.card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Smooth scroll para links internos
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Animação de entrada para elementos quando entram na viewport
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observar elementos que devem ser animados
  const animatedElements = document.querySelectorAll('.card, .service-content, .plan-card');
  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
});

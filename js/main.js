document.addEventListener('DOMContentLoaded', function() {
  // Texto a ser digitado
  const text = "Transforme sua produção agrícola com tecnologia";
  const typewriter = document.getElementById('typewriter');
  
  // Limpa qualquer texto existente
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
      
      // Simulação de envio (substitua por chamada real à API)
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
        
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            element.textContent = finalValue + (element.querySelector('span') ? element.querySelector('span').outerHTML : '');
            clearInterval(counter);
          } else {
            element.textContent = currentValue + (element.querySelector('span') ? element.querySelector('span').outerHTML : '');
          }
        }, 30);
        
        statsObserver.unobserve(element);
      }
    });
  }, observerOptions);
  
  statElements.forEach(element => {
    const span = element.querySelector('span');
    if (span) {
      // Armazene o HTML do span
      const spanHTML = span.outerHTML;
      // Remova o span do elemento, mas mantenha o texto
      element.innerHTML = '0';
      // Adicione o span de volta
      element.innerHTML += spanHTML;
    }
    statsObserver.observe(element);
  });
}
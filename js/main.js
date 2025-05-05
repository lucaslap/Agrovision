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
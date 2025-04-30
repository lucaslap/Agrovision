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
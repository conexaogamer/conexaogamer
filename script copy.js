document.querySelector('.btn-seta').addEventListener('click', function(event) {
    event.preventDefault();  // Impede o comportamento padrão do link
    document.querySelector('#ultimas-noticias').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  });
  
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}


document.querySelector('.btn-seta').addEventListener('click', function(event) {
    event.preventDefault();  // Impede o comportamento padrão do link
    document.querySelector('#ultimas-noticias').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  });
  


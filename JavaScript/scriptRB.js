document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('header');
  const scrollBtn = document.getElementById('scrollTopBtn');
  const themeToggle = document.getElementById('themeToggle');
  const logoImg = document.getElementById('logoImg'); // Aquí seleccionamos la imagen del logo

  // Toggle menú responsive
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Scroll: mostrar botón y reducir header
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';

    if (window.scrollY > 50) {
      header.classList.add('shrink');
      document.querySelector('.navbar').style.top = '0px';
    } else {
      header.classList.remove('shrink');
      document.querySelector('.navbar').style.top = '107px';
    }
  });

  // Funcionalidad del botón "ir arriba"
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Alternar modo oscuro
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Cambiar imagen del logo y el color de los enlaces del menú según el modo
    if (document.body.classList.contains('dark-mode')) {
      logoImg.src = '../Imágenes/imageBlack.png'; // Imagen para el modo oscuro
      localStorage.setItem('theme', 'dark'); // Guardar preferencia de tema
    } else {
      logoImg.src = '../Imágenes/imageRB.png'; // Imagen para el modo claro
      localStorage.removeItem('theme'); // Eliminar preferencia de tema
    }
  });

  // Comprobar el modo y establecer la imagen del logo al cargar la página
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    logoImg.src = '../Imágenes/imageBlack.png'; // Imagen para el modo oscuro
  } else {
    document.body.classList.remove('dark-mode');
    logoImg.src = '../Imágenes/imageRB.png'; // Imagen para el modo claro
  }
});

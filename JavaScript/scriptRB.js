// Menú responsive y botón scroll arriba
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('header');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Mostrar botón de "ir arriba"
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    // Mostrar el botón cuando se desplace 300px hacia abajo
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';

    // Hacer que el header y navbar se hagan más pequeños al hacer scroll
    if (window.scrollY > 50) {
      header.classList.add('shrink');
      document.querySelector('.navbar').style.top = '0px'; // Reducir la distancia
    } else {
      header.classList.remove('shrink');
      document.querySelector('.navbar').style.top = '107px'; // Restaurar
    }
  });

  // Funcionalidad de scroll al top
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

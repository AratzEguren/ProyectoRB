document.addEventListener('DOMContentLoaded', () => {
  // Elements selection
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('header');
  const scrollBtn = document.getElementById('scrollTopBtn');
  const themeToggle = document.getElementById('themeToggle');
  const logoImg = document.getElementById('logoImg');

  if (!logoImg) {
    console.error("logoImg element not found - please ensure your element has id 'logoImg'.");
    return;
  }

  // Toggle responsive menu
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  } else {
    console.warn("Menu toggle button or nav links not found");
  }

  // Scroll event: adjust header and control scroll button display
  window.addEventListener('scroll', () => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
    if (header) {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        header.classList.add('shrink');
        if (navbar) {
          navbar.style.top = '0px';
        }
      } else {
        header.classList.remove('shrink');
        if (navbar) {
          navbar.style.top = '107px';
        }
      }
    }
  });

  // "Scroll to top" button functionality
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Toggle dark mode and update logo image accordingly
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        logoImg.src = '/ProyectoRB/Imágenes/imageBlack.png';
        localStorage.setItem('theme', 'dark');
        console.debug("Dark mode enabled. Logo updated to:", logoImg.src);
      } else {
        logoImg.src = 'Imágenes/imageRB.png';
        localStorage.removeItem('theme');
        console.debug("Light mode enabled. Logo updated to:", logoImg.src);
      }
    });
  } else {
    console.warn("Theme toggle button not found");
  }

  // On page load, apply the saved theme and set the logo image accordingly.
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    logoImg.src = '/ProyectoRB/Imágenes/imageBlack.png';
    console.debug("Loaded in dark mode. Logo set to:", logoImg.src);
  } else {
    document.body.classList.remove('dark-mode');
    logoImg.src = '/ProyectoRB/Imágenes/imageRB.png';
    console.debug("Loaded in light mode. Logo set to:", logoImg.src);
  }
});

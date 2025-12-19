import { createIcons, icons } from 'lucide';

// Initialize Lucide icons
createIcons({ icons });

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Active Link Highlighting
const currentPath = window.location.pathname;
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(link => {
  const linkPath = link.getAttribute('href');
  
  // Check if current path matches link path
  // Handle root path '/' specifically
  if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html') || (currentPath === '/index.html' && linkPath === '/')) {
    link.classList.add('active');
  } else if (currentPath.endsWith(linkPath) && linkPath !== '/') {
      // Handles cases like /services.html matching /services.html
      link.classList.add('active');
  }
});

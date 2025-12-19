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
    navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.3)';
    navbar.style.backgroundColor = 'rgba(11, 17, 32, 0.95)';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.backgroundColor = 'rgba(11, 17, 32, 0.85)';
  }
});

// Active Link Highlighting
const currentPath = window.location.pathname;
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(link => {
  const linkPath = link.getAttribute('href');
  
  // Check if current path matches link path
  if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html') || (currentPath === '/index.html' && linkPath === '/')) {
    link.classList.add('active');
  } else if (currentPath.endsWith(linkPath) && linkPath !== '/') {
      link.classList.add('active');
  }
});

// --- SCROLL ANIMATIONS ---
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      
      // If it's a progress bar, animate the width
      if (entry.target.classList.contains('progress')) {
        const width = entry.target.getAttribute('style').match(/width:\s*(\d+)%/)[1];
        entry.target.style.width = '0%'; // Reset to 0
        setTimeout(() => {
          entry.target.style.width = width + '%'; // Animate to target
        }, 100);
      }
      
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, {
  root: null,
  threshold: 0.1, // Trigger when 10% visible
  rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));

// Animate progress bars specifically if they don't have the reveal class but are inside a revealed section
const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
    // If we want to animate them when they come into view
    revealObserver.observe(bar);
});

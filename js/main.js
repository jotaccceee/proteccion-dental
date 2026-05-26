// js/main.js

const header = document.getElementById('main-header');
const container = document.getElementById('header-container');
const navLinks = document.querySelectorAll('#main-nav a');

// Escuchar el evento de scroll en la pantalla
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Estado del Header cuando el usuario baja (Menú flotante compacto)
        header.classList.add('fixed', 'pt-4', 'px-4');
        header.classList.remove('sticky');
        container.classList.add('bg-slate-900/90', 'backdrop-blur-md', 'rounded-2xl', 'shadow-2xl', 'border', 'border-slate-700/60', 'h-16', 'max-w-5xl');
        container.classList.remove('h-20', 'max-w-6xl');
        navLinks.forEach(link => link.classList.add('text-slate-200'));
    } else {
        // Estado del Header arriba de todo (Transparente e integrado al Hero)
        header.classList.add('sticky');
        header.classList.remove('fixed', 'pt-4', 'px-4');
        container.classList.remove('bg-slate-900/90', 'backdrop-blur-md', 'rounded-2xl', 'shadow-2xl', 'border', 'border-slate-700/60', 'h-16', 'max-w-5xl');
        container.classList.add('h-20', 'max-w-6xl');
    }
});

// Inicializar la librería de íconos Lucide
lucide.createIcons();
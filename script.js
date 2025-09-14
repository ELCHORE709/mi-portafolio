// Toggle para el menú móvil
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Cierra el menú cuando se hace clic en un enlace (en móvil)
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

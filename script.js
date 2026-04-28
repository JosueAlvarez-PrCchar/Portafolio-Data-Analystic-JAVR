document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Observador para animar tarjetas al scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card-gold-animate').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease-out';
        observer.observe(card);
    });
});

// Funciones para Apartados (Modales)
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Libera el scroll
}

// Cerrar al hacer clic fuera del cuadro blanco
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
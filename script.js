// Manejo del formulario de newsletter
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Gracias por suscribirte con el email: ${email}\nTe enviaremos nuestras promociones especiales.`);
    this.reset();
});

// Manejo del formulario de reserva
if (document.getElementById('reserva-form')) {
    document.getElementById('reserva-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = this.querySelector('input[type="text"]').value;
        const servicio = this.querySelector('select').value;
        alert(`Gracias ${nombre} por tu reserva para ${servicio}. Nos pondremos en contacto contigo pronto.`);
        this.reset();
    });
}

// Manejo del formulario de contacto
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = this.querySelector('input[type="text"]').value;
        alert(`Gracias ${nombre} por tu mensaje. Te responderemos a la brevedad posible.`);
        this.reset();
    });
}

// Efecto smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar clase active en navegación
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.parentElement.classList.add('current');
    } else {
        link.parentElement.classList.remove('current');
    }
});
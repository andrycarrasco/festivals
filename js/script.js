// Funcionalidad para el Menú Móvil
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Activa/Desactiva la clase 'active' para mostrar/ocultar el menú
        navLinks.classList.toggle('active');
        
        // Animación simple de las barras de la hamburguesa (opcional)
        hamburger.classList.toggle('toggle');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Código anterior del menú hamburguesa...
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // --- NUEVO: Lógica del Selector de Monedas ---
    const currencySelector = document.getElementById('currency-selector');
    const prices = document.querySelectorAll('.price');

    if (currencySelector) {
        currencySelector.addEventListener('change', (e) => {
            const selectedCurrency = e.target.value;

            prices.forEach(price => {
                if (selectedCurrency === 'all') {
                    // Muestra todas las monedas separadas por la barra vertical
                    price.textContent = `${price.dataset.brl} | ${price.dataset.usd} | ${price.dataset.ars}`;
                } else {
                    // Muestra solo la moneda seleccionada
                    price.textContent = price.dataset[selectedCurrency];
                }
            });
        });
    }
});
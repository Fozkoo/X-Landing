document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón "Iniciar sesión"
    var iniciarSesionBtn = document.getElementById('iniciarSesionBtn');

    // Obtener referencia al elemento con la clase 'container'
    var containerElement = document.querySelector('.container');

    // Agregar evento de clic al botón "Iniciar sesión"
    iniciarSesionBtn.addEventListener('click', function() {
        // Cambiar la propiedad 'display' del elemento 'container'
        if (containerElement.style.display === 'none' || containerElement.style.display === '') {
            containerElement.style.display = 'flex';
        } else {
            containerElement.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
var svgElement = document.querySelector('.svg');
var containerElement = document.querySelector('.container');

svgElement.addEventListener('click', function() {
    // Verificar si la propiedad 'display' está establecida en 'none'
    if (containerElement.style.display === 'none' || containerElement.style.display === '') {
        containerElement.style.display = 'flex';
    } else {
        containerElement.style.display = 'none';
    }
});
});
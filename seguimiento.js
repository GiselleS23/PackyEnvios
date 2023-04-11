/* Funciones para el Seguimiento */
const numeroSeguimiento = document.getElementById('numeroSeguimiento');
const btnAceptar = document.getElementById('btnAceptar');


btnAceptar.addEventListener('click', function() {
    if (isNaN(numeroSeguimiento.value) || numeroSeguimiento.value.length > 6) {
        alert('Por favor, ingrese un número de seguimiento válido (máximo 6 dígitos)');
        console.log('alerta');
    } else {
        // aquí se puede agregar código para enviar el número de seguimiento a la base de datos o mostrar información sobre el seguimiento
        console.log('Número de seguimiento válido: ' + numeroSeguimiento.value);
    }
});




/* ver  */
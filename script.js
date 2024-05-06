document.getElementById('login').addEventListener('submit', function(event){
    event.preventDefault();

    window.location.href ="page.html";
});

function contarPalabraEnFila(csvData, fila, palabra) {
    // Dividir los datos CSV en filas
    const filas = csvData.split('\n');
    
    // Obtener la fila específica
    const filaEspecifica = filas[fila - 1];

    // Contador para la palabra específica
    let contador = 0;

    // Dividir la fila en palabras
    const palabras = filaEspecifica.split(',');

    // Iterar sobre las palabras y contar las ocurrencias
    palabras.forEach((palabraActual) => {
        if (palabraActual.trim() === palabra) {
            contador++;
        }
    });

    return contador;
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const csvData = e.target.result;
        const palabra = 'ENTREGADO,EN REPARTO A DESTINATÁRIO,INCIDENCIA,DEPOSITADO EN PUNTO';
        const fila = 10; // Fila específica

        const cantidad = contarPalabraEnFila(csvData, fila, palabra);
        // Mostrar el resultado en el elemento div
        console.log(csvData);
        document.getElementById('resultado').innerText = cantidad;
    };

    reader.readAsText(file);
}

// Obtener referencia al botón y asignarle el evento de clic
document.getElementById('loadFileBtn').addEventListener('click', function () {
    // Simular clic en el input de archivo
    document.getElementById('fileInput').click();
});

// Asignar el evento de cambio de archivo al input de tipo archivo
// Asignar el evento de cambio de archivo al input de tipo archivo
document.getElementById('loadFileBtn').addEventListener('change', handleFileSelect, false);






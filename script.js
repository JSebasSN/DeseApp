var searchWords = ['ENTREGADO','INCIDENCIA','DISPONIBLE EN PUDO','DEPOSITADO EN PUNTO','EN REPARTO A DESTINATÁRIO'];

document.getElementById('excel-file').addEventListener('change', function() {
    var fileInput = document.getElementById('excel-file');
    var file = fileInput.files[0];
    var reader = new FileReader();
    
    reader.onload = function(event) {
        var data = new Uint8Array(event.target.result);
        var workbook = XLSX.read(data, { type: 'array' });
        var sheetName = workbook.SheetNames[0]; // Suponiendo que estamos leyendo la primera hoja del libro de trabajo
        var worksheet = workbook.Sheets[sheetName];
        var range = XLSX.utils.decode_range(worksheet['!ref']);
        var totalWordCount = 0; // Inicializamos el contador de la palabra total
        for (var R = range.s.r; R <= range.e.r; ++R) { // Recorremos todas las filas
            for (var C = range.s.c; C <= range.e.c; ++C) { // Recorremos todas las columnas
                var address = { c: C, r: R };
                var cellRef = XLSX.utils.encode_cell(address);
                var cell = worksheet[cellRef];
                if (cell && cell.t === 's') {
                    var cellValue = cell.v.toLowerCase();
                    searchWords.forEach(function(searchWord) {
                        if (cellValue === searchWord.toLowerCase()) {
                            totalWordCount++; // Incrementamos el contador si encontramos la palabra
                        }
                    });
                }
            }
        }
        var resultDiv = document.getElementById('resultEnv');
        resultDiv.innerHTML = totalWordCount;
    };
    
    reader.readAsArrayBuffer(file);
});

var searchWordsReco = ['REALIZADO','ENVIO GENERADO','REALIZADA'];

document.getElementById('excel-file').addEventListener('change', function() {
    var fileInput = document.getElementById('excel-file');
    var file = fileInput.files[0];
    var reader = new FileReader();
    
    reader.onload = function(event) {
        var data = new Uint8Array(event.target.result);
        var workbook = XLSX.read(data, { type: 'array' });
        var sheetName = workbook.SheetNames[0]; // Suponiendo que estamos leyendo la primera hoja del libro de trabajo
        var worksheet = workbook.Sheets[sheetName];
        var range = XLSX.utils.decode_range(worksheet['!ref']);
        var totalWordCount = 0; // Inicializamos el contador de la palabra total
        for (var R = range.s.r; R <= range.e.r; ++R) { // Recorremos todas las filas
            for (var C = range.s.c; C <= range.e.c; ++C) { // Recorremos todas las columnas
                var address = { c: C, r: R };
                var cellRef = XLSX.utils.encode_cell(address);
                var cell = worksheet[cellRef];
                if (cell && cell.t === 's') {
                    var cellValue = cell.v.toLowerCase();
                    searchWordsReco.forEach(function(searchWord) {
                        if (cellValue === searchWord.toLowerCase()) {
                            totalWordCount++; // Incrementamos el contador si encontramos la palabra
                        }
                    });
                }
            }
        }
        var resultDiv = document.getElementById('resultReco');
        resultDiv.innerHTML = totalWordCount;
    };
    
    reader.readAsArrayBuffer(file);
});







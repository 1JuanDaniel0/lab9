document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('tablero');

    // Para generar el río (30x30)
    for (let row = 0; row < 30; row++) {
        for (let col = 0; col < 30; col++) {
            const cell = document.createElement('div');
            cell.className = 'celdas-agua';
            cell.dataset.row = row;
            cell.dataset.col = col;

            // Marcar las dos primeras filas
            if (row === 0) {
                cell.classList.add('first-row');
            } else if (row === 1) {
                cell.classList.add('second-row');
            }

            gameBoard.appendChild(cell);
        }
    }

    document.getElementById('btnGenerarPiensos').addEventListener('click', function() {
        generarPiensos();
    });


});

// Función para generar piensos
function generarPiensos() {
    const inventario = document.getElementById('piensosLista');
    inventario.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const piensoIndiv = document.createElement('div');
        piensoIndiv.className = 'pienso-indiv';
        piensoIndiv.draggable = true;
        piensoIndiv.dataset.foodId = i;
        inventario.appendChild(piensoIndiv);
    }

    document.getElementById('btnIniciarPatito').style.display = 'inline-block';

}

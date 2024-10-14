function cambiarTema(fondo, texto) {
    document.body.style.backgroundColor = fondo;
    document.body.style.color = texto;
}

document.getElementById('bRojo').addEventListener('click', function() {
    cambiarTema('red', 'white');
});

document.getElementById('bAzul').addEventListener('click', function() {
    cambiarTema('lightblue', 'darkblue');
});

document.getElementById('bVerde').addEventListener('click', function() {
    cambiarTema('lightgreen', 'darkgreen');
});


document.getElementById('bReset').addEventListener('click', function() {
    cambiarTema('white', 'black');
});
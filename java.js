var indiceImagen = 1;
mostrarImagen(indiceImagen);

function moverGaleria(n) {
  mostrarImagen(indiceImagen += n);
}

function mostrarImagen(n) {
  var imagenes = document.querySelectorAll('.galeria div[class^="imagen-"]');
  var botones = document.querySelectorAll('#anterior, #siguiente');
  if (n > imagenes.length) { indiceImagen = 1 }
  if (n < 1) { indiceImagen = imagenes.length }
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = 'none';
  }
  for (var i = 0; i < botones.length; i++) {
    botones[i].blur();
  }
  imagenes[indiceImagen - 1].style.display = 'block';
}
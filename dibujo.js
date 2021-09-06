var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporclick );


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarlinea(color, x_i, y_i, x_f, y_f)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_i, y_i);
  lienzo.lineTo(x_f, y_f);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoporclick()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var b = 300;
  var c = 0;
  var l;
  var yi, xf;


  for(l = 0; l < lineas; l++)
  {
    dibujarlinea("#de6690", 300, yi, xf, 0);
    dibujarlinea("#de6690", 0, xf, yi, 300);
    dibujarlinea("#de6690", 0, b, 300, c);
    dibujarlinea("#de6690", b, 300, c, 0);
    yi = l * espacio;
    xf = (l + 1) * espacio;
    b = b - espacio;
    c = c + espacio;
  }
}

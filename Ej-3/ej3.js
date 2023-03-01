// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

var cadena = prompt("Introduce una cadena de texto");
var cadenas = [];
while (cadena != null) {
  cadenas.push(cadena);
  if (!confirm("¿Quieres introducir otra cadena?")) break;
  cadena = prompt("Introduce una cadena de texto");
}
var cadenasConcatenadas = cadenas.join("-");
document.write(cadenasConcatenadas);

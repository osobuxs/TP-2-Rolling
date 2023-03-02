// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
var numero = prompt("Introduce un número");
var suma = 0;
while (numero != null) {
  if (isNaN(numero) || numero == "") {
    alert("No es un número");
  } else {
    suma += parseInt(numero);
  }
  numero = prompt("Introduce un número");
}
document.write(`La suma total es ${suma}`);

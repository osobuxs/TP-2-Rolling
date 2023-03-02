// Haz un script que escriba una pirámide inversa de los números del 1 al número
// que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
// indica 30).
// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1
const number = prompt("Introduce un número entre 1 y 50:");

if (number > 0 && number <= 50) {
  let output = "";

  for (let i = number; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      output += i.toString();
    }
    output += "<br>";
  }
  console.log(output);
  document.write(output);
} else {
  console.log("El número introducido no está entre 1 y 50.");
  alert("El número introducido no está entre 1 y 50.");
}

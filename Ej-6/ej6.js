// Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….
for (let i = 1; i <= 30; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += i;
  }
  console.log(row);
  document.write(row + "<br>");
}

let numero: number = Number(prompt("ingrese el número a verificar"));
console.log("el número ingresado es:", numero);

if (numero === 0) {
  console.log("el numero es igual a cero");
} else {
  if (numero > 20) {
    console.log("el numero es mayor a 20");
  } else {
    console.log("el número es menor a 20");
  }
}

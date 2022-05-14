let numero: number = Number(
  prompt("ingrese el número a verificar si es par o impar")
);
console.log("el número ingresado es:", numero);

if (numero === 0) {
  console.log("el numero es igual a cero");
} else {
  if (numero % 2 === 0) {
    console.log("el numero es par");
  } else {
    console.log("el número es impar");
  }
}

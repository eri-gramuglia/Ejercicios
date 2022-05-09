let numero: number = Number(
  prompt("ingrese el número a verificar si es par o impar")
);
console.log("el número ingresado es:", numero);
let resto: number = numero % 2;
if (numero === 0) console.log("el numero es igual a cero");
else {
  switch (resto) {
    case 0:
      console.log("el numero es par");
      break;
    default:
      console.log("el numero es impar");
  }
}

let numero1: number = Number(
  prompt("ingrese el 1er número a verificar cuál es el mayor")
);
let numero2: number = Number(
  prompt("ingrese el 2do número a verificar cuál es el mayor")
);
let numero3: number = Number(
  prompt("ingrese el 3er número a verificar cuál es el mayor")
);

if (numero1 > numero2 && numero1 > numero3) {
  console.log("el numero " + numero1 + " es el mayor");
} else {
  if (numero2 > numero1 && numero2 > numero3) {
    console.log("el numero " + numero2 + " es el mayor");
  } else {
    if (numero3 > numero1 && numero3 > numero2) {
      console.log("el numero " + numero3 + " es el mayor");
    }
  }
}

let numero: number = Number(prompt(" Ingresar un numero natural"));
while (numero <= 0) {
  numero = Number(prompt("Vuelva a ingresar un número"));
}
if (numero % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número ingresado es impar");
}

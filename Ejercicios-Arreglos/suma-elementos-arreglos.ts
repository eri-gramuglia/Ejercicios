let lenghtArreglo: number = Number(prompt(`Ingrese la longitud del arreglo:`));
let numIngresado: number[] = new Array(lenghtArreglo);
let index: number;
let resultado: number = 0;

for (index = 0; index < lenghtArreglo; index++) {
  numIngresado[index] = Number(
    prompt(`Ingrese el número en la posición: ${index}:`)
  );
  resultado += numIngresado[index]; //en cada vuelta, toma el valor de cada indice y lo va sumando a la variable
}
for (index = 0; index < lenghtArreglo; index++) {
  console.log(
    `El número "${numIngresado[index]}" se ingresó en la posición "${index}"`
  );
}
console.log(`la suma del arreglo es: ${resultado}`);

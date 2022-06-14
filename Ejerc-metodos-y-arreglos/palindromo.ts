let longitudPalabra: string = prompt("ingrese la palabra");
let dimensionArreglo: number = longitudPalabra.length;
let vector1: string[] = new Array(dimensionArreglo);

function cargarArreglo(arreglo: string[], dimensionArreglo) {
  for (let i: number = 0; i <= dimensionArreglo - 1; i++) {
    arreglo[i] = prompt("ingresar la palabra de a una letra por vez");
    console.log(arreglo[i]);
  }
}
console.log(dimensionArreglo);
cargarArreglo(vector1, dimensionArreglo);

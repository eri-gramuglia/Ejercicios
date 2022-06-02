let dimensionVector: number = 3;
let vector1: number[] = new Array(dimensionVector);
let vector2: number[] = new Array(dimensionVector);
let vectorResultado: number[] = new Array(dimensionVector);

function cargarArray(v1: number[], dimension: number) {
  for (let indice: number = 0; indice < dimension; indice++)
    v1[indice] = Number(prompt("ingrese los numeros para el vector"));
}
function multiplicarArreglo(v1, v2, v3: number[], dimension: number) {
  for (let indice = 0; indice < dimension; indice++) {
    v3[dimension] = v1[indice] * v2[indice];
  }
  console.log(v3);
}
cargarArray(vector1, dimensionVector);
cargarArray(vector2, dimensionVector);
multiplicarArreglo(vector1, vector2, vectorResultado, dimensionVector);

//if (vector1.length===vector2.length && vector2.length===vectorResultado.length){
// multiplicarArreglo(vector1,vector2,vectorResultado,3)
//}

let dimensionVector: number = 3;
let vector1: number[] = new Array(dimensionVector);
let vector2: number[] = new Array(dimensionVector);
let vectorResultado: number[] = new Array(dimensionVector);
let v1: number[] = [1, 2, 3];
let v2: number[] = [4, 5, 6];
let v3: number[] = [2, 1, 2];
let v4: number[] = [1, 2, 1];
let vResultado: number[] = new Array(3);

function multiplicarArreglo(
  v1: number[],
  v2: number[],
  v3: number[],
  v4: number[],
  v5: number[],
  dimension: number
) {
  for (let indice = 0; indice < dimension; indice++)
    v5[indice] = v1[indice] * v2[indice] * v3[indice] * v4[indice];
}
function cargarArray(v: number[], dimension: number) {
  for (let indice: number = 0; indice < dimension; indice++)
    v[indice] = Number(prompt("ingrese los numeros para el vector"));
}
function multiplicarArreglo1(
  v1: number[],
  v2: number[],
  v3: number[],
  dimension: number
) {
  for (let indice = 0; indice < dimension; indice++)
    v3[indice] = v1[indice] * v2[indice];
}

//cargarArray(vector1, dimensionVector);
//console.log("Datos primer vector:", vector1);
//cargarArray(vector2, dimensionVector);
//console.log("Datos segundo vector:", vector2);
//multiplicarArreglo1(vector1, vector2, vectorResultado, dimensionVector);
//console.log("La multiplicación de los dos vectores anteriores es:",vectorResultado);
//multiplicarArreglo(v1, v2, v3, v4, vResultado, dimensionVector);
//console.log("La multiplicación de los vectores precargados es:", vResultado);

multiplicarArreglo1(v1, v2, vResultado, dimensionVector);
multiplicarArreglo1(vResultado, v3, vResultado, dimensionVector);
multiplicarArreglo1(vResultado, v4, vResultado, dimensionVector);
console.log("La multiplicación de los vectores precargados es:", vResultado);

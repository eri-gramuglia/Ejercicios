let dimensionVector: number = Number(prompt("ingrese la dimensión del vector"));
let vector1: number[] = new Array(dimensionVector);
let vector2: number[] = new Array(dimensionVector);

function cargarVector(v: number[], cantidad: number) {
  let indice: number;
  for (indice = 0; indice <= cantidad; indice++) {
    v[indice] = Number(
      prompt(`Ingrese el número que se guardará en la posición: ${indice}:`)
    );
    console.log(v[indice], "");
  }
}
function productoEscalar(v1: number[], v2: number[], cantidad: number): number {
  let indice: number;
  let producto: number = 0;

  for (indice = 0; indice <= cantidad; indice++) {
    producto = producto + v1[indice] * v2[indice];
  }
  return producto;
}

cargarVector(vector1, dimensionVector);
cargarVector(vector2, dimensionVector);
productoEscalar(vector1, vector2, dimensionVector);

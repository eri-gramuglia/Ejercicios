let lenghtArray: number = Number(prompt(`Ingrese la longitud del arreglo:`));
let numberArray: number[] = new Array(lenghtArray);

function cargarVector(vector: number[], dimension: number) {
  let indice: number;
  for (indice = 0; indice <= dimensión; indice++) {
    vector[indice] = Number(
      prompt(`Ingrese el número que se guardará en la posición: ${indice}:`)
    );
    console.log(vector[indice], "");
  }
}

function mostrarVector(vector: number[], dimension: number) {
  let indice: number;
  for (indice = 0; indice <= lenghtArray; indice++) {
    //vector[indice]=Number( prompt(`Ingrese el número que se guardará en la posición: ${indice}:`));
    console.log(vector[indice], "");
  }
}

function mostrarVectorInvertido(vector: number[], dimension: number) {
  for (let indice: number = dimension - 1; (indice) => 0; indice--) {
    console.log(vector[indice]);
  }
}

function invertirVector(vector: number[], dimension: number) {
  let vectorInvertido: number[] = new Array(dimension);
  let indice: number = 0;
  for (
    let indiceInvertido: number = dimension - 1;
    (indiceInvertido) => 0;
    indiceInvertido--
  ) {
    vectorInvertido[indice] = vector[indiceInvertido];
    indice++;
  }
}

cargarVector(numberArray, lenghtArray);
mostrarVector(numberArray, lenghtArray);
mostrarVectorInvertido(numberArray, lenghtArray);
invertirVector(numberArray, lenghtArray);

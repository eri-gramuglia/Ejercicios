let lenghtArray: number = Number(prompt(`Ingrese la longitud del arreglo:`));
let numberArray: number[] = new Array(lenghtArray);

function cargarVector(vector: number[]) {
  let indice: number;
  for (indice = 0; indice <= vector.length; indice++) {
    vector[indice] = Number(
      prompt(`Ingrese el número que se guardará en la posición: ${indice}:`)
    );
    console.log(vector[indice], "");
  }
}

function mostrarVector(vector: number[]) {
  let indice: number;
  for (indice = 0; indice <= vector.length; indice++) {
    //vector[indice]=Number( prompt(`Ingrese el número que se guardará en la posición: ${indice}:`));
    console.log(vector[indice], "");
  }
}

function mostrarVectorInvertido(vector: number[]) {
  for (let indice: number = vector.length - 1; (indice) => 0; indice--) {
    console.log(vector[indice]);
  }
}

function invertirVector(vector: number[]) {
  let cantidad = vector.length;
  let vectorInvertido: number[] = new Array(cantidad);
  let indice: number = 0;
  let indiceInvertido: number;
  for (
    indiceInvertido = cantidad - 1;
    (indiceInvertido) => 0;
    indiceInvertido--
  ) {
    vectorInvertido[indice] = vector[indiceInvertido];
    indice++;
  }
  console.log("El arreglo invertido es: " + vectorInvertido);
}

cargarVector(numberArray);
mostrarVector(numberArray);
mostrarVectorInvertido(numberArray);
invertirVector(numberArray);

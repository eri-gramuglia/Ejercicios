let lenghtArray: number = Number(prompt(`Ingrese la longitud del arreglo:`));
let numberArray: number[] = new Array(lenghtArray);

function cargarVector (vector:number[]){
  let indice:number;
  for (indice=0;indice<=lenghtArray;indice++){
    vector[indice]=Number( prompt(`Ingrese el número que se guardará en la posición: ${indice}:`));
    console.log (vector[indice],"");
  }
}

function mostrarVector (vector:number[]){
  let indice:number;
  for (indice=0; indice <=lenghtArray;indice++){
    //vector[indice]=Number( prompt(`Ingrese el número que se guardará en la posición: ${indice}:`));
    console.log (vector[indice],"");
  }
}

function mostrarVectorInvertido (vector:number[]){
   for (let indice:number = vector.length - 1; indice--){
    console.log (numberArray[indice],"--");
  }
}

cargarVector(numberArray,lenghtArray);
mostrarVector(numberArray,lenghtArray);
mostrarVectorInvertido(numberArray);
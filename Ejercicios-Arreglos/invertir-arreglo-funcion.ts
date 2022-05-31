let lenghtArray: number = Number(prompt(`Ingrese la longitud del arreglo:`));
let numberArray: number[] = new Array(lenghtArray);

function cargarVector(vector: number[]) {
  let indice: number;
  for (indice = 0; indice <= lenghtArray; indice++) {
    vector[indice] = Number(
      prompt(`Ingrese el número que se guardará en la posición: ${indice}:`)
    );
    console.log(vector[indice], "");
  }
}

function mostrarVector(vector: number[]) {
  let indice: number;
  for (indice = 0; indice <= lenghtArray; indice++) {
    //vector[indice]=Number( prompt(`Ingrese el número que se guardará en la posición: ${indice}:`));
    console.log(vector[indice], "");
  }
}

function mostrarVectorInvertido(vector: number[]) {
  for (let indice: number = vector.length - 1; (indice) => 0; indice--) {
    console.log(vector[indice]);
  }


function invertirVector (vector:number [], cantidad:number){
  let vectorInvertido:number[] = new Array(cantidad);
  let indice:number=0;
  for (let indiceInvertido:number = cantidad - 1; indiceInvertido => 0; indiceInvertido--) {
    vectorInvertido[indice]=vector[indiceInvertido];
    indice
  
  
   
   
    }
    
  
  

cargarVector(numberArray);
mostrarVector(numberArray);
mostrarVectorInvertido(numberArray);
invertirVector(numberArray);
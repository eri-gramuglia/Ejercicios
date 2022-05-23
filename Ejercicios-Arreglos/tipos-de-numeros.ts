let lenghtArray: number = Number(prompt(`Ingrese la longitud del arreglo:`));
let numerosArray: number[] = new Array(lenghtArray);
let index: number;
let numCero: number = 0;
let numPos: number = 0;
let numNeg: number = 0;

for (index = 0; index < lenghtArray; index++) {
  numerosArray[index] = Number(
    prompt(`Ingrese el número en la posición: ${index}:`)
  );
  if (numerosArray[index] === 0) {
    numCero++;
  } else {
    if (numerosArray[index] > 0) numPos++;
    else numNeg++;
  }
}
for (index = 0; index < lenghtArray; index++) {
  console.log(
    `El número "${numerosArray[index]}" se ingresó en la posición "${index}"`
  );
}
console.log("Hay", numCero, "números cero");
console.log("Hay", numPos, "números positivos");
console.log("Hay", numNeg, "números negativos");

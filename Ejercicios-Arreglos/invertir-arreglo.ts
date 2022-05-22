let lenghtArray: number = Number(prompt(`Ingrese la longitud del arreglo:`));
let numberArray: number[] = new Array(lenghtArray);
let indexA: number;
let indexInverted: number;

for (indexA = 0; indexA < lenghtArray; indexA++) {

  numberArray[indexA] = Number (prompt(`Ingrese el número que se guardará en la posición: ${indexA}:`));
}  

for (indexInverted = lenghtArray; indexInverted<0 ; indexInverted--) {
console.log(`Se ingresó en la posición "${indexInverted} el número "${numberArray[indexInverted]}"`); 
}

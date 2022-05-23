let lenghtArray: number = Number(prompt(`Ingrese la longitud del arreglo:`));
let numberArray: number[] = new Array(lenghtArray);
let indexA: number;

function guionesx20() {
  let guion: string = "-";
  for (let i = 0; i <= 20; i++) {
    guion = guion + "-";
  }
  console.log(guion);
}

for (indexA = 0; indexA < lenghtArray; indexA++) {
  numberArray[indexA] = Number(
    prompt(`Ingrese el número que se guardará en la posición: ${indexA}:`)
  );
}
for (indexA = 0; indexA < lenghtArray; indexA++) {
  //muestra los números ingresados en el Array.
  console.log(
    `El número "${numberArray[indexA]}" se ingresó en la posición "${indexA}"`
  );
}
guionesx20();
console.log("Muestra los números del arreglo en forma invertida");
for (indexA = lenghtArray; 0! < indexA; indexA--) {
  console.log(
    `El número "${numberArray[indexA]}" Se ingresó en la posición "${indexA}"`
  );
}

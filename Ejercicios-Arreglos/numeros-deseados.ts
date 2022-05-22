let numeroDeseadoArreglo: number[] = new Array(5);
let numero: number;
let indice: number;
for (indice = 0; indice < 5; indice++) {
  numero = Number(
    prompt(`Ingrese el número que desea incorporar en la posición:, ${indice}:`)
  );
  numeroDeseadoArreglo[indice] = numero;
}
for (indice = 0; indice < 5; indice++) {
  console.log(
    `El número en la posición ${indice} es ${numeroDeseadoArreglo[indice]}`
  );
}

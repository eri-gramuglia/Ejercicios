let names: string[] = new Array(2);
let numbers: number[] = new Array(3);
let indexNames: number;
let indexNumbers: number;

for (indexNames = 0; indexNames < 2; indexNames++) {
  names[indexNames] = prompt(`Ingrese el nombre de la persona: ${indexNames}:`);
}
for (indexNames = 0; indexNames < 2; indexNames++) {
  console.log(
    `El nombre "${names[indexNames]}" se ingresó en la posición "${indexNames}"`
  );
}

for (indexNumbers = 0; indexNumbers < 3; indexNumbers++) {
  numbers[indexNumbers] = Number(
    prompt(`Ingrese el número deseado: ${indexNumbers}:`)
  );
}
for (indexNumbers = 0; indexNumbers < 3; indexNumbers++) {
  console.log(
    `El número "${numbers[indexNumbers]}" se ingresó en la posición "${indexNumbers}"`
  );
}

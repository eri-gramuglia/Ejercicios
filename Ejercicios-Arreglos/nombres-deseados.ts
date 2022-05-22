let lenghtArreglo: number = Number(prompt(`Ingrese la longitud del arreglo:`));
let nombrePersonas: string[] = new Array(lenghtArreglo);
let index: number;
for (index = 0; index < 5; index++) {
  nombrePersonas[index] = prompt(
    `Ingrese el nombre de la persona en la posición:, ${index}:`
  );
}
for (index = 0; index < lenghtArreglo; index++) {
  console.log(
    `El nombre "${nombrePersonas[index]}" se ingresó en la posición "${index}"`
  );
}

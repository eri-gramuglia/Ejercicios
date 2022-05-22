let numeroAleatorio: number[] = new Array(10);
let index: number;

function Azar(tope: number): number {
  //funcion para generar números aleatorios del 1 al 100.
  return Math.floor(Math.random() * tope);
}

for (index = 0; index < 10; index++) {
  numeroAleatorio[index] = Azar(100); //llamado de la funcio de números aleatorios.
}
for (index = 0; index < 10; index++) {
  console.log(`El número en la posición ${index} es ${numeroAleatorio[index]}`);
}

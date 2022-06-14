// Ejercicio 3 examen
function multiplicarEntreNumeros(
  min: number,
  max: number,
  cantNum: number
): number {
  let resultado: number = 1; //let resultado: number = 0;
  let numIng: number = 0;
  let i: number = 1;
  while (i <= cantNum) {
    numIng = Number(prompt("Ing Numero: "));
    if (numIng >= min && numIng <= max) {
      resultado *= numIng; //resultado = numIng;
    }
    i++; //agregado
  }
  return resultado; //return cantNum;
}

console.log(multiplicarEntreNumeros(10, 30, 10));

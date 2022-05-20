let nota: number;
let suma: number = 0;
let promedio: number;
suma = 0;
for (let contador: number = 1; contador < 11; contador++) {
  nota = Number(prompt("Ingrese la nota número " + contador));
  suma += nota;
  //suma = suma + nota;
}
promedio = suma / 10;
console.log("El promedio de las 10 notas es: ", +promedio);

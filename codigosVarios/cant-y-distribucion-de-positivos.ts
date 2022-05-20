let cantTotal: number = 0;
let cantPositivos: number = 0;
let porcPositivos: number = 0;
let num: number = Number(
  prompt("Ingresar número, Ingresar un cero para cortar ciclo.")
);

while (num !== 0) {
  if (num > 0) {
    cantPositivos++;
  }
  cantTotal++;
  num = Number(prompt("Ingresar número, Ingresar un cero para cortar ciclo."));
}
if (cantTotal > 0) {
  porcPositivos = (cantPositivos * 100) / cantTotal;
  console.log(cantPositivos, "positivos", porcPositivos, "% del total.");
}

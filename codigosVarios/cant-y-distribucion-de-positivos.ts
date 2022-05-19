let cantTotal: number = 0;
let cantPositivos: number = 0;
let porcPositivos: number = 0;

let num = Number(prompt("Ingresar número"));
while (num !== 0) {
  if (num > 0) {
    cantPositivos++;
  }
  cantTotal++;
  num = Number(promp("Ingresar número"));
}
if (cantTotal > 0) {
  porcPositivos = (cantPositivos * 100) / cantTotal;
  console.log(cantPositivos, "positivos", porcPositivos, "% del total.");
}

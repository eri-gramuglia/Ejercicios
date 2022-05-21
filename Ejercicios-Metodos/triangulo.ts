function calcularAreaTriangulo(base: number, altura: number): number {
  let area: number = (base * altura) / 2;
  return area;
}

let base = Number(prompt("Ingrese la base para calcular el area"));
let altura = Number(prompt("Ingrese la altura para calcular el area"));

let area = calcularAreaTriangulo(base, altura);
console.log(
  "el area del triangulo de base",
  base,
  "por altura ",
  altura,
  "es",
  area
);

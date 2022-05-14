let sueldoActual: number = Number(prompt("Ingrese el monto del sueldo"));
let sueldoConAumento: number = 0;

if (0 < sueldoActual && sueldoActual <= 15000) {
  sueldoConAumento = sueldoActual * 1.2;
  console.log("Ud. tiene un aumento del 20% ", +sueldoConAumento);
} else if (15001 < sueldoActual && sueldoActual <= 20000) {
  sueldoConAumento = sueldoActual * 1.1;
  console.log("Ud. tiene un aumento del 10% ", +sueldoConAumento);
} else if (20001 < sueldoActual && sueldoActual <= 25000) {
  sueldoConAumento = sueldoActual * 1.5;
  console.log("Ud. tiene un aumento del 5% ", +sueldoConAumento);
} else {
  sueldoConAumento = sueldoActual;
  console.log("Ud. no tiene aumento");
  console.log("Su sueldo es: ", +sueldoConAumento);
}

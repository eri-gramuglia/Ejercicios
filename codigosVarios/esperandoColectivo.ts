let llegadaColectivo: string;
console.log("Esperando el colectivo");
llegadaColectivo = prompt("¿Llegó el colectivo? (Y/N)");

while (llegadaColectivo === "N") {
  console.log("Esperando el colectivo");
  llegadaColectivo = prompt("¿Llegó el colectivo? (Y/N)");
}
console.log("Llegó el colectivo");

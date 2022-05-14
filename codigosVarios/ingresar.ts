let alturaPermitida: number = 130;
let alturaPersona: number = Number(
  prompt("Ingresar la altura de la persona en centimetros")
);

if (alturaPersona >= alturaPermitida) {
  console.log("la persona puede ingresar a la montaña rusa");
} else {
  console.log("ALTURA INVALIDA");
}

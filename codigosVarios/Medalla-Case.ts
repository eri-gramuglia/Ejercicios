let posicionLlegada: number = Number(
  prompt("Ingrese la posición de llegada del competidor:")
);
switch (posicionLlegada) {
  case 1:
    console.log("Entregar MEDALLA DE ORO");
    break;
  case 2:
    console.log("Entregar MEDALLA DE PLATA");
    break;
  case 3:
    console.log("Entregar MEDALLA DE BRONCE");
    break;
  default:
    console.log("Entregar MENCIÓN DE PARTICIPACIÓN");
}

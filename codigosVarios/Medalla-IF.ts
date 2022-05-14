let posicionLlegada: number = Number(
  prompt("Ingrese la posición de llegada del competidor:")
);

if (posicionLlegada === 1) {
  console.log("Entregar MEDALLA DE ORO");
} else {
  if (posicionLlegada === 2) {
    console.log("Entregar MEDALLA DE PLATA");
  } else {
    if (posicionLlegada === 3) {
      console.log("Entregar MEDALLA DE BRONCE");
    } else {
      console.log("Entregar MENCIÓN DE PARTICIPACIÓN");
    }
  }
}

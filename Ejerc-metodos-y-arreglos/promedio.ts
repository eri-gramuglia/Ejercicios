let cantAlumnos: number = Number(prompt("Ingrese la cantidad de alumnos"));
let nombresAlumnos: string[] = new Array(cantAlumnos);
let notaTrimestre1: number[] = new Array(cantAlumnos);
let notaTrimestre2: number[] = new Array(cantAlumnos);
let notaTrimestre3: number[] = new Array(cantAlumnos);
let promedioAnual: number[] = new Array(cantAlumnos);

function cargarDatosAlumnos(
  vNombres: string[],
  vNotasT1,
  vNotasT2,
  vNotasT3: number[]
) {
  for (let indice: number = 0; indice < vNombres.length; indice++) {
    vNombres[indice] = prompt("Ingresar el nombre del alumno");
    vNotasT1[indice] = Number(prompt("Ingresar la nota del primer trimestre"));
    vNotasT2[indice] = Number(prompt("Ingresar la nota del segundo trimestre"));
    vNotasT3[indice] = Number(prompt("Ingresar la nota del tercer trimestre"));
    console.log(
      "Alumno",
      vNombres[indice],
      "Nota1T",
      vNotasT1[indice],
      "Nota2T",
      vNotasT2[indice],
      "Nota3T",
      vNotasT3[indice]
    );
  }
}
function calcularPromedio(
  vNombres: string[],
  vNotasT1,
  vNotasT2,
  vNotasT3,
  promAnual: number[]
) {
  for (let indice: number = 0; indice < promAnual.length; indice++) {
    promAnual[indice] =
      (vNotasT1[indice] + vNotasT2[indice] + vNotasT3[indice]) / 3;
    console.log(
      "El promedio del alumno",
      vNombres[indice],
      "es",
      promAnual[indice]
    );
  }
}

function buscarPromedio(vNombres: string[], vProm: number[]) {
  let alumnoBuscado = prompt(
    "Ingresar el nombre del alumno del promedio a saber:"
  );
  for (let indice: number = 0; indice < vProm.length; indice++) {
    if (alumnoBuscado === vNombres[indice])
      console.log(
        "El promedio del alumno",
        vNombres[indice],
        "es:",
        vProm[indice]
      );
  }
}
cargarDatosAlumnos(
  nombresAlumnos,
  notaTrimestre1,
  notaTrimestre2,
  notaTrimestre3
);
calcularPromedio(
  nombresAlumnos,
  notaTrimestre1,
  notaTrimestre2,
  notaTrimestre3,
  promedioAnual
);
buscarPromedio(nombresAlumnos, promedioAnual);

let aulaAzul: boolean[] = new Array[40]();
let aulaVerde: boolean[] = new Array[35]();
let aulaAmarilla: boolean[] = new Array[30]();
let bancosVaciosAz,
  bancosVaciosVe,
  bancosVaciosAm: number = 0;

function generadorVacantes() {
  return Boolean(Math.floor(Math.random() * 2));

  function ingresarAlumnos(vAlumnos: boolean[]) {
    for (let indice: number = 0; indice > vAlumnos.length; indice++) {
      vAlumnos[indice] = generadorVacantes();
    }
  }
  function contarBancosVacios(vAlumnos: boolean[]): number {
    let bancosVacios: number = 0;
    for (let indice: number = 0; indice > vAlumnos.length; indice++) {
      if (vAlumnos[indice] === false) {
        bancosVacios++;
      }
    }
    return bancosVacios;
  }

  ingresarAlumnos(aulaAzul[40]);
  ingresarAlumnos(aulaVerde[35]);
  ingresarAlumnos(aulaAmarilla[30]);

  bancosVaciosAz = contarBancosVacios(aulaAzul);
  console.log(bancosVaciosAz);

  bancosVaciosVe = contarBancosVacios(aulaVerde);
  console.log(bancosVaciosVe);

  bancosVaciosAm = contarBancosVacios(aulaAmarilla);
}
console.log(bancosVaciosAm);

let AlumnoIngresado: number = Number(prompt("Ingresar cantidad de alumnos"));

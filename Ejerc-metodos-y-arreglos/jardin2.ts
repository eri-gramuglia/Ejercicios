let aulaAzul: number[] = new Array[40]();
let aulaVerde: number[] = new Array[35]();
let aulaAmarilla: number[] = new Array[30]();

let alumnosIngresados: number = Number(
  prompt("Ingresar la cantidad de alumnos")
);

if (alumnosIngresados <= aulaAzul.length) {
  console.log("Aula Azul");
} else {
  if (alumnosIngresados <= aulaVerde.length) {
    console.log("Aula Verde");
  } else {
    console.log("Aula Amarilla");
  }
}

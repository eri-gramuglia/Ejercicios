let cantGuiones: number = Number(prompt("Ingresar la cantidad de guiones"));

function guionX40(cantGuiones) {
  //funcion con la cantidad de guiones ingresados por usuario.
  let guion: string = "-";
  for (let i = 0; i <= cantGuiones; i++) {
    guion = guion + "-";
  }
  console.log(guion);
}
guionX40(cantGuiones);

function guiones() {
  //funcion con la cantidad de guiones definida.
  let guion: string = "-";
  for (let i = 0; i <= 10; i++) {
    guion = guion + "-";
  }
  console.log(guion);
}
guiones();

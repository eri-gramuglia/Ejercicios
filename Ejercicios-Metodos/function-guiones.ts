let cantGuiones: number = Number(prompt("Ingresar la cantidad de guiones"));

function guionX40(cantGuiones) {
  let guion: string = "-";
  for (let i = 0; i <= cantGuiones; i++) {
    guion = guion + "-";
  }
  console.log(guion);
}
guionX40(cantGuiones);

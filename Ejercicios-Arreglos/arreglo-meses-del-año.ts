function mesesDelAnio() {
  //se usa cuando ya se sabe de antemano los elementos de cada indice
  let meses: string[] = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];
  console.log(meses);
}
mesesDelAnio();

let arregloMes: string[] = new Array(12); //Se usa cuando no se conocen los datos
arregloMes[0] = "Enero"; // porque van a ser ingresados por el usuario
arregloMes[1] = "febrero";
arregloMes[2] = "marzo";
arregloMes[3] = "abril";
arregloMes[4] = "mayo";
arregloMes[5] = "junio";
arregloMes[6] = "julio";
arregloMes[7] = "agosto";
arregloMes[8] = "septiembre";
arregloMes[9] = "octubre";
arregloMes[10] = "noviembre";
arregloMes[11] = "diciembre";

let numMes: number = Number(
  prompt("Indique el número del mes que le interesa")
);
let indice: number = numMes - 1;

console.log("El mes es", arregloMes[indice]);

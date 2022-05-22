let num: number[]=[20,14,8,0,5,19,24];

let indice: number = Number (prompt ("Ingrese el indice, del 1 al 7, que desea saber:"));
indice=indice-1;
if (indice <7){
  console.log ("El nro en la posición", indice, "es:" num[indice]);
} else {
  console.log ("Vuelva a ingresar un número del 1 al 7");
}    
let num1: number = Number(prompt("Ingrese el primer número"));
let num2: number = Number(prompt("Ingrese el segundo número"));
let entreNum: number = num1;
let suma: number = 0;

if (num1 >= num2) {
  console.log("Vuelva a ingresar dos números: ");
} else {
  for (entreNum = num1; entreNum <= num2; entreNum++) {
    suma = suma + entreNum;
  }
  console.log("El resultado de la suma es: ", suma);
}

//if (num1 >= num2) {
//  console.log("Vuelva a ingresar dos números: ");
//} else {
//  while (entreNum <= num2) {
//    suma = suma + entreNum;
//    entreNum++;
//  }
//  console.log("El resultado de la suma es: ", suma);
//}

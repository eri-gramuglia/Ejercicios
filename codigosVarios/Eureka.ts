let contraseña: string;
let cantIntentos: number = 1;

while (cantIntentos <= 3 && contraseña !== "eureka") {
  contraseña = prompt("Ingresar la contraseña");
  cantIntentos++;
  if (contraseña === "eureka") {
    console.log("Contraseña Aceptada");
  } else {
    console.log("Ya no tiene más intentos");
  }
}

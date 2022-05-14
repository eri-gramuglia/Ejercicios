let usuario: string = "juan";
let contraseña: string = "clavejuan";
let usuarioIngresado: string = prompt("Ingresar el nombre del usuario:");
let contraseñaIngresada: string = prompt("Ingresar la contraseña");

if (usuario === usuarioIngresado && contraseña === contraseñaIngresada) {
  console.log("Usuario y Contraseña Aceptada");
  console.log("Bienvenido");
} else {
  console.log("ERROR DE INGRESO DE USUARIO y/o CONTRASEÑA");
}

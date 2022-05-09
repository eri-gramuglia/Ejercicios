let btnEnv = document.getElementById ("btnEnviar");
let dato = document.getElementById ("dato");
let rotulo = document.getElementById ("rotulo");

rotulo.innerHTML = "Indique la altura de la persona:", dato.value;

btnEnv.addEventListener ("click"), () =>  {
console.log ("la altura es:" , dato.value);
}),

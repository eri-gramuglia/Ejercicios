let numero:number= Number(prompt("Ingrese cuántos dados va a tirar:"));
let probCara:number=1/6;
let probFinal:number=1;
let contador:number;

for contador:number=1; contador<=numero; contador++);{
  probFinal=probFinal*probCara;
}
console.log("La probabilidad es:", probFinal);
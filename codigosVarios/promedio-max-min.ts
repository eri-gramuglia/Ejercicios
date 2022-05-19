let min, max,sum,avg,cont:number;
let num=Number (prompt("Ingrese un número"));
let cont=0;
let sum=0;
let avg=0;
let min=num;
let max=num;

while (num!==0){
  if (num<min){
    min=num;
  }
  else if (num>max){
    max=num;
  }
  sum+=num;
  cont++;
  let num=Number (prompt("Ingrese un número"));
}
if (cont>0){
  avg=sum/cont;
  console.log ("El número es: min");
  console.log ("El número es: max");
  console.log ("El número es: avg");
}
else {
  console.log ("No ingresó ningún número");
}


<   
>
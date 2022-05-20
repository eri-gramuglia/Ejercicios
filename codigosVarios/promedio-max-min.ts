let num: number =Number (prompt("Ingrese un número"));
let cont: number =0;
let sum: number=0;
let media: number=0;
let min: number=num;
let max: number=num;

while (num!==0){
  if (num<min){
    min=num;
  }
  else if (num>max){
    max=num;
  }
  sum+=num;
  cont++;
  num=Number (prompt("Ingrese un número"));
}
if (cont>0){
  media=sum/cont;
  console.log ("El número mínimo es:", min);
  console.log ("El número máximo es:", max);
  console.log ("El promedio entre los números ingresado es:", media);
}
else {
  console.log ("No ingresó ningún número");
}


<   
>
let indice: number;
let multiplo2: string = ("");
let multiplo3: string = ("");

for (indice=1; indice < 100; indice++) {
  if (indice%2==0){
    multiplo2 = multiplo2 + indice+"-";

    }
  else (indice%3==0);{
    multiplo3 = multiplo3 + indice+"-";
  }
  }
console.log ("Los multiplos de 2 son: ", multiplo2);
console.log ("Los multiplos de 3 son: ", multiplo3);
  }


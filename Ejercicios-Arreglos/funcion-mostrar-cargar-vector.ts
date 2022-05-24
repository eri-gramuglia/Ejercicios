let vector1:number[]=new Array (6);

function cargarVector (v:number[], cantidad:number){
  let indice:number;
  for (indice=0;indice<=cantidad;indice++){
    v[indice]=Number( prompt(`Ingrese el número que se guardará en la posición: ${indice}:`));
    console.log (v[indice],"");
  }
}

function mostrarVector (v:number[], cantidad:number){
  let indice:number;
  for (indice=0; indice <=cantidad;indice++){
    v[indice]=Number( prompt(`Ingrese el número que se guardará en la posición: ${indice}:`));
    console.log (v[indice],"");
  }
}

function mostrarInvertido (v:number[]){
   for (let indice:number = v.length - 1, indice<0, indice--){
   console.log (v[indice],"--");
  }
}

cargarVector(vector1,6);
mostrarVector(vector1,6);
mostrarInvertido(vector1);

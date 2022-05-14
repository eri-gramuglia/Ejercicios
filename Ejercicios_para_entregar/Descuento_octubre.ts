let cantProducto: number = Number(prompt("Ingrese la cantidad de prendas"));
let precioProducto: number = Number(prompt("Ingrese el precio de la prenda"));

let descuento: number = 0;
let montoConDescuento: number = 0;
let montoCompra: number = 0;

montoCompra = cantProducto * precioProducto;
descuento = montoCompra * 0.10;
montoConDescuento = montoCompra - descuento;

if (montoCompra >=1000) { 
  montoConDescuento= (montoCompra * descuento);
  console.log ("Por realizar una compra mayor de $1000 tiene un 10% de descuento")
  console.log ("el monto a pagar es el siguiente:" + montoConDescuento);
else {


  
  console.log("por comprar en el mes de octubre, la compra tiene un 15% de descuento"
  );
  console.log("el monto con descuento a pagar es ", montoConDescuento);
} else {
  console.log("la compra no tiene descuento");
}
}